import type { MenuItem } from "../../../types/menu";
// import { Button } from "../../../components/ui/button";

// import { ShoppingCart } from "lucide-react";

export default function MenuCard({
  item,
  img,
}: {
  item: MenuItem;
  img: string;
}) {
  return (
    <div
      className="w-52  md:w-64 shrink-0 rounded-lg shadow-lg overflow-hidden bg-white outline outline-gray-200
    hover:outline-2 hover:outline-aqua-deep-800 md:hover:-translate-2 md:duration-300 ease-in-out"
    >
      <div className="aspect-square overflow-hidden">
        <img src={img} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col p-6 gap-4">
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center justify-between">
            <h2 className=" text-base md:text-lg font-semibold">{item.name}</h2>
            <h2 className="text-base text-aqua-deep-800 md:text-lg">
              ${item.price}
            </h2>
          </div>
          <h2 className="text-xs md:text-sm font-medium">{item.description}</h2>
        </div>
      </div>
    </div>
  );
}
