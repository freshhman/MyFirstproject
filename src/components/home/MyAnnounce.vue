<template>
  <div class="announce-container">
    <span class="pic" ref="pic">
      <a href="#">
        <img src="@/assets/image/preview.jpg" alt="" :style="{transform: 'rotate(' + rotation + 'deg)' }">
      </a>
    </span>
    <h3>name</h3>
    <p>约七引照也书至和方完分办斗。军节根提身力任着时作然主。五问思局打门果技系备经才改民。酸什克适严重表样五数西立</p>
    <div class="ant-row">
      <div class="ant-rows">
        <a href="#">文章</a>
        <div><a href="#">25</a></div>
      </div>
      <div class="ant-rows">
        <a href="#">标签</a>
        <div><a href="#">25</a></div>
      </div>
      <div class="ant-rows">
        <a href="#">分类</a>
        <div><a href="#">8</a></div>
      </div>
    </div>
    <button>加入书签</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rotation: 0
    }
  },
  methods: {

  },
  created () {
    this.rotation = setInterval(() => {
      this.rotation += 10
    }, 100)
  }
}
</script>

<style lang="less" scoped>
.announce-container{
  padding: 20px;
  text-align: center;
  width: 230px;
  height: 350px;
  border: 1px solid #cac6c6;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px 3px #d3cfcf;
  button{
    border: none;
    background-color:rgb(0, 183, 255) ;
    margin-top: 15px;
    width: 100%;
    height: 35px;
  }
  span img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 0.5rem;
      }
  p{
    font-size: 12px;
  }
  .ant-row{
    display: flex;
    justify-content: space-around;
    .ant-rows a{
      color: #000;
      font-size: 12px;
    }
    .ant-rows a:last-child{
      color:rgb(0, 183, 255)
    }
  }
}
</style>
