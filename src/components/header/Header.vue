<template>
  <div @click="handleClick">1</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header',
  data () {
    return {
      seller: {},
      goods: {},
      ratings: {}
    }
  },
  methods: {
    handleClick () {
      axios.get('../../../static/data.json')
        .then(function (res) {
          console.log(res)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
