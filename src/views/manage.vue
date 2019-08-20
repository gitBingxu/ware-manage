<template>
  <div>
    <el-container>
      <el-header class="header">
      <h1>仓库管理系统</h1>
      </el-header>
    </el-container>
    <el-container class="main-cnt">
    <el-aside class="aside" width="200px">
      <el-menu :default-openeds="['1','2']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-plus"></i>出入库申请</template>
          <router-link to="./outware">
            <el-menu-item index="1"><span class="iconfont out-ware">&#xe684;</span>出库申请表</el-menu-item>
          </router-link>
          <router-link to="./inWare" >
            <el-menu-item index="2"><span class="iconfont in-ware">&#xe67b;</span>入库申请表</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-plus"></i>记录查询</template>
          <router-link to="outquery">
            <el-menu-item index="3"><span class="iconfont out-ware">&#xe67c;</span>出库记录查询</el-menu-item>
          </router-link>
          <router-link to="inquery">
            <el-menu-item index="4"><span class="iconfont in-ware">&#xe683;</span>入库记录查询</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-plus"></i>库存分析</template>
          <el-menu-item index="5"><i class="el-icon-s-grid"></i>库存详情</el-menu-item>
          <el-menu-item index="6"><i class="el-icon-s-data"></i>出入库统计</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </el-main>
  </el-container>
  </div>

</template>

<script>
export default {
  name: 'Manage',
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
    background-color:#87CEFA;
    box-sizing: border-box;
    h1 {
      line-height: 60px;
      margin: 0;
      font-size: 18px;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
  .aside {
    color: #333;
    background-color: rgb(238, 241, 246);
    height: 900px;
    a {
      text-decoration: none;
    }
    .out-ware {
    color: #e67c;
    display: inline-block;
    margin-top: -4px;
    margin-right: 5px;
    }
    .in-ware {
      color: #24c68d;
      display: inline-block;
      margin-top: -4px;
      margin-right: 5px;
    }
  }
</style>
