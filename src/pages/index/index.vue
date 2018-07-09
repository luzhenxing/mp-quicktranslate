<template>
  <div class="index">
    <div class="text"></div>
    <div class="buttons">
      <button class="photo-btn" type="primary" @click="toCamera">拍照</button>
      <button class="photo-btn" @click="selectPhoto">从相册中选择</button>
      <button class="photo-btn" open-type="openSetting">授权设置</button>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .index
    box-sizing border-box

  .buttons
    position absolute
    bottom 100rpx
    padding 0 30rpx
    box-sizing border-box
    width 100%
    .photo-btn
      margin-top 20rpx

</style>
<script>
import { setCameraAuthorize } from '@/utils/index'

export default {
  data () {
    return {
    }
  },
  methods: {
    async toCamera () {
      try {
        const res = await setCameraAuthorize()
        console.log('授权成功')
      } catch (e) {
        console.log('拒绝授权')

      }

    },
    selectPhoto (params) {
      wx.chooseImage({
        count: 1,
        success (tempFilePaths, tempFiles) {
          console.log(tempFilePaths, tempFiles)
        }
      })
    }
  }
}
</script>
