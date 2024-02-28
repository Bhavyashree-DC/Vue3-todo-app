<template>
    <div class="task-list">
       <h3>All Tasks</h3>
       <div class="lists">
           <ul>
                <li v-for="task in tasks" :key="task.id">
                    {{ task.todoName }}
                        <i class="ri-edit-circle-fill edit-icon" @click="editTask(task)"></i>
                        <i class="ri-delete-bin-4-fill delete-icon" @click="deleteTask(task)"></i>
                </li>
           </ul>
       </div>
    </div>
</template>

<script setup>
import { getters } from '../assets/store/store';

const tasks = getters.allTasks;
</script>

<style  lang="scss" scoped>
   .task-list{
        h3{
            color:white;
        }
        .lists{
            width:450px;
            height:60px;
            background-color:#2d2c2c;
            border-radius: 10px;
            margin:20px 0px;

            display: flex;
            align-items: center;
            justify-content:space-between;
    
            ul{
                list-style: none;
                color: white;
                padding:15px;
             }
             .task-container {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .edit-icon,
                .delete-icon {
                margin-right: 10px;
                cursor: pointer;
                }
            }
        }
        
   }
   
</style>


