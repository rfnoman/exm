<template>
    <div> 
        <div><ChipItem value="Sun" :color="sun" :key="sun" @change="sun=$event"/></div>
        <ChipItem value="Mon" :color="mon" :key="mon" @change="mon=$event"/>
        <ChipItem value="Tue" :color="tue" :key="tue" @change="tue=$event"/>
        <ChipItem value="Wed" :color="wed" :key="wed" @change="wed=$event"/>
        <ChipItem value="Thu" :color="thu" :key="thu" @change="thu=$event"/>
        <ChipItem value="Fri" :color="fri" :key="fri" @change="fri=$event"/>
        <ChipItem value="sat" :color="sat" :key="sat" @change="sat=$event"/>
        <ChipItem value="Select all" :color="allselect" @change="selectall($event)"/>
    </div>
</template>
<script>
    import ChipItem from "./chip"
    export default{
        components:{
            ChipItem
        },
        data:()=>({
            sun:false,
            mon:false,
            tue:false,
            wed:false,
            thu:false,
            fri:false,
            sat:false,
            allselect:false,
        }),
        props:{
            value:String,
            color:Boolean
        },
        mounted(){
            this.val=this.value;
            this.active=this.color;
        },
        methods:{
            selectall(event){
                console.log(event)
                this.sun=event;
                this.mon=event;
                this.tue=event;
                this.wed=event;
                this.thu=event;
                this.fri=event;
                this.sat=event;
            }
        }
    };
</script>
<style scoped>
.notActive{
    border:1px solid grey;
    color:grey
}
.active{
    border:1px solid darkred;
    color:darkred
}
</style>
