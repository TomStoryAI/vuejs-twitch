<template>
  <div class="calculator">
    <div class="row">
      <div class="result">{{ message }}</div>
    </div>
    <div class="row">
      <button @click="addToText" class="column">1</button>
      <button @click="addToText" class="column">2</button>
      <button @click="addToText" class="column">3</button>
    </div>
    <div class="row">
      <button @click="addToText" class="column">4</button>
      <button @click="addToText" class="column">5</button>
      <button @click="addToText" class="column">6</button>
    </div>
    <div class="row">
      <button @click="addToText" class="column">7</button>
      <button @click="addToText" class="column">8</button>
      <button @click="addToText" class="column">9</button>
    </div>
    <div class="row">
      <button @click="addToText" class="column">+</button>
      <button @click="addToText" class="column">0</button>
      <button @click="addToText" class="column">-</button>
    </div>
    <div class="row">
      <button @click="calcResult" class="column">=</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TheCalculator extends Vue {
  private message = "0";
  keyMapping = new Map();

  keyToText(key: string) {
    console.log("wasup bro");
    this.message += key;
    console.log(this.message);
    this.$forceUpdate;
  }

  addToText(event: MouseEvent) {
    const button = event.target as HTMLElement;
    this.message += button.innerText;
  }

  calcResult() {
    const messageCharacters = Array.from(this.message);
    let stringOne = "";
    let stringTwo = "";
    let numberTotal = 0;
    let operation = "";
    if (messageCharacters[0] == "-") {
      messageCharacters.unshift("0");
    }

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
    if (operation == "+") {
      numberTotal = parseInt(stringOne) + parseInt(stringTwo);
    }
    if (operation == "-") {
      numberTotal = parseInt(stringOne) - parseInt(stringTwo);
    }

    this.message = numberTotal + "";
  }

  initMap() {
    console.log("Initializing keys for calcultor");
    this.keyMapping.set("96", "0");
    this.keyMapping.set("97", "1");
    this.keyMapping.set("98", "2");
    this.keyMapping.set("99", "3");
    this.keyMapping.set("100", "4");
    this.keyMapping.set("101", "5");
    this.keyMapping.set("102", "6");
    this.keyMapping.set("103", "7");
    this.keyMapping.set("104", "8");
    this.keyMapping.set("105", "9");
    this.keyMapping.set("107", "+");
    this.keyMapping.set("109", "-");
  }

  keyPress(e: KeyboardEvent) {
    const key = e.which || e.keyCode;
    console.log("Caught Key Event for:" + key);
    if (key == 13) {
      this.calcResult();
    } else if (this.keyMapping.has(key + "")) {
      this.keyToText(this.keyMapping.get(key + ""));
    }
  }

  destroyed() {
    window.removeEventListener("keydown", this.keyPress);
  }

  mounted() {
    this.initMap();
    window.addEventListener("keydown", this.keyPress);
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
