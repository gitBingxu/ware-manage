<template>
  <div>
    <div>查询条件</div>
    <el-form :inline="true" :model="query" class="demo-form-inline">
      <el-form-item label="出库日期" required>
        <el-col :span="11">
          <el-form-item required>
            <el-date-picker type="date" placeholder="选择开始日期" v-model="query.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">~</el-col>
        <el-col :span="11">
          <el-form-item required>
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
    <div>出库记录</div>
    <el-table :data="out_ware_record" stripe>
      <el-table-column
      prop="num"
      label="序号"
      width="80">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="部门">
      </el-table-column>
      <el-table-column
        prop="ware"
        label="仓库">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'OutQuery',
  components: {

  },
  data () {
    return {
      query: {
        date1: '',
        date2: '',
        product: ''
      },
      out_ware_record: [{
        num: 0,
        date: '2019-08-09',
        dev: '灭火器',
        name: '陈俊飞',
        unit: '销售部',
        ware: '1号仓库'
      }, {
        num: 1,
        date: '2019-08-10',
        dev: '灭火器',
        name: '杨刚',
        unit: '总裁办公室',
        ware: '2号仓库'
      }]
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

</style>
