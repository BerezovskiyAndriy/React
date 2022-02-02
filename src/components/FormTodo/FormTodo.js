import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {v4} from 'uuid';

import {addTodo} from '../../store';

import './FormTodo.css';

const FormTodo = () => {
   const dispatch = useDispatch();
    const {allTasks,allCompleted} = useSelector(state => state['todoReducers']);

    const {register,reset,handleSubmit} = useForm();

    function submit(data) {
        dispatch(addTodo({
           ...data, id: v4()
        }))
        reset();
    }

    return (
        <div className={'form-todo'}>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    <input type="text" {...register('name')} placeholder={'write todo'}/>
                </label>
                <button>Save</button>
            </form>

            <div className={'todo-title'}>
                <div>
                    <h2>All: {allTasks}</h2>
                </div>
                <div>
                    <h2>Completed: {allCompleted}</h2>
                </div>
            </div>

        </div>
    );
};

export {FormTodo};