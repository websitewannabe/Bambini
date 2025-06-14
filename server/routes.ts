import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProductSchema, insertReviewSchema, insertCategorySchema } from "@shared/schema";

// Bambini's World Google Place ID (extracted from the Google Business profile)
const PLACE_ID = "ChIJRSgIEyKoxokRO5o4MJeQG9Y";

async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.log('Google Places API key not found');
    return null;
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,reviews&key=${apiKey}`
    );
    
    const data = await response.json();
    
    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status, data.error_message);
      return null;
    }

    if (!data.result || !data.result.reviews) {
      console.log('No reviews found in Google Places API response');
      return null;
    }

    // Transform Google reviews to match our schema
    return data.result.reviews.map((review: any, index: number) => ({
      id: index + 1,
      author: review.author_name,
      content: review.text,
      rating: review.rating,
      date: new Date(review.time * 1000).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
      })
    }));
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return null;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Products routes
  app.get("/api/products", async (req, res) => {
    try {
      const { category } = req.query;
      let products;
      
      if (category && typeof category === 'string') {
        products = await storage.getProductsByCategory(category);
      } else {
        products = await storage.getProducts();
      }
      
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const product = await storage.getProduct(id);
      
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  app.post("/api/products", async (req, res) => {
    try {
      const result = insertProductSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid product data", errors: result.error.errors });
      }

      const product = await storage.createProduct(result.data);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to create product" });
    }
  });

  // Reviews routes
  app.get("/api/reviews", async (req, res) => {
    try {
      // First try to get Google reviews
      const googleReviews = await fetchGoogleReviews();
      if (googleReviews && googleReviews.length > 0) {
        res.json(googleReviews);
        return;
      }
      
      // Fallback to stored reviews if Google API fails
      const reviews = await storage.getReviews();
      res.json(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });

  app.post("/api/reviews", async (req, res) => {
    try {
      const result = insertReviewSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid review data", errors: result.error.errors });
      }

      const review = await storage.createReview(result.data);
      res.status(201).json(review);
    } catch (error) {
      res.status(500).json({ message: "Failed to create review" });
    }
  });

  // Categories routes
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  app.get("/api/categories/:slug", async (req, res) => {
    try {
      const slug = req.params.slug;
      const category = await storage.getCategory(slug);
      
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category" });
    }
  });

  app.post("/api/categories", async (req, res) => {
    try {
      const result = insertCategorySchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid category data", errors: result.error.errors });
      }

      const category = await storage.createCategory(result.data);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to create category" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
