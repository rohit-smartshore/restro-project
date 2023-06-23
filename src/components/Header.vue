<template>
	<div class="nav">
		<router-link to="/">Homes</router-link>
		<router-link to="/addrestaurant">Add Restaurant</router-link>
		<a @click="logout" href="#">Logout</a>
	</div>
</template>

<script>
import { useRouter } from "vue-router";


export default {
	name:'HeaderSection',

	setup() {
		let router = useRouter();

		const logout = () => {
			localStorage.clear();
			router.push('/login');
		}

		return {
			logout
		}
	}
}
</script>

<style lang="scss">
.nav {
	background: #333;
	text-align: left;
	padding: 14px 14px;

	a {
		color: beige;
		font-size: 20px;
		text-decoration: none;
		padding: 14px 14px;

		&:hover {
			background: #ddd;
			color: #333;
		}
	}

	
}

</style>