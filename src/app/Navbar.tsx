"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import { ChevronRight, Handbag, Menu, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Dresses", href: "/dresses" },
    { name: "Tops", href: "/tops" },
    { name: "Bottoms", href: "/bottoms" },
    { name: "Accessories", href: "/accessories" },
    { name: "Sale", href: "/sale", className: "text-red-500 font-medium" },
  ];

  return (
    <header className="flex items-center justify-between sticky top-0 z-50 border-b border-muted-foreground px-2 py-3 md:px-10 md:py-5 bg-background">
 
      <Link href="/" className="flex items-center ml-4 md:ml-0">
        <h1 className="text-2xl font-bold">Boutique</h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6">
        {navItems.map((item, index) => (
          <li key={index} className="pb-0.5 font-semibold">
            <Link href={item.href} className={item.className || "hover:text-pink-700"}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side Actions */}
      <div className="flex items-center gap-0 md:gap-2">
        <ThemeToggleButton start="center" variant="circle" />

        <Button variant="ghost" size="icon" className="relative rounded-full">
          <Handbag className="size-5" />
          <Badge
            variant="destructive"
            className="absolute bg-red-500 rounded-full -top-1 -right-1 size-5 flex items-center justify-center p-0 text-xs"
          >
            5
          </Badge>
        </Button>

        {/* User Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hidden md:flex"
            >
              <User className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/profile" className="w-full">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/orders" className="w-full">
                Orders
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/wishlist" className="w-full">
                Wishlist
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/logout" className="w-full text-red-500">
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="min-w-xs">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Browse our collection</SheetDescription>
            </SheetHeader>
            <nav className="mt-8 px-8">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-2 text-lg ${
                        item.className || ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      <ChevronRight className="size-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
