<template>
  <h1>这里是two组件</h1>
  <h3>这里是组件传值的props：tableData</h3>
  <el-button @click="changeData">这是two组件内部的,直接修改props修改tableData方法</el-button>
  <div v-for="(item , index) in tableData" :key="index">
    <h5>{{item.address}}</h5>
  </div>
  <h3>这是组件传值的props:dataNum</h3>
  <h5>{{dataNum}}</h5>
  <h3>这里是store里的vuexNum</h3>
  <h5>{{store.state.vuexNum}}</h5>
  <four></four>

</template>

<script lang="ts">
import { toRefs, defineComponent } from 'vue'
import {useStore} from "vuex";
import four from './four.vue'
import {getRandomNumber} from '../util'
export default defineComponent({
  name: 'two',
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
   components:{
    four
  },
  setup: (props) => {
    const store = useStore();
     let {tableData,dataNum} = toRefs(props)
    const changeData = ()=>{
      console.log('此处直接修改props是"无效"的,但并不是完全无效')
      console.log('tableData可以修改的原因是因为其是引用类型数据')
      console.log('vue会给一个警告，告知你要用emit方式改变子组件接收的props,详见three组件')
      tableData.value[0].address = getRandomNumber(99000,99999)
      dataNum = getRandomNumber(0,100)
      
    }
    return {store,...toRefs(props),changeData}
  }
})
</script>

<style scoped>

</style>
