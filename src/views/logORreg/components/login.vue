<template>
  <div>
    <login-head :isreg="false"></login-head>
    <login-body></login-body>
  </div>
</template>

<script>
import LoginBody from './loginBody'
import LoginHead from './loginHead'

export default {
  name: 'Login',
  components: {
    LoginBody,
    LoginHead
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
