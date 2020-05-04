<template>
    <div class="new-songs">
      <div class="top">
        <h3>最新音乐</h3>
      </div>
      <ul class="list">
        <li v-for="i in songs" :key="i.id" class="item">
          <img :src="i.picUrl" alt="">
          <div>
            <h3>{{i.name}}</h3>
            <p>{{i.song.artists[0].name}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'NewSongs',
  props: {
    songs: {
      type: Array,
      default: () => [],
      required: true
    }
  }

}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  @import "../assets/css/variable";
  .new-songs{
    @include bg_sub_color();
    width: 100%;
    .top{
      @include bg_sub_color();
      width: 100%;
      height: 84px;
      line-height: 84px;
      border-bottom: 1px solid #ccc;
      padding: 0 20px;
      h3{
        @include font_size($font_large);
        font-weight: bold;
        @include font_color();
      }
    }
    .list{
      width: 100%;
      /*overflow: hidden;*/
      .item{
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding: 0 20px;
        img{
          width: 100px;
          height: 100px;
          border-radius: 20px;
          margin-right: 20px;
        }
        div{
          width: 70%;
          h3{
            @include font_size($font_large);
            @include font_color();
            @include no-wrap();
          }
          p{
            @include font_size($font_small);
            @include font_color();
            @include no-wrap();
            opacity: 0.6;
            margin-top: 20px;
          }
        }
      }
    }
  }
</style>
