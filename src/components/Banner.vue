<template>
  <swiper ref="mySwiper" :options="swiperOption" class="banner">
    <swiper-slide v-for="i in banner" :key="i.bannerId" class="item">
      <a :href="i.url">
        <img :src="i.pic" alt="">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script type="text/ecmascript-6">
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Banner',
  props: {
    banner: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 1000, // 自动切换的时间间隔，单位ms
          stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
          disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。
        },
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
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>

<style scoped lang="scss">
  .banner{
    .item{
      img{
        width: 100%;
        height: 300px;
      }
    }
  }
  </style>
  <!--<style lang="scss">
  @import "../assets/css/mixin";
  /*注意点: 如果想覆盖swiper的样式, 那么style标签不能是scoped的, 否则无法覆盖*/
  .banner{
    .swiper-pagination-bullet{
      width: 16px;
      height: 16px;
      background: #fff;
      opacity: 1;
    }
    .swiper-pagination-bullet-active{
      @include bg_color();
      /*background: #f00;*/
    }
  }
</style>
-->
