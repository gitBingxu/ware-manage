<template>
  <div>
    <el-container>
      <mg-head></mg-head>
    </el-container>
    <el-container class="main-cnt">
      <!-- <el-aside class="aside" width="200px">
        <el-menu :default-openeds="['1','2','3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-plus"></i>出入库申请</template>
            <router-link to="/">
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
      </el-aside> -->
      <mg-aside></mg-aside>
      <el-main class="main">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MgHead from './components/mgHead'
import MgAside from './components/mgAside'

export default {
  name: 'Manage',
  components: {
    MgHead,
    MgAside
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
    .title {
      line-height: 80px;
      margin: 0;
      font-size: 30px;
      color: #fff;
      font-weight: lighter;
    }
  }
  .aside {
    color: #333;
    background-color: rgb(238, 241, 246);
    height: calc(100vh - 80px);
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
