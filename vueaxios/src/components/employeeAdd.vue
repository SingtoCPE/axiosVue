<template>
  <form id="employee-add">
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
      </ul>
    </p>

    <div class="pb-5 margin-test">
      <label for="name">Name:</label>
      <input id="name" v-model="employee.firstName" type="text" placeholder="Your name..." />
    </div>

    <div class="pb-5 margin-test">
      <label for="age">Age:</label>
      <input id="age" v-model="employee.age" type="text" placeholder="Age..." />
    </div>

    <div class="pb-5 margin-test">
      <label>Position:</label>
      <select id="position" :value="employee.position" v-on:change="inputAddPosition">
        <option value="Developer">Developer</option>
        <option value="Employee Management">Employee Management</option>
        <option value="Maid">Maid</option>
        <option value="Receptionist">Receptionist</option>
        <option value="System Analysis">System Analysis</option>
        <option value="System Engineering">System Engineering</option>
      </select>
    </div>

    <div class="pb-5 margin-test">
      <label for="salary">Salary:</label>
      <input id="salary" v-model="employee.salary" type="number" placeholder="Salary..." />
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
  watch: {
    complete(newValue) {
      if (newValue) {
        this.clearForm();
      }
      this.$emit("reset-complete", { isReset: false });
    }
  },
  methods: {
    addEmployee() {
      this.$emit(
        "child-clickAdd",
        this.employee.firstName,
        this.employee.age,
        this.employee.position,
        this.employee.salary
      );
    },

    inputAddPosition(position) {
      this.employee.position = position.target.value;
    },
    validateForm() {
      if (
        this.employee.firstName &&
        this.employee.age &&
        this.employee.position &&
        this.employee.salary
      ) {
        this.addEmployee();
      }
      this.errors = [];
      if (!this.employee.firstName) {
        this.errors.push("Name required.");
      }
      if (!this.employee.age) {
        this.errors.push("Age required.");
      }
      if (!this.employee.position) {
        this.errors.push("Position required.");
      }
      if (!this.employee.salary) {
        this.errors.push("Salary required.");
      }
    },
    clearForm() {
      this.employee.firstName = "";
      this.employee.age = "";
      this.employee.position = "";
      this.employee.salary = "";
      console.log({ employee: this.employee });
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