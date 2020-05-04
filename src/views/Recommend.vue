<template>
    <div class="recommend">
      <Banner :banner="banner"></Banner>
    </div>
</template>

<script type="text/ecmascript-6">
import { getBanner } from '../Api'
import Banner from '../components/Banner'

export default {
  name: 'Recommend',
  data () {
    return {
      banner: []
    }
  },
  created () {
    getBanner()
      .then(data => {
        console.log(data)
        this.banner = data.banners
      })
      .catch(err => {
        console.log(err)
      })
  },
  components: {
    Banner
  }

}
</script>

<style scoped lang="scss">

</style>
