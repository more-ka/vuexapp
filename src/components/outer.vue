<template>
  <div>
    <span>这是outer组件拿到的共享属性</span>--{{getOuterNum}}<button @click="oadd">outer组件改变状态</button>
  </div>
</template>
<script>
export default {
  name: 'outer',
  computed:{
    getOuterNum:function(){
      return this.$store.state.num
    }
  },
  methods:{
    oadd(){
      this.$store.commit('increase')
    }
  }
}
</script>
<style scoped>
  span{
    background: lightblue;
  }
</style>
