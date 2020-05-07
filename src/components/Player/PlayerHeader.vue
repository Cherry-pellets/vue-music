<template>
    <div class="header">
      <div class="header-left" @click="handleNormalPlayer"></div>
      <div class="title">
        <h3 class="song-name">演员</h3>
        <p class="singer">薛之谦</p>
      </div>
      <div class="header-right"></div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex'
export default {
  name: 'PlayerHeader',
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    handleNormalPlayer () {
      this.setFullScreen(false)
      // console.log('111')
      this.setMiniPlayer(true)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
.header{
  width: 100%;
  height: 100px;
  //@include bg_color();
  display: flex;
  justify-content: space-between;
  .header-left,.header-right{
    width: 84px;
    height: 84px;
    margin-top: 8px;
  }
  .header-left{
    @include bg_img('../../assets/images/down');
  }
  .header-right{
    // @include bg_img('../../assets/images/more');
  }
  .title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    @include font_size($font_large);
    @include no-wrap()
  }
}
</style>
