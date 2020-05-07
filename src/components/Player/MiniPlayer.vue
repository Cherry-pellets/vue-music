<template>
    <div class="mini-player">
      <div class="wrapper">
        <div class="left">
          <img src="https://p2.music.126.net/klOSGBRQhevtM6c9RXrM1A==/18808245906527670.jpg" alt="">
          <div class="title">
            <h3>演员</h3>
            <p>薛之谦</p>
          </div>
        </div>
        <div class="right">
          <div class="play"></div>
          <div class="list" @click="showList"></div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'MiniPlayer',
  methods: {
    showList () {
      this.$emit('showList')
    }
  }

}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .mini-player{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150px;
    background: red;
    .wrapper{
      width: 100%;
      height: 100%;
      @include bg_color();
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        display: flex;
        padding-left: 30px;
        width: 50%;
        img{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-right: 20px;
          /*animation: sport 3s linear infinite;*/
          /*animation-play-state: paused;*/
          &.active{
            /*animation-play-state: running;*/
          }
        }
        .title{
          display: flex;
          flex-direction: column;
          /*align-items: center;*/
          justify-content: center;
          @include no-wrap();
          h3{
            @include font_size($font_medium);
            @include font_color();
          }
          p{
            @include font_size($font_medium_s);
            @include font_color();
          }
        }
      }
      .right{
        display: flex;
        align-items: center;
        .play{
          width: 84px;
          height: 84px;
          @include bg_img('../../assets/images/play');
          &.active{
            @include bg_img('../../assets/images/pause');
          }
        }
        .list{
          width: 120px;
          height: 120px;
          @include bg_img('../../assets/images/list')
        }
      }
    }
  }

</style>
