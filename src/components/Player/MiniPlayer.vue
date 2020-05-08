<template>
    <transition :css="false" @enter="enter" @leave="leave">
      <div class="mini-player" v-show="this.isShowMiniPlayer">
        <div class="wrapper">
          <div class="left" @click="showNormalPlayer">
            <img :src="this.currentSong.picUrl" alt="" ref="cd">
            <div class="title">
              <h3>{{this.currentSong.name}}</h3>
              <p>{{this.currentSong.singer}}</p>
            </div>
          </div>
          <div class="right">
            <div class="play" ref="play" @click="play"></div>
            <div class="list" @click="showList"></div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
export default {
  name: 'MiniPlayer',
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer',
      'setIsPlaying',
      'setListPlayer'
    ]),
    play () {
      this.setIsPlaying(!this.isPlaying)
    },
    showList () {
      this.setListPlayer(true)
    },
    showNormalPlayer () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    },
    enter (el, done) {
      Velocity(el, 'transition.shrinkIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.shrinkOut', { duration: 500 }, function () {
        done()
      })
    }
  },
  computed: {
    ...mapGetters([
      'isShowMiniPlayer',
      'isPlaying',
      'isShowListPlayer',
      'currentSong'
    ])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
        this.$refs.cd.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
        this.$refs.cd.classList.remove('active')
      }
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
          animation: sport 3s linear infinite;
          animation-play-state: paused;
          &.active{
            animation-play-state: running;
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
  @keyframes sport {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
