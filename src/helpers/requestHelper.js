
import axios from 'axios'

const getRequest = (url, params) => {
    return axios.get(url, params);
}

