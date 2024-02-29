<template>
    <div>
        <el-row>      
            <el-button type="success" :icon="Check" circle @click="showCompleted" />
            <el-button type="warning" :icon="Eleme" @click="showActive" circle />
            <el-button type="danger" :icon="Delete" circle />
        </el-row>
    </div>
</template>

<script  setup>
import { Check, Delete,Eleme} from '@element-plus/icons-vue'
import { store } from '../assets/store/store'

const showCompleted =() =>{
    store.value.filter = 'completed'
}
const showActive =() =>{
    store.value.filter = 'active'
}
</script>

<style lang="scss" scoped>
 .el-row{
    padding:10px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     .el-button{
         font-size: 20px;
         padding:22px;
     }
 }
</style>