<template>
      <div class="todo-container">
          <div class="todo-app">
              <div class="header">
                <Calendar style="width: 2.5rem; height: 2.5rem; margin-right: 8px;cursor: pointer;" 
                  @click="toggleCalendar"
                />
                <h1>Todo App</h1>
              </div>
              <div v-if="isCalendarVisible" class="calendar-container">
                <template>
                  <el-calendar v-model="value" />
                </template>
              </div>
              <TaskDone></TaskDone>
              <div class="todo-input">
                    <TaskInput></TaskInput>
                    <Tabs></Tabs>
                    <TaskList></TaskList>
              </div>
          </div>
      </div>
</template>

<script setup>
import TaskInput from './components/TaskInput.vue'
import TaskDone from './components/TaskDone.vue'
import TaskList from './components/TaskList.vue'
import Tabs from './components/Tabs.vue'

import { ref } from 'vue'

const value = ref(new Date())

const isCalendarVisible = ref(false);

const toggleCalendar = () => {
  isCalendarVisible.value = !isCalendarVisible.value;
};


</script>


<style scoped>
 .todo-container{
  margin:10px;
   width: 500px;
   height:900px;

   display: flex;
   justify-content: center;
   background-color: #0D0D0D;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
   border-radius: 10px;
}
.header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
  
    line-height: 60px;
    padding:12px;
  }
  .el-icon{
     color: white;
  }

</style>
