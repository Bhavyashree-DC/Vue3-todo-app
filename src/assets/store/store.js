import { ref, computed } from 'vue';

const store = ref({
  tasks: [
    {
      id: 1,
      todoName: 'Task1',
      isCompleted: true,
      isEditing: false,
    },
  ],
});

// Define getters using computed properties
const getters = {
  allTasks: computed(() => store.value.tasks),
};

export { store, getters };