<template>
  <div>
    <login-head :isreg="true" :cont="string"></login-head>
    <reg-body></reg-body>
  </div>
</template>

<script>
import RegBody from './regBody'
import LoginHead from './loginHead'

export default {
  name: 'Login',
  components: {
    RegBody,
    LoginHead
  },
  data () {
    return {
      string: 'xx公司仓库管理系统 · 欢迎注册'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
