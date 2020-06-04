<template>
  <div class="calculator">
    <h1>VueJS - Twitch Calculator</h1>
    <TheCalculator />
  </div>
</template>

<script>
// @ is an alias to /src
import TheCalculator from "@/components/TheCalculator.vue";

export default {
  name: "Calculator",
  components: {
    TheCalculator
  }
};
</script>
