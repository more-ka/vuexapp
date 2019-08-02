<template>
  <div>
    <span>我是父组件</span>-----{{fromSonMsg}}
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
  }
}
</script>
<style scoped>

</style>
