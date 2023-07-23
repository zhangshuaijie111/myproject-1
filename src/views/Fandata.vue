<template>
    <div>
        <p style="font-size: 20px; padding: 20px">粉丝数据预览</p>
        <div class="box">
             <div>
                <p style="color:white;font-size:12px;margin:10px;">总粉丝数</p>
                <p style="font-size:20px;margin-left:10px;">0</p>
            </div>
             <div>
                <p style="color:white;font-size:12px;margin:10px;">新增粉丝数</p>
                <p style="font-size:20px;margin-left:10px;">0</p>
            </div>
             <div>
                <p style="color:white;font-size:12px;margin:10px;">流失粉丝数</p>
                <p style="font-size:20px;margin-left:10px;">0</p>
            </div>
        </div>
        <h4 style="margin:20px;">粉丝数据趋势</h4>
    </div>
</template>
<style lang="less" scoped>
    .box{
    display:flex;
    justify-content:space-around ;
    div{
        width: 180px;
        height: 80px;
        border-radius:10px;
       background-color: #666;
    }
  }
</style>