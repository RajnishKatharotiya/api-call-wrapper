# api-call-wrapper
it a easy to use package for an fetch api call. api-call-wrapper will need one passing perameter which should contain url, method, data(optional).

# How to use: 

```
import {apiCall} form '../api-call-wrapper';
import {apiList} from '../apiList';

let data = { username : "john",
             password : "xyz" };
             
    apiList.login['data'] = data;      //optional: push data object into login object with 'data' key only.
    apiCall (apiList.login)            //use login object as a perameter of apiCall
    .then(data => console.log(error)) //response
    .catch(error => console.log(error)); //error on api call
    
```

Happy coding.
