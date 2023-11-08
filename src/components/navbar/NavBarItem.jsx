import React from "react";
import {
    Typography,
    ListItem,
} from "@material-tailwind/react";

export default function NarBarItem({ href, title, customClass, onClick, icon }) {
    return (
        <Typography
            as="a"
            href={href}
            variant="small"
            onClick={onClick ? onClick : null}
            className={`${customClass} font-medium white`}
        >
            <ListItem className="flex items-center gap-2 py-2 pl-3 pr-4" >

                {title}
                {icon && (React.createElement(icon, { strokeWidth: 2, className: "h-6 w-6", }))}</ListItem>
        </Typography>
    );
}