<template>
    <div class="recommend">
      <Banner :banner="banner"></Banner>
      <Persionalized :personalized="personalized" :title="'推荐歌单'"></Persionalized>
      <Persionalized :personalized="albums" :title="'最新专辑'"></Persionalized>
    </div>
</template>

<script type="text/ecmascript-6">
import { getBanner, getPersonalized, getNewAlbum } from '../Api'
import Banner from '../components/Banner'
import Persionalized from '../components/Persionalized'

export default {
  name: 'Recommend',
  data () {
    return {
      banner: [],
      personalized: [],
      albums: []
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
        console.log(data.albums)
        this.albums = data.albums.splice(0, 6)
      })
      .catch(err => {
        console.log(err)
      })
  },
  components: {
    Banner,
    Persionalized
  }

}
</script>

<style scoped lang="scss">

</style>
