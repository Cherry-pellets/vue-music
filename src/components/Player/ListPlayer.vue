<template>
  <transition :css="false" @enter="enter" @leave="leave">
    <div class="list-player" ref="listPlayer" v-show="isShowListPlayer">
      <div class="player-wrapper">
        <div class="player-top">
          <div class="top-left">
            <div class="mode" ref="mode" @click="mode"></div>
            <p v-if="modeType === 0">顺序播放</p>
            <p v-else-if="modeType === 1">单曲播放</p>
            <p v-else>随机播放</p>
          </div>
          <div class="top-right">
            <div class="del" @click="delAll"></div>
          </div>
        </div>
        <div class="player-middle">
          <ScrollView ref="scrollView">
            <ul ref="play" >
              <li class="item" v-for="(value, index) in songs" :key="value.id" @click="selectMusic(index)">
                <div class="item-left">
                  <div class="item-play" @click.stop="play" v-show="currentIndex === index"></div>
                  <p>{{ value.name }}</p>
                </div>
                <div class="item-right">
                  <div class="item-favorite"></div>
                  <div class="item-del" @click.stop="del(index)"></div>
                </div>
              </li>
            </ul>
          </ScrollView>
        </div>
        <div class="player-bottom" @click="close">
          <p>关闭</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
import { mapGetters, mapActions } from 'vuex'
import modeType from '../../store/modeType'
import ScrollView from '../ScrollView'
export default {
  name: 'ListPlayer',
  components: {
    ScrollView
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'modeType',
      'isShowListPlayer',
      'songs',
      'currentIndex'
    ])
  },
  methods: {
    ...mapActions([
      'setIsPlaying',
      'setModeType',
      'setListPlayer',
      'setDelSong',
      'setCurrentIndex'
    ]),
    /* showList () {
      this.$emit('showList')
    }, */
    close () {
      this.setListPlayer(false)
    },
    play () {
      console.log('111')
      this.setIsPlaying(!this.isPlaying)
    },
    enter (el, done) {
      Velocity(el, 'transition.flipYIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.flipYOut', { duration: 500 }, function () {
        done()
      })
    },
    mode () {
      if (this.modeType === modeType.loop) {
        this.setModeType(modeType.one)
      } else if (this.modeType === modeType.one) {
        this.setModeType(modeType.random)
      } else if (this.modeType === modeType.random) {
        this.setModeType(modeType.loop)
      }
    },
    del (index) {
      this.setDelSong(index)
    },
    delAll () {
      // console.log('111')
      this.setDelSong()
    },
    selectMusic (index) {
      this.setCurrentIndex(index)
    }
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    },
    modeType (newValue, oldValue) {
      if (newValue === modeType.loop) {
        this.$refs.mode.classList.remove('random')
        this.$refs.mode.classList.add('loop')
      } else if (newValue === modeType.one) {
        this.$refs.mode.classList.remove('loop')
        this.$refs.mode.classList.add('one')
      } else if (newValue === modeType.random) {
        this.$refs.mode.classList.remove('one')
        this.$refs.mode.classList.add('random')
      }
    },
    isShowListPlayer (newValue, oldValue) {
      if (newValue) {
        this.$refs.scrollView.refresh()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
.list-player {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  @include bg_sub_color();
  .player-wrapper {
    .player-top {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .top-left {
        display: flex;
        align-items: center;
        padding-left: 20px;
        .mode {
          width: 56px;
          height: 56px;
          margin-right: 20px;
          @include bg_img("../../assets/images/small_loop");
          &.loop {
            @include bg_img("../../assets/images/small_loop");
          }
          &.one {
            @include bg_img("../../assets/images/small_one");
          }
          &.random {
            @include bg_img("../../assets/images/small_shuffle");
          }
        }
        p {
          @include font_size($font_medium_s);
          @include font_color();
        }
      }
      .top-right {
        .del {
          width: 84px;
          height: 84px;
          @include bg_img("../../assets/images/small_del");
        }
      }
    }
    .player-middle {
      height: 700px;
      overflow: hidden;
      ul {
        &.active {
          .item {
            .item-play {
              @include bg_img("../../assets/images/small_pause");
            }
          }
        }
      }
      .item {
        border-top: 1px solid #ccc;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        .item-left {
          width: 70%;
          display: flex;
          align-items: center;
          .item-play {
            width: 56px;
            height: 56px;
            margin-right: 20px;
            @include bg_img("../../assets/images/small_pause");
          }
          p {
            width: 80%;
            @include font_size($font_medium_s);
            @include font_color();
            @include no-wrap();
          }
        }
        .item-right {
          display: flex;
          align-items: center;
          .item-favorite {
            width: 56px;
            height: 56px;
            @include bg_img("../../assets/images/small_un_favorite");
            &.active {
              @include bg_img("../../assets/images/small_favorite");
            }
          }
          .item-del {
            width: 52px;
            height: 52px;
            margin-left: 20px;
            @include bg_img("../../assets/images/small_close");
          }
        }
      }
    }
    .player-bottom {
      width: 100%;
      height: 100px;
      line-height: 100px;
      @include bg_color();
      p {
        text-align: center;
        color: #fff;
        @include font_size($font_medium);
      }
    }
  }
}
</style>
