import axios from 'axios'

const apiClient=axios.create({
    baseURL: 'http://my-json-server.typicode.com/bazirakye/server',
    withCredentials: false,
    headers:{
        Acecept: 'application/json',
        'Content-Type': 'application/json'
    }
    
})

export default{
    getEvent(){
        return apiClient.get('/event')
    },
    getOneEvent(){
        return apiClient.get('/event/'+5928192)
    }
}