<template>
  <div class="home-container">
    <HomePic></HomePic>
    <div class="article">
      <Article
      v-for="(item) in articlelist[i]"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :text="item.text"
      :pic="item.pic"
      :date="item.date"
      ></Article>

      <!-- 个人信息栏 -->
    <div class="selfinfo">
      <Annouce></Annouce>
    </div>
      <!-- 公告栏目 -->
    <div class="announce">

    </div>
    <!-- 走马灯效果 -->
    <div class="light">

    </div>

    </div>

    <!-- 分页效果 -->
    <div class="page">
      <ul>
        <span>page:{{i+1}}</span>
        <li @click="prev"> 👈 </li>
        <li @click="i=0">1</li>
        <li @click="i=1">2</li>
        <li @click="i=2">3</li>
        <li @click="i=3">4</li>
        <li @click="next"> 👉 </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Annouce from '@/components/home/MyAnnounce.vue'
import HomePic from '@/components/home/MyHomepic.vue'
import Article from '@/components/home/ArticleList.vue'
export default {
  data () {
    return {
      articlelist: [],
      i: 0
    }
  },
  components: {
    HomePic,
    Article,
    Annouce
  },
  methods: {
    async getinfo () {
      const { data: res } = await this.$http.get('/getMockTest')
      if (res.code !== 0) return console.log('信息获取失败')
      // this.articlelist = res.data.list
      for (let i = 0; i < 4; i++) {
        this.articlelist.push(res.data.list.splice(0, 10))
      }
    },
    prev () {
      this.i--
      if (this.i < 0) this.i = 0
    },
    next () {
      this.i++
      if (this.i > 3) this.i = 3
    }
  },
  created () {
    this.getinfo()
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
.article{
  position: relative;
}
.selfinfo{
  position: absolute;
  top: 0;
  left: 67%;
}
.page{
  width: 400px;
  margin: 5px auto;
  ul{
    display: flex;
    list-style: none;
    justify-content: space-between;
    li{
      cursor: pointer;
    }
    li:hover{
      color:aqua
    }
  }
}
</style>
