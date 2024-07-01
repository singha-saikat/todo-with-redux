import { useAppDispatch } from "@/redux/hooks";
import { useDeleteTodoMutation } from "@/redux/features/apiSlice"; 
import { findCompleteOrNot } from "@/redux/features/todoSlice";

type TTodosCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean | undefined;
  priority: string;
};

const TodoCard = ({ id, title, description, isCompleted }: TTodosCardProps) => {
  const dispatch = useAppDispatch();
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation(); 

  const handleDelete = async (id:string) => {
    try {
      await deleteTodo(id).unwrap(); 
    } catch (error) {
      console.error('Failed to delete the todo:', error);
    }
  };

  return (
    <div className='bg-white rounded-md flex items-center p-3 border mb-2 shadow-sm'>
      <input
        type="checkbox"
        name="checkbox"
        checked={isCompleted}
        onChange={() => {
          dispatch(findCompleteOrNot(id));
        }}
        className="mr-3"
      />
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <p className="font-semibold text-lg">{title}</p>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="flex items-center space-x-2">
        <span className={`text-sm ${isCompleted ? "text-green-500" : "text-red-500"} mr-4`}>
          {isCompleted ? "Completed" : "Pending"}
        </span>
        <div className="border-l border-gray-300 h-6"></div>
        <button
          onClick={() => handleDelete(id)}
          className="text-red-500 hover:text-red-700 focus:outline-none"
          aria-label="Delete Todo"
          disabled={isDeleting} 
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </button>
        <button
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
          aria-label="Edit Todo"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
