<template>
		<div class='keyWord'>
				<div class='font' @click='enterSearch'>
				关键字/位置/民宿名
				</div>
		<!--关键词搜索界面-->
		
		</div>
</template>

<script setup>
import { useRouter } from 'vue-router'


const router=useRouter()
const enterSearch=()=>{
		router.push('/keySearch')
}
</script>

<style scoped lang='scss'>

.keyWord{
		height: 40px;
.font{
		display: flex;
		line-height: 40px;
		padding: 0 20px;
		font-size: 14px;
		color: #999999;
}
}
</style>
