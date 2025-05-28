export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  available: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Boys Casual Outfit",
    description: "Comfortable and stylish outfit for everyday wear",
    price: "$45.00",
    category: "boys-clothing",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3",
    available: true
  },
  {
    id: 2,
    name: "Girls Floral Dress",
    description: "Beautiful floral dress perfect for special occasions",
    price: "$65.00",
    category: "girls-clothing",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3",
    available: true
  },
  {
    id: 3,
    name: "Baby Shoes Collection",
    description: "Soft and comfortable shoes for your little one",
    price: "$25.00",
    category: "footwear",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3",
    available: true
  },
  {
    id: 4,
    name: "First Communion Dress",
    description: "Elegant white dress for First Holy Communion",
    price: "$275.00",
    category: "communion",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3",
    available: true
  },
  {
    id: 5,
    name: "Baptism Gown",
    description: "Traditional white baptism gown with intricate details",
    price: "$195.00",
    category: "baptism",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3",
    available: true
  },
  {
    id: 6,
    name: "Baby Accessories Set",
    description: "Complete set of baby accessories including bibs and hats",
    price: "$35.00",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3",
    available: true
  }
];

export const categories = [
  {
    id: 1,
    name: "Boys Clothing",
    slug: "boys-clothing",
    description: "Explore Our Lines of Infant, Baby, & Toddler Clothing for boys",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3",
    buttonColor: "bg-light-blue"
  },
  {
    id: 2,
    name: "Girls Clothing",
    slug: "girls-clothing", 
    description: "Explore Our Lines of Infant, Baby, & Toddler Clothing for girls",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3",
    buttonColor: "bg-soft-pink"
  },
  {
    id: 3,
    name: "Footwear",
    slug: "footwear",
    description: "Explore Our girls and boys footwear for Infant, Baby, & Toddler",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3",
    buttonColor: "bg-gray-800"
  },
  {
    id: 4,
    name: "Communion",
    slug: "communion",
    description: "Explore Our Communion Dresses for Infant, Baby, Toddler, and Girls.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3",
    buttonColor: "bg-soft-pink"
  },
  {
    id: 5,
    name: "Accessories & Gifts",
    slug: "accessories",
    description: "Explore Our Variety of Infant, Baby, & Toddler Gifts for boys and girls",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3",
    buttonColor: "bg-warm-orange"
  },
  {
    id: 6,
    name: "Baptism",
    slug: "baptism",
    description: "Explore Our Christening Dresses for Infant, Baby, & Toddlers.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3",
    buttonColor: "bg-soft-pink"
  }
];
