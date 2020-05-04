<template>
  <div class="personalized">
    <div class="top">
      <h3>{{title}}</h3>
    </div>
    <div class="list">
      <div class="item" v-for="i in personalized" :key="i.id">
        <img v-lazy="i.picUrl" alt="">
        <p>{{i.name}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Persionalized',
  props: {
    personalized: {
      type: Array,
      default: () => [],
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    }
  }

}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  @import "../assets/css/variable";
  .personalized{
    @include bg_sub_color();
    .top{
      width: 100%;
      height: 84px;
      line-height: 84px;
      @include bg_sub_color;
      padding: 0 20px;
      border-bottom: 1px solid #ccc;
      h3{
        @include font_color;
        @include font_size($font_large);
        font-weight: bold;
      }
    }
    .list{
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .item{
        width: 200px;
        padding: 20px 0;
        img{
          width: 200px;
          height: 200px;
          border-radius: 20px;
        }
        p{
          @include font_size($font_medium_s);
          @include font_color();
          @include clamp(2);
          margin-top: 10px;
          text-align: center;
        }
      }
    }
  }
</style>
