<template>
  <div id="app">
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
let moment = require("moment");
moment.locale('zh-cn');

export default {
    data() {
      return {
        
      }
    },
}
</script>
<style lang="scss">


</style>
