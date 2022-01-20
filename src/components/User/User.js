import React from 'react';
import {Link} from "react-router-dom";

import css from './User.module.css';

const User = ({user}) => {
    const {id,name,username} = user;
    return (
        <div className={css.user}>
            {id}: {name} {username}
          <div className={css.btn}>
              <Link to={id.toString()} state={user} >details</Link>
              <Link to={`${id.toString()}/albums`}>
                  <button className={css.btn_albums}>albums &rarr;</button>
              </Link>
          </div>
        </div>
    );
};

export {User};