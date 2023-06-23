<template>
  <img class="logo" alt="Vue logo" src="../assets/restaurant-logo.jpg"/>
  <h1>Sign Up</h1>
  <div class="register">
	<input type="text" v-model="name" placeholder="Enter Name" />
	<input type="text" v-model="email" placeholder="Enter Email" />
	<input type="password" v-model="password" placeholder="Enter Password" />
	<button @click="SignUp">SignUp</button>
	<p>
		<router-link to="/login">Login</router-link>
	</p>
  </div>
</template>

<script>
import axios from "axios"
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
export default {
	name : 'SignUp',

	setup () {
		let name = ref();
		let email = ref();
		let password = ref();
		const router = useRouter();

		const SignUp = async() =>  {

			let result = await axios.post("http://localhost:3000/user", {
				email: email.value,
				password:password.value,
				name: name.value
			});

			if(result.status==201) 
			{
				localStorage.setItem("user-info", JSON.stringify(result.data))
				router.push({name:'HomePage'})
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
		name,
		email,
		password,
		SignUp
		};
	},
}
</script>

<style lang="scss">
</style>