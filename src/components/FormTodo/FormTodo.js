import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store";


const FormTodo = () => {
   const dispatch = useDispatch();

    const {register,reset,handleSubmit} = useForm();

    function submit(data) {
        dispatch(addTodo(data))
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    <input type="text" {...register('todo')}/>
                </label>
                <button>Save</button>
            </form>
        </div>
    );
};

export {FormTodo};