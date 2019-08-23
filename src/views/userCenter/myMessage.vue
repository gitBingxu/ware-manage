<template>
  <div>
    <form-title :cont="title_cont"></form-title>
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">未读消息</el-tab-pane>
      <el-tab-pane label="配置管理">已读消息</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import FormTitle from '@/components/formTitle'

export default {
  name: 'MyMessage',
  components: {
    FormTitle
  },
  data () {
    return {
      title_cont: '我的消息'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
