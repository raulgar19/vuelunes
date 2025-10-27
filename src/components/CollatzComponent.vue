<template>
  <h1>Conjetura de Collatz</h1>
  <input type="number" v-model="numero" />
  <button @click="conjetura()">Ver conjetura</button>
  <hr />
  <ul>
    <li v-for="num in serie" :key="num" v-html="$filters.changeColor(num)"></li>
  </ul>
</template>

<script>
export default {
  name: "CollatzComponent",
  data() {
    return {
      numero: 0,
      serie: [],
    };
  },
  methods: {
    conjetura() {
      var num = this.numero;
      this.serie = [];

      this.serie.push(num);

      while (num !== 1) {
        if (num % 2 == 0) {
          num = num / 2;
          this.serie.push(num);
        } else {
          num = num * 3 + 1;
          this.serie.push(num);
        }
      }
    },
  },
};
</script>
