<template>
  <div class="head">
    <div class="title"><i class="el-icon-s-home"></i>仓库管理系统</div>
    <ul class="tab" v-if="!isreg">
      <li @click="handelClick" :class="{ active: isactive}" id="1">用户登录</li>
      <li @click="handelClick" :class="{ active: !isactive}" id="0">管理员登录</li>
    </ul>
    <div v-else class="reg">{{cont}}</div>
  </div>
</template>

<script>
export default {
  name: 'LoginHead',
  props: {
    isreg: {
      type: Boolean,
      required: true
    },
    cont: {
      type: String,
      required: true
    }
  },
  components: {

  },
  data () {
    return {
      isactive: true,
      isadmin: false
    }
  },
  methods: {
    handelClick (e) {
      this.isactive = Boolean(parseInt(e.target.id))
      this.isadmin = !this.isactive
    }
  },
  watch: {
    isadmin: function () {
      this.bus.$emit('changeAccType')
      // console.log(this.isadmin)
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  position: relative;
  height: 150px;
  background-color: #409EFF;
  color: #eee;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  .title {
    text-align: center;
    font-size: 35px;
    font-weight: lighter;
    padding: 30px 0;
  }
  .tab {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 40px;
    margin-top: 10px;
    font-weight: lighter;
    color: #fff;
    li {
      height: 25px;
    }
    .active {
      border-bottom: 2px solid #fff;
      font-weight: 400;
    }
  }
  .reg {
    text-align: center;
  }
}
</style>
