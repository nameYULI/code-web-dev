<script setup lang="ts">
import { Menu as IconMenu } from '@element-plus/icons-vue'
import { routes } from '@/router'
</script>

<template>
  <main>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="home"
      text-color="#fff"
    >
      <template v-for="item in routes" :key="item.name">
        <el-menu-item v-if="!item.meta.hidden" :index="item.name">
          <router-link :to="{ name: item.name }">
            <el-icon><icon-menu /></el-icon>
            <span>{{ item.name }}</span>
          </router-link>
        </el-menu-item>
      </template>
    </el-menu>
  </main>
</template>
