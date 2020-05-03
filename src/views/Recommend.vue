<template>
    <div class="recommend">
      推荐
    </div>
</template>

<script type="text/ecmascript-6">
import { getBanner } from '../Api'

export default {
  name: 'Recommend',
  created () {
    getBanner()
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

}
</script>

<style scoped lang="scss">

</style>
