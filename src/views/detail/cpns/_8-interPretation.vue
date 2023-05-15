<template>
	<div class='interPredation'>
			<div class='priceDescription'>
			<h3>
			{{introductionModule.title}}
			</h3>
					<span>{{introductionModule.introduction}}</span>
			</div>
			<div class='bottom'>
					<img src='@/assets/img/detail/icon_ensure.png' alt=''>
			</div>
	</div>
</template>

<script setup>
defineProps({
		introductionModule:{
				type:Object,
				default:()=>({})
		}
})
</script>

<style scoped lang='scss'>
.interPredation{
		.priceDescription{
				padding: 0 20px;
				border-top: 10px solid #f1f3f5;
				h3{
						font-size: 16px;
						font-weight: 600;
						color: #333333;
				}
				span{
						display: inline-block;
						height: 45px;
						margin-top: 8px;
						position: relative;
						font-size: 12px;
						color: #666;
						line-height: 15px;
						text-align: justify;
						max-height: 60px; /* modified value */
						overflow: hidden;
				}
		}
		.bottom{
				background: #f1f3f5;
				display: flex;
				align-items: center;
				justify-content: center;
				img{
						margin-top: 20px;
						width: 123px;
						height: 17px;
				}
		}
}
</style>
