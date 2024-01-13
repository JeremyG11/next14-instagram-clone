"use client";

import Link from "next/link";
import { MdExplore } from "react-icons/md";
import { usePathname } from "next/navigation";
import { Compass, Search } from "lucide-react";
import { RiMessengerLine } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { HomeIcon, HomeFillIcon } from "@primer/octicons-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const ClapperboardInactive = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="50px"
    height="50px"
    className="w-8 h-7 text-black dark:text-white text-xl group-hover:scale-110 transition-all transform ease-in-out duration-200 "
    fill="currentColor"
  >
    <path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 35 C 4 41.063407 8.9365932 46 15 46 L 35 46 C 41.063407 46 46 41.063407 46 35 L 46 15 C 46 8.9365932 41.063407 4 35 4 L 15 4 z M 16.740234 6 L 27.425781 6 L 33.259766 16 L 22.574219 16 L 16.740234 6 z M 29.740234 6 L 35 6 C 39.982593 6 44 10.017407 44 15 L 44 16 L 35.574219 16 L 29.740234 6 z M 14.486328 6.1035156 L 20.259766 16 L 6 16 L 6 15 C 6 10.199833 9.7581921 6.3829803 14.486328 6.1035156 z M 6 18 L 44 18 L 44 35 C 44 39.982593 39.982593 44 35 44 L 15 44 C 10.017407 44 6 39.982593 6 35 L 6 18 z M 21.978516 23.013672 C 20.435152 23.049868 19 24.269284 19 25.957031 L 19 35.041016 C 19 37.291345 21.552344 38.713255 23.509766 37.597656 L 31.498047 33.056641 C 33.442844 31.951609 33.442844 29.044485 31.498047 27.939453 L 23.509766 23.398438 L 23.507812 23.398438 C 23.018445 23.120603 22.49297 23.001607 21.978516 23.013672 z M 21.982422 24.986328 C 22.158626 24.988232 22.342399 25.035052 22.521484 25.136719 L 30.511719 29.677734 C 31.220922 30.080703 31.220922 30.915391 30.511719 31.318359 L 22.519531 35.859375 C 21.802953 36.267773 21 35.808686 21 35.041016 L 21 25.957031 C 21 25.573196 21.201402 25.267385 21.492188 25.107422 C 21.63758 25.02744 21.806217 24.984424 21.982422 24.986328 z" />
  </svg>
);

const Clapperboard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    className="w-8 h-7 text-black dark:text-white text-xl group-hover:scale-110 transition-all transform ease-in-out duration-200 "
    fill="currentColor"
  >
    <path d="M13.34 4.13L20.26 16H4v-1C4 9.48 8.05 4.92 13.34 4.13zM33.26 16L22.57 16 15.57 4 26.26 4zM46 15v1H35.57l-7-12H35C41.08 4 46 8.92 46 15zM4 18v17c0 6.08 4.92 11 11 11h20c6.08 0 11-4.92 11-11V18H4zM31 32.19l-7.99 4.54C21.68 37.49 20 36.55 20 35.04v-9.08c0-1.51 1.68-2.45 3.01-1.69L31 28.81C32.33 29.56 32.33 31.44 31 32.19z" />
  </svg>
);

const links = [
  {
    name: "Home",
    href: "/dashboard",
    icon: HomeFillIcon,
    inactiveIcon: HomeIcon,
  },
  {
    name: "Search",
    href: "/dashboard/search",
    icon: Search,
    inactiveIcon: Search,
  },
  {
    name: "Explore",
    href: "/dashboard/explore",
    icon: MdExplore,
    inactiveIcon: Compass,
    hiddenOnMobileDevice: true,
  },
  {
    name: "Reels",
    href: "/dashboard/reels",
    icon: Clapperboard,
    inactiveIcon: ClapperboardInactive,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: FaFacebookMessenger,
    inactiveIcon: RiMessengerLine,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: IoMdHeart,
    inactiveIcon: IoMdHeartEmpty,
    hiddenOnMobileDevice: true,
  },
  {
    name: "Create",
    href: "/dashboard/create",
    icon: TbSquareRoundedPlus,
    inactiveIcon: TbSquareRoundedPlus,
    hiddenOnMobileDevice: true,
  },
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;
        const LinkIcon = isActive ? link.icon : link.inactiveIcon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={buttonVariants({
              variant: "ghost",
              className: cn("group navLink py-3 rounded-lg", {
                "hidden md:flex": link.hiddenOnMobileDevice,
              }),
              size: "lg",
            })}
          >
            <LinkIcon
              className="group w-8 text-xl group-hover:scale-110 transition-all transform ease-in-out duration-200 "
              size={28}
            />
            <p
              className={`${cn("hidden lg:block font-light text-base p-2.5 ", {
                "font-extrabold ": isActive,
              })}`}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
