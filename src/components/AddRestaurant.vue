<template>
	<h1>Welcome to Add Restaurant Page</h1>
	<div class="add-restaurant">
	<input type="text" v-model="res_name" placeholder="Enter Restaurant Name" />
	<input type="text" v-model="res_contact" placeholder="Enter Restaurant Contact Number" />
	<input type="text" v-model="res_address" placeholder="Enter Restaurant Address" />
	<button @click="add">add</button>
	</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios';
export default {
	name:'AddRestaurant',

	setup() {
		let res_name = ref('');
		let res_contact = ref('');
		let res_address = ref('');
		let router = useRouter();

		const add = async() => {
			let result = await axios.post("http://localhost:3000/restaurants", {
				name: res_name.value,
				contact: res_contact.value,
				address: res_address.value
			})
			
			if(result.status==201) 
			{
				router.push({name:'HomePage'})
			}
		}

		onMounted(() => {
				let user= localStorage.getItem('user-info');
				if (!user)
				{
					router.push({name:'SignUp'})
				}
			})

		return {
			add,
			res_name,
			res_contact,
			res_address,
		}	

		},
	
}
</script>