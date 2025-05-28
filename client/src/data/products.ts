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
    image: "/images/boysClothing.jpg",
    available: true
  },
  {
    id: 2,
    name: "Girls Floral Dress",
    description: "Beautiful floral dress perfect for special occasions",
    price: "$65.00",
    category: "girls-clothing",
    image: "/images/girlsClothing.webp",
    available: true
  },
  {
    id: 3,
    name: "Baby Shoes Collection",
    description: "Soft and comfortable shoes for your little one",
    price: "$25.00",
    category: "footwear",
    image: "/images/footwear.webp",
    available: true
  },
  {
    id: 4,
    name: "First Communion Dress",
    description: "Elegant white dress for First Holy Communion",
    price: "$275.00",
    category: "communion",
    image: "/images/communion.webp",
    available: true
  },
  {
    id: 5,
    name: "Baptism Gown",
    description: "Traditional white baptism gown with intricate details",
    price: "$195.00",
    category: "baptism",
    image: "/images/baptism.webp",
    available: true
  },
  {
    id: 6,
    name: "Baby Accessories Set",
    description: "Complete set of baby accessories including bibs and hats",
    price: "$35.00",
    category: "accessories",
    image: "/images/accessories.webp",
    available: true
  }
];

export const categories = [
  {
    id: 1,
    name: "Boys Clothing",
    slug: "boys-clothing",
    description: "Explore Our Lines of Infant, Baby, & Toddler Clothing for boys",
    image: "/images/boysClothing.jpg",
    buttonColor: "bg-light-blue"
  },
  {
    id: 2,
    name: "Girls Clothing",
    slug: "girls-clothing", 
    description: "Explore Our Lines of Infant, Baby, & Toddler Clothing for girls",
    image: "/images/girlsClothing.webp",
    buttonColor: "bg-soft-pink"
  },
  {
    id: 3,
    name: "Footwear",
    slug: "footwear",
    description: "Explore Our girls and boys footwear for Infant, Baby, & Toddler",
    image: "/images/footwear.webp",
    buttonColor: "bg-gray-800"
  },
  {
    id: 4,
    name: "Communion",
    slug: "communion",
    description: "Explore Our Communion Dresses for Infant, Baby, Toddler, and Girls.",
    image: "/images/communion.webp",
    buttonColor: "bg-soft-pink"
  },
  {
    id: 5,
    name: "Accessories & Gifts",
    slug: "accessories",
    description: "Explore Our Variety of Infant, Baby, & Toddler Gifts for boys and girls",
    image: "/images/accessories.webp",
    buttonColor: "bg-warm-orange"
  },
  {
    id: 6,
    name: "Baptism",
    slug: "baptism",
    description: "Explore Our Christening Dresses for Infant, Baby, & Toddlers.",
    image: "/images/baptism.webp",
    buttonColor: "bg-soft-pink"
  }
];
