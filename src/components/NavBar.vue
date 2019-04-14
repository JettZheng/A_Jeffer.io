<template>
<div class="fixed-top">
    <div class="menu-toggle" id="hamburger">
            <i class="fas fa-bars"></i>
        </div>
        <div class="overlay"></div>
        <div class="container">
            <nav>
                <a class="name" href="index.html">Paion Jeffery</a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
</div>
</template>

<script>
export default {
	name:'NavBar'
}
</script>

<style>
.fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
}

.container{
	max-width: 120rem;
	width: 90%;
	margin: 0 auto;
}

.menu-toggle{
	position: fixed;
	top: 2.5rem;
	right: 2.5rem;
	color: #eeeeee;
	font-size: 3rem;
	cursor: pointer;
	z-index: 1000;
	display: none;
}

nav{
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.6rem;
}

.name{
	font-size: 20px;
    color:white;
    text-decoration: none;
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 1.5s;
}

nav ul{
	display: flex;
}

nav ul li{
	list-style: none;
	transform: translateX(55rem);
	animation: slideIn 1.5s forwards;
}

nav ul li:nth-child(1){
	animation-delay: 0s;
}

nav ul li:nth-child(2){
	animation-delay: 0.05s;
}

nav ul li:nth-child(3){
	animation-delay: 0.1s;
}

nav ul li:nth-child(4){
	animation-delay: 0.15s;
}

nav ul li a{
	padding: 8px 15px 10px 15px;
	margin: 0 3rem;
	position: relative;
	font-size: 1rem;
    color: white;
    text-decoration: none;
}

nav ul li a:last-child{
	margin-right: 0;
}

.overlay{
	background-color: rgba(0,0,0,.95);
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	transition: opacity 30ms;
	transform: scale(0);
	opacity: 0;
	display: none;
}

nav ul li a:hover{
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: .5s;
	box-sizing: content-box;
	background: rgb(255, 255, 255);    
	border-radius: 50px;
	color:black;
}

nav ul li a:hover:after{
	animation-name: fadeOutOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-out;
	animation-duration: .5s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes fadeOutOpacity {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

@keyframes slideIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
	from{

	}
	to{
		transform: translateX(0);
	}
}

@media screen and (max-width: 700px){

	.menu-toggle{
		display: block;
	}

	nav{
		padding-top: 0;
		display: none;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		height: 100vh;
		text-align: center;
	}

	nav ul{
		flex-direction: column;
	}

	nav ul li{
		margin-top: 5rem;
	}

	nav ul li a{
		margin: 0;
		font-size: 2.5rem;
	}

	.name{
		font-size: 5rem;
	}
  
  .overlay.menu-open,
  nav.menu-open{
	display: flex;
	transform: scale(1);
	opacity: 1;
  }
  
}
</style>
