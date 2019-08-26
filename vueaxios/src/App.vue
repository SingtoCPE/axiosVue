<template>
<body>
  <button @click="getEmployee()">Get Employee</button>
  <ul>
    <li v-for="item in items" v-bind:key="item.id">{{item}}</li>
  </ul>
</body>
</template>

<script>
import axios from "axios";

const endpoint = "http://localhost:3000/employee";

export default {
  data() {
    return {
      items:[]
    };
  },
  methods: {
    async getEmployee() {
      const { data } = await axios.get(`${endpoint}`);
      this.items = [...data]

      console.log(data);
    }
  }
};
</script>


<style>
</style>