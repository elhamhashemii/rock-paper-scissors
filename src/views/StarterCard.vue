<template>
      <h1>I'm bored ... </h1>
      <div class="starter-pic">
          <img src="../img/1.jpg" alt="">
      </div>
      <span class="btn" @click='goStart()'>Let's play a game</span>
</template>

<script>
export default {
    methods: {
        goStart(){
            this.$router.push('/loading');
        }
    }
}
</script>

<style scoped>
h1{
    color: rgb(87, 13, 62);
    margin-bottom: 50px;
    text-shadow: 2px 2px 4px rgb(99, 69, 89);
}
.starter-pic img{
    width: 350px;
    height: 250px ;
    border-radius: 10%;
    /* box-shadow: 5px 5px 9px rgb(89, 47, 75); */
}
.btn{
    background-color: rgb(87, 13, 62);
    color: rgb(255, 255, 255);
    border-radius: 7px;
    padding: 10px;
    margin-top: 55px;
    cursor: pointer;
    box-shadow: 5px 5px 9px rgb(89, 47, 75);
}
/* Copied css animation */
.btn:hover {
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes swing {
  20% {
  -webkit-transform: rotate3d(0, 0, 1, 15deg);
  transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
  -webkit-transform: rotate3d(0, 0, 1, -10deg);
  transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
  -webkit-transform: rotate3d(0, 0, 1, 5deg);
  transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
  -webkit-transform: rotate3d(0, 0, 1, -5deg);
  transform: rotate3d(0, 0, 1, -5deg);
  }
  100% {
  -webkit-transform: rotate3d(0, 0, 1, 0deg);
  transform: rotate3d(0, 0, 1, 0deg);
  }
  }
  @keyframes swing {
  20% {
  -webkit-transform: rotate3d(0, 0, 1, 15deg);
  transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
  -webkit-transform: rotate3d(0, 0, 1, -10deg);
  transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
  -webkit-transform: rotate3d(0, 0, 1, 5deg);
  transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
  -webkit-transform: rotate3d(0, 0, 1, -5deg);
  transform: rotate3d(0, 0, 1, -5deg);
  }
  100% {
  -webkit-transform: rotate3d(0, 0, 1, 0deg);
  transform: rotate3d(0, 0, 1, 0deg);
  }
  }

</style>