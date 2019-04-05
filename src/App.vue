<template>
  <div id="app">
    <NavBar/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  overflow: hidden;
}

/* #app html{
  font-size: 10px;
	font-family: "Roboto Cn", sans-serif;
}  */

body{
  margin: 0 !important;
}
</style>
