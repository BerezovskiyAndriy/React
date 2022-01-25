import axios from "axios";
import baseURL from "../config/url";

export const axiosService = axios.create({baseURL});