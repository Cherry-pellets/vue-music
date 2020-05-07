<template>
    <div class="player">
      <NormalPlayer></NormalPlayer>
      <MiniPlayer @showList="showList"></MiniPlayer>
      <ListPlayer ref="listPlayer" v-show="isShow" @showList="showList"></ListPlayer>
    </div>
</template>

<script type="text/ecmascript-6">
import NormalPlayer from '../components/Player/NormalPlayer'
import MiniPlayer from '../components/Player/MiniPlayer'
import ListPlayer from '../components/Player/ListPlayer'
export default {
  name: 'Player',
  data () {
    return {
      isShow: false
    }
  },
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  methods: {
    showList () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped lang="scss">
</style>
