export type MenuCategoryType =
  | 'ALL'
  | 'WAFFLES'
  | 'CREAMERIES'
  | 'THICK SHAKES'
  | 'MOCKTAILS'
  | 'COMBOS'
  | 'CREAMY BREADS'
  | 'FRIED ITEMS'
  | 'CREAMY PASTA'
  | 'MOMOS'
  | 'NOODLES & RICE'
  | 'SOUPS & STARTERS';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryType;
  subCategory?: string;
  price: number;
  isVeg: boolean;
  description?: string;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  badge?: string;
  imageUrl: string;
  imageAlt: string;
  packagingExtra?: string;
}

export interface ComboItem {
  id: string;
  name: string;
  price: number;
  isVeg: boolean;
  includes: string[];
  imageUrl: string;
  badge?: string;
}

export interface MenuPageReference {
  id: number;
  title: string;
  subtitle: string;
  sections: string[];
  description: string;
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  theme: 'ambience' | 'food quality' | 'quantity' | 'taste' | 'price' | 'ice cream' | 'thick shakes';
  text: string;
  highlight: string;
  verifiedVisit: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}
