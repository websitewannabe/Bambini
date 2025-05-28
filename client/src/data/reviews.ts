export interface Review {
  id: number;
  author: string;
  content: string;
  rating: number;
  date: string;
  initial: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    author: "Alexandra",
    content: "The selection and quality of baby clothing at this store is excellent!",
    rating: 5,
    date: "6/07/2022",
    initial: "A"
  },
  {
    id: 2,
    author: "Patricia", 
    content: "Beautiful store with exquisite clothing for children! The owners are extremely helpful and kind.",
    rating: 5,
    date: "6/07/2016",
    initial: "P"
  },
  {
    id: 3,
    author: "Sal",
    content: "Grace is terrific! I had to find a baby gift for a very good friend first granddaughter. I had little free time; I searched baby clothes near me, found Bambino's World. I called and Grace was so kind and helpful, she made it an ease to select some unique beautiful outfits.",
    rating: 5,
    date: "4/10/2025",
    initial: "S"
  },
  {
    id: 4,
    author: "Karan",
    content: "Great selection, always something different and unique, very helpful staff. Beautiful wrapping if you need it, very personal and welcoming. I've been shopping with them for years and will continue to.",
    rating: 5,
    date: "6/07/2022",
    initial: "K"
  },
  {
    id: 5,
    author: "A",
    content: "If you're looking for something that is unique Bambini's World is for you. I wanted to buy a Christmas outfit in August for an infant. Of course that merchandise wasn't out yet but the salesperson went into the stock room and came out with several outfits.",
    rating: 5,
    date: "10/07/2023",
    initial: "A"
  }
];
