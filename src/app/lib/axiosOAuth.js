import axios from 'axios';
import settings from '../configs/settings.json';

const api = axios.create({
    baseURL: settings.apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default api