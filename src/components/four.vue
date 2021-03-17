<template>
  <h1>这里是four组件</h1>
   <h3>这里是组件注入的inject：tableData</h3>
  <el-button @click="changeData">这是four组件内部的修改tableData方法</el-button>
  <div v-for="(item , index) in tableData" :key="index">
    <h5>{{item.address}}</h5>
  </div>
  <h3>这是组件注入的inject：dataNum</h3>
  <h5>{{dataNum}}</h5>
  <h3>这里是store里的vuexNum</h3>
  <h5>{{store.state.vuexNum}}</h5>

</template>

<script lang="ts">
import { ref, defineComponent,inject } from 'vue'
import {useStore} from "vuex";
import {getRandomNumber} from '../util'
export default defineComponent({
  name: 'four',
  props: {
    
  },
  setup: () => {
    const store = useStore()
    let tableData:any = inject('tableData')
    let dataNum:any = inject('dataNum')
    const changeData = ()=>{
      console.log(dataNum)
      tableData[0].address = getRandomNumber(99000,99999)
      dataNum.value = getRandomNumber(0,100)
    }
    return {tableData,dataNum,changeData,store}
  }
})
</script>

<style scoped>

</style>
