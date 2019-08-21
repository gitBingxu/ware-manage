<template>
  <div>
    <login-head :isreg="true"></login-head>
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

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
