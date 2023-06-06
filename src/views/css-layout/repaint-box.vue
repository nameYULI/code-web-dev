<template>
  <div id="target">重绘 repaint</div>
</template>
<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const target = document.getElementById('target')
  var flag = false
  setInterval(function () {
    flag = !flag
    target.style.opacity = flag ? 0 : 1
  }, 1000)
})
</script>
<style lang="scss" scoped>
div {
  transition: 1s; // 加上transtition opacity 不会触发重绘
}
</style>
