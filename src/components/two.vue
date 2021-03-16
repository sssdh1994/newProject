<template>
  <h1>这里是two组件</h1>
  <h3>这里是组件传值的props：tableData</h3>
  <div v-for="(item , index) in tableData" :key="index">
    <h5>{{item.date}}</h5>
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
  setup: (props) => {
    const store = useStore();
   
    return {store,...toRefs(props)}
  }
})
</script>

<style scoped>

</style>
