import {Link} from "react-router-dom";
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {usersService} from "../../services/users.service";

import css from './UserDetails.module.css';

const UserDetails = () => {
    const params = useParams();

    const {state} = useLocation();
    const [user,setUser] = useState(null);

    useEffect(() => {
        if (state){
            setUser(state)
            return
        }
        usersService.getById(params.id).then(value => setUser(value))
    },[params.id])

    return (
        <div className={css.user_details}>
            {user &&  <div className={css.user}>
                <p>id - {user.id}</p>
                <p>name - {user.name}</p>
                <p>username - {user.username}</p>
                <p>email - {user.email}</p>
                <Link to={'posts'}>
                    <button className={css.btn_post}>getPosts</button>
                </Link>
            </div>}
            <Outlet/>
        </div>
    );
};

export {UserDetails};