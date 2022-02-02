import {useSelector} from 'react-redux';

import {Todo} from '../Todo/Todo';

import './TodoList.css';

const TodoList = () => {
    const {todos} = useSelector(state => state['todoReducers']);

    return (
        <div className={'todo-list'}>
            {todos.map((todo,index)=> <Todo key={todo.id} index={index} todo={todo}/>)}
        </div>
    );
};

export {TodoList};