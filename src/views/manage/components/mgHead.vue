<template>
  <el-header class="header" style="height: 80px">
    <div class="title"><i class="el-icon-s-home"></i> xx公司仓库管理系统</div>
    <div class="user">当前用户：史亚军</div>
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
  .title {
    line-height: 80px;
    margin: 0;
    font-size: 30px;
    color: #fff;
    font-weight: lighter;
  }
}
</style>
