<template>
   <div class="form-container">
     <v-text-field
            label="Group Name"
            placeholder="Enter name"
            v-model="group_name"
            outlined
    ></v-text-field>
    <v-text-field
            label="Group Description"
            placeholder="Enter name"
            v-model="group_description"
            outlined
    ></v-text-field>
    <v-select
          v-model="adminObj"
          :items="admin"
          label="Group Admin"
          item-text="name"
          item-value="id"
          outlined
          return-object
        ></v-select>
   </div>
</template>

<script>
import {GET_ADMIN_DATA} from "../apiCalls/calls"
  export default{
    date:()=>({
      group_name:"",
      group_description:"",
      group_admin:"",
      admin:[],
      adminObj:{}
    }),
    mounted(){
      const self=this;
      GET_ADMIN_DATA()
      .then((response)=>{
        self.admin=response;
        console.log(self.admin)
      })
    }
  }
</script>
<style>
  .form-container{
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
  }
</style>