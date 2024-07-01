import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
// import { useAppDispatch } from "@/redux/hooks";
// import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodoMutation } from "@/redux/features/apiSlice";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  // For localy use 
  // const dispatch = useAppDispatch();

  // for server use 
  // [ actualFunctionForPost,{data,isLoading,isError}]
  const [addTodo,{data,isError,isLoading,isSuccess}] = useAddTodoMutation();
  console.log(data,isError,isLoading,isSuccess);
  const handleTaskSubmit = (e: FormEvent) => {
    e.preventDefault();
    const taskDetails = {
      title: task,
      description: description,
      priority: priority,
      isCompleted: false, 
    };
    // For localy use 
    // dispatch(addTodo(taskDetails));

    // for server post call 
    addTodo(taskDetails);
    console.log(taskDetails);
    // setTask("");
    // setDescription("");
    // setPriority("medium");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-6 py-2 text-white text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 ease-in-out">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>Provide details for the new task.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleTaskSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">Task</Label>
              <Input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
                placeholder="Enter task title"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
                placeholder="Enter task description"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">Priority</Label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                id="priority"
                className="col-span-3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 transition-all duration-300 ease-in-out">
                Save Task
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
