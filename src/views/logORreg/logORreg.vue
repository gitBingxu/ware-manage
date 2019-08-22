<template>
  <div class="login-cnt">
    <div class="login-box">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.login-cnt {
  height: 100vh;
  .login-box {
    position: relative;
    width: 468px;
    padding-bottom: 30px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0px 10px 60px rgba(211, 211, 211, 0.8);
  }
}
</style>
