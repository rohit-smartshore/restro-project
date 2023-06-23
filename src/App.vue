<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
 
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
//   margin-top: 60px;
}

body {
	padding: 0;
	margin: 0;
}

.logo {
	width: 100px;
}

.register, .login, .add-restaurant {
	
	input { 
	width: 300px;
    height: 40px;
    display: block;
    padding-left: 20px;
    margin: 40px auto;
    border: 1px solid darkgreen;
    border-radius: 20px;
	}

	button {
		width: 320px;
		height: 40px;
		border: 1px solid darkgreen;
		border-radius: 20px;
	}

	p {
		a {
			text-decoration: none;
			color: black;
		}
	}
}
</style>
