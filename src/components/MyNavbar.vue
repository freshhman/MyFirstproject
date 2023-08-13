<template>
  <div class="nav-container">
  <!-- 头像 -->
  <div class="left">
    <span class="pic" ref="pic">
      <a href="#">
        <img src="@/assets/image/preview.jpg" alt="" :style="{transform: 'rotate(' + rotation + 'deg)' }">
      </a>
    </span>
    <div class="name">
      <p>这是我的id</p>
    </div>
  </div>
  <div class="right">
    <ul>
      <li ><router-link to="/home"><i class="el-icon-house"></i>&nbsp;首页</router-link></li>
      <li ><router-link to="/time"><i class="el-icon-menu"></i>&nbsp;时间轴</router-link></li>
      <li ><router-link to="/picbox"><i class="el-icon-picture"></i>&nbsp;相册</router-link></li>
      <li ><router-link to="/about"><i class="el-icon-collection-tag"></i>&nbsp;关于</router-link></li>
    </ul>
  </div>
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
  .nav-container{
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #000;
    background: rgba(255, 255, 255, 0.6);
    .left{
      display: flex;
      flex: .8;

      span img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 0.5rem;
      }
      .name{
        margin-left: 10px;
      }
    }
    .right{
      flex:.2;
      height: 100%;
      ul{
        list-style: none;
        display: flex;
        height: 100%;
        margin: 0;
        padding: 0;
        li{
          padding-top: 20px;
          display: inline-block;
          width: 100px;
          height: 40px;
          text-align: center;
          align-items: center;
          a{
            display: inline-block;
          }
          a:hover{
            color:#5549d4;
          }
        }
        li:hover{
          border-bottom: 2px solid #5549d4;
        }
      }
    }
  }
  .activeli{
    border-bottom: 2px solid #5549d4;
  }
  .activetxt{
    color:#5549d4;
  }
</style>
