<template>

  <!--Step 3 use the component-->
  <MyHeader projectTitle="Train Navigation"/> 
  <TrainDetailsBox :trainDetails="trainDetails[0]?.trains" />
 
</template>

<script>
// Step: 1 Import the components
import MyHeader from './components/MyHeader.vue'
import TrainDetailsBox from './components/TrainDetailsBox.vue'


export default{
  name: 'TrainNavigation',

  // Step 2: Register the components
  components:{
    MyHeader,
    TrainDetailsBox
  },
  data(){
    return {
      trainDetails: []
    }
  },
  methods:{
    //promoises
    async fetchTrainDetails(){
      const res = await fetch("http://localhost:3586/api");
      const data = await res.json()
      //console.log(data)
      return data;
    }
  },
  async created(){
      this.trainDetails = await this.fetchTrainDetails();
  }

  // data() => this.data trainDetails
  // method => this.method => fetchTrainDetails
  // life cycle hooks created() => call our method here

}
</script>


<style>


@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
}

</style>
