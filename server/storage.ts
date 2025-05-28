import { products, reviews, categories, type Product, type Review, type Category, type InsertProduct, type InsertReview, type InsertCategory } from "@shared/schema";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Reviews
  getReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  
  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private reviews: Map<number, Review>;
  private categories: Map<number, Category>;
  private currentProductId: number;
  private currentReviewId: number;
  private currentCategoryId: number;

  constructor() {
    this.products = new Map();
    this.reviews = new Map();
    this.categories = new Map();
    this.currentProductId = 1;
    this.currentReviewId = 1;
    this.currentCategoryId = 1;
    this.initializeData();
  }

  private initializeData() {
    // Initialize with sample data
    const sampleCategories: Category[] = [
      {
        id: 1,
        name: "Boys Clothing",
        description: "Explore Our Lines of Infant, Baby, & Toddler Clothing for boys",
        image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3",
        buttonColor: "bg-light-blue",
        slug: "boys-clothing"
      },
      {
        id: 2,
        name: "Girls Clothing",
        description: "Explore Our Lines of Infant, Baby, & Toddler Clothing for girls",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3",
        buttonColor: "bg-soft-pink",
        slug: "girls-clothing"
      },
      {
        id: 3,
        name: "Footwear",
        description: "Explore Our girls and boys footwear for Infant, Baby, & Toddler",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3",
        buttonColor: "bg-gray-800",
        slug: "footwear"
      },
      {
        id: 4,
        name: "Communion",
        description: "Explore Our Communion Dresses for Infant, Baby, Toddler, and Girls.",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3",
        buttonColor: "bg-soft-pink",
        slug: "communion"
      },
      {
        id: 5,
        name: "Accessories & Gifts",
        description: "Explore Our Variety of Infant, Baby, & Toddler Gifts for boys and girls",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3",
        buttonColor: "bg-warm-orange",
        slug: "accessories"
      },
      {
        id: 6,
        name: "Baptism",
        description: "Explore Our Christening Dresses for Infant, Baby, & Toddlers.",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3",
        buttonColor: "bg-soft-pink",
        slug: "baptism"
      }
    ];

    const sampleReviews: Review[] = [
      {
        id: 1,
        author: "Alexandra",
        content: "The selection and quality of baby clothing at this store is excellent!",
        rating: 5,
        date: "6/07/2022"
      },
      {
        id: 2,
        author: "Patricia",
        content: "Beautiful store with exquisite clothing for children! The owners are extremely helpful and kind.",
        rating: 5,
        date: "6/07/2016"
      },
      {
        id: 3,
        author: "Sal",
        content: "Grace is terrific! I had to find a baby gift for a very good friend first granddaughter. She was so kind and helpful.",
        rating: 5,
        date: "4/10/2025"
      },
      {
        id: 4,
        author: "Karan",
        content: "Great selection, always something different and unique, very helpful staff. Beautiful wrapping if you need it.",
        rating: 5,
        date: "6/07/2022"
      }
    ];

    const sampleProducts: Product[] = [
      {
        id: 1,
        name: "Boys Casual Outfit",
        description: "Comfortable and stylish outfit for everyday wear",
        price: "45.00",
        category: "boys-clothing",
        image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3",
        available: true,
        createdAt: new Date()
      },
      {
        id: 2,
        name: "Girls Floral Dress",
        description: "Beautiful floral dress perfect for special occasions",
        price: "65.00",
        category: "girls-clothing",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3",
        available: true,
        createdAt: new Date()
      },
      {
        id: 3,
        name: "First Communion Dress",
        description: "Elegant white dress for First Holy Communion",
        price: "275.00",
        category: "communion",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3",
        available: true,
        createdAt: new Date()
      },
      {
        id: 4,
        name: "Baptism Gown",
        description: "Traditional white baptism gown with intricate details",
        price: "195.00",
        category: "baptism",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3",
        available: true,
        createdAt: new Date()
      }
    ];

    // Initialize data
    sampleCategories.forEach(category => {
      this.categories.set(category.id, category);
      this.currentCategoryId = Math.max(this.currentCategoryId, category.id + 1);
    });

    sampleReviews.forEach(review => {
      this.reviews.set(review.id, review);
      this.currentReviewId = Math.max(this.currentReviewId, review.id + 1);
    });

    sampleProducts.forEach(product => {
      this.products.set(product.id, product);
      this.currentProductId = Math.max(this.currentProductId, product.id + 1);
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.category === category);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { 
      ...insertProduct, 
      id, 
      createdAt: new Date() 
    };
    this.products.set(id, product);
    return product;
  }

  async getReviews(): Promise<Review[]> {
    return Array.from(this.reviews.values());
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = this.currentReviewId++;
    const review: Review = { ...insertReview, id };
    this.reviews.set(id, review);
    return review;
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategory(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(category => category.slug === slug);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = this.currentCategoryId++;
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }
}

export const storage = new MemStorage();
