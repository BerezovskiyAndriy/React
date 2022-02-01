import {useSelector} from "react-redux";
import {Todo} from "../Todo/Todo";
import {todoSlice} from "../../store";

const TodoList = () => {
    const {todos} = useSelector(state => state.todoSlice);

    return (
        <div>

        </div>
    );
};

export {TodoList};