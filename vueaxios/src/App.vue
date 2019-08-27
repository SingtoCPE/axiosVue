<template>
<body>
  <button @click="getEmployee()">Get Employee</button>
  <table>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>AGE</th>
    </tr>
    <tr div v-for="item in items" v-bind:key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.first_name}}</td>
      <td>{{item.age}}</td>
    </tr>
  </table>
</body>
</template>

<script>
import axios from "axios";

const endpoint = "http://localhost:3000/employee";

export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async getEmployee() {
      const { data } = await axios.get(`${endpoint}`);
      this.items = [...data];

      console.log(data);
    }
  }
};
</script>


<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>