<template>
  <div class="article-container">
    <div class="article">
      <div class="pic">
        <img :src="pic" alt="">
      </div>
      <div class="txt">
        <a href="#"><h3>{{title}}</h3></a>
        <h6><span><i class="el-icon-date"></i></span>   {{date}} | <span>mac    <i class="el-icon-message"></i></span></h6>
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    pic: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.article-container{
  width: 1200px;
  // border: 1px solid #000;
  margin: 2rem auto;
  .article{
    position: relative;
    display: flex;
    width: 830px;
    height: 242px;
    border: .5px solid #000;
    border-radius: 1rem;
    box-shadow: 3px 3px 3px 3px #918e8e;
    .pic{
      margin: auto 0;
      width: 276px;
      height: 158px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        transition: all 0.5;
      }
      img:hover{
        transform: scale(1.2);
      }
    }
    .txt{
      width: 520px;
      margin-left: 1rem;
      a,h6{
        text-align: center;
      }
      a{
        color: #000;
        font-size: 20px;
      }
      a:hover{
        color: rgb(58, 156, 201);
      }
      h6{
        margin: 0;
        padding: 0;
        align-items: center;
        span:hover{
          color: rgb(58, 156, 201);
        }
      }
      p{
        font-size: 10px;
      }
    }
  }
}
</style>
