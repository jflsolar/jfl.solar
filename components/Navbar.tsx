import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu';
import MobileNav from './MobileNav';

export default function Navbar() {

  return (
    <div className='sticky top-0 left-0 right-0 w-full bg-white z-[25] py-2 px-4 shadow-lg'>
        <div className='flex justify-between items-center max-w-7xl mx-auto w-full'>
            <div className="flex items-center gap-2">
                <div className="flex lg:hidden p-2">{<MobileNav /> }</div>
                <Link href="/" className="flex relative items-center px-2">
                    <Image src='/logo.png' width={200} height={60} alt="jfl logo" className="max-sm:w-[150px] max-[400px]:hidden flex"/>
                    <Image src='/logo-circle.png' width={60} height={60} alt="jfl logo" className="max-[400px]:flex hidden"/>
                </Link>
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className='max-lg:hidden'>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
                                Home 
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='max-lg:hidden'>
                        <NavigationMenuTrigger>PV Packages</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className='bg-slate-50 rounded-lg w-[500px] p-4'>
                                <h4 className='font-bold text-lg'>Pro-DIY</h4>
                                <div className='flex pl-4 flex-col gap-1'>
                                    <NavigationMenuLink href='/packages/hybrid'>Hybrid On/Off Grid</NavigationMenuLink>
                                    <NavigationMenuLink href='/packages/gridtied'>Grid-tied / On-Grid </NavigationMenuLink>
                                </div>
                                <h4 className='font-bold text-lg'>With Installation Packages</h4>
                                <div className='flex pl-4 flex-col gap-1'>
                                    <NavigationMenuLink href='/packages/residential'>Residential PV Systems</NavigationMenuLink>
                                    <NavigationMenuLink href='/packages/cni'>Commercial & Indsutrial PV Systems</NavigationMenuLink>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='max-lg:hidden'>
                        <Link href="/services" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
                                Services 
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='max-lg:hidden'>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
                                About 
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='max-lg:hidden'>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
                                Contact 
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                        href={'/quotation'}
                        className="font-semibold text-slate-800 max-h-8 whitespace-nowrap rounded-md px-4 mx-4 max-sm:text-sm max-sm:mx-0 py-4 text-base xl:text-lg bg-brand-yellow shadow-md hover:bg-brand-yellow/90"
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
