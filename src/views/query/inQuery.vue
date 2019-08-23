<template>
  <div>
    <query-cons text="入库日期"></query-cons>
    <record-tab text="入库记录" :isPersonal="false"></record-tab>
  </div>
</template>

<script>
import QueryCons from './components/queryCondition'
import RecordTab from './components/recordTab'

export default {
  name: 'InQuery',
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
