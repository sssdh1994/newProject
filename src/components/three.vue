<template>
  <h1>这里是three组件</h1>
  <h3>这里是组件传值的props：tableData</h3>
  <el-button @click="changeData">这是three组件内部的,用emit方式修改tableData方法</el-button>
  <div v-for="(item , index) in tableData" :key="index">
    <h5>{{item.address}}</h5>
  </div>
  <h3>这是组件传值的props:dataNum</h3>
  <h5>{{dataNum}}</h5>
  <h3>这里是store里的vuexNum</h3>
  <h5>{{store.state.vuexNum}}</h5>

</template>

<script lang="ts">
import { toRefs, defineComponent } from 'vue'
import {useStore} from "vuex";
import {getRandomNumber} from '../util'
export default defineComponent({
  name: 'three',
  props: {
    tableData:{
      type:Array,
      requried:true
    },
    dataNum:{
      type:Number,
      requried:true
    }
  },
  setup: (props,{emit}) => {
    const store = useStore();
    const changeData = ()=>{
      emit('getProps',getRandomNumber(5,20),getRandomNumber(88000,88888))
    }
    return {store,changeData}
  }
})
</script>

<style scoped>

</style>
