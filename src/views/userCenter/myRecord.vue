<template>
  <div>
    <form-title :cont="title_cont"></form-title>
    <record-tab :isPersonal="true"></record-tab>
  </div>
</template>

<script>
import FormTitle from '@/components/formTitle'
import RecordTab from '@/views/query/components/recordTab'

export default {
  name: 'MyRecord',
  components: {
    FormTitle,
    RecordTab
  },
  data () {
    return {
      title_cont: '申请记录'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
