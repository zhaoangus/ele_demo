<template>
  <div id="app">
    <div class="header">header</div>
    <div class="tab">
      <div class="tab-item">
        <router-link class="tab-link" to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link class="tab-link" to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link class="tab-link" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tab-item
        flex: 1
        text-align: center
        .tab-link
          display: block
          text-decoration: none
          font-size: 14px
          color: rgb(77, 85, 93)
        .router-link-active
          color: rgb(240, 20, 20)
</style>
