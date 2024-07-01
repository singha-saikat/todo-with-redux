import { useGetTodosQuery } from "@/redux/features/apiSlice";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useState } from "react";

const TodoContainer = () => {
  const { data: todosResponse, isError, isLoading } = useGetTodosQuery(undefined);

  const [filterPriority, setFilterPriority] = useState<string>("all");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !todosResponse?.data) {
    return <p>Failed to load todos.</p>;
  }

  const todos = todosResponse.data;

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.isCompleted === b.isCompleted) return 0;
    return a.isCompleted ? 1 : -1;
  });

  // Filter todos based on selected priority
  const filteredTodos = filterPriority === "all" ? sortedTodos : sortedTodos.filter((todo) => todo.priority === filterPriority);

  // Separate todos by priority
  const highPriorityTodos = filteredTodos.filter((todo) => todo.priority === "high");
  const mediumPriorityTodos = filteredTodos.filter((todo) => todo.priority === "medium");
  const lowPriorityTodos = filteredTodos.filter((todo) => todo.priority === "low");

  return (
    <div className="mt-4">
      <div className="flex justify-between mb-5 mx-3">
        <AddTodoModal />
        <TodoFilter onPriorityChange={setFilterPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <h1 className="text-2xl flex justify-center items-center my-5">To Do</h1>

          {/* Render sections based on selected priority */}
          {(filterPriority === "all" || filterPriority === "high") && highPriorityTodos.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-2 text-red-500">High Priority</h2>
              {highPriorityTodos.map((item) => (
                <TodoCard
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  isCompleted={item.isCompleted}
                  priority={item.priority} 
                />
              ))}
            </>
          )}

          {(filterPriority === "all" || filterPriority === "medium") && mediumPriorityTodos.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-2 text-yellow-500">Medium Priority</h2>
              {mediumPriorityTodos.map((item) => (
                <TodoCard
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  isCompleted={item.isCompleted}
                  priority={item.priority} 
                />
              ))}
            </>
          )}

          {(filterPriority === "all" || filterPriority === "low") && lowPriorityTodos.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-2 text-green-500">Low Priority</h2>
              {lowPriorityTodos.map((item) => (
                <TodoCard
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  isCompleted={item.isCompleted}
                  priority={item.priority} 
                />
              ))}
            </>
          )}

          {filteredTodos.length === 0 && (
            <p>No todos available for the selected priority.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
