<template>
   <div class="task-done">
        <div class="content">
            <h2>ToDO Done</h2>
            <h5>Keep it up</h5>
        </div>
        <div class="done-result">
           <p>/10</p>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'TaskDone',
    }
</script>

<style scoped>
.task-done{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding:50px;
    margin:20px 30px;
    color:#fff;
    border:2px solid lightgray;
    border-radius: 24px;
}
.content{
    line-height: 20px;
    letter-spacing: 1px;
}
.content h2{
     font-size: 28px;
     font-weight: 700;
     padding: 10px;
}
.content h5{
     font-size:18px;
     padding:5px 10px;
     color: lightgrey;
}
.done-result{
    background-color:#FF5631;
    padding:40px;
    border-radius: 100%;
}
.done-result p{
    font-size: 1.6rem;
    font-weight: 900;
    color: black;

}
</style>