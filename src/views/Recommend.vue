<template>
  <div class="recommend">
<!--    <div class="recommend-wrapper">-->
      <ScrollView>
        <div>
          <Banner :banner="banner"></Banner>
          <Persionalized :personalized="personalized" :title="'推荐歌单'" @select="fatherSelectItem" :type="'personalized'"></Persionalized>
          <Persionalized :personalized="albums" :title="'最新专辑'" @select="fatherSelectItem" :type="'albums'"></Persionalized>
          <NewSongs :songs="songs"></NewSongs>
        </div>
      </ScrollView>
<!--    </div>-->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import { getBanner, getPersonalized, getNewAlbum, getNewSongs } from '../Api'
import Banner from '../components/Banner'
import Persionalized from '../components/Recommend/Persionalized'
import NewSongs from '../components/Recommend/NewSongs'
import ScrollView from '../components/ScrollView'

export default {
  name: 'Recommend',
  data () {
    return {
      banner: [],
      personalized: [],
      albums: [],
      songs: []
    }
  },
  created () {
    getBanner()
      .then(data => {
        // console.log(data)
        this.banner = data.banners
      })
      .catch(err => {
        console.log(err)
      })
    getPersonalized()
      .then(data => {
        // console.log(data.result)
        this.personalized = data.result
      })
      .catch(err => {
        console.log(err)
      })
    getNewAlbum()
      .then(data => {
        // console.log(data.albums)
        this.albums = data.albums.splice(0, 6)
      })
      .catch(err => {
        console.log(err)
      })
    getNewSongs()
      .then(data => {
        console.log(data.result)
        this.songs = data.result
      })
      .catch(err => {
        console.log(err)
      })
  },
  components: {
    Banner,
    Persionalized,
    NewSongs,
    ScrollView
  },
  methods: {
    fatherSelectItem (id, type) {
      this.$router.push({
        path: `/recommend/detail/${id}/${type}`
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .recommend{
    overflow: hidden;
    position: fixed;
    top: 184px;
    left: 0;
    bottom: 0;
    right: 0;
    .recommend-wrapper{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  .v-enter{
    transform: translateX(100%);
  }
  .v-enter-to{
    transform: translateX(0);
  }
  .v-enter-active{
    transition: transform 1s;
  }
  .v-leave{
    transform: translateX(0);
  }
  .v-leave-to{
    transform: translateX(100%);
  }
  .v-leave-active{
    transition: transform 1s;
  }
</style>
