<template>
  <div class="loading-wrapper" v-if="loading">
    <h2>ROCK PAPER SCISSORS</h2>
    <p>I'm gonna go with :</p>
    <!-- <select>
                  <option value="rock" @change="selectValue('rock')">Rock</option>
                  <option value="paper" @change="selectValue('paper')">Paper</option>
                  <option value="scissors" @change="selectValue('scissors')">Scissors</option>
    </select> -->
    <div class="select">
      <div class="option" @click="selectValue('rock')">Rock</div>
      <div class="option" @click="selectValue('paper')">Paper</div>
      <div class="option" @click="selectValue('scissors')">Scissors</div>
    </div>
    <p>
      <span class="choice">{{ selectedValue }}</span>
      <span v-if="selected"> ☑️</span>
    </p>
    <span v-if="errorMsg">Please choose something ...</span>
    <span class="go-btn" @click="startGame()">GO</span>
  </div>
  <div v-else>
    <game></game>
  </div>
</template>

<script>
import Game from "./Game.vue";
export default {
  components: {
    Game,
  },
  data() {
    return {
      selectedValue: "Not Selected yet ... ",
      loading: true,
      selected: false,
      errorMsg: false
    };
  },
  methods: {
    startGame() {
      this.loading = false;
      // if(this.selectedValue = "Not Selected yet ... "){
      //   this.errorMsg = true;
      // }
    },
    selectValue(value) {
      this.selectedValue = value;
      this.selected = true;
      this.selectedValue.toUpperCase() // I dont know why it doesnt works
      if (value == "scissors") {
        this.$store.state.userHand = "✌🏼"
      }
      else if (value == "rock") {
        this.$store.state.userHand = "✊🏼"
      }
      else {
        this.$store.state.userHand = "✋🏼" 
      }
    },
  },
};
</script>

<style scoped>
.loading-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.choice {
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-top: 40px;
  margin-bottom: 0;
}
h2 {
  color: rgb(5, 0, 99);
  font-size: 40px;
}
p {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 40px;
}
.select {
  padding: 5px;
  text-align: center;
  border: 1px solid rgb(0, 0, 65);
}
.option {
  padding: 10px 30px;
}
.option:hover {
  cursor: pointer;
  background-color: rgb(0, 0, 79);
  color: #fff;
}
.go-btn {
  display: block;
  color: #fff;
  text-align: center;
  background-color: rgb(10, 9, 65);
  border-radius: 7px;
  padding: 10px;
  margin-top: 35px;
  cursor: pointer;
  width: 20%;
  box-shadow: 2px 2px 5px rgb(99, 97, 148);
}
.go-btn:hover {
  background-color: rgb(5, 0, 99);
}
/* span{
  margin-top: 20px;
} */
</style>