<template>
    <div class="detail">
      <SubHeader :playList="playList"></SubHeader>
      <DetailTop :imgUrl="playList.coverImgUrl" ref="top"></DetailTop>
      <div class="bottom">
        <ScrollView ref="scrollview">
          <DetailBottom :playlist="playList.tracks"></DetailBottom>
        </ScrollView>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import SubHeader from '../components/SubHeader'
import { getPlayList } from '../Api'
import DetailTop from '../components/DetailTop'
import DetailBottom from '../components/DetailBottom'
import ScrollView from '../components/ScrollView'

export default {
  name: 'Detail',
  components: {
    SubHeader,
    DetailTop,
    DetailBottom,
    ScrollView
  },
  data () {
    return {
      playList: {}
    }
  },
  created () {
    getPlayList({ id: this.$route.params.id })
      .then(data => {
        console.log(data)
        this.playList = data.playlist
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted () {
    const defaultHeight = this.$refs.top.$el.offsetHeight
    this.$refs.scrollview.scrolling((offsetY) => {
      if (offsetY < 0) {
        const scale = Math.abs(offsetY) / defaultHeight
        this.$refs.top.changeMask(scale)
        /*
        注意点: 高斯模糊效果是非常消耗性能的, 不推荐在移动端中使用
                如果非要在移动端中使用, 那么建议只设置一次
        * */
        // this.$refs.top.$el.style.filter = `blur(${scale}px)`
      } else {
        const scale = 1 + offsetY / defaultHeight
        this.$refs.top.$el.style.transform = `scale(${scale})`
      }
    })
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  .detail{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*background: red;*/
    @include bg_sub_color();
    .bottom{
      position: fixed;
      top: 500px;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
</style>
