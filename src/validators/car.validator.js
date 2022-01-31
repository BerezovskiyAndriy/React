import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[A-Za-zА-яіІЁёїЇ]{1,20}$')).required().messages({
        'string.empty': 'Поле не може бути пустим',
        'string.pattern.base': 'Поле складається тільки з букв min 1 і max 20'
    }),
    price: Joi.number().min(0).max(10000000).messages({
        'number.base': 'Ціна може бути тільки з чисел min 0 і max 10000000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base': 'Рік може бути тільки з чисел з 1900 по сьогоднішній'
    })
})