<template>
  <div id="employee-delete">
    <button id="buttonDelete" @click="deleteEmployee(id)">Delete</button>
  </div>
</template>

<script>

export default {
  name: "employeeDelete",
  props: {
    id: {
      type: Number,
      default: null
    }
  },
  methods:{
    deleteEmployee(id) {
      this.$emit('child-click-delete',id);
    }
  }
};
</script>

<style scoped>
#buttonDelete {
  background-color: rgb(228, 7, 73);
  margin: 10 10 10 700;
  color: black;
  padding: 2px 10px;
  text-align: center;
  font-size: 15px;
  }
</style>