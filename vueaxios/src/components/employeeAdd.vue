<template>
  <form id="employee-add">
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
      </ul>
    </p>
    <div class="pb-5 margin-test">
      <label for="name">Name: </label>
      <input id="name" v-model="employee.firstName" type="text" placeholder="Your name..." />
    </div>
    <div class="pb-5 margin-test">
      <label for="age">Age: </label>
      <input id="age" :value="employee.age" @change="inputAddAge" type="text" placeholder="Age..." />
    </div>
    <div class="pb-5 margin-test">
      <label>Position: </label>
      <select id="position" :position="employee.position" v-on:change="inputAddPosition">
        <option>>>Position...</option>
        <option value="Developer">Developer</option>
        <option value="Employee Management">Employee Management</option>
        <option value="Maid">Maid</option>
        <option value="Receptionist">Receptionist</option>
        <option value="System Analysis">System Analysis</option>
        <option value="System Engineering">System Engineering</option>
      </select>
    </div>
    <div class="pb-5 margin-test">
      <label for="salary">Salary: </label>
      <input
        id="salary"
        :salary="employee.salary"
        @change="inputAddSalary"
        type="number"
        placeholder="Salary..."
      />
    </div>
    <button type="submit" id="buttonAdd" @click.prevent="validateForm">ADD</button>
  </form>
</template>
<script>
import { constants } from "crypto";
export default {
  name: "employeeAdd",
  props: {
    complete: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      errors: [],
      employee: {
        firstName: "",
        age: null,
        position: "",
        salary: null
      }
    };
  },
  methods: {
    addEmployee() {
      console.log("aaa");
      this.$emit(
        "child-clickAdd",
        this.employee.firstName,
        this.employee.age,
        this.employee.position,
        this.employee.salary
      );
      if (this.complete) {
        this.clearForm();
      }
      console.log(
        this.employee.firstName,
        this.employee.age,
        this.employee.position,
        this.employee.salary
      );
    },

    inputAddAge(age) {
      this.employee.age = age.target.value;
    },
    inputAddPosition(position) {
      this.employee.position = position.target.value;
    },
    inputAddSalary(salary) {
      this.employee.salary = salary.target.value;
    },
    validateForm() {
      if (this.employee.firstName && this.employee.age) {
        this.addEmployee();
      }
      this.errors = [];
      if (!this.employee.firstName) {
        this.errors.push("Name required.");
      }
      if (!this.employee.age) {
        this.errors.push("Age required.");
      }
    },
    clearForm() {
      this.employee.firstName = "";
      this.employee.age = "";
      this.employee.position = "";
      this.employee.salary = "";
      console.log(this.employee);
    }
  }
};
</script>
<style>
.margin-test {
  margin: 10px;
}
.pb-5 {
  padding-bottom: 5px;
}
#buttonAdd {
  background-color: rgb(37, 88, 255);
  color: black;
  padding: 5px 10px;
  text-align: center;
  font-size: 15px;
  margin-left: 10px;
}
</style>