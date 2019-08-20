<template>
  <div>
    <div class="title">入库申请表</div>
    <br/>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="设备名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="设备来源" prop="source">
        <el-select v-model="ruleForm.source" placeholder="请选择设备来源">
          <el-option label="购入" value="buy"></el-option>
          <el-option label="归还" value="give_back"></el-option>
          <el-option label="其他" value="else"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="仓库选择" prop="choose">
        <el-select v-model="ruleForm.choose" placeholder="请选择进入的仓库">
          <el-option label="仓库1" value="ware_one"></el-option>
          <el-option label="仓库2" value="ware_two"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入库时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="ruleForm.desc" :rows="5"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即申请</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'InWare',
  components: {

  },
  data () {
    return {
      ruleForm: {
        name: '',
        source: '',
        choose: '',
        date1: '',
        date2: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入设备名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        source: [
          { required: true, message: '请选择设备来源', trigger: 'blur' }
        ],
        choose: [
          { required: true, message: '请选择仓库', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'blur' }
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
          console.log('提交失败!请正确填写')
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
@import '@/assets/style.scss';

.title {
  @include form-title;
  margin-left: 20px;
}
.line {
  text-align: center;
}
</style>
