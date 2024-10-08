import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <div className="sticky inset-x-0 top-0 z-[25] w-full bg-white px-4 py-2 shadow-lg">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex p-2 lg:hidden">{<MobileNav />}</div>
          <Link href="/" className="relative flex items-center px-2">
            <Image
              src="/logo.png"
              width={200}
              height={60}
              alt="jfl logo"
              className="flex max-sm:w-[150px] max-[400px]:hidden"
            />
            <Image
              src="/logo-circle.png"
              width={60}
              height={60}
              alt="jfl logo"
              className="hidden max-[400px]:flex"
            />
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="max-lg:hidden">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} `}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="max-lg:hidden">
              <NavigationMenuTrigger>PV Packages</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[240px] rounded-lg bg-slate-50 p-4">
                  {/* <h4 className="text-lg font-bold">Pro-DIY</h4> */}
                  <div className="flex flex-col gap-1 pl-4">
                    <NavigationMenuLink href="/packages/hybrid">
                      Hybrid On/Off Grid
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/packages/gridtied">
                      Grid-tied / On-Grid{" "}
                    </NavigationMenuLink>
                  </div>
                  {/* <h4 className="text-lg font-bold">
                    With Installation Packages
                  </h4>
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
            <NavigationMenuItem className="max-lg:hidden">
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[480px] rounded-lg bg-slate-50 p-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2 rounded p-2 hover:bg-slate-100">
                      <div className="flex flex-col">
                        <NavigationMenuLink href="/products/inverters">
                          <h4 className="font-semibold leading-none">
                            Inverter
                          </h4>
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
            {/* <NavigationMenuItem className="max-lg:hidden">
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} `}
                >
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem className="max-lg:hidden">
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} `}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="max-lg:hidden">
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} `}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href={"/quotation"}
                className="mx-4 max-h-8 whitespace-nowrap rounded-md bg-brand-yellow p-4 text-base font-semibold text-slate-800 shadow-md hover:bg-brand-yellow/90 max-sm:mx-0 max-sm:text-sm xl:text-lg"
              >
                Request a Quote
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
