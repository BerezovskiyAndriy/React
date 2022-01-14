import React from 'react';

import './UserDetails.css';

const UserDetails = ({user, getUserId}) => {
    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name: _name, catchPhrase, bs}
    } = user;
    return (
        <div className={'user_details'}>
            <p>id - {id}</p>
            <p>name - {name}</p>
            <p>username - {username}</p>
            <p>email - {email}</p>
            <h2>address:</h2>
            <p>street - {street}</p>
            <p>suite - {suite}</p>
            <p>city - {city}</p>
            <p>zipcode - {zipcode}</p>
            <h2>geo:</h2>
            <p>lat - {lat}</p>
            <p>lng - {lng}</p>
            <p>phone - {phone}</p>
            <p>website - {website}</p>
            <h2>company:</h2>
            <p>name - {_name}</p>
            <p>catchPhrase - {catchPhrase}</p>
            <p>bs - {bs}</p>
            <button onClick={() => getUserId(id)}>getPosts</button>
        </div>
    );
};

export default UserDetails;