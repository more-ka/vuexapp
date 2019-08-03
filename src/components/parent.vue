<template>
  <div>
    <span>我是父组件</span>-----{{fromSonMsg}}<br>
    父组件拿到的共享数据--{{getCount}}<button @click="padd">父组件改变状态</button>
    <button @click="paddActive">父组件改变状态(active)</button>
    <hr>
    <son :msg="msgToSon" @handle="getMsgToSon"></son>
  </div>
</template>
<script>
import son from './son';
export default {
  name: 'parent',
  data: function(){
    return {
      msgToSon: '父组件传给子组件的message',
      fromSonMsg: ''
    }
  },
  methods:{
    getMsgToSon(value){
      this.fromSonMsg = value
    },
    padd(){
      this.$store.commit('increase')
    },
    paddActive(){
      this.$store.dispatch('decreaseActive')
    }
  },
  components:{
    son
  },
  computed:{
    getCount: function(){
      return this.$store.state.num
    }
  }
}
</script>
<style scoped>
  span{
    background: lightgreen;
  }
</style>
