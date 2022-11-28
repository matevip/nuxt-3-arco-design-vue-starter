<template>
  <div :style="{ background: 'var(--color-fill-2)', padding: '28px' }">
    <a-page-header
      :style="{ background: 'var(--color-bg-2)' }"
      title="迈特云"
      subtitle="迈特云专注于微服务产品解决方案"
      :show-back="false"
    >
      <template #extra>
        <a-menu mode="horizontal" :default-selected-keys="current" class="w-full">
          <a-menu-item key="1"
            ><icon-home /><NuxtLink to="/">首页</NuxtLink></a-menu-item
          >
          <a-menu-item key="2"
            ><icon-book /><NuxtLink to="https://doc.mate.vip" target="_blank"
              >文档</NuxtLink
            ></a-menu-item
          >
          <a-menu-item key="3"
            ><icon-github />
            <NuxtLink to="https://github.com" target="_blank"
              >Github</NuxtLink
            ></a-menu-item
          >
        </a-menu>
      </template>
    </a-page-header>
  </div>
</template>
<script setup>
import { ref } from "vue";

const current = ref(["1"]);
</script>
