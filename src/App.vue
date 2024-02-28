<template>
      <div class="todo-container">
          <div class="todo-app">
              <div class="header">
                <h1>Todo App</h1>
              </div>
              <TaskDone></TaskDone>
              <el-button>I am ElButton</el-button>
              <div class="todo-input">
                    <TaskInput></TaskInput>
                    <TaskList></TaskList>
              </div>
          </div>
      </div>
</template>

<script>
import TaskInput from './components/TaskInput.vue'
import TaskDone from './components/TaskDone.vue'
import TaskList from './components/TaskList.vue'
  
export default {
  name: 'App',
  components: {
    TaskInput,
    TaskDone,
    TaskList,
  },
}

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
    color: white;
    text-align: center;
    line-height: 60px;
    padding:12px;
  }

</style>
