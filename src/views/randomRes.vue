<template>
    <!-- <img class="randomImg" :src="this.src" alt=""> -->
    <span>{{ emoji }}</span>
</template>

<script>
export default {
    props: [
        'emoji'
    ],
}
</script>

<style scoped>
/* .res{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
}
.randomImg{
    width: 200px;
    height: 200px;
} */
span{
    font-size: 100px;
}
</style>