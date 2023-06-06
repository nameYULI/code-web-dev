<template>
  Counter:
  <input type="button" value="1" data-counter />
  One more counter:
  <input type="button" value="2" data-counter />
</template>

<script setup>
document.addEventListener('click', function (event) {
  if (event.target.dataset.counter != undefined) {
    // 如果这个特性存在...
    event.target.value++
  }
})
</script>
