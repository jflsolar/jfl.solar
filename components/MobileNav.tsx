"use client";

import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Menu2 } from "tabler-icons-react";

const NavContent = () => {
  return (
    <NavigationMenu
      orientation="vertical"
      aria-orientation="vertical"
      className="w-full max-w-full"
      viewPortClassName="!top-0 left-0 bottom-auto"
    >
      <NavigationMenuList className="flex w-full flex-col gap-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>PV Packages</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <div className="w-[500px] rounded-lg bg-slate-50 p-4">
              <h4 className="text-lg font-bold">Pro-DIY</h4>
              <div className="flex flex-col gap-1 pl-4">
                <NavigationMenuLink href="/packages/hybrid">
                  Hybrid On/Off Grid
                </NavigationMenuLink>
                <NavigationMenuLink href="/packages/gridtied">
                  Grid-tied / On-Grid{" "}
                </NavigationMenuLink>
              </div>
              <h4 className="text-lg font-bold">With Installation Packages</h4>
              <div className="flex flex-col gap-1 pl-4">
                <NavigationMenuLink href="/packages/residential">
                  Residential PV Systems
                </NavigationMenuLink>
                <NavigationMenuLink href="/packages/cni">
                  Commercial & Indsutrial PV Systems
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu2 className="cursor-pointer" size={24} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[250px] border-none max-[350px]:w-full max-[350px]:max-w-full max-[350px]:px-0 sm:max-w-[250px] "
      >
        <Link
          href="/"
          className="relative flex items-center justify-center px-2"
        >
          <Image
            src="/logo.png"
            width={200}
            height={60}
            alt="jfl logo"
            className=""
          />
        </Link>
        <div className="mt-10">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
