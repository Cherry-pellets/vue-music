<template>
  <div class="recommend">
    <ScrollView>
      <div>
        <Banner :banner="banner"></Banner>
        <Persionalized :personalized="personalized" :title="'推荐歌单'"></Persionalized>
        <Persionalized :personalized="albums" :title="'最新专辑'"></Persionalized>
        <NewSongs :songs="songs"></NewSongs>
      </div>
    </ScrollView>
  </div>
</template>

<script type="text/ecmascript-6">
import { getBanner, getPersonalized, getNewAlbum, getNewSongs } from '../Api'
import Banner from '../components/Banner'
import Persionalized from '../components/Persionalized'
import NewSongs from '../components/NewSongs'
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
  }

}
</script>

<style scoped lang="scss">
  .recommend{
    position: fixed;
    top: 184px;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
