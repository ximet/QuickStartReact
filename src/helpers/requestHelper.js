
import axios from 'axios'

export const getRequest = (url, params) => {
    return axios.get(url, params);
}

