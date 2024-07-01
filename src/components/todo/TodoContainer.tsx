import { useGetTodosQuery } from "@/redux/features/apiSlice";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
  const {
    data: todosResponse,
    isError,
    isLoading,
  } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !todosResponse?.data) {
    return <p>Failed to load todos.</p>;
  }

  const todos = todosResponse.data;

  // Sort todos by priority
  const sortedTodos = [...todos].sort((a, b) => {
    const priorityOrder: Record<string, number> = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
  

  // Separate todos by priority
  const highPriorityTodos = sortedTodos.filter(
    (todo) => todo.priority === "high"
  );
  const mediumPriorityTodos = sortedTodos.filter(
    (todo) => todo.priority === "medium"
  );
  const lowPriorityTodos = sortedTodos.filter(
    (todo) => todo.priority === "low"
  );

  return (
    <div className="mt-4">
      <div className="flex justify-between mb-5 mx-3">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <h1 className="text-2xl flex justify-center items-center my-5">
            To Do
          </h1>

          {/* High Priority Todos */}
          {highPriorityTodos.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-2 text-red-500">
                High Priority
              </h2>
              {highPriorityTodos.map((item) => (
                <TodoCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  isCompleted={item.isCompleted}
                />
              ))}
            </>
          )}

          {/* Medium Priority Todos */}
          {mediumPriorityTodos.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-2 text-yellow-500">
                Medium Priority
              </h2>
              {mediumPriorityTodos.map((item) => (
                <TodoCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  isCompleted={item.isCompleted}
                />
              ))}
            </>
          )}

          {/* Low Priority Todos */}
          {lowPriorityTodos.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-2 text-green-500">
                Low Priority
              </h2>
              {lowPriorityTodos.map((item) => (
                <TodoCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  isCompleted={item.isCompleted}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
