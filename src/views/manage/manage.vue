<template>
  <div>
    <el-container>
      <mg-head></mg-head>
    </el-container>
    <el-container class="main-cnt">
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

</style>
