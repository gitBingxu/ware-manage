<template>
  <div>
    <query-cons text="出库日期"></query-cons>
    <record-tab text="出库记录" :isPersonal="false"></record-tab>
  </div>
</template>

<script>
import QueryCons from './components/queryCondition'
import RecordTab from './components/recordTab'

export default {
  name: 'OutQuery',
  components: {
    QueryCons,
    RecordTab
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
