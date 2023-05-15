<template>
		<div class='section'>
				<div class='header'>
						{{title}}
				</div>
				<div class='counter'>
				<slot>
						默认内容
				</slot>
				</div>
				<div class='footer' v-if='moreText.length'>
						{{ moreText }}
						<van-icon name="arrow" />
				</div>
		</div>
</template>

<script setup>
defineProps({
		title: {
				type: String,
				default: '默认标题'
		},
		moreText:{
				type: String,
				default:''
		}
})
</script>

<style scoped lang='scss'>
.section {
		margin-top: 10px;
		border-top: 10px solid #f1f3f5;
		.header {
				padding: 10px 20px;
				border-bottom: 2px solid #f3f3f3;
				font-weight: 700;
				font-size: 20px;
				margin: 0 0 10px;
		}
		
		.footer{
				display: flex;
				justify-content: flex-end;
				color: #ff9854;
				font-size: 14px;
				align-items: center;
				height: 44px;
				line-height: 44px;
				margin-right: 20px;
		}
}
</style>
