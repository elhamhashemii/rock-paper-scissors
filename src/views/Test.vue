<template>
    <div>
        <img :src="link" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return{
            link: '',
            images: [
                '../img/rock.png',
                '../img/paper.png',
                '../img/scissors.png'
            ]
        }
    },
    created(){
        const index = Math.floor(Math.random() * this.images.length);
        this.link = this.images[index];
    } 
}
</script>

<style scoped>
div img{
    width: 100px;
    height: 100px;
}
</style>