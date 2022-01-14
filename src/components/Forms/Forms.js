import React, {useState} from 'react';

import {userService} from "../../services/user.service";
import './Form.css';

const Forms = ({users,setUsers}) => {
    const [form,setForm] = useState({name:'',username:'',email:''});

    const formHandler = (e) => {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {name,username,email} = form;

       const filter = users.filter(value => {
            return value.name.includes(name) && value.username.includes(username) && value.email.includes(email)
        })
        setUsers(filter);
    }

    const userClear = () => {
        userService.getAll()
            .then(users => setUsers(users))
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label className={'label'}>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label className={'label'}>Username: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                <label className={'label'}>Email: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
                <button className={'find_btn'}>Find</button>
                <button onClick={() => userClear()}>Clear</button>
            </form>
        </div>
    );
};

export default Forms;