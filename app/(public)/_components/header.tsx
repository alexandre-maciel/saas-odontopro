"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: "Profissionais",
      href: "#profissionais",
    },
    {
      label: "Contatos",
      href: "/contatos",
    },
  ];

  const NavLinks = () => {
    return (
      <>
        {navItems.map((item) => (
          <Button
            onClick={() => setIsOpen(false)}
            key={item.href}
            className="bg-transparent hover:bg-transparent text-black shadow-none"
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </>
    );
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-999 py-4 px-6 bg-white">
      <div className="container mx-auto flex italic items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900">
          Odonto<span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            render={
              <Button
                className="md:hidden text-black hover:bg-transparent"
                variant="ghost"
                size="icon"
              />
            }
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="right" className="w-60 sm:w-75 z-9999">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>

              <SheetDescription>Veja nossos links</SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col mt-6 space-y-4">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
