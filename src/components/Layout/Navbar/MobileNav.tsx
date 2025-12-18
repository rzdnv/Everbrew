import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";

import { NAV_MENUS } from "@/constants/navbarMenus";

import { LogoBrand } from "@/assets/logo";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-16 items-center justify-between px-4">
      {/* Logo */}
      <a href="#home">
        <img src={LogoBrand} alt="EVERBREW" className="w-24 object-contain" />
      </a>

      {/* Hamburger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size={"icon-lg"} className="bg-aqua-deep-800">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-64 p-8">
          <div>
            <img
              src={LogoBrand}
              alt="EVERBREW"
              className="w-24 object-contain"
            />
          </div>

          <nav className="flex flex-col gap-2 font-mono">
            {NAV_MENUS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                // className="text-sm font-medium text-gray-700 hover:text-aqua-deep-800"
              >
                <Button
                  variant={"link"}
                  size={"sm"}
                  className="text-base font-medium text-gray-800 hover:text-aqua-deep-800"
                >
                  {item.label}
                </Button>
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Cart */}
      {/* <a href="#cart">
        <Button className="bg-aqua-deep-800">
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </a> */}
    </div>
  );
}
