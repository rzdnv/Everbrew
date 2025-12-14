import { create } from "zustand";
import type { CartItem } from "@/types/cart";

type CartState = {
  carts: CartItem[];
  add: (id: string, name: string) => void;
  remove: (id: string) => void;
  updateNotes: (id: string, notes: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  carts: [],

  add: (id, name) =>
    set((state) => {
      const exists = state.carts.find((i) => i.id === id);
      if (exists) {
        return {
          carts: state.carts.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        carts: [...state.carts, { id, name, quantity: 1, notes: "" }],
      };
    }),

  remove: (id) =>
    set((state) => ({
      carts: state.carts
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    })),

  updateNotes: (id, notes) =>
    set((state) => ({
      carts: state.carts.map((i) => (i.id === id ? { ...i, notes } : i)),
    })),

  clear: () => set({ carts: [] }),
}));

// export const useCartStore = create<CartState>((set) => ({
//   carts: [],

//   add: (id, name) =>
//     set((state) => {
//       const exists = state.carts.find((i) => i.id === id);
//       if (exists) {
//         return {
//           carts: state.carts.map((i) =>
//             i.id === id ? { ...i, quantity: i.quantity + 1 } : i
//           ),
//         };
//       }
//       return { carts: [...state.carts, { id, name, quantity: 1 }] };
//     }),

//   remove: (id) =>
//     set((state) => ({
//       carts: state.carts
//         .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
//         .filter((i) => i.quantity > 0),
//     })),

//   clear: () => set({ carts: [] }),
// }));
