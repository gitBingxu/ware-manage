<template>
  <div>
    <form-title :cont="title_cont"></form-title>
  </div>
</template>

<script>
import FormTitle from '@/components/formTitle'

export default {
  name: 'MyRecord',
  components: {
    FormTitle
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
