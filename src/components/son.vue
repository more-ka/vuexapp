<template>
  <div>
    <span>我是子组件</span>---{{msg}}<br>
    <button @click="msgToParent">点击发送信息给父组件</button>
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
    }
  }
}
</script>
<style scoped>

</style>
