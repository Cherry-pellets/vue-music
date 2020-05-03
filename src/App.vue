<template>
  <div id="app">
    <Header></Header>
    <Tabbar></Tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
import Tabbar from './components/Tabbar'
export default {
  name: 'app',
  components: {
    Header,
    Tabbar
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
  @import "assets/css/variable";
  @import "assets/css/mixin";
.theme{
  position: fixed;
  bottom: 0;
  button{
    width: 50px;
    height: 50px;
    &:nth-child(1){
      background: red;
    }
    &:nth-child(2){
      background: green;
    }
    &:nth-child(3){
      background: gray;
    }
  }
}
</style>
