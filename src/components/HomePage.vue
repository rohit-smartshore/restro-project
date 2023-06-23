<template>
	<Header />
	<h1>Welcome {{name}} to Home Page</h1>
	<table border="1px" >
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>Contact</th>
			<th>Address</th>
			<th>Update</th>
			<th>Delete</th>
		</tr>
		<tr v-for="item in restaurants" :key="item.id">
			<td>{{item.id}}</td>
			<td>{{item.name}}</td>
			<td>{{item.contact}}</td>
			<td>{{item.address}}</td>
			<td><router-link :to="'/updaterestaurant/'+item.id">Update Restaurant</router-link></td>
			<td><button @click="deleteRes(item.id)">Delete</button></td>
		</tr>
	</table>
</template>

<script>
import { onMounted, ref} from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Header from "./Header.vue"
export default {
	name:'HomePage',

	components: {
		Header
	},

	setup() {

		let router = useRouter();
		let name = ref('');
		let restaurants = ref([]);

		const deleteRes = async(id) => {
			let delete_result = await axios.delete("http://localhost:3000/restaurants/"+id);
			if(delete_result.status == 200){
				loadData();
			}
		};

		const loadData = async() => {
			let user= localStorage.getItem('user-info');
				if(user){
				name.value = JSON.parse(user)[0].name;
				}
				else if (!user)
				{
					router.push({name:'SignUp'})
				}

				let result = await axios.get("http://localhost:3000/restaurants");
				restaurants.value = result.data;
		};

		onMounted(() => {
			loadData();
			});

			return {
				name,
				restaurants,
				deleteRes,
				loadData
			};

		},
	
}
</script>

<style lang="scss">
table {
	width: 40%;
	margin: 0 auto;
}
</style>