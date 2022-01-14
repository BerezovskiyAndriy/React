import {urls} from "../config/urls";

const getByIdUsers = (userId) => {
    return fetch(`${urls.posts}?userId=` + userId).then(value => value.json())
}

export const postServices = {
    getByIdUsers
}