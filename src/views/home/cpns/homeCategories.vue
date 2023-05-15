<template>
		<div class = 'categories container'>
				<template v-for = '(item,index) in homeStore.categoriesList.data' :key = 'index'>
						<div class = 'item'>
								<img :src = 'item.subPictureUrl' alt = ''>
								<span class='text'>{{ item.title }}</span>
						</div>
				</template>
		</div>
</template>

<script setup>
import useHome from '@/store/modules/home.js'


const homeStore = useHome()
homeStore.getHomeCategoriesFN()
</script>


<style lang = 'scss' scoped>
.categories {
		display: flex;
		height: 80px;
		overflow-x: auto;
		&::-webkit-scrollbar{display: none}
		.item {
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				flex-shrink: 0;
				width: 70px;
				img{
						width: 32px;
						height: 32px;
				}
				.text{
						font-size: 12px;
						margin-top: 8px;
				}
		}
		
	
}
</style>
