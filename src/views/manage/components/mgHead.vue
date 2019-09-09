<template>
  <el-header class="header" style="height: 80px">
    <div class="cont">
      <div class="title"><i class="el-icon-s-home"></i> xx公司仓库管理系统</div>
      <div class="user">
        <i class="el-icon-user-solid"></i>
        <el-dropdown>
          <span class="el-dropdown-link" style="color: #fff;">
            &nbsp;{{user}} <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="menu">
            <router-link to="/mymessage" :style="text_decoration"><el-dropdown-item icon="el-icon-message-solid">我的消息</el-dropdown-item></router-link>
            <router-link to="/myrecord" :style="text_decoration"><el-dropdown-item icon="el-icon-alarm-clock">申请记录</el-dropdown-item></router-link>
            <router-link to="/login/find" :style="text_decoration"><el-dropdown-item icon="el-icon-key">修改密码</el-dropdown-item></router-link>
            <router-link to="/" :style="text_decoration"><el-dropdown-item icon="el-icon-switch-button" @click="logOut">注销登录</el-dropdown-item></router-link>
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
      text_decoration: { 'text-decoration': 'none' }
    }
  },
  methods: {
    logOut () {
      // 注销登录
      let conFirm = confirm('是否注销？')
      if (conFirm) {
        sessionStorage.setItem('user', '') // 同理，这里以后会使用cookie，现在先不修改
        this.$router.push('/login')
      }
    }
  },
  computed: {
    user () {
      return sessionStorage.getItem('user')
    }
  },
  beforeCreate () {
    sessionStorage.setItem('user', '史亚军')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';

.header {
  background-color: $bgcolor;
  box-sizing: border-box;
  height: 80px;
  width: 100vw;
  color: $fontcolor;
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
