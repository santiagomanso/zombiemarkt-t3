import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    id: 1,
    text: "shop",
    href: "/shop",
    icon: "",
  },
  {
    id: 2,
    text: "cart",
    href: "/cart",
    icon: "",
  },
  {
    id: 3,
    text: "login/signup",
    href: "/login",
    icon: "",
  },
  {
    id: 4,
    text: "profile",
    href: "/profile",
    icon: "",
  },
];

export default function PcNavbar() {
  return (
    <div className="flex h-full justify-center bg-red-500">
      <div className="hidden h-full w-full max-w-7xl items-center justify-between bg-indigo-400 lg:flex">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} />
          Home
        </Link>
        <div className="flex items-center justify-between gap-10">
          {links.map((item) => {
            return (
              <Link key={item.id} href={item.href}>
                {item.text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
