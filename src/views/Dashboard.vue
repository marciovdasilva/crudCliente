<template>
  <div class="container">
    <ClientList/>
  </div>
</template>

<script>
import { db } from "../firebase/init";
import ClientList from "../components/ClientList";

export default {
  components: {
    ClientList
  },
  data() {
    return {
      nomeCliente: "Marcio",
      nomesDeClientes: [],
      filteredclients:[],
      client:{}
    };
  },
  methods: {
  },
};
</script>