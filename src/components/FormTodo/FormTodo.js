import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store";
import {v4} from 'uuid';


const FormTodo = () => {
   const dispatch = useDispatch();

    const {register,reset,handleSubmit} = useForm();

    function submit(data) {
        dispatch(addTodo({
           ...data, id: v4()
        }))
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    <input type="text" {...register('name')}/>
                </label>
                <button>Save</button>
            </form>
        </div>
    );
};

export {FormTodo};