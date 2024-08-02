<script setup lang="ts">
import { RouterView } from 'vue-router'
import { routes } from '@/router'
</script>

<template>
  <el-aside>
    <el-menu class="el-menu-vertical-demo" default-active="/delegation" router>
      <template v-for="item in routes" :key="item.name">
        <el-menu-item v-if="!item.meta.hidden" :index="item.path">
          {{ item.name }}
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
  <el-main>
    <RouterView />
  </el-main>
</template>

<style scoped>
.el-main {
  background-color: #f2f2f2;
  width: 100%;
}
</style>
