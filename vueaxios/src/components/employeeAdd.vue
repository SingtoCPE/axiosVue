<template>
  <div id="employee-add">
    Name:
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
    &nbsp;
    <button id="buttonAdd" @click="addEmployee()">Add</button>
  </div>
</template>
<script>
export default {
  name: "employeeAdd",
  data() {
    return {
      employee: {
        firstName: "",
        age: null
      }
    };
  },
  methods: {
    async addEmployee() {
      this.$emit("child-clickAdd", this.employee.firstName, this.employee.age); // use state
      console.log(this.employee.firstName, this.employee.age);
    },
    inputAddFirstname(firstName) {
      this.employee.firstName = firstName.target.value;  // set state
    },
    inputAddAge(age) {
      this.employee.age = age.target.value; // set state
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