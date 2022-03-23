<template>
    <div>
        <h1>{{event.location}}</h1>
        <p>{{event.description}}</p>
    </div>
</template>

<script>

import EventServices from '@/services/EventServices.js';


export default ({
    props:['id'],

    data() {
        return{
            event:null,
        }
    },
    created(){
        EventServices.getOneEvent(this.id)
        .then(response=>{this.event=response.data})
        .catch(error=>{console.log(error)})
    }
})
</script>
