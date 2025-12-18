// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import CartSheet from "../Cart";
// import { ShoppingCart } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { NAV_MENUS } from "@/constants/navbarMenus";

import { LogoBrand } from "@/assets/logo";

export default function DesktopNav() {
  // const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
      {/* Logo */}
      <a href="#home">
        <img src={LogoBrand} alt="EVERBREW" className="w-24 object-contain" />
      </a>

      {/* Menu */}
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          {NAV_MENUS.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                href={item.href}
                className="text-base font-medium text-gray-800 transition-colors hover:text-aqua-deep-800"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Cart */}
      {/* <Button onClick={() => setCartOpen(true)} className="bg-aqua-deep-800">
        <ShoppingCart className="h-4 w-4" />
      </Button>

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} /> */}
    </div>
  );
}
