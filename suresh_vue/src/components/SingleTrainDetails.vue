<template>
    <div id="individualtraindetails">
        <div id="trainname">
            <p id="content">{{ train.trainName }}</p>
        </div>
        <div id="additionaldetails">
            <div id="journeydetails">
                <div id="trainsourcedetails">
                    <p id="timeofarrival">
                        {{ train.timeofarrival }}
                    </p>
                    <p id="source">
                        {{ train.source }}
                    </p>
                </div>
                <div id="durationdetails">
                    <p>
                        <span class="dashes">--------------&nbsp;</span>{{ train.travelTime }}
                        <span class="dashes">&nbsp;--------------</span>
                    </p>
                </div>
                <div id="traindestinationdetails">
                    <p id="timeofdeparture">{{ train.timeofdeparture }}</p>
                    <p id="destination">{{ train.destination }}</p>
                </div>
            </div>
            <div id="traindetails">
                <p id="trainnum"><strong>Train No: </strong>{{ train.trainNo }}</p>
            </div>
            <div id="moredetails">
                <p id="servicetype"><strong>Type: </strong>{{ train.serviceType }}</p>
                <p id="coaches"><strong>Classes: </strong>{{ train.classes }}</p>
            </div>
            <div id="statusdetails">
                <p id="platformno"><strong>Platform No: </strong>{{ train.platformNo }}</p>
                <button id="status" :class="getStatusButtonClass(train.status)" disabled>
                    {{ train.status }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'TrainDetails',
    props:{
        train: Object
    },
    methods:
    {
        getStatusButtonClass(status) {
            switch (status) {
                case 'Arrived':
                    return 'arrival-button';
                case 'Departured':
                    return 'departured-button';
                case 'On-Time':
                    return 'ontime-button';
                case 'Delayed':
                    return 'delayed-button';
                case 'Cancelled':
                    return 'cancelled-button';
                default:
                    return '';
            }
        }
    }    
}
</script>

<style scoped>
#individualtraindetails {
    border: 10px solid transparent;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: white;
    padding: 5px;
}

#trainname {
    margin-bottom: 20px;
    display: flex;
}

#trainname #content {
    font-size: 22px;
    font-weight: bold;
}

#additionaldetails {
    display: flex;
}

#journeydetails {
    width: 50%;
    display: flex;
}

#traindetails {
    width: 25%;
}

#statusdetails {
    width: 25%;
}

#trainsourcedetails,
#traindestinationdetails {
    width: 20%;
}

#durationdetails {
    width: 60%;
    font-weight: bold;
    text-align: center;
}

#trainsourcedetails #timeofarrival,
#traindestinationdetails #timeofdeparture {
    font-size: 20px;
    font-weight: bolder;
    padding-bottom: 10px;
}

#trainsourcedetails #source,
#traindestinationdetails #destination {
    font-style: italic;
}

#traindetails,
#statusdetails {
    text-align: center;
}

#traindetails #trainnum {
    padding-bottom: 10px;
}

#statusdetails #platformno {
    font-size: 20px;
    padding-bottom: 10px;
}

#status {
    width: 50%;
    color: white;
    padding: 10px 15px 10px 15px;
    border: 2px solid transparent;
    border-radius: 10px;
    font-weight: bold;
    font-size: 18px;
}

.delayed-button {
    background-color: #AA001E;
}

.arrival-button {
    background-color: #705DAA;
}

.ontime-button {
    background-color: #009A40;
}

.departured-button {
    background-color: #D04B6A;
}

.cancelled-button {
    background-color: #f44336;
}

#moredetails #servicetype #coaches {
    font-size: 20px;
    text-align: center;
    padding-bottom: 10px;
}


@media only screen and (max-width:500px) {
    #individualtraindetails {
        margin-bottom: 40px;
    }

    #trainname {
        display: block;
        justify-content: center;
        text-align: center;
        margin-bottom: 30px;
    }

    #additionaldetails {
        display: block;
    }

    #journeydetails {
        width: 100%;
        margin-bottom: 20px;
    }
    #traindetails {
        width: 100%;
        margin-bottom: 20px;
    }

    #statusdetails {
        width: 100%;
    }

    .dashes {
        display: none;
    }

    #trainsourcedetails,
    #traindestinationdetails {
        width: 100%;
    }

    #trainsourcedetails #timeofarrival
    {
        display: block;
    }

    #traindestinationdetails #timeofdeparture
    {
        display: block;
    }

    #durationdetails {
        width: 100%;
        text-align: center;
    }
}
</style>


