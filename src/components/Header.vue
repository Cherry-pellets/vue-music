<template>
    <div class="header" @click="changeTheme">
      <div class="header-left"></div>
      <div class="title">丸子音乐</div>
      <div class="header-right" @click="accountClick"></div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Header',
  data () {
    return {
      theme: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
    changeTheme () {
      this.index++
      if (this.index === 3) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.theme[this.index])
    },
    accountClick () {
      this.$router.push('/account')
    }
  }

}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
.header{
 /* position: relative;
  z-index: 999;*/
  width: 100%;
  height: 100px;
  /*background: red;*/
  @include bg_color();
  display: flex;
  justify-content: space-between;
  .header-left,.header-right{
    width: 84px;
    height: 84px;
    margin-top: 8px;
    /*background: greenyellow;*/
  }
  .header-left{
    @include bg_img('../assets/images/logo');
  }
  .header-right{
    @include bg_img('../assets/images/account');
  }
  .title{
    text-align: center;
    line-height: 100px;
    color: #fff;
    font-weight: bold;
    @include font_size($font_large)
  }
}
</style>
