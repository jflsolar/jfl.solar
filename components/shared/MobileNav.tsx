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
} from "../ui/navigation-menu";
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
            <div className="w-full rounded-lg bg-slate-50 p-4">
              <h4 className="text-lg font-bold">Pro-DIY</h4>
              <div className="flex flex-col gap-1 pl-4">
                <NavigationMenuLink href="/packages/hybrid">
                  Hybrid On/Off Grid
                </NavigationMenuLink>
                <NavigationMenuLink href="/packages/gridtied">
                  Grid-tied / On-Grid{" "}
                </NavigationMenuLink>
              </div>
              {/* <h4 className="text-lg font-bold">With Installation Packages</h4>
              <div className="flex flex-col gap-1 pl-4">
                <NavigationMenuLink href="/packages/residential">
                  Residential PV Systems
                </NavigationMenuLink>
                <NavigationMenuLink href="/packages/cni">
                  Commercial & Indsutrial PV Systems
                </NavigationMenuLink>
              </div> */}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[480px] rounded-lg bg-slate-50 p-4">
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 rounded p-2 hover:bg-slate-100">
                  <div className="flex flex-col">
                    <NavigationMenuLink href="/products/inverters">
                      <h4 className="font-semibold leading-none">Inverter</h4>
                      <p className="text-sm text-slate-400">
                        Converts solar energy into usable electricity.
                      </p>
                    </NavigationMenuLink>
                  </div>
                  <div className="ml-2 flex flex-col gap-1 text-base font-bold">
                    <NavigationMenuLink
                      href="/products/inverters/hybrid"
                      className="w-fit hover:underline"
                    >
                      Hybrid On/Off Grid
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/products/inverters/gridtied"
                      className="w-fit hover:underline"
                    >
                      Grid-tied Inverters
                    </NavigationMenuLink>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <NavigationMenuLink
                    href="/products/panels"
                    className="rounded p-2 hover:bg-slate-100"
                  >
                    <div className="flex flex-col">
                      <h4 className="font-semibold leading-none">
                        Solar Panel (PV Module)
                      </h4>
                      <p className="text-sm text-slate-400">
                        Captures sunlight and turns it into power.
                      </p>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="/products/batteries"
                    className="rounded p-2 hover:bg-slate-100"
                  >
                    <div className="flex flex-col">
                      <h4 className="font-semibold leading-none">
                        Battery (LiFePO4)
                      </h4>
                      <p className="text-sm text-slate-400">
                        Stores excess solar energy for later use.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
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
            alt="Empowering the Philippines, one roof at a time."
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
