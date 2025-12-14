// Menu / Product detail
import type { DetailItem } from "./menu";

// Cart item
export interface CartItem {
  quantity: number;
  notes: string;
  menuItem: DetailItem;
}

// Order detail
export interface OrderDetail {
  id: string;
  customer_name: string;
  table_number: number;
  cart: CartItem[];
  status: "PROCESSING" | "COMPLETED" | "CANCELLED";
  total: number;
  created_at: string;
  updated_at: string;
}

export type { OrderDetail };
