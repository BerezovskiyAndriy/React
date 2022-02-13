import axios from 'axios';
import baseURL from '../config/urls';

const token_v4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjQ1MDZjYjIxOWI0Yzc5NWZmNTE1NWE2MWZlODk5NyIsInN1YiI6IjYxZmZkYTZhNTViMGMwMDA2Nzk2YThkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XvSW2cjc2H77JslqcYISeSl-PaumB-1IRLdXAFRPz38';
const token_v3 = 'f24506cb219b4c795ff5155a61fe8997';

const config = {'Authorization': `Bearer ${token_v4}`};

export const axiosService = axios.create({
    baseURL,
    headers: config
})

export {token_v3};