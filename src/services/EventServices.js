import axios from 'axios'

const apiClient=axios.create({
    baseURL: 'http://my-json-server.typicode.com/bazirakye/server',
    withCredentials: false,
    headers:{
        Acecept: 'application/json',
        'Content-Type': 'apllication/json'
    }
    
})

export default{
    getEvent(){
        return apiClient.get('/event')
    }
}