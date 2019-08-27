<template>
  <div id="employee-add">
    Name:
    <input type="text" placeholder=">>your name..." />
    Age :
    <input type="text" placeholder=">>age..." />
    &nbsp;
    <button id="buttonAdd" @click="submitAdd(employee.first_name,employee.age)">Add</button>
  </div>
</template>
<script>
import axios from "axios";

const endpointAdd = "http://localhost:3000/employee/add";

export default {
  name: "employeeAdd",
  data() {
    return {
      employee: {
        first_name: String,
        default: "",
        age: Number,
        default: ""
      }
    };
  },
  methods: {
    async submitAdd(first_name, age) {
      await axios.post(`${endpointAdd}`, { first_name, age });
    }
  }
};
</script>
<style>
#buttonAdd {
  background-color: rgb(37, 88, 255);
  color: black;
  padding: 5px 10px;
  text-align: center;
  font-size: 15px;
}
</style>