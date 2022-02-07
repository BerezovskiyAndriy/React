import axios from "axios";
import baseURL from "../config/urls";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjQ1MDZjYjIxOWI0Yzc5NWZmNTE1NWE2MWZlODk5NyIsInN1YiI6IjYxZmZkYTZhNTViMGMwMDA2Nzk2YThkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XvSW2cjc2H77JslqcYISeSl-PaumB-1IRLdXAFRPz38'

const config = {'Authorization': `Bearer ${token}`};

export const axiosService = axios.create({
    baseURL,
    headers: config
})