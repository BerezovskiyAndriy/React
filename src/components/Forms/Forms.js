import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators/car.validator";
import {createCars} from "../../store";

import './Forms.css';

const Forms = () => {
    const {register,handleSubmit,reset,formState: {errors}
    } = useForm({resolver:joiResolver(carValidator), mode: 'onTouched'});
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createCars({data}))
        reset()
    }

    return (
        <div className={'forms'}>
            <form onSubmit={handleSubmit(submit)}>

                <label><input type="text" {...register('model')} placeholder={'Model'}/></label>
                {errors.model && <div>{errors.model.message}</div>}

                <label><input type="text" {...register('price')} placeholder={'Price'}/></label>
                {errors.price && <div>{errors.price.message}</div>}

                <label><input type="text" {...register('year')} placeholder={'Year'}/></label>
                {errors.year && <div>{errors.year.message}</div>}

                <button>Save</button>

            </form>
        </div>
    );
};

export {Forms};