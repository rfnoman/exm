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
    <v-text-field
            label="Group Admin"
            placeholder="Enter name"
            v-model="group_admin"
            outlined
    ></v-text-field>
   </div>
</template>

<script>
  export default{
    date:()=>({
      group_name:"",
      group_description:"",
      group_admin:""
    })
  }
</script>
<style>
  .form-container{
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
  }
</style>