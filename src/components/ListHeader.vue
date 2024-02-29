<template>
    <div>
        <el-row>      
            <el-button type="success" :icon="Check" circle />
            <el-button type="warning" :icon="Eleme" circle />
            <el-button type="danger" :icon="Delete" circle />
        </el-row>
    </div>
</template>

<script  setup>
import {
  Check,
  Delete,
  Edit,
  Eleme,
  Star,
} from '@element-plus/icons-vue'


</script>

<style lang="scss" scoped>

</style>