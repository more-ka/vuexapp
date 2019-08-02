<template>
  <div>
    <span>这是outer组件拿到的共享属性</span>--{{getOuterNum}}
  </div>
</template>
<script>
export default {
  name: 'outer',
  computed:{
    getOuterNum:function(){
      return this.$store.state.num
    }
  }
}
</script>
<style scoped>
  span{
    background: lightblue;
  }
</style>
