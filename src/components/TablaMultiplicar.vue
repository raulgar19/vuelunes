<template>
  <h1>Tabla Multiplicar</h1>
  <h3>Versión 1 - solo metodos</h3>
  <label>Introducir número:</label>
  <input type="number" v-model="numero" />
  <button @click="generarTabla()">
    Generar tabla del {{ this.numero }} (versión 1)
  </button>
  <table v-html="this.data"></table>
  <hr />
  <h3>Versión 2 - solo directivas</h3>
  <label>Introducir número:</label>
  <input type="number" v-model.number="numero" />
  <table v-if="numero > 0">
    <tbody>
      <tr v-for="i in 10" :key="i">
        <td>{{ numero }} * {{ i }} = {{ numero * i }}</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h3>Versión 3 - solo filtros</h3>
  <label>Introducir número:</label>
  <input type="number" v-model="numero" />
  <table>
    <tbody>
      <tr
        v-for="i in 10"
        :key="i"
        v-html="
          $filters.getOperaciones(i, numero) + $filters.getResultado(i, numero)
        "
      ></tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0,
      data: "",
    };
  },
  methods: {
    generarTabla() {
      var data = "";
      data += "<tbody>";
      for (var i = 1; i <= 10; i++) {
        data +=
          "<tr><td>" +
          this.numero +
          " * " +
          i +
          " = " +
          this.numero * i +
          "</td></tr>";
      }
      data += "</tbody>";

      this.data = data;
    },
  },
};
</script>

<style></style>
