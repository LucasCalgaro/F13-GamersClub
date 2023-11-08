import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function NavListMenu({ customClass, title, items }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = items.map(
    (index, key) => (
      <Typography 
        as="a"
        href={index.href ? index.href : "#"}
        key={key}
        onClick={index.onClick ? index.onClick : null}
        className="">

        <MenuItem className="flex items-center gap-2 rounded-lg pb-2 pt-1">
          <div className={`flex items-center justify-center rounded-lg p-1 ${index.icon.customClass}`} >
            {index.icon && (React.createElement(index.icon.type, { strokeWidth: 2, className: "h-6 w-6", }))}
          </div>
          <div>
            <Typography
              variant="small"
              className={`${index.customClass} flex items-center text-sm`}
            >
              {index.title}
            </Typography>
          </div>
        </MenuItem>
      </Typography>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className={`${customClass} font-medium`}>
            <ListItem
              className="flex items-center justify-center text-center gap-2 py-2 pl-3 pr-4 font-medium white "
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {title}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0 ">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden ">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}