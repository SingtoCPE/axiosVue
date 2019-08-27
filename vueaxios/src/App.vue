<template>
<body>
  <h1 id="head">Employee Show Data</h1>
  <div id="container">
    <button id="buttonGet" @click="getEmployee()">Get Employee</button>
    <employee-form/>
    <hr />
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
  </div>
</body>
</template>

<script>
import axios from "axios";
import employeeForm from "@/components/employeeForm.vue";

const endpoint = "http://localhost:3000/employee";

export default {
  components: {
    employeeForm
  },
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
  width: 30%;
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
#head {
  text-align: center;
}
#buttonGet {
  background-color: rgb(24, 218, 127);
  margin: 10 10 10 700;
  color: black;
  padding: 5px 10px;
  text-align: center;
  font-size: 15px;
}
hr {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
}
#container {
}
</style>