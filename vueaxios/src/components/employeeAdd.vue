<template>
  <form id="employee-add">
    Name :
    <input
      :first-name="employee.firstName"
      v-on:change="inputAddFirstname"
      type="text"
      placeholder=">>your name..."
    />
    Age :
    <input
      :age="employee.age"
      v-on:change="inputAddAge"
      type="text"
      placeholder=">>age..."
    />
    Position :
    <select
      :position="employee.position"
      v-on:change="inputAddPosition"
      >
      <option value="position" >Position</option>
      <option value="Developer">Developer</option>
      <option value="System Analysis">System Analysis</option>
      <option value="System Engineering">System Engineering</option>
    </select>
    <br />
    <br />Salary :
    <input
      :salary="employee.salary"
      v-on:change="inputAddSalary"
      type="number"
      placeholder=">>salary..."
    />
    &nbsp;
    <button id="buttonAdd" @click.prevent="addEmployee()">ADD</button>
  </form>
</template>
<script>
export default {
  name: "employeeAdd",
  data() {
    return {
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
      this.$emit(
        "child-clickAdd",
        this.employee.firstName,
        this.employee.age,
        this.employee.position,
        this.employee.salary
      ); // use state
      console.log(
        this.employee.firstName,
        this.employee.age,
        this.employee.position,
        this.employee.salary
      );
    },
    inputAddFirstname(firstName) {
      this.employee.firstName = firstName.target.value; // set state
    },
    inputAddAge(age) {
      this.employee.age = age.target.value; // set state
    },
    inputAddPosition(position) {
      this.employee.position = position.target.value; // set state
    },
    inputAddSalary(salary) {
      this.employee.salary = salary.target.value; // set state
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
  margin-left: 10px;
}
</style>