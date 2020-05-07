<template>
<!--    <div class="normal-player" v-show="this.$store.getters.isFullScreen">-->
    <div class="normal-player" v-show="this.isFullScreen">
      <div class="wrapper">
        <PlayerHeader></PlayerHeader>
        <PlayerMiddlle></PlayerMiddlle>
        <PlayerBottom></PlayerBottom>
      </div>
      <div class="player-bg">
        <img src="https://p2.music.126.net/klOSGBRQhevtM6c9RXrM1A==/18808245906527670.jpg" alt="">
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import PlayerHeader from './PlayerHeader'
import PlayerMiddlle from './PlayerMiddlle'
import PlayerBottom from './PlayerBottom'
import { mapGetters } from 'vuex'
export default {
  name: 'Player',
  components: {
    PlayerHeader,
    PlayerMiddlle,
    PlayerBottom
  },
  computed: {
    ...mapGetters([
      'isFullScreen'
    ])
  }

}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  .normal-player{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*background: pink;*/
    @include bg_sub_color();
    .wrapper{
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 999;
    }
    .player-bg{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img{
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }
</style>
