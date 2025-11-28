export type Volume = '0.2' | '0.3' | '0.4';

export interface DrinkPrice {
  volume: Volume | string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  prices?: DrinkPrice[]; // For drinks with sizes
  price?: number; // For single price items
  description?: string;
  image?: string;
  isNew?: boolean;
  isHit?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  platform: 'Yandex' | 'Google';
}