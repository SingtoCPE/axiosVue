<template>
<body>
  <h1 id="head">Employee Management</h1>
  <div id="container">
    <fieldset>
      <legend>
        <h1>Employee Add</h1>
      </legend>
      <employee-add
        id="formAdd"
        :complete="complete"
        @reset-complete="resetComplete"
        @child-clickAdd="addEmployee"
      />
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
          <th>POSITION</th>
          <th>SALARY</th>
          <th>PHONE</th>
        </tr>
        <tr div v-for="item in items" v-bind:key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.first_name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.position}}</td>
          <td>{{item.salary}}</td>
          <td>{{item.phone}}</td>
          <td>
            <employee-delete :id="item.id" @child-click-delete="deleteEmployee" />
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
const endpointAdd = "http://localhost:3000/employee/add";

export default {
  components: {
    employeeDelete,
    employeeAdd
  },
  data() {
    return {
      items: [],
      complete: false
    };
  },
  methods: {
    async getEmployee() {
      const { data } = await axios({
        method: "get",
        url: endpoint
      });
      this.items = [...data];
    },
    async deleteEmployee(id) {
      await axios({
        method: "post",
        url: endpointDelete,
        data: {
          id
        }
      });
      this.getEmployee();
    },
    async addEmployee(first_name, age, position, salary, phone) {
      const res = await axios({
        method: "post",
        url: endpointAdd,
        data: {
          first_name,
          age,
          position,
          salary,
          phone
        }
      });
      if (res.data) {
        this.complete = true;
        this.getEmployee();
      }
    },
    resetComplete({ isReset }) {
      this.complete = isReset;
    }
  }
};
</script>


<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: auto;
}

td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: rgb(122, 145, 221);
  color: black;
}

tr:nth-child(even) {
  background-color: rgb(225, 241, 255);
}
h1 {
  color: rgb(228, 7, 73);
}
fieldset {
  color: rgb(94, 94, 94);
}
#head {
  text-align: center;
  font-size: 60px;
  color: rgb(228, 7, 73);
  border: 5px;
}
#buttonGet {
  background-color: rgb(24, 218, 127);
  margin-bottom: 8px;
  color: black;
  padding: 2px 10px;
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