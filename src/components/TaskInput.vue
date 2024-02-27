<template>
    <div class="input-field">
        <input type="text" placeholder="Enter Task Here....">
        <i class="ri-add-circle-fill"></i>
    </div>
</template>

<script>
    export default {
        name:'TaskInput'
    }
</script>

<style scoped>

.input-field{
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap:10px;
     padding:30px 0px;
}
.input-field input{
    width: 400px;
    height: 60px;
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