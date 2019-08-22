<template>
  <el-header class="header" style="height: 80px">
    <div class="cont">
      <div class="title"><i class="el-icon-s-home"></i> xx公司仓库管理系统</div>
      <div class="user">
        <i class="el-icon-user-solid"></i>
        <el-dropdown>
          <span class="el-dropdown-link" style="color: #fff;">
             史亚军 <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-message-solid">我的消息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-alarm-clock">申请进度</el-dropdown-item>
            <el-dropdown-item icon="el-icon-key">修改密码</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button">注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'MgHead',
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color:#409EFF;
  box-sizing: border-box;
  height: 80px;
  width: 100vw;
  color: #fff;
  font-weight: lighter;
  line-height: 80px;
  .cont{
    .title {
    margin: 0;
    font-size: 30px;
    width: 50%;
    float: left;
  }
    .user {
      float: right;
      margin-top: 7px;
    }
  }
}
</style>
