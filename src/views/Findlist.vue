<template>
  <div class="recommend">
    <!--第一个盒子-->
    <div class="box" v-for="(message,index) in messages" :key="index">
      <div class="top">
        <img src="../assets/re1.jpg" />
      </div>
      <p>{{message.shopMsg}}</p>
      <div class="footer">
        <div class="avatar">
          <img src="../assets/reavatar.jpg" />
          <span>{{message.shopName}}</span>
        </div>
        <div class="like">
          <img src="../assets/aixinbefore.png" />
          <span>{{message.shopNumber}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "../utils/request.js";
export default {
  data(){
    return {
      messages:[]
    }
  },
  methods: {
    fetchdata() {
      http.post("/table").then((res) => {
        console.log(res);
        const message= res.data.data
        console.log(message)
        this.messages = message
      });
    },
  },
  mounted() {
    this.fetchdata();
  },
};
</script>
<style lang="less" scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  flex-wrap:wrap;
  width: 1000px;
  height: 1000px;
  margin: auto;

  .box {
    width: 300px;
    height: 500px;

    .top img {
      width: 300px;
      height: 400px;
      margin-top: 0;
      border-radius: 15px;
    }
    p {
      font-size: 20px;
      margin-top: 10px;
      margin-left: 20px;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      .avatar {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-top: 15px;
          margin-left: 20px;
        }
        span {
          margin-top: 15px;
        }
      }
      .like {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
          margin-top: 15px;
        }
        span {
          color: #666;
          font-size: 12px;
          margin-top: 15px;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>