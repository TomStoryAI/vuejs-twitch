<template>
  <div class="calculator">
    <div class="row">
      <div class="result">{{message}}</div>
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
  calcResult(event: MouseEvent) {
    const numberQueue: number[] = [];
    const operatorQueue: string[] = [];
    const messageCharacters = Array.from(this.message);
    let number = "";
    messageCharacters.forEach(element => {
      if (element == "+") {
        numberQueue.push(Number.parseInt(number));
        operatorQueue.push("+");
        number = "";
      } else if (element == "-") {
        numberQueue.push(Number.parseInt(number));
        operatorQueue.push("-");
        number = "";
      } else {
        number += element;
      }
    });
    numberQueue.push(Number.parseInt(number));
    console.log(numberQueue);
    console.log(operatorQueue);
    while (numberQueue.length != 1) {
      console.log(numberQueue);
      const number1 = numberQueue.shift();
      const number2 = numberQueue.shift();
      const operand = operatorQueue.shift();
      if (operand == "+") {
        numberQueue.push(number1! + number2!);
      } else if (operand == "-") {
        numberQueue.push(number1! - number2!);
      }
    }
    console.log(numberQueue);
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