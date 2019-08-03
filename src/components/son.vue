<template>
  <div>
    <span>我是子组件</span>---{{msg}}<br>
    子组件拿到的共享数据--{{getNum}}<br>
    <button @click="msgToParent">点击发送信息给父组件</button><button @click="sadd">子组件改变状态</button>
    <button @click="saddActive">子组件改变状态(active)</button>
  </div>
</template>
<script>
export default {
  name: 'son',
  data:function(){
    return {
      sendMsg: '这是子组件传递给父组件的消息'
    }
  },
  props:{
    msg:{
      type: String,
      default: ''
    }
  },
  methods:{
    msgToParent:function(){
      this.$emit('handle',this.sendMsg)
    },
    sadd(){
      this.$store.commit('increase')
    },
    saddActive(){
      this.$store.dispatch('decreaseActive')
    }
  },
  computed:{
    getNum: function(){
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
