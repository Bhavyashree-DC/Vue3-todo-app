import { ref } from 'vue';

export default {
  setup() {
    const value = ref(new Date());
    const isCalendarVisible = ref(false);

    const toggleCalendar = () => {
      isCalendarVisible.value = !isCalendarVisible.value;
    };
    
    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    };

    return { value, isCalendarVisible, toggleCalendar, formatDate };
  },
};
