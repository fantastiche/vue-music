<template>
  <div id="app">
    <my-header></my-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MyHeader from 'components/my-header/my-header'
  import Tab from 'components/tab/tab'

  export default {
    name: 'app',
    components: {
      MyHeader,
      Tab
    }
  }
</script>

<style scoped lang="less" type="text/less">
</style>
