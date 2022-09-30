import { loaded } from "../actions";

export const fetchTodos = async (disptach, getState) => {
 const response = await fetch('http://localhost:9000/todos');
 const todos = await response.json();

 disptach(loaded(todos))
}

