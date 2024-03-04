<template>
    <div class="task-list">
           <ul>
                <li v-for="task in tasks" :key="task.id">
                    <div :class="{'list-items': true, 'completed': task.isCompleted }">
                        <div class="task-items">
                            <el-checkbox v-model="task.isCompleted" size="large" />
                            <span :style="{ 'text-decoration': task.isCompleted ? 'line-through' : 'none' }">
                                {{ task.todoName }}
                            </span>
                        </div>
                        <div class="edit-icons">
                            <el-button type="primary" :icon="Edit" circle />
                            <el-button type="danger" :icon="CircleClose" circle  @click="deleteItem(task.id)" />
                        </div>
                    </div>
                </li>
           </ul>
    </div>
</template>

<script setup>

import { computed } from 'vue';
import { getters, store, deleteTask } from '../assets/store/store';
import { Edit,CircleClose} from '@element-plus/icons-vue'

const { allTasks, filteredTasks} = getters;

const tasks = computed(() => {
  return store.value.filter === 'all' ? allTasks.value : filteredTasks.value;
});

const deleteItem = (id) => {
    deleteTask(id);
}
</script>

<style  lang="scss" scoped>
   .task-list{
        .list-items{
            width:450px;
            height:65px;
            background-color:#2d2c2c;
            color: white;
            border-radius: 10px;
            margin:20px 0px;

            list-style:none;

            display: flex;
            align-items: center;
            justify-content:space-between;
            padding:24px 10px;
            ul li{
              list-style: none;
            }
               .task-items,
               .edit-icons{
                   padding: 10px 14px;
                   display: flex;
                   align-items: center;
                   justify-content: space-between;
                   gap:10px;
                   font-size: 1.3rem;
                   cursor:pointer;
               }
               &.completed{
                 text-decoration: line-through;
               }
        
            }
          
        
   }
   
</style>


