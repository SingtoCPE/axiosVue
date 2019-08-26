<template>
  <button @click="makeRequest()">Make Multiple Requests</button>

</template>

<script>
import axios from "axios";

const endpoint = "http://localhost:3000/employee";

export default {
  methods: {
    async makeRequest() {
      const { data } = await axios.get(`${endpoint}`);

      console.log(data[0]);

    }
  }
};
</script>


<style>
</style>