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
  margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app html{
  font-size: 10px;
	font-family: "Roboto Cn", sans-serif;
}

#app header{
	width: 100%;
	height: 100vh;
	background: linear-gradient(to bottom, rgba(0,0,0,.8), rgba(0,0,0,.5)), url("https://static.techspot.com/images2/news/bigimage/2018/05/2018-05-30-image-23.jpg") center no-repeat;
	background-size: cover;
	position: absolute;
}
</style>
