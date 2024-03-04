<template>
    <div>
        <div v-if="isCalendarVisible" class="calendar-container">
                <el-icon><Back @click="toggleCalendar"/></el-icon>
                  <el-calendar v-model="value" />
              </div>
              <!-- <div class="selected-date">  
                  <h2> {{ formatDate(value) }} </h2>
              </div> -->
    </div>
</template>

<script setup>

import {toggleCalendarMixin} from '../mixins/mixin'

const {value,isCalendarVisible,toggleCalendar,formatDate } = {toggleCalendarMixin}

</script>

<style lang="scss" scoped>
  .el-calendar{
      position: absolute;
      top: 30px;
      left: 50px;
      height: 900px;
      width: 800px;
      z-index: 2;
  }
</style>