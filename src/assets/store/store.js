import { ref, computed } from 'vue';

const store = ref({
  tasks: [
    {
      id: 1,
      todoName: 'Task1',
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 2,
      todoName: 'Task2',
      isCompleted: true,
      isEditing: true,
    },
  ],

  filter:'all',
  
});

// Define getters using computed properties

const getters = {
  allTasks: computed(() => store.value.tasks),

  filteredTasks: computed(() => {  
    const filter = store.value.filter;  
    if (filter === 'all') return store.value.tasks;
    if (filter === 'completed') return store.value.tasks.filter(task => task.isCompleted);
    if (filter === 'active') return store.value.tasks.filter(task => !task.isCompleted);
    return [];
  }),

  completedTask: computed(() => store.value.tasks.filter(task => task.isCompleted).length),
  totalTask: computed(() => store.value.tasks.length)
};

const addTask = (taskName) => {
   store.value.tasks.push({
      id:store.value.tasks.length + 1,
      todoName: taskName,
      isCompleted: false,
      isEditing: false,
   });
};

const deleteTask = (taskId) =>{
    const index = store.value.tasks.findIndex(task => task.id === taskId);
    if(index !== -1){
        store.value.tasks.splice(index, 1);
    }
}
export { store, getters, addTask, deleteTask};