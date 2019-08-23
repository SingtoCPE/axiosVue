<template>
  <div id="app">
    <img src="./assets/logo.png"> <br>
    <button @click="getUser()">get User from API</button> <br>
    {{user}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    HelloWorld
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