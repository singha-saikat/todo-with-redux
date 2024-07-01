import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
    id:string,
    title : string,
    description : string,
    isCompleted? : boolean,
    priority : string
}

type TInitialSate = {
    todos : TTodo[];
}
const initialState : TInitialSate = {
    todos: [],
};

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo : (state,action : PayloadAction<TTodo>) => {
            state.todos.push({...action.payload,isCompleted: false});
        },
        removeTodo : (state,action : PayloadAction<string>) => {
           state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        findCompleteOrNot : (state,action : PayloadAction<string>) => {
            const completedTask = state.todos.find((item) => item.id === action.payload);
            completedTask!.isCompleted = !completedTask?.isCompleted;
        }
    }

})

export const {addTodo,removeTodo,findCompleteOrNot} = todoSlice.actions;
export default todoSlice.reducer;