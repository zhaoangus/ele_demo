<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{highlight: totalCount>0}">
            <span class="iconfont" :class="{highlight: totalCount>0}">&#xe6b8;</span>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{highlight: totalPrice>0}">¥{{totalPrice}}元</div>
        <div class="desc">另需配送费¥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">
          {{payDesc}}
        </div>
      </div>
      <!-- <div class="ball-container">
        <transition name="drop">
          <div v-for="ball in balls" v-show="ball.show"
          :key="ball.index" class="ball">
          </div>
        </transition>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCar',
  data () {
    return {
      balls: [{
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }],
      dropBall: []
    }
  },
  props: {
    selectFoods: {
      type: Array,
      default () {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    payDesc () {
      if (this.totalPrice === 0) {
        return '¥' + this.minPrice + '元起送'
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice
        return '还差¥' + diff + '元起送'
      } else {
        return '去结算'
      }
    },
    payClass () {
      if (this.totalPrice < this.minPrice) {
        return 'not-enough'
      } else {
        return 'enough'
      }
    }
  }
  // methods: {
  //   drop (el) {
  //     for (let i = 0;i < this.balls.length;i++) {
  //       let ball = this.balls[i]
  //       if (!ball.show) {
  //         ball.show = true
  //         bull.el = el
  //         this.dropBall.push(ball)
  //         return
  //       }
  //     }
  //   },
  //  beforeEnter (el) {
  //    let count = this.balls.length
  //    while (count--) {
  //      let ball = this.balls[count]
  //      if (ball.show) {
  //        let rect = ball.el.getBoundingClientRect()
  //        let x = rect.left - 32
  //        let y = -(window.innerHeight - rect.top -22)
  //        el.style.display = ''
  //        el.style.webkitTransform = `translate3d(0, $(y)px, 0)`
  //        el.style.transform = `translate3d(0, $(y)px, 0)`
  //      }
  //    }
  //  }
  // }
}
</script>

<style lang="stylus" scoped>
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    .content
      display: flex
      font-size: 0
      background: #141d27
      color: rgba(255, 255, 255, .4)
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          vertical-align: top
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            background: #2b343c
            text-align: center
            &.highlight
              background: rgb(0, 160, 220)
            .iconfont
              line-height: 44px
              font-size: 24px
              color: #80858a
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #fff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          padding-right: 12px
          line-height: 24px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, .1)
          font-size: 16px
          font-weight: 700
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: top
          line-height: 24px
          margin: 12px 0 0 12px
          font-size: 10px
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          background: #2b333b
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff
    // .ball-container
    //   .ball
    //     position: fixed
    //     left: 32px
    //     bottom: 22px
    //     z-index: 200
    //     &.drop-enter-active
    //       transition: all .4s
    //       .inner
    //         width: 16px
    //         height: 16px
    //         border-radius: 50%
    //         background: rgb(0, 160, 220)
    //         transition: all .4s
</style>
