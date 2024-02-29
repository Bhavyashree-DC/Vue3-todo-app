<template>
    <div class="input-field">
      <el-input v-model="input" 
      placeholder="What needs to be done?" 
      @keyup.enter="handleEnter"
      clearable />
    </div> 
</template>

<script setup>

import { ref } from 'vue';
import { addTask } from '../assets/store/store'

const input = ref('')
const handleEnter = () => {
  if (!input.value.trim()) {
    alert('Please enter the input!');
    return;
  }

  addTask(input.value.trim());

  input.value = '';
};

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