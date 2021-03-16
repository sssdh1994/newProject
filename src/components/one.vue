<template>
  <h1>这里是one组件</h1>
  <h3>这里是生成的state的tableData</h3>
  <el-button @click="changeData">这是one组件内部的修改tableData方法</el-button>
  <div v-for="(item , index) in state.tableData" :key="index">
    <h5>{{item.date}}</h5>
    <h5>{{item.address}}</h5>
  </div>
  <h3>这是生成的dataNum</h3>
  <h5>{{dataNum}}</h5>
  <h3>这里是store里的vuexNum</h3>
  <h5>{{store.state.vuexNum}}</h5>
  <el-row>
    <el-col :span="12">
      <two :tableData="state.tableData" :dataNum="dataNum"></two>
    </el-col>
    <el-col :span="12">
      <three :tableData="state.tableData" :dataNum="dataNum" @getProps="getProps"></three>
    </el-col>
  </el-row>
  
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import {useStore} from "vuex";
import two from './two.vue'
import three from './three.vue'
import {getRandomNumber} from '../util'
export default defineComponent({
  name: 'one',
  props: {
    
  },
  components:{
    two,
    three
  },
  setup: () => {
    const store = useStore();
    let dataNum = ref(20)
    const state = reactive({
      tableData:[{
          date: '2016-05-02',
          address: 99999
        }]
    })
    const changeData = ()=>{
      state.tableData[0].address = getRandomNumber(99000,99999)
      dataNum.value = getRandomNumber(0,100)
    }
    const getProps = (params1:number,params2:number)=>{

       state.tableData[0].address = params2
      dataNum.value = params1
    }
    return {state,store,changeData,dataNum,getProps}
  }
})
</script>

<style scoped>

</style>
