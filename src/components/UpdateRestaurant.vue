<template>
	<h1>Welcome to update Restaurant Page</h1>
	<div class="add-restaurant">
	<input type="text" v-model="res_name" placeholder="Enter Restaurant Name" />
	<input type="text" v-model="res_contact" placeholder="Enter Restaurant Contact Number" />
	<input type="text" v-model="res_address" placeholder="Enter Restaurant Address" />
	<button @click="update">update</button>
	</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from 'axios';
export default {
	name:'UpdateRestaurant',

	setup() {

		let router = useRouter();
		let route = useRoute();
		let res_name = ref();
		let res_address = ref();
		let res_contact = ref();

		const update = async() => {
			let update_result = await axios.put("http://localhost:3000/restaurants/"+route.params.id,{
				name: res_name.value,
				address: res_address.value,
				contact: res_contact.value,
			}) 
			console.log(update_result)

			if(update_result.status == 200)
			{
				router.push({name:'HomePage'})
			}
		}	

		onMounted(async () => {
				let user= localStorage.getItem('user-info');
				if (!user)
				{
					router.push({name:'SignUp'})
				}
				let result =  await axios.get("http://localhost:3000/restaurants/"+route.params.id)
				res_name.value = result.data.name,
				res_address.value = result.data.address,
				res_contact.value = result.data.contact
			});

		return {
			res_name,
			res_address,
			res_contact,
			update
		};

		}
	
}
</script>