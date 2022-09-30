import { toggled } from "../actions";

const updateTodoStatus = (todoId, currentStatus) => {
    return async (disptach) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            headers: {
              "Content-type": "application/json; charset = UTF-8",
            },
            body: JSON.stringify({
                completed: !currentStatus
            })
        });
        const todo = await response.json();
       
        disptach(toggled(todo.id))
       }
 }

 export default updateTodoStatus;
