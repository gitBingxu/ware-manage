<template>
  <el-form :rules="rules" ref="findForm" class="find-cnt" :model="findForm">
    <el-form-item label="手机号" label-width="100px" prop="mobile">
      <el-input class="input" type="text" placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone" v-model="findForm.mobile"></el-input>
    </el-form-item>
    <el-form-item>
      <el-form :inline="true">
        <el-form-item label="验证码" label-width="100px">
          <el-input
            @change="checkCode"
            type="text"
            v-model="authcode"
            placeholder="请输入验证码"
            prefix-icon="el-icon-bell">
            </el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="getCode">验证码</el-button>
        </el-form-item>
      </el-form>
    </el-form-item>
    <template v-if="ifshow">
      <el-form-item label="密 码" prop="passwd" label-width="100px">
        <el-input
          type="password"
          v-model="findForm.passwd"
          autocomplete="off"
          class="input"
          placeholder="请输入密码"
          prefix-icon="el-icon-key">
        </el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPasswd" label-width="100px">
        <el-input
          type="password"
          v-model="findForm.checkpass"
          autocomplete="off"
          class="input"
          placeholder="请再次输入密码"
          prefix-icon="el-icon-unlock">
        </el-input>
      </el-form-item>
    </template>
    <el-form-item label-width="100px">
      <el-button type="primary" @click="submitForm('findForm')">提交</el-button>
      <el-button @click="resetForm('findForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'FindBody',
  components: {

  },
  data () {
    var validmobile = (rule, value, callback) => {
      const rules = new RegExp(/^(((13[0-9]{1})|(14[57]{1})|(15[012356789]{1})|(17[03678]{1})|(18[0-9]{1})|(19[89]{1})|(16[6]{1}))+\d{8})$/)
      if (!rules.test(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        this.isCorrect = true
        callback()
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        const len = this.findForm.passwd.length
        if (len < 6 || len > 20) {
          callback(new Error('密码长度必须在6至20位'))
        }
        callback()
      }
    }
    var validcheck = (rule, value, callback) => {
      if (this.findForm.check !== this.findForm.passwd) {
        callback(new Error('两次输入不一致!'))
      }
      callback()
    }
    return {
      authcode: '',
      isCorrect: false,
      ifshow: false,
      findForm: {
        mobile: '',
        passwd: '',
        checkpass: ''
      },
      rules: {
        mobile: [{ validator: validmobile, trigger: 'blur' }],
        passwd: [{ validator: validatePass, trigger: 'blur' }],
        checkPasswd: [{ validator: validcheck, trigger: 'blur' }]
      }
    }
  },
  methods: {
    getCode () {
      // 获取验证码
      if (this.isCorrect) {
        // send post
      }
      this.ifshow = !this.ifshow
    },
    checkCode () {
      // 判断验证码是否正确
      return true
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.$router.push('/login')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.find-cnt {
  margin-top: 40px;
  .input {
    width: 78%;
  }
}
</style>
