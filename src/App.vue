<template>
  <div id="app">
    <div class="background">
          <MainIntro/>
    </div>
    <NavBar/>

  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MainIntro from './components/MainIntro.vue'
export default {
  name: "app",
  components: {
    NavBar,
    MainIntro
  }
};
</script>

<style>
#app {
  font-family: "Gravity-Regular", Helvetica, Arial, sans-serif;
  overflow: hidden;
}

body {
  margin: 0 !important;
}

.background{
  background-image: url('https://devoncrawford.io/static/images/IMG_1691.jpg');
  height: 100vh;
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
}

</style>
