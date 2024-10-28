"use client";

import { SidebarNavItem } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SidebarProps {
  items: SidebarNavItem[];
  requests?: number;
}

const Sidebar = ({ items, requests }: SidebarProps) => {
  const router = useRouter();
  const isRouteMatch = (navLink: string) => {
    const route = navLink;
    return route === window.location.pathname;
  };
  const [subItems, setSubItems] = useState<SidebarNavItem[]>([]);
  const [showSubItems, setShowSubItems] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  console.log("items", items);
  const handleSidebarClick = (item: SidebarNavItem) => {
    if (item.items && item.items.length > 0) {
      setSubItems(item.items);
      setAnimationClass("slide-in");
      setShowSubItems(true);
    } else {
      if (showSubItems) {
        setAnimationClass("slide-out");
        setTimeout(() => {
          setShowSubItems(false);
        }, 300);
      }
    }

    if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <div className="custom-scrollbar sticky left-0 top-0 inline-flex h-screen overflow-y-auto border-r-0 max-sm:hidden">
      <section className="z-20 flex w-[75px] shrink-0 flex-col justify-between bg-[#161821] pt-4 text-xs text-white">
        <div className="flex flex-1 flex-col">
          {items &&
            items.map((item) => {
              const isActive = isRouteMatch(item?.href || "");

              return (
                <button
                  key={item.href}
                  onClick={() => handleSidebarClick(item)}
                  className={`${
                    isActive
                      ? "bg-[#11114792] text-brand-yellow"
                      : "text-white hover:bg-[#1111477d] active:bg-[#11114767]"
                  } relative flex flex-col items-center justify-start gap-1 px-2 py-4`}
                >
                  {requests && item.title === "Requests" && !isActive ? (
                    <span
                      className={`absolute left-0 top-0 flex size-5 items-center justify-center rounded-full bg-destructive text-xs font-thin text-white`}
                    >
                      {requests}
                    </span>
                  ) : (
                    <></>
                  )}
                  {item.icon && <item.icon size={24} />}
                  <p
                    className={`${
                      isActive ? "font-normal" : "font-thin"
                    } max-sm:hidden `}
                  >
                    {item.title}
                  </p>
                </button>
              );
            })}
        </div>
      </section>
      {showSubItems && (
        <section
          className={`${animationClass} z-10 flex w-[75px] shrink-0 flex-col justify-between bg-[#111147d7] pt-4 text-xs text-white`}
        >
          <div className="flex flex-1 flex-col">
            {subItems &&
              subItems.map((item) => {
                const isActive = isRouteMatch(item.href || "");

                return (
                  <button
                    key={item.href}
                    onClick={() => {
                      router.push(item.href || "");
                    }}
                    className={`${
                      isActive
                        ? "bg-brand-blue text-brand-yellow"
                        : "text-white hover:bg-brand-blue/90 active:bg-brand-blue/80"
                    } relative flex flex-col items-center justify-start gap-1 px-2 py-4`}
                  >
                    {requests && item.title === "Requests" && !isActive ? (
                      <span
                        className={`absolute left-0 top-0 flex size-5 items-center justify-center rounded-full bg-destructive text-[10px] font-thin text-white`}
                      >
                        {requests}
                      </span>
                    ) : (
                      <></>
                    )}
                    {item?.icon && <item.icon size={24} />}
                    <p
                      className={`${
                        isActive ? "font-normal" : "font-thin"
                      } max-sm:hidden `}
                    >
                      {item.title}
                    </p>
                  </button>
                );
              })}
          </div>
        </section>
      )}
    </div>
  );
};

export default Sidebar;
