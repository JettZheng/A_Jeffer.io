<template>
    <div class="s-m">
      <a href="#"><i class="fab fa-facebook-f"></i></a><br>
      <a href="#"><i class="fab fa-twitter"></i></a><br>
      <a href="#"><i class="fab fa-google-plus-g"></i></a><br>
      <a href="#"><i class="fab fa-youtube"></i></a><br>
      <a href="#"><i class="fab fa-instagram"></i></a><br>
    </div>
</template>

<script>
export default {
    name:'SocialLink'
}
</script>

<style scoped>
.s-m{
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translate(-50%,-50%);
}
.s-m a{
  display: inline-flex;
  width: 40px;
  height: 40px;
  background: #19212d0d;
  color: white;
  margin: 0 6px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  font-size: 22px;
}
.s-m a:hover{
  background: #f39e3c;
}
.s-m a i{
  transition: 0.4s all;
}
.s-m a:hover > i{
  transform: scale(1.4) rotate(25deg);
}
</style>
