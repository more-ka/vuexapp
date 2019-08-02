<template>
  <div>
    <span>我是父组件</span>-----{{fromSonMsg}}<br>
    父组件拿到的共享数据--{{getCount}}
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
