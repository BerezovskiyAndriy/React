import {useSelector} from "react-redux";
import {Todo} from "../Todo/Todo";

const TodoList = () => {
    const {todos,allTasks,allCompleted} = useSelector(state => state['todoReducers']);

    return (
        <div>
            <div>{allCompleted}</div>
            <div>{allTasks}</div>
            {todos.map((todo,index)=> <Todo key={todo.id} index={index} todo={todo}/>)}
        </div>
    );
};

export {TodoList};