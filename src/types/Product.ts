
export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  images: string[];
}

export interface Review {
  id: number;
  productId: number;
  customerName: string;
  rating: number;
  comment: string;
}
