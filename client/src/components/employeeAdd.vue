<template>
  <form id="employee-add">
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
    </p>
    <ul>
      <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
    </ul>

    <div class="pb-5 margin-test">
      <label for="name">Name:</label>
      <input id="name" v-model="employee.firstName" type="text" placeholder="Your name..." />
    </div>

    <div class="pb-5 margin-test">
      <label for="age">Age:</label>
      <input id="age" v-model="employee.age" type="number" placeholder="Age..." />
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

    <div class="pb-5 margin-test">
      <label for="salary">Phone:</label>
      <input id="salary" v-model="employee.phone" type="number" placeholder="Phone..." />
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
        age: "",
        position: "",
        salary: "",
        phone: ""
      },
      nameValidate: "",
      ageValidate: "",
      salaryValidate: ""
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
        this.employee.salary,
        this.employee.phone
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

      const ageRex = /^(0?[1-9]|[1-9][0-9])$/g;
      const ageResults = ageRex.test(this.employee.age);
      console.log({ageResults});

      const phoneRex = /^[0]\d{9}/g;
      const phoneResults = phoneRex.test(this.employee.phone);
      console.log({phoneResults});

      const nameRex = /^[A-Z]\D[a-z]+/g;
      const nameResults = nameRex.test(this.employee.firstName);
      console.log({nameResults});

      const salaryRex = /^\d{1,10}/g;
      const salaryResults = salaryRex.test(this.employee.salaryRex);
      console.log({salaryResults});

      if (!nameResults || !this.employee.firstName) {
        this.errors.push("Name must begin with a capital letter, must not be blank !");
      }
      if (!ageResults || !this.employee.age) {
        this.errors.push("Age must be a number between 1-100, must not be blank !");
      }
      if (!this.employee.position) {
        this.errors.push("Position, must not be blank !");
      }
      if (!salaryResults || !this.employee.salary) {
        this.errors.push("Salary must be a number, must not be blank !");
      }
      if (!phoneResults) {
        this.errors.push("Phone must be a 10 digit number, must not be blank !");
      }
    },
    clearForm() {
      this.employee.firstName = "";
      this.employee.age = "";
      this.employee.position = "";
      this.employee.salary = "";
      this.employee.phone = "";
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