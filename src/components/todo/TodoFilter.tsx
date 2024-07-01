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

type TodoFilterProps = {
  onPriorityChange: (priority: string) => void;
};

const TodoFilter = ({ onPriorityChange }: TodoFilterProps) => {
  const [priority, setPriority] = useState("all");

  const handlePriorityChange = (value: string) => {
    setPriority(value);
    onPriorityChange(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-gray-300 rounded shadow-md p-3 w-40 mr-8 mt-2">
        <DropdownMenuLabel className="font-bold text-gray-800 mb-2">
          Filter by Priority
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="h-px bg-gray-200 my-2" />
        <DropdownMenuRadioGroup value={priority} onValueChange={handlePriorityChange}>
          <DropdownMenuRadioItem className="p-2 cursor-pointer hover:bg-gray-100" value="all">
            {priority === "all" && <span className="text-blue-500 mr-1">•</span>}
            All
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="p-2 cursor-pointer hover:bg-gray-100" value="high">
            {priority === "high" && <span className="text-blue-500 mr-1">•</span>}
            High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="p-2 cursor-pointer hover:bg-gray-100" value="medium">
            {priority === "medium" && <span className="text-blue-500 mr-1">•</span>}
            Medium
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="p-2 cursor-pointer hover:bg-gray-100" value="low">
            {priority === "low" && <span className="text-blue-500 mr-1">•</span>}
            Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
