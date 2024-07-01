import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { useState } from "react";

const TodoFilter = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-gray-300 rounded shadow-md p-3 w-40 mr-8 mt-2 ">
        <DropdownMenuLabel className="font-bold text-gray-800 mb-2">
          Panel Position
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="h-px bg-gray-200 my-2" />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100 transition border-b border-gray-200"
            value="top"
          >
            {position === "top" && (
              <span className="text-blue-500 mr-2">
                •
              </span> /* Bullet point for the selected item */
            )}
            Top
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100 transition border-b border-gray-200"
            value="bottom"
          >
            {position === "bottom" && (
              <span className="text-blue-500 mr-2">
                •
              </span> /* Bullet point for the selected item */
            )}
            Bottom
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100 transition"
            value="right"
          >
            {position === "right" && (
              <span className="text-blue-500 mr-2">
                •
              </span> /* Bullet point for the selected item */
            )}
            Right
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
