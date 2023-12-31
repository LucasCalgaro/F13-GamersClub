import React from "react";
import {
  Typography,
} from "@material-tailwind/react";

export default function LogoImg({alt, src, customClass}) {

    return (
        <Typography
          as="a"
          href="#"
          variant="small"
          className={`${customClass} font-medium white`}
        >
            <img
                className="h-9 w-24"
                src={ src }
                alt={ alt }/>
        </Typography>
    )
}