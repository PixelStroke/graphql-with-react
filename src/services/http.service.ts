import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.API_BASE_URL || 'http://localhost:4040/';
const accessToken = `Bearer ${process.env.ACCESS_TOKEN}`;

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common.Authorization = accessToken;

const httpService = axios;

export default httpService;
