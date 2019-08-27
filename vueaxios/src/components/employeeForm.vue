<template>
  <div id="employee-form">
    <button id="buttonDelete" @click="deleteEmployee()">Delete</button>
  </div>
</template>

<script>
import axios from "axios";

const endpoint = "http://localhost:3000/employee";
export default {
  name: "employeeForm",
  methods: {
    async deleteEmployee(){
      const { data } = await axios.get(`${endpoint}`);
      this.items = [...data];

      console.log(data);
    }
  }
};
</script>

<style scoped>
#buttonDelete {
  background-color: rgb(255, 37, 102);
  margin: 10 10 10 700;
  color: black;
  padding: 5px 36px;
  text-align: center;
  font-size: 15px;
}
</style>