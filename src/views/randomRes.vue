<template>
    <img class="randomImg" :src="this.src" alt="">
</template>

<script>
export default {
    props: [
        'src'
    ],
}
</script>

<style>
.res{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
}
.randomImg{
    width: 200px;
    height: 200px;
}
</style>