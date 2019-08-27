<template>
  <div id="employee-form">
    <button id="buttonDelete" v-on="$listeners">Delete</button>
  </div>
</template>

<script>
import axios from "axios";

const endpoint = "http://localhost:3000/employee/delete";
export default {
  name: "employeeForm",
  props: {
    id: {
      type: Number,
      default: null
    }
  },
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