<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm">
      <el-form-item label="账 号" prop="account">
        <el-input
          type="text"
          v-model="ruleForm.account"
          autocomplete="off"
          class="input"
          placeholder="请输入姓名或手机号"
          prefix-icon="el-icon-user">
          </el-input>
          <router-link to="/login/reg"><span class="reg-acc"> 注册账号</span></router-link>
      </el-form-item>
      <el-form-item label="密 码" prop="passwd">
        <el-input
          type="password"
          v-model="ruleForm.passwd"
          autocomplete="off"
          class="input"
          placeholder="请输入密码"
          prefix-icon="el-icon-key">
        </el-input>
        <span class="find-pass"> 找回密码</span>
      </el-form-item>
      <el-form-item style="margin-top:50px;">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button type="danger" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginBody',
  components: {

  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        const len = this.ruleForm.passwd.length
        if (len < 6 || len > 20) {
          callback(new Error('密码长度必须在6至20位'))
        }
        callback()
      }
    }
    var validaccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('账号不能为空!'))
      }
      callback()
    }
    return {
      ruleForm: {
        account: '',
        passwd: '',
        isadmin: false
      },
      rules: {
        account: [
          { validator: validaccount, requird: true, trigger: 'blur' }
        ],
        passwd: [
          { validator: validatePass, requird: true, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    this.bus.$on('changeAccType', () => {
      this.isadmin = !this.isadmin
    })
    // console.log(this.isadmin)
  }
}
</script>

<style lang="scss" scoped>
.demo-ruleForm {
  margin-top: 40px;
  .input {
    width: 75%;
  }
  .reg-acc, .find-pass {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #606266;
  }
}
</style>
