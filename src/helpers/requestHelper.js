export const getRequest = (url, params) => {
    return fetch(url, {method: 'GET', ...params});
}

