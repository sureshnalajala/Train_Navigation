<template>
    <div id="headercontainer">
        <p id="headername">{{projectTitle}}</p>
    </div>
</template>
    
<script>
    export default{ // Exporting Default Object
        name: 'MyHeader',
        props:{ 
    
            projectTitle:String
        }
    }
    
</script>
    
<style scoped>
    #headercontainer
    {
        text-align: center;
        background-color:#3E45AA;
        padding:15px;
           
    }
    #headername
    {
        color:white;
        font-weight:bold;
        font-size:30px;
    }
    
</style>