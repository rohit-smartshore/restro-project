<template>
  <img class="logo" alt="Vue logo" src="../assets/restaurant-logo.jpg"/>
  <h1>Log In</h1>
  <div class="login">
	<input type="text" v-model="email" placeholder="Enter Email" />
	<input type="password" v-model="password" placeholder="Enter Password" />
	<button @click="login">Login</button>
	<p>
		<router-link to="/register">register</router-link>
	</p>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
export default {
	name : 'LogIn',

	setup () {
		let email = ref();
		let password = ref();
		const router = useRouter();

		const login = async() =>  {

			let result = await axios.get(`http://localhost:3000/user?email=${email.value}&password=${password.value}`);

			if(result.status==200 && result.data.length>0) 
			{
				localStorage.setItem("user-info", JSON.stringify(result.data))
				router.push({name:'HomePage'})
				// console.log(result)
			}
		};

		onMounted(() => {
			let user= localStorage.getItem('user-info');
			if (user)
			{
				router.push({name:'HomePage'})
			}
		})


		return {
		email,
		password,
		login
		};
	},
}
</script>