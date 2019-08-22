<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓 名" prop="name">
        <el-input
          type="text"
          v-model="ruleForm.name"
          class="input"
          placeholder="请输入真实姓名"
          prefix-icon="el-icon-warning-outline">
          </el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="mobile">
        <el-input
          type="text"
          v-model="ruleForm.mobile"
          class="input"
          placeholder="请输入手机号码"
          prefix-icon="el-icon-mobile-phone">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-form :inline="true">
          <el-form-item label="验证码" style="margin-left: -54px">
            <el-input
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
      <el-form-item label="密 码" prop="passwd">
        <el-input
          type="password"
          v-model="ruleForm.passwd"
          autocomplete="off"
          class="input"
          placeholder="请输入密码"
          prefix-icon="el-icon-key">
        </el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPasswd">
        <el-input
          type="password"
          v-model="ruleForm.check"
          autocomplete="off"
          class="input"
          placeholder="请再次输入密码"
          prefix-icon="el-icon-unlock">
        </el-input>
      </el-form-item>
      <el-form-item label="管理员">
        <el-select v-model="ruleForm.isadmin" placeholder="是否注册为管理员">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="margin-top:30px;">
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'RegBody',
  components: {

  },
  data () {
    var validname = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入姓名'))
      } else if (value.length < 2 || value.length > 20) {
        callback(new Error('请输入正确的姓名'))
      }
      callback()
    }
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
    var validmobile = (rule, value, callback) => {
      const Rule = /^(((13[0-9]{1})|(14[57]{1})|(15[012356789]{1})|(17[03678]{1})|(18[0-9]{1})|(19[89]{1})|(16[6]{1}))+\d{8})$/
      if (!Rule.test(value)) {
        callback(new Error('请输入正确的手机号'))
      }
      callback()
    }
    var validcheck = (rule, value, callback) => {
      if (this.ruleForm.check !== this.ruleForm.passwd) {
        callback(new Error('两次输入不一致!'))
      }
      callback()
    }
    return {
      ruleForm: {
        name: '',
        mobile: '',
        passwd: '',
        check: '',
        isadmin: ''
      },
      rules: {
        name: [{ validator: validname, trigger: 'blur' }],
        mobile: [{ validator: validmobile, trigger: 'blur' }],
        passwd: [{ validator: validatePass, trigger: 'blur' }],
        checkPasswd: [{ validator: validcheck, trigger: 'blur' }]
      },
      authcode: '',
      options: [{
        id: 0,
        label: '是',
        value: true
      }, {
        id: 1,
        label: '否',
        value: false
      }]
    }
  },
  methods: {
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
    },
    getCode () {
      // 发送验证码
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-ruleForm {
  margin-top: 40px;
  .input {
    width: 78%;
  }
  .reg-acc, .find-pass {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #606266;
  }
}
</style>
