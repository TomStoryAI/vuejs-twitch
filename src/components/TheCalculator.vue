<template>
  <div class="calculator">
    <div class="row">
      <div class="result">{{ message }}</div>
    </div>
    <div class="row">
      <button v-on:click="addToText" class="column">1</button>
      <button v-on:click="addToText" class="column">2</button>
      <button v-on:click="addToText" class="column">3</button>
    </div>
    <div class="row">
      <button v-on:click="addToText" class="column">4</button>
      <button v-on:click="addToText" class="column">5</button>
      <button v-on:click="addToText" class="column">6</button>
    </div>
    <div class="row">
      <button v-on:click="addToText" class="column">7</button>
      <button v-on:click="addToText" class="column">8</button>
      <button v-on:click="addToText" class="column">9</button>
    </div>
    <div class="row">
      <button v-on:click="addToText" class="column">+</button>
      <button v-on:click="addToText" class="column">0</button>
      <button v-on:click="addToText" class="column">-</button>
    </div>
    <div class="row">
      <button v-on:click="calcResult" class="column">=</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TheCalculator extends Vue {
  private message = "0";
  addToText(event: MouseEvent) {
    const button = event.target as HTMLElement;
    this.message += button.innerText;
  }

  // Versuch 1 Schleifendurchlauf split 2.ter schleifendurchlauf berechnung
  calcResult() {
    // Zahl 1
    // Operator #firstRun
    // Zahl2 | Zahl 1
    // Operator
    // Zahl3 |
    const messageCharacters = Array.from(this.message);
    let stringOne = "";
    let stringTwo = "";
    let numberTotal = 0;
    let operation = "";
    if (messageCharacters[0] == "-") {
      messageCharacters.unshift("0");
    }

    // 0-100+200
    messageCharacters.forEach(element => {
      if (element == "+") {
        if (operation == "") {
          operation = "+";
        } else {
          if (operation == "+") {
            numberTotal = parseInt(stringOne) + parseInt(stringTwo);
          } else {
            numberTotal = parseInt(stringOne) - parseInt(stringTwo);
          }
          stringOne = numberTotal + "";
          stringTwo = "";
          operation = "+";
        }
      } else if (element == "-") {
        if (operation == "") {
          operation = "-";
        } else {
          if (operation == "+") {
            numberTotal = parseInt(stringOne) + parseInt(stringTwo);
          } else {
            numberTotal = parseInt(stringOne) - parseInt(stringTwo);
          }
          stringOne = numberTotal + "";
          stringTwo = "";
          operation = "-";
        }
      } else if (operation == "") {
        stringOne += element;
      } else if (operation != "") {
        stringTwo += element;
      }
    });
    console.log(numberTotal);
    if (operation == "+") {
      numberTotal = parseInt(stringOne) + parseInt(stringTwo);
      console.log(numberTotal);
    }
    if (operation == "-") {
      numberTotal = parseInt(stringOne) - parseInt(stringTwo);
      console.log(numberTotal);
    }

    this.message = numberTotal + "";
  }
}
</script>
<style scoped>
.result {
  width: 100%;
  text-align: right;
  font-size: 4em;
  border-style: solid;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100px;
}

.column {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  font-size: 3em;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}
</style>
