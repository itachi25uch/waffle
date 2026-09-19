import { ReviewItem } from '../types';

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Hyderabad Food Explorer',
    rating: 5,
    date: 'Recent Google Review',
    theme: 'taste',
    text: 'The Belgian choco waffle with creamery scoop here is simply heavenly. Perfectly crispy on the outside, fluffy inside, with warm melted chocolate that makes every bite satisfying.',
    highlight: 'Best crispy waffles with real chocolate drizzle',
    verifiedVisit: true,
  },
  {
    id: 'rev-2',
    author: 'Local Guide • Hyderabad',
    rating: 5,
    date: 'Recent Google Review',
    theme: 'thick shakes',
    text: 'Their Biscoff and Oreo thick shakes are incredibly rich and dense. You can actually taste the premium ingredients instead of just crushed ice. Outstanding quality for dessert lovers!',
    highlight: 'Thick, rich shakes with real Biscoff crunch',
    verifiedVisit: true,
  },
  {
    id: 'rev-3',
    author: 'Dessert Connoisseur',
    rating: 5,
    date: 'Recent Google Review',
    theme: 'ice cream',
    text: '29 different creamery flavors is unbelievable! The Sitaphal, Belgian Chocolate, and Salted Caramel scoops in the waffle cup are a must-try whenever you visit Usha Mullapudi Road.',
    highlight: 'Huge variety of 29 artisanal creameries',
    verifiedVisit: true,
  },
  {
    id: 'rev-4',
    author: 'Café Regular',
    rating: 5,
    date: 'Recent Google Review',
    theme: 'price',
    text: 'Extremely reasonable pricing for both desserts and savory bites. Getting a waffle loaded with artisanal creamery for ₹219 is great value. The burger and mojito combos are also fantastic.',
    highlight: 'Unmatched value & generous portions',
    verifiedVisit: true,
  },
  {
    id: 'rev-5',
    author: 'Family Diner',
    rating: 4,
    date: 'Recent Google Review',
    theme: 'ambience',
    text: 'Super cozy, youthful and welcoming café atmosphere. Great spot to hangout with friends in Rodamestri Nagar for sweet cravings and quick evening bites.',
    highlight: 'Warm, welcoming & vibrant café vibe',
    verifiedVisit: true,
  },
];

export const GOOGLE_RATING_STATS = {
  averageRating: 4.6,
  totalReviews: 224,
  location: 'Usha Mullapudi Rd, Prakasham Panthulu Nagar, Rodamestri Nagar, Hyderabad',
  phone: '099495 50666',
  openingTime: 'Open from 10:00 AM',
  services: ['Dine-in', 'Takeaway', 'Delivery'],
};
