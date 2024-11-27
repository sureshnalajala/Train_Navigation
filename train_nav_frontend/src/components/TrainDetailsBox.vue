<template>
    <div id="traindetailspage">
        <div id="traindetailsbox">
            <div v-for="train of trainDetails" :key="train.id" >
                <trainDetails :train="train" />
            </div>
        </div>
    </div>
</template>

<script>
import TrainDetails from './SingleTrainDetails.vue'

export default {
    name: 'TrainDetailsBox',
    props:{
        trainDetails: Array
    },
    components:{
        TrainDetails
    }    
}
</script>

<style scoped>
/*#traindetailspage
{
    background-image: url('../assets/SkyImage.jpg'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding:30px;
}*/
#traindetailsbox
{
    width:95%;
    margin:0 auto;
    padding:20px;
}

@media only screen and (max-width:500px) {
    #traindetailsbox
    {
        width:100%;
        padding:0px;
    }
}
</style>