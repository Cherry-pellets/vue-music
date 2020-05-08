<template>
    <ul class="detail-bottom">
      <li class="all">
        <div class="icon"></div>
        <div class="title">播放全部</div>
      </li>
      <li v-for="i in playlist" :key="i.id" class="item" @click="selectMusic(i.id)">
        <h3>{{i.name}}</h3>
        <p>{{i.al.name}} - {{i.ar[0].name}}</p>
      </li>
    </ul>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex'
export default {
  name: 'DetailBottom',
  props: {
    playlist: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setSongDetail'
    ]),
    selectMusic (id) {
      // this.$store.dispatch('setFullScreen', true)
      this.setFullScreen(true)
      this.setSongDetail([id])
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .detail-bottom{
    width: 100%;
    li{
      width: 100%;
      height: 120px;
      padding: 20px;
      @include bg_sub_color();
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
    }
    .all{
      display: flex;
      align-items: center;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      .icon{
        width: 60px;
        height: 60px;
        margin-right: 20px;
        @include bg_img('../../assets/images/small_play');
      }
      .title{
        @include font_color();
        @include font_size($font_large);
      }
    }
    .item{
      h3{
        @include font_color();
        @include font_size($font_medium);
        @include no-wrap();
      }
      p{
        @include font_color();
        @include font_size($font_medium_s);
        @include no-wrap();
        margin-top: 10px;
        opacity: 0.8;
      }
    }
  }
</style>
