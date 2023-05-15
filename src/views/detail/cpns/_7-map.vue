<template>
		<div class = 'map'>
				<detail-section moreText = '查看更多周边信息' title = '位置周边'>
						<div ref = 'mapRef' class = 'map-inner'>
						</div>
				</detail-section>
		</div>
</template>

<script setup>
import DetailSection from '@/components/detail-section.vue'
import { onMounted, ref } from 'vue'


const props = defineProps({
		positionModule: {
				type: Object,
				default: () => ({})
		}
})

const mapRef = ref()
onMounted(() => {
		var map = new BMapGL.Map(mapRef.value);
		var point = new BMapGL.Point(props.positionModule.longitude,props.positionModule.latitude);
		var marker = new BMapGL.Marker(point);        // 创建标注
		map.addOverlay(marker);                     // 将标注添加到地图中
		map.centerAndZoom(point, 14);
})
</script>

<style scoped>
.map-inner {
		margin: 10px 20px;
		width: 340px;
		height: 250px;
		border-radius: 10px;
}
</style>
