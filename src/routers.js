import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import UpdateRestaurant from "./components/UpdateRestaurant.vue";
import AddRestaurant from "./components/AddRestaurant.vue";
import {createRouter,createWebHistory} from "vue-router"

const routes=[
	{
		name:'HomePage',
		component:HomePage,
		path:'/'
	},
	{
		name:'SignUp',
		component:SignUp,
		path:'/register'
	},
	{
		name:'LogIn',
		component:LogIn,
		path:'/login'
	},
	{
		name:'AddRestaurant',
		component:AddRestaurant,
		path:'/addrestaurant'
	},
	{
		name:'UpdateRestaurant',
		component:UpdateRestaurant,
		path:'/updaterestaurant/:id'
	},
	
];

const router = createRouter({
	history:createWebHistory(),
	routes,
})

export default router;