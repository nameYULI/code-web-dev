<template>
  <ul class="tree" id="tree" @click="treeClick">
    <li>
      Animals
      <ul>
        <li>
          Mammals
          <ul>
            <li>Cows</li>
            <li>Donkeys</li>
            <li>Dogs</li>
            <li>Tigers</li>
          </ul>
        </li>
        <li>
          Other
          <ul>
            <li>Snakes</li>
            <li>Birds</li>
            <li>Lizards</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      Fishes
      <ul>
        <li>
          Aquarium
          <ul>
            <li>Guppy</li>
            <li>Angelfish</li>
          </ul>
        </li>
        <li>
          Sea
          <ul>
            <li>Sea trout</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from 'vue'
// 只能有一个事件处理程序（使用委托）
// 对节点标题以外（在空白处）的点击不会做任何处理
onMounted(() => {
  // 添加样式
  for (let li of document.querySelectorAll('li')) {
    let span = document.createElement('span')
    li.prepend(span)
    span.append(span.nextSibling) // move the text node into span
  }
})

const treeClick = (event) => {
  if (event.target.tagName != 'SPAN') {
    return
  }

  let childrenContainer = event.target.parentNode.querySelector('ul')
  if (!childrenContainer) return // no children

  childrenContainer.hidden = !childrenContainer.hidden
}
</script>

<style>
.tree span:hover {
  font-weight: bold;
}

.tree span {
  cursor: pointer;
}
</style>
