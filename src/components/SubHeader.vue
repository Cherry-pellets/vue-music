<template>
    <div class="header" @click="changeTheme">
      <div class="header-left" @click.stop="back"></div>
      <div class="title">{{playList.name}}</div>
      <div class="header-right"></div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'SubHeader',
  data () {
    return {
      theme: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  props: {
    playList: {
      type: Object,
      default: () => {},
      required: true
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
    back () {
      window.history.back()
    }
  }

}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
.header{
  width: 100%;
  height: 100px;
  @include bg_color();
  display: flex;
  justify-content: space-between;
  .header-left,.header-right{
    width: 84px;
    height: 84px;
    margin-top: 8px;
  }
  .header-left{
    @include bg_img('../assets/images/back');
  }
  .header-right{
    @include bg_img('../assets/images/more');
  }
  .title{
    text-align: center;
    line-height: 100px;
    color: #fff;
    font-weight: bold;
    @include font_size($font_large);
    @include no-wrap()
  }
}
</style>
