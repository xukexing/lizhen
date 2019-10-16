<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  }
}
</script>

<style lang="stylus">
html,body
  width:1920px;
  height:1080px;
  #app
    width:1920px;
    height:1080px;

</style>
