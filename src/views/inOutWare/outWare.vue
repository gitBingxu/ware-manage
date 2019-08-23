<template>
  <div>
    <form-title :cont="title_cont"></form-title>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="设备名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="申领单位" prop="dest">
        <el-select v-model="ruleForm.dest" placeholder="请选择申领单位">
          <el-option label="单位1" value="org_one"></el-option>
          <el-option label="单位2" value="org_two"></el-option>
          <el-option label="其他" value="else"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="设备用途" prop="use">
        <el-select v-model="ruleForm.use" placeholder="请选择设备用途">
          <el-option label="用途1" value="use_one"></el-option>
          <el-option label="用途2" value="use_two"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申领日期" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="请选择日期" v-model="ruleForm.date1"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="ruleForm.desc" :rows="5"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即申请</el-button>
        <el-button type="danger" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import FormTitle from '@/components/formTitle'

export default {
  name: 'InWare',
  components: {
    FormTitle
  },
  data () {
    return {
      title_cont: '出库申请表',
      ruleForm: {
        name: '',
        dest: '',
        use: '',
        date1: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入设备名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        dest: [
          { required: true, message: '请选择申领单位', trigger: 'blur' }
        ],
        use: [
          { required: true, message: '请选择设备用途', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('提交成功!')
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.ruleForm.desc = ''
    }
  }
}

</script>

<style lang="scss" scoped>
.line {
  text-align: center;
}
</style>
