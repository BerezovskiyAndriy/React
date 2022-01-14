import {urls} from "../config/url";

const getAll = () => {
    return fetch(urls.user)
        .then(response => response.json())
}
export const userService = {getAll}
