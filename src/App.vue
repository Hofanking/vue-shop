<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components: {
    FooterGuide
  },
  mounted () {
    // this.$store.dispatch('reqTest')
    this.getAddress()
  },
  methods: {
    // 就拥有了reqTest这个方法
    ...mapActions(['getAddress']) // 等同于 this.$store.dispatch('reqTest')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
