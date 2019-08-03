<template>
  <div>
    <span>这是outer组件拿到的共享属性</span>--{{getOuterNum}}<button @click="oadd">outer组件改变状态</button>
    <button @click="oaddActive">outer组件改变状态(active)</button>
  </div>
</template>
<script>
export default {
  name: 'outer',
  computed:{
    getOuterNum:function(){
      return this.$store.getters.getNum
      // return this.$store.state.num
    }
  },
  methods:{
    oadd(){
      this.$store.commit('increase')
    },
    oaddActive(){
      this.$store.dispatch('decreaseActive')
    }
  }
}
</script>
<style scoped>
  span{
    background: lightblue;
  }
</style>
