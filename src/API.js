import axios from 'axios'
import cookies from 'react-cookies'


export let endpoints = {
'menus': '/menus/',
'weddinghalls': '/weddinghalls/',
'login':'/o/token/',
'current-user': '/users/current-user/',
'users': '/users/',
'weddings': '/weddings/',
'services': '/services/',
'shift': '/shift/',
}

export let AuthAPI = axios.create({
    baseURL:'http://127.0.0.1:8000/',
    headers: {
        'Authorization': `Bearer ${cookies.load('access_token')}`
    }
})

export default axios.create({
    baseURL:'http://127.0.0.1:8000/'
})