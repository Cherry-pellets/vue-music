<template>
    <div class="player-middle">
      <swiper ref="mySwiper" :options="swiperOption" class="banner">
        <swiper-slide class="cd">
          <div class="cd-wrapper" ref="cdWrapper">
            <img :src="this.currentSong.picUrl" alt="">
          </div>
          <p>{{getFirstLyric()}}</p>
        </swiper-slide>
        <swiper-slide class="lyric">
          <ScrollView>
            <ul>
              <li v-for="(value, index) in this.currentLyric" :key="index">{{value}}</li>
            </ul>
          </ScrollView>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import ScrollView from '../ScrollView'
import 'swiper/css/swiper.css'
import { mapGetters } from 'vuex'
export default {
  name: 'PlayerMidlle',
  computed: {
    ...mapGetters([
      'isPlaying',
      'currentSong',
      'currentLyric'
    ])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.cdWrapper.classList.add('active')
      } else {
        this.$refs.cdWrapper.classList.remove('active')
      }
    }
  },
  data () {
    return {
      swiperOption: {
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ScrollView
  },
  directives: {
    swiper: directive
  },
  methods: {
    getFirstLyric () {
      for (const key in this.currentLyric) {
        return this.currentLyric[key]
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .banner{
    position: fixed;
    top: 150px;
    bottom: 250px;
    left: 0;
    right: 0;
    .cd{
      .cd-wrapper{
        width: 500px;
        height: 500px;
        border-radius: 50%;
        margin: 0 auto;
        border: 30px solid #fff;
        overflow: hidden;
        animation: sport 3s linear infinite;
        animation-play-state: paused;
        &.active{
          animation-play-state: running;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
      p{
        text-align: center;
        @include font_size($font_medium);
        @include font_color();
        margin-top: 50px;
      }
    }
    .lyric{
      li{
        text-align: center;
        @include font_color();
        @include font_size($font_medium);
        margin: 10px 0;
        &:last-of-type{
          padding-bottom: 100px;
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
