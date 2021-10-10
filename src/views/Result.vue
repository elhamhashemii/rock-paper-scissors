<template>
  <p>{{ result }}</p>
  <div class="results">
    <div>
      <p>Your choice:</p>
      <random-res :src="myHand"></random-res>
    </div>
    <div>
      <p>Computer choice:</p>
      <random-res :src="computerHand"></random-res>
    </div>
  </div>
</template>

<script>
import randomRes from "./randomRes.vue";
export default {
  components: {
    randomRes,
  },
  data() {
    return {
      myHand: "",
      computerHand: "",
      myChances: ["../img/scissors.png", "../img/rock.png", "../img/paper.png"],
      computerChances: [
        "../img/scissors2.png",
        "../img/rock2.png",
        "../img/paper2.png",
      ],
      result: "YOU WIN", // It will be changed later
    };
  },
  created() {
    const myIndex = Math.floor(Math.random() * this.myChances.length);
    const computerIndex = Math.floor(
      Math.random() * this.computerChances.length
    );
    this.myHand = this.myChances[myIndex];
    this.computerHand = this.computerChances[computerIndex];
  },
};
</script>

<style scoped>
.results {
  display: flex;
}
.results div {
  margin: 50px;
}
</style>