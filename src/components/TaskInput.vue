<template>
    <div class="input-field">
      <el-input v-model="input" 
      placeholder="What needs to be done?" 
      clearable />
        <!-- <el-row class="demo-autocomplete">
            <el-col :span="30">
            <h5>
                list suggestions when activated
            </h5>
            <el-autocomplete
                v-model="state1"
                :fetch-suggestions="querySearch"
                clearable
                class="inline-input w-50"
                placeholder="Please Input"
                @select="handleSelect"
            />
            </el-col>
        </el-row>-->
    </div> 
</template>

<script setup>

import { ref } from 'vue';

const input = ref('')

</script>

<style scoped>

.input-field{
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap:10px;
     padding:30px 0px;
}
.el-input{
    width: 460px;
    height: 70px;
    border-radius: 20px;
    padding:10px;
    background-color: #2d2c2c;
    border:none;
    outline: none;
    color: #fff;
    font-size: 20px;
}

::placeholder{
    font-size: 20px;
}
.input-field i{
     font-size: 3.6rem;
     cursor: pointer;
     color: #FF5631;
}
</style>