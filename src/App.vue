<template>
  <div class="container">
   <GroupInfo/>
   <GroupRules/>
  </div>
</template>

<script>
import GroupInfo from './components/group_info';
import GroupRules from "./components/group_rules"
export default {
  name: 'App',

  components: {
    GroupInfo,
    GroupRules
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
  .container{
    width: 100%;
    background-color: #F5F6F7;
    padding: 20px;
    max-width: 600px;
  }
</style>