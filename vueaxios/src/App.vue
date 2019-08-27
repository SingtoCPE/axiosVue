<template>
<body>
  <h1 id="head">Employee Management</h1>
  <div id="container">
    <fieldset>
      <legend>
        <h1>Employee Add</h1>
      </legend>
      <employee-add id="formAdd" />
    </fieldset>

    <fieldset>
      <legend>
        <h1>Employee Table</h1>
      </legend>
      <button id="buttonGet" @click="getEmployee()">Get Employee</button>
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
          <td>
            <employee-delete @click="deleteEmployee(item.id)" />
          </td>
        </tr>
      </table>
    </fieldset>
    
  </div>
</body>
</template>

<script>
import axios from "axios";
import employeeDelete from "@/components/employeeDelete.vue";
import employeeAdd from "@/components/employeeAdd.vue";

const endpoint = "http://localhost:3000/employee";
const endpointDelete = "http://localhost:3000/employee/delete";

export default {
  components: {
    employeeDelete,
    employeeAdd
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
    },
    async deleteEmployee(id) {
      await axios.post(`${endpointDelete}`, { id });
      this.getEmployee();
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
h1 {
  color: rgb(94, 94, 94);
}
fieldset {
  color: rgb(94, 94, 94);
}
#head {
  text-align: center;
  font-size: 60px;
  color: rgb(167, 29, 29);
  border: 5px;
}
#buttonGet {
  background-color: rgb(24, 218, 127);
  margin-bottom: 8px;
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
#formAdd {
  margin-bottom: 20px;
}
#container {
  margin: 25px 200px 20px 200px;
}
</style>