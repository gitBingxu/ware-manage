<template>
  <div>
    <form-title :cont="title_cont"></form-title>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="申请人"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>部门: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-select v-model="scope.row.status" placeholder="请选择">
            <el-option
              label="通过"
              value="1">
            </el-option>
            <el-option
              label="不通过"
              value="0">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="submit">提交</el-button>
    <el-button type="danger">重置</el-button>
  </div>
</template>

<script>
import FormTitle from '@/components/formTitle'

export default {
  name: 'MyMessage',
  components: {
    FormTitle
  },
  data () {
    return {
      title_cont: '我的消息',
      tableData: [{
        id: '201905020001',
        date: '2019-05-02',
        name: '陈俊飞',
        address: '销售部',
        status: undefined
      }, {
        id: '201905020002',
        date: '2019-05-04',
        name: '陈俊飞',
        address: '销售部',
        status: undefined
      }, {
        id: '201905020003',
        date: '2019-05-01',
        name: '陈俊飞',
        address: '销售部',
        status: undefined
      }, {
        id: '201905020004',
        date: '2019-05-03',
        name: '史亚军',
        address: '业务部',
        status: undefined
      }]
    }
  },
  methods: {

  }
}

</script>

<style lang="scss" scoped>
.table {
  margin-left: 20px;
}
</style>
