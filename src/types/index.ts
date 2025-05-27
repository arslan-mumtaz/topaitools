export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  categories: string[];
  url: string;
  imageUrl: string;
  featured?: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}