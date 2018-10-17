<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div class="tab border-1px">
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
    <router-view :seller="seller"/>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/header/Header'
export default {
  name: 'App',
  data () {
    return {
      seller: Object
    }
  },
  components: {
    Header
  },
  created () {
    axios.get('../static/data.json')
      .then((res) => {
        if (res) {
          this.seller = res.data.seller
          // console.log(this.seller)
        }
      })
  }
}
</script>

<style lang="stylus" scoped>
  @import "./common/stylus/mixin.styl"
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      border-1px(rgba(7, 17, 27, 0.1))
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
