<template>
  <h1>增删改查页</h1>
   <el-table
      :data="tableData"
      border
      style="width: 600px;margin:auto">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template #default="scope">
        <el-button @click="delClick(scope.row,scope.$index)" type="text" size="small">删</el-button>
        <el-button @click="editClick(scope.row,scope.$index)" type="text" size="small">改</el-button>
      </template>
    </el-table-column>
    </el-table >
    <el-button @click="addList">增</el-button>
    <el-button @click="$router.push({path:'/one'})">跳转到组件传值页</el-button>
    
</template>

<script lang="ts">
import { ref, defineComponent,onMounted } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    const tableData:any = ref([])
    const getList = ()=>{
      tableData.value = [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2017-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2018-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2019-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
    const addList = ()=>{
      tableData.value.push({
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        })
    }
    const delClick = (row:object,$index:number)=>{
      console.log(row)
      tableData.value.splice($index,1)
    }
    const editClick = (row:object,$index:number)=>{
      console.log(row)
      tableData.value[$index].name = count.value++
    }
    onMounted(()=>{
      getList()
    })

    return { count ,tableData,addList,delClick,editClick}
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
