<template>
    <div class="player">
      <NormalPlayer :totalTime="totalTime" :currentTime="currentTime"></NormalPlayer>
      <MiniPlayer></MiniPlayer>
      <ListPlayer></ListPlayer>
      <audio :src="this.currentSong.url" ref="audio" @timeupdate="timeUpdate"></audio>
    </div>
</template>

<script type="text/ecmascript-6">
import NormalPlayer from '../components/Player/NormalPlayer'
import MiniPlayer from '../components/Player/MiniPlayer'
import ListPlayer from '../components/Player/ListPlayer'
import { mapGetters } from 'vuex'
export default {
  name: 'Player',
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  data () {
    return {
      totalTime: 0,
      currentTime: 0
    }
  },
  computed: {
    ...mapGetters([
      'currentSong',
      'isPlaying',
      'currentIndex'
    ])
  },
  watch: {
    ListPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },
    currentIndex () {
      this.$refs.audio.oncanplay = () => {
        this.totalTime = this.$refs.audio.duration
        if (this.isPlaying) {
          this.$refs.audio.play()
        } else {
          this.$refs.audio.pause()
        }
      }
    },
    mounted () {
      this.$refs.audio.ondurationchange = () => {
        console.log('执行了1')
        this.totalTime = this.$refs.audio.duration
      }
    },
    methods: {
      timeUpdate (e) {
        this.currentTime = e.target.currentTime
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
