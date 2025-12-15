import { Link } from "react-router-dom";
import { tables } from "../constants/CreateOrder.constants";
import { Input } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";

import { Button } from "@/components/ui/button";

import { type FormEvent } from "react";
import { Plus, Minus } from "lucide-react";

import type { CartItem } from "@/types/cart";

export const CartSection = ({
  onOrder,
  carts,
  onAdd,
  onRemove,
  onUpdateNotes,
  formRef,
}: {
  onOrder: (e: FormEvent) => void;
  carts: CartItem[];
  onAdd: (id: string, name: string) => void;
  onRemove: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  formRef?: React.RefObject<HTMLFormElement | null>;
}) => {
  return (
    <form
      className="md:w-[30%] flex flex-col h-fit sticky p-4 gap-6 rounded-3xl"
      onSubmit={onOrder}
      ref={formRef}
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Customer Information
          </h2>
          <Link to="/orders">
            <Button color="danger">Cancel</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4 p-4 rounded-2xl">
          <Input
            isRequired
            label="Name"
            labelPlacement="outside"
            name="customerName"
            placeholder="Enter Name"
            type="text"
            size="lg"
            variant="bordered"
            validate={(value) => {
              if (value.length < 3) {
                return "Nama pengguna harus terdiri dari minimal 3 karakter.";
              }
            }}
          />
          <Select
            isRequired
            name="tableNumber"
            labelPlacement="outside"
            className="max-w-full"
            label="Table"
            placeholder="Select Table"
            variant="bordered"
            size="lg"
          >
            {tables.map((table) => (
              <SelectItem key={table.value}>{table.label}</SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold text-slate-900">
            Current Order
          </h2>
        </div>
        {carts.length > 0 ? (
          <div className="flex flex-col gap-4 p-4 bg-gray-200 rounded-2xl">
            {carts.map((item: CartItem) => (
              <div
                className="flex flex-col gap-2 p-4 bg-white rounded-2xl"
                key={item.id}
              >
                <div className="flex w-full justify-between gap-2 items-center">
                  <h4 className="text-base font-semibold">{item.name}</h4>
                  <div className="flex gap-2 items-center font-bold">
                    <Button
                      type="button"
                      size={"icon-lg"}
                      onClick={() => onRemove(item.id)}
                    >
                      <Minus />
                    </Button>
                    <div className="w-6 text-center">{item.quantity}</div>
                    <Button
                      type="button"
                      size={"icon-lg"}
                      onClick={() => onAdd(item.id, item.name)}
                    >
                      <Plus />
                    </Button>
                  </div>
                </div>
                <Input
                  placeholder="Notes (optional)"
                  type="text"
                  variant="faded"
                  value={item.notes}
                  onChange={(e) => onUpdateNotes(item.id, e.target.value)}
                />
              </div>
            ))}
            <Button type="submit" color="primary">
              Order
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 p-4 bg-gray-200 rounded-2xl">
            <h4 className="text-base font-semibold">Cart is empty</h4>
          </div>
        )}
      </div>
    </form>
  );
};
