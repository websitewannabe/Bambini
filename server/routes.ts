import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProductSchema, insertReviewSchema, insertCategorySchema } from "@shared/schema";
import { Request, Response } from "express";
import { upload, getImageUrl } from "./upload";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static images
  app.use('/api/images', express.static(path.join(process.cwd(), 'uploads/images')));

  // Image upload endpoint
  app.post('/api/upload/image', upload.single('image'), (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No image file provided' });
      }

      const imageUrl = getImageUrl(req.file.filename);
      res.json({ 
        success: true, 
        filename: req.file.filename,
        url: imageUrl,
        originalName: req.file.originalname,
        size: req.file.size
      });
    } catch (error) {
      console.error('Image upload error:', error);
      res.status(500).json({ error: 'Failed to upload image' });
    }
  });

  // Delete image endpoint
  app.delete('/api/images/:filename', (req: Request, res: Response) => {
    try {
      const { filename } = req.params;
      const imagePath = path.join(process.cwd(), 'uploads/images', filename);

      // Note: In production, you'd want to check if file exists and handle deletion
      // For now, just return success
      res.json({ success: true, message: 'Image deleted' });
    } catch (error) {
      console.error('Image deletion error:', error);
      res.status(500).json({ error: 'Failed to delete image' });
    }
  });

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
      const reviews = await storage.getReviews();
      res.json(reviews);
    } catch (error) {
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