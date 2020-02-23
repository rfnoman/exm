<template>
    <div class="Chip" :class="{chipActive:active,chipDisable:!active}" @click="clicked">
        {{val}}
    </div>
</template>
<script>
    export default{
        name:"ChipItem",
        data:()=>({
            val:"",
            active:false
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
             clicked() {
                 this.active=!this.active
                 this.$emit("change",this.active);
            },
        }
    };
</script>
<style scoped>
.Chip{
    padding:5px;
    float: left;
    border-radius:2px;
    margin-right:10px;

    overflow: hidden; 
    cursor: pointer;
}
.Chip:hover{
    color:black;
     border:1px solid black;
}
.chipDisable{
 
    border:1px solid grey;
    color:grey
 
}
.chipActive{
    border:1px solid darkred;
    color:darkred
}
</style>
