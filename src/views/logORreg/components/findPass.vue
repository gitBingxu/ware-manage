<template>
  <div>
    <login-head :isreg="true" :cont="string"></login-head>
    <find-body></find-body>
  </div>
</template>

<script>
import LoginHead from './loginHead'
import FindBody from './findBody'

export default {
  name: 'FindPass',
  components: {
    LoginHead,
    FindBody
  },
  data () {
    return {
      string: '密码找回 · 请妥善保管密码'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
