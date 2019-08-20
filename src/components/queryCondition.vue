<template>
  <div>
    <div class="condition">查询条件</div>
    <el-form :inline="true" :model="query" class="demo-form-inline query">
      <el-form-item :label="text">
        <el-col :span="11">
          <el-form-item>
            <el-date-picker type="date" placeholder="选择开始日期" v-model="query.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">~</el-col>
        <el-col :span="11">
          <el-form-item>
            <el-date-picker type="date" placeholder="选择结束日期" v-model="query.date2" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-select v-model="query.product" placeholder="请选择商品名称">
          <el-option label="灭火器" value="anni"></el-option>
          <el-option label="手机" value="mobile"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="queryRecord">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'QueryCondi',
  props: ['text'],
  components: {

  },
  data () {
    return {
      query: {
        date1: '',
        date2: '',
        product: ''
      }
    }
  },
  methods: {
    queryRecord () {
      console.log('query')
    },
    reset () {
      this.query = {}
    }
  }
}
</script>

<style lang="scss" scoped>
.condition {
  line-height: 45px;
  padding-left: 5px;
  background: #e6f4ff;
  }
  .query {
    margin-top: 20px;
  }
  .line {
    text-align: center;
    padding-right: 10px;
  }
</style>
