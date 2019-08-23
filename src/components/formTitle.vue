<template>
  <div>
    <div class="title">{{cont}}</div>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'FormTitle',
  props: ['cont']
}
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';

.title {
  @include form-title;
  margin-left: 20px;
}
</style>
