<template>
    <div class="s-m">
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-google-plus-g"></i></a>
      <a href="#"><i class="fab fa-youtube"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
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
  left: 3%;
  transform: translate(-50%,-50%);
}

.s-m a{
  display: -webkit-flex;
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
  text-decoration: none;
  list-style: none;
	transform: translateX(-10rem);
	animation: slideIn 1.5s forwards;
}

/* .s-m a:nth-child(1){
	animation-delay: 0s;
}

.s-m a:nth-child(2){
	animation-delay: 0.05s;
}

.s-m a:nth-child(3){
	animation-delay: 0.1s;
}

.s-m a:nth-child(4){
	animation-delay: 0.15s;
}

.s-m a:nth-child(5){
	animation-delay: 0.2s;
} */

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
