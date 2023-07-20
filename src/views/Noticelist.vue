<template>
  <div class="comments">
    <div class="avatar">
      <img src="../assets/noticepicture.jpg" />
    </div>
    <div class="writing">
      <h3 style="font-size: 25px">猫柠</h3>
      <p style="font-weight: 400; color: #666; font-size: 20px">
        回复了我的评论&nbsp;06-28
      </p>
      <p style="font-size: 14px; font-size: 20px; margin-top: 10px">世另我耶</p>
      <div class="bottom">
        <div class="reply">
          <i
            class="el-icon-chat-dot-round"
            style="
              font-size: 20px;
              margin-top: 15px;
              margin-left: 15px;
              color: #666;
            "
          ></i
          ><span style="font-size: 20px; color: #666; margin-left: 6px"
            >回复</span
          >
        </div>
        <div class="like">
          <img
            src="../assets/aixinbefore.png"
            style="margin-top: 15px; margin-left: 15px"
          />
        </div>
      </div>
    </div>
    <div class="essay">
      <img
        src="../assets/noticecomment.jpg"
        style="margin-top: 0; margin-left: 20px"
      />
    </div>
  </div>
</template>
<style lang="less">
.comments {
  display: flex;
  width: 1200px;
  height: 220px;
  margin: auto;
  margin-top: 20px;
  background-color: aqua;
  .avatar {
    width: 120px;
    background-color: pink;
    height: 220px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-top: 0;
      margin-left: 18px;
    }
  }
  .writing {
    width: 960px;
    height: 220px;
    background-color: antiquewhite;
    img {
      width: 20px;
      height: 20px;
    }
    .bottom {
      display: flex;
      margin-top: 30px;
      .reply {
        width: 100px;
        height: 50px;
        border-radius: 15px;
        background-color: white;
      }
      .like {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: white;
        margin-left: 20px;
      }
    }
  }
  .essay {
    width: 120px;
    background-color: pink;
    height: 220px;
    img {
      width: 80px;
      height: 100px;
    }
  }
}
</style>