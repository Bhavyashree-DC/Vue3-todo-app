<template>
      <div class="todo-container">
          <div class="todo-app">
              <div class="header">
                <Calendar style="width: 2.5rem; height: 2.5rem; margin-right: 8px;cursor: pointer;" 
                  @click="toggleCalendar"
                />
                <h1>Todo App</h1>
              </div>
              <CalendarView></CalendarView>
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
import { Close as IconView } from '@element-plus/icons-vue'
import 


import { ref } from 'vue'

const value = ref(new Date())



const isCalendarVisible = ref(false);

const toggleCalendar = () => {
  isCalendarVisible.value = !isCalendarVisible.value;
};

const formatDate = (date) =>{
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

</script>


<style lang="scss" scoped>
 .todo-container{
  margin:10px;
   width: 500px;
   height:100vh;

   display: flex;
   justify-content: center;
   background-color: #0D0D0D;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
   border-radius: 10px;
   z-index: 1;
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

  .el-calendar{
      position: absolute;
      top: 30px;
      left: 50px;
      height: 900px;
      width: 800px;
      z-index: 2;
  }
  .el-icon{
     color: black;
     font-size: 30px;
     cursor: pointer;
     position: absolute;
     top:10px;
     left:20px;
  }
  .selected-date{
    display: flex;
    align-items: center;
    color: white;
    font-size:20px;
    margin: 10px;
  
  }
  .el-link{
     color: white;
  }
}


</style>
