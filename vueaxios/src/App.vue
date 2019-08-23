<template>
  <div id="app">
    <button @click="getUser()">get User from API</button> <br>
    {{user}}
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'App',
  components: {
  },
  methods: {
    ...mapActions({
      getUser: 'getUser'
    })
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>

<style>

</style>