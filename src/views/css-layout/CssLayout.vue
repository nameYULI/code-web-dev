<template>
  <div style="width: 300px; height: 100px; border: 1px solid #3d444f; display: flex">
    <div style="width: 100px; height: 100px; background-color: red; flex-shrink: 0"></div>
    <div style="width: 100px; height: 100px; background-color: red; flex-shrink: 0"></div>
    <div style="width: 100px; height: 100px; background-color: red; flex-shrink: 0"></div>
    <div style="width: 100px; height: 100px; background-color: red; flex-shrink: 0"></div>
  </div>
  <BoxModel />
  <br />
  <OVD />
  <br />
  <RepaintBox />
</template>
<script lang="ts" setup>
import BoxModel from './box-model.vue'
import OVD from './opacity-visibility-display.vue'
import RepaintBox from './repaint-box.vue'
</script>
