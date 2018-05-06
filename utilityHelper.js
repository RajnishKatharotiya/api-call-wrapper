import { createHashHistory } from 'history';

export function apiCall(request) {
    const browserHistory = createHashHistory();

    return new Promise((resolve, reject)=>{
        let token = localStorage.getItem('AUTH_TOKEN');
        let fetchData = {
            method: request.method,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
        // method is get
        // assign data to queryParams

        // loop the queryParams and convert to query params

        let fetchUrl = process.env.MIX_REACT_APP_DOMAIN_URL + '/api/' + request.url;

        { request.data !== undefined ? fetchData["body"] = JSON.stringify(request.data) : fetchData }
        fetch(fetchUrl, fetchData).then((response)=> {
            {
                response.status === 401 ? browserHistory.push('/login')
                    : response.status < 400 ? resolve(response.json())
                    : reject(response.json());
            }
        }).catch((error)=>{
            reject(error);
        });
    });
}