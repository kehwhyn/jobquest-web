import axios from 'axios';
import { server } from '../assets/config'

export const configureAxios = () => {
    axios.defaults.baseURL = server.url;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
};
