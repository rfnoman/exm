<template>
 <div class="form-container">
        <v-select
          :items="monthly_budget"
          label="Monthly Budget"
          outlined
        ></v-select>
        <v-select
          :items="trip_limit"
          label="Monthly trip limit"
          outlined
        ></v-select>
        <v-select
          :items="discount"
          label="Discount Percentage"
          outlined
        ></v-select>
        <v-select
          :items="capping"
          label="Capping per trip"
          outlined
        ></v-select>
        <ChipContainer/>
        <div>Time period</div>
         <v-select
          :items="time"
          label="8.00"
          outlined
        ></v-select>
        <v-select
          :items="time"
          label="18.00"
          outlined
        ></v-select>
        <div>Applicable Service</div>
        <Chip value="Bike" :color="Bike" :key="Bike" @change="Bike=$event"/>
        <Chip value="Car" :color="Car" :key="Car" @change="Car=$event"/>
 </div>
</template>
<script>
import ChipContainer from "./chip_container"
import Chip from "./chip"
export default {
    components:{
      ChipContainer,
      Chip
    },
    data:()=>({
        Car:false,
        Bike:false,
        monthly_budget:[],
        trip_limit:[],
        discount:[],
        capping:[],
        time:[],
    })
}
</script>
<style scoped>

</style>