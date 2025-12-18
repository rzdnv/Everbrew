import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function CartSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[360px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Your Order</SheetTitle>
        </SheetHeader>

        {/* CART CONTENT */}
        <div className="mt-6 flex flex-col gap-4">
          {/* Item */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Americano</p>
              <span className="text-sm text-gray-500">x1</span>
            </div>
            <p className="font-medium">Rp 25.000</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Cappuccino</p>
              <span className="text-sm text-gray-500">x2</span>
            </div>
            <p className="font-medium">Rp 50.000</p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-6 border-t pt-4">
          <div className="mb-4 flex items-center justify-between font-semibold">
            <span>Total</span>
            <span>Rp 75.000</span>
          </div>

          <Button className="w-full">Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { Input } from "@heroui/react";
// import { Select, SelectItem } from "@heroui/react";
// import { Plus, Minus } from "lucide-react";
// import { useRef, type FormEvent } from "react";

// import { tables } from "@/feature/CreateOrder/constants/CreateOrder.constants";
// import { useCartStore } from "@/store/cart.store";
// import { createOrder } from "@/services/order.service";
// import { useMutation } from "@tanstack/react-query";
// import { addToast } from "@heroui/react";

// export default function CartSheet({
//   open,
//   onOpenChange,
// }: {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }) {
//   const formRef = useRef<HTMLFormElement>(null);

//   const { carts, add, remove, updateNotes, clear } = useCartStore();

//   const mutation = useMutation({
//     mutationFn: createOrder,
//     onSuccess: () => {
//       addToast({
//         title: "Success",
//         description: "Order created successfully!",
//         color: "success",
//         variant: "solid",
//       });
//       clear();
//       onOpenChange(false);
//       formRef.current?.reset();
//     },
//     onError: () => {
//       addToast({
//         title: "Error",
//         description: "Failed to create order",
//         color: "danger",
//         variant: "solid",
//       });
//     },
//   });

//   const handleOrder = (e: FormEvent) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;

//     const payload = {
//       customerName: form.customerName.value,
//       tableNumber: form.tableNumber.value,
//       cart: carts.map((item) => ({
//         menuItemId: item.id,
//         quantity: item.quantity,
//         notes: item.notes,
//       })),
//     };

//     mutation.mutate(payload);
//   };

//   return (
//     <Sheet open={open} onOpenChange={onOpenChange}>
//       <SheetContent side="right" className="w-[360px] sm:w-[400px]">
//         <SheetHeader>
//           <SheetTitle>Your Order</SheetTitle>
//         </SheetHeader>

//         <form
//           ref={formRef}
//           onSubmit={handleOrder}
//           className="mt-6 flex flex-col gap-6"
//         >
//           {/* CUSTOMER INFO */}
//           <div className="flex flex-col gap-4">
//             <Input
//               isRequired
//               name="customerName"
//               label="Name"
//               labelPlacement="outside"
//               placeholder="Enter name"
//               variant="bordered"
//             />

//             <Select
//               isRequired
//               name="tableNumber"
//               label="Table"
//               labelPlacement="outside"
//               placeholder="Select table"
//               variant="bordered"
//             >
//               {tables.map((table) => (
//                 <SelectItem key={table.value}>{table.label}</SelectItem>
//               ))}
//             </Select>
//           </div>

//           {/* CART ITEMS */}
//           {carts.length > 0 ? (
//             <div className="flex flex-col gap-4">
//               {carts.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4"
//                 >
//                   <div className="flex items-center justify-between">
//                     <h4 className="font-semibold">{item.name}</h4>

//                     <div className="flex items-center gap-2">
//                       <Button
//                         type="button"
//                         size="icon-lg"
//                         onClick={() => remove(item.id)}
//                       >
//                         <Minus />
//                       </Button>

//                       <span className="w-6 text-center">{item.quantity}</span>

//                       <Button
//                         type="button"
//                         size="icon-lg"
//                         onClick={() => add(item.id, item.name)}
//                       >
//                         <Plus />
//                       </Button>
//                     </div>
//                   </div>

//                   <Input
//                     placeholder="Notes (optional)"
//                     variant="faded"
//                     value={item.notes}
//                     onChange={(e) => updateNotes(item.id, e.target.value)}
//                   />
//                 </div>
//               ))}

//               <Button
//                 type="submit"
//                 className="w-full"
//                 // isLoading={mutation.isPending}
//               >
//                 Checkout
//               </Button>
//             </div>
//           ) : (
//             <div className="rounded-xl bg-gray-100 p-4 text-sm text-gray-500">
//               Cart is empty
//             </div>
//           )}
//         </form>
//       </SheetContent>
//     </Sheet>
//   );
// }
