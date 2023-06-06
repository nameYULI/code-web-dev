<template>
  <div id="menu" @click="menuClick">
    <button data-action="save">Save</button>
    <button data-action="load">Load</button>
    <button data-action="search">Search</button>
  </div>
</template>
<script setup>
const Menu = {
  save() {
    alert('saving')
  },

  load() {
    alert('loading')
  },

  search() {
    alert('searching')
  }
}
const menuClick = (event) => {
  let action = event.target.dataset.action
  if (action) {
    Menu[action]()
  }
}
</script>
