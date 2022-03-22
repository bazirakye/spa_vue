<template>
  <div class="events">
    <EventCard v-for='evt in event' :key='evt.id' :event="evt"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventServices from '@/services/EventServices.js';

export default {
  name: "EventList",
  components: {
    EventCard,
  },

  data:function(){
    return{
      event: null
    }
  },
  created(){
  EventServices.getEvent()
  .then(response=>{this.event=response.data})
  .catch(error=>{console.log(error)})

  }
};

</script>

<style scoped>
  .events{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
</style>