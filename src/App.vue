<template>
  <div>
    <!-- 导航菜单区域 -->
    <div class="nav" v-show="isDivVisible">
      <Nav></Nav>
    </div>
    <router-view></router-view>
    </div>
</template>

<script>
import Nav from '@/components/MyNavbar.vue'
export default {
  name: 'MyApp',
  data () {
    return {
      isDivVisible: true // 默认显示div组件
    }
  },
  components: {
    Nav
  },
  methods: {
    handleScroll () {
      if (window.pageYOffset > this.lastScrollPosition) {
        // 向下滚动
        this.isDivVisible = false
      } else {
        // 向上滚动
        this.isDivVisible = true
      }
      this.lastScrollPosition = window.pageYOffset
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>

</style>
