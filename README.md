Todo App with Redux
A responsive Todo application built with React and Redux Toolkit, designed for learning and practicing state management, data fetching, and UI development.

✨ Features
Add Tasks: Quickly add new tasks with titles, descriptions, and priorities.
Edit Tasks: Update the details of existing tasks.
Delete Tasks: Remove completed or unnecessary tasks.
Toggle Completion: Mark tasks as completed or revert to pending.
Filter by Priority: View tasks based on priority levels (high, medium, low).
Responsive Design: Optimized for both desktop and mobile devices.
🚀 Technologies Used
React: JavaScript library for building user interfaces.
Redux Toolkit: Efficient Redux development with minimal boilerplate.
RTK Query: Powerful data fetching and caching solution.
TypeScript: Typed JavaScript at any scale.
Tailwind CSS: Utility-first CSS framework for rapid UI development.
📦 Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/todo-with-redux.git
cd todo-with-redux
Install dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
npm start
Open your browser:

Navigate to http://localhost:3000 to view the app.

🛠️ Usage
Adding a Task
Click the Add Todo button.
Fill in the task title, description, and priority.
Click Save task to add it to your list.
Editing a Task
Click the edit icon (pencil) on a task.
Update the task details.
Save changes.
Deleting a Task
Click the delete icon (trash) on a task.
Confirm the deletion.
Filtering Tasks
Use the filter dropdown to sort tasks by priority (High, Medium, Low).
🧩 Components
TodoCard
Displays individual todo items.
Checkbox to mark as completed or pending.
Buttons to edit or delete tasks.
AddTodoModal
Modal form to add new tasks.
Inputs for task title, description, and priority.
TodoFilter
Dropdown to filter tasks by priority.
🔧 Redux Setup
todoSlice.ts
Handles task addition, removal, completion toggle, and filtering.
store.ts
Configures the Redux store and integrates middleware.
🌐 API Service
api.ts
Manages API endpoints and data fetching with RTK Query.

🔍 Example Data
Here's a snippet of the JSON structure for tasks:

json
Copy code
[
{
"id": "1",
"title": "Complete Project Report",
"description": "Finish the final draft of the project report and submit it to the team lead.",
"priority": "high",
"isCompleted": false
},
{
"id": "2",
"title": "Grocery Shopping",
"description": "Buy vegetables, fruits, milk, and other essentials from the supermarket.",
"priority": "medium",
"isCompleted": true
},
...
]

📞 Contact
For any questions or feedback, please open an issue or contact me at sachinsingha7899@gmail.com



## Todo App with Redux
A responsive Todo application built with React and Redux Toolkit, designed for learning and practicing state management, data fetching, and UI development.

✨ Features
- Add Tasks: Quickly add new tasks with titles, descriptions, and priorities.
- Edit Tasks: Update the details of existing tasks.
- Delete Tasks: Remove completed or unnecessary tasks.
- Toggle Completion: Mark tasks as completed or revert to pending.
- Filter by Priority: View tasks based on priority levels (high, medium, low).
- Responsive Design: Optimized for both desktop and mobile devices.

🚀 Technologies Used
- React: JavaScript library for building user interfaces.
- Redux Toolkit: Efficient Redux development with minimal boilerplate.
- RTK Query: Powerful data fetching and caching solution.
- TypeScript: Typed JavaScript at any scale.
- Tailwind CSS: Utility-first CSS framework for rapid UI development.

## Installation

Install my-project with npm

```bash
git clone https://github.com/singha-saikat/todo-with-redux.git
cd todo-with-redux
Install dependencies:
npm install
Start the application:
npm start
Open your browser:

Navigate to http://localhost:3000 to view the app.
```
    
