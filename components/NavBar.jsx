import Link from "next/link";
import React from "react";
import Menus from "../data/menu.json";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
const NavBar = () => {
  const [active, setActive] = React.useState(0);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <nav
      className={`${colorScheme} w-full pt-6 grid grid-cols-2 px-6 gap-4 shadow-md lg:flex lg:justify-between lg:px-12 lg:items-center`}
    >
      <Link href="/" passHref>
        <h2 className="logo">Fibr</h2>
      </Link>
      <div className="lg:order-3 justify-end space-x-4 flex items-center xl:-ml-80">
        <ActionIcon
          variant="outline"
          style={{ borderRadius: "10px" }}
          className={dark ? "text-yellow-500" : "text-red-400"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <BsFillMoonStarsFill size={18} /> : <BsSunFill size={18} />}
        </ActionIcon>
        <a
          href="mailto::tacheyontech@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="cta ">Contact Me</button>
        </a>
      </div>
      <ul className="nav-menu flex lg:order-2 gap-3 lg:gap-8 overflow-x-auto lg:overflow-hidden justify-between	col-span-2 xl:-mr-40 ">
        {Menus.map((menu, index) => {
          return (
            <Link href={menu.url} key={index} passHref>
              <li
                key={index}
                className={`${
                  active === index ? "active" : ""
                } transition-colors duration-300 cursor-pointer`}
                onClick={() => setActive(index)}
              >
                {menu.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
