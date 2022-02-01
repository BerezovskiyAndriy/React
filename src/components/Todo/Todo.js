import {useDispatch, useSelector} from "react-redux";
import {deleteTodo,toggleTodo} from "../../store";

import './Todo.css';

const Todo = ( {todo,index} ) => {
    const dispatch = useDispatch();

    function isChecked (e) {
        dispatch(toggleTodo({
            status: e.target.checked,
            index
        }))
    }
    return (
        <div className={'todo'}>
            <input type="checkbox" onClick={isChecked}/>
            <div>{todo.name}</div>
            <button onClick={() => dispatch(deleteTodo(todo))}>Delete</button>
        </div>
    );
};

export {Todo};