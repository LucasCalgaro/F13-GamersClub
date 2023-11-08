import React from "react";
import { List } from "@material-tailwind/react";
import NavListMenu from "./NavListMenu";
import NavBarItem from "./NavBarItem";
import LogoImg from "./LogoImg";

export default function NavList({ details }) {
  return (
    <List className="mt-0 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 items-center justify-center ">
      {details.map((item, index) => (
        <div key={index}>
          {item.type == "LogoImg" && <LogoImg customClass={item.customClass} src={item.src} alt={item.alt} />}
          {item.type == "NavList" && <NavListMenu customClass={item.customClass} title={item.title} items={item.list} />}
          {item.type == "Item" && <NavBarItem customClass={item.customClass} href={item.href} title={item.title} key={index} onClick={item.onClick} icon={item.icon} />}
        </div>
      ))}
    </List>
  );
}