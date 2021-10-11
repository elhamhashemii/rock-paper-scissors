<template>
  <h1 id="result">{{ result }}</h1>
  <div class="results">
    <div>
      <p>Your choice:</p>
      <!-- <random-res :src="myHand"></random-res> -->
      <random-res :emoji="myHand"></random-res>
    </div>
    <div>
      <p>Computer choice:</p>
      <!-- <random-res :src="computerHand"></random-res> -->
      <random-res :emoji="computerHand"></random-res>

    </div>
  </div>
  <div class="scores">
    <p>Your score: {{ userScore }}</p>
    <p>Computer score: {{ computerScore }}</p>
    <p class="btn" @click="playAgain()">play again</p>
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
      myHand: this.$store.state.userHand,
      computerHand: "",
      // myChances: ["../img/scissors.png", "../img/rock.png", "../img/paper.png"],
      myChances: ["✌🏼", "✊🏼", "✋🏼"],
      computerChances: ["✌🏼", "✊🏼", "✋🏼"],
      // computerChances: ["../img/scissors2.png", "../img/rock2.png", "../img/paper2.png"],
      result: '',
      userScore: 0,
      computerScore: 0
    };
  },
  created() {
    // const myIndex = Math.floor(Math.random() * this.myChances.length);
    const computerIndex = Math.floor(
      Math.random() * this.computerChances.length
    );
    // this.myHand = this.myChances[myIndex];
    // this.myHand = this.userHand()
    this.computerHand = this.computerChances[computerIndex];
    // Winner
    if (this.myHand == "✌🏼" && this.computerHand == "✌🏼"
        || this.myHand == "✊🏼" && this.computerHand == "✊🏼"
        || this.myHand == "✋🏼" && this.computerHand == "✋🏼"
    ) {
        this.result = "Both hands are the same🤭";
    }
    else if(this.myHand == "✊🏼" && this.computerHand == "✋🏼"
        || this.myHand == "✋🏼" && this.computerHand == "✌🏼"
        || this.myHand == "✌🏼" && this.computerHand == "✊🏼"){
        this.result = "You lose😔";
        this.computerScore++;
    }
    else if(this.myHand == "✋🏼" && this.computerHand == "✊🏼"
         || this.myHand == "✊🏼" && this.computerHand == "✌🏼"
         || this.myHand == "✌🏼" && this.computerHand == "✋🏼"){
        this.result = "You win😍"
        this.userScore++
    }
  },
  methods:{
    playAgain(){
      this.$router.push('/loading')
    }
  }
};
</script>

<style scoped>
.results {
  display: flex;
}
.results div {
  margin: 50px;
}
#result{
  /* font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif; */
  color: rgb(87, 13, 62);
  text-shadow: 2px 2px 4px rgb(99, 69, 89);

}
.btn{
   background-color: rgb(87, 13, 62);
    color: #fff;
    padding: 10px;
    text-align: center;
    cursor: pointer;
}
.scores{
  background-color: rgb(119, 84, 108);
  padding: 0 20px;
  margin-top: -20px;
  color: #fff;
  border-radius: 5px;
  text-align: center;
}
</style>