<template>
  <div>
    <div class="record" v-if="!isPersonal">{{text}}</div>
    <el-table :data="record" stripe max-height="1008">
      <el-table-column
      prop="num"
      label="序号"
      width="80px">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        v-if="!isPersonal"
        prop="aplyPerson"
        label="申请人">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="部门">
      </el-table-column>
      <el-table-column
        prop="ware"
        label="仓库">
      </el-table-column>
      <el-table-column
        prop="handlPerson"
        label="经办人">
      </el-table-column>
      <el-table-column
        v-if="isPersonal"
        prop="status"
        label="状态">
      </el-table-column>
    </el-table>
    <div class="pag-cnt">
      <el-pagination
      background
      layout="prev, pager, next"
      :total="10"
      class="pag">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecordTab',
  props: ['text', 'isPersonal'],
  components: {

  },
  data () {
    return {
      record: [{
        num: 0,
        date: '2019-08-09',
        dev: '灭火器',
        aplyPerson: '陈俊飞',
        unit: '销售部',
        ware: '1号仓库',
        handlPerson: '许兵',
        status: '审核通过'
      }, {
        num: 1,
        date: '2019-08-10',
        dev: '灭火器',
        aplyPerson: '杨刚',
        unit: '总裁办公室',
        ware: '2号仓库',
        handlPerson: '许兵',
        status: '未通过'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.record {
  line-height: 45px;
  padding-left: 5px;
  background: #e6f4ff;
}
.pag-cnt {
  position: relative;
  width: calc(100vw - 200px);
  .pag {
    position: absolute;
    right: 30px;
  }
}
</style>
