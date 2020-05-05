<template>
  <div class="detail-top">
    <img :src="imgUrl" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DetailTop',
  props: {
    imgUrl: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .detail-top{
    width: 100%;
    height: 500px;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
</style>
