<template>
  <div class="main-game">
      <!-- <router-link :to="resLink">Click me to see the results</router-link> -->
      <div class="hands">
        <img class="imgs" src="../img/rock.png" alt="">
        <img class="imgs" src="../img/rock2.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            resLink: '/result',
        }
    },
    created(){
        setTimeout(() => {
            this.$router.push('/result')
        }, 3000);
    }
    
}
</script>

<style scoped>
/* a{
    background-color: rgb(87, 13, 62);
    color: #fff;
    padding: 30px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 30px;
    text-decoration: none;
} */
.imgs{
    animation: bounce 1s infinite;
    margin: 0 60px;
}
@keyframes bounce{
    from{ transform: scale(1); }
    to{ transform: scale(1.2); }
}
</style>