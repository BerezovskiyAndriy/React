import axios from "axios";

import {baseJsonUrl,baseURL} from "../config/urls";

export const axiosService = axios.create({baseURL});
export const axiosServiceJSON = axios.create({baseURL:baseJsonUrl})