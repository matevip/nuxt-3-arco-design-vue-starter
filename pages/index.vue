<template>
  <div>
    <Header />
    <a-card title="图片轮播">
      <!-- 组件1 -->
      <div class="text-center">
        <Carousel/>
      </div>
    </a-card>
    <a-card title="Pinia演示">
      <!-- 组件2 -->
      <div class="text-center">
        <Count />
      </div>
    </a-card>
    <a-card title="Message组件演示">
      <!-- 组件3 -->
      <div class="text-center">
        <Message />
      </div>
    </a-card>
  </div>
</template>
<script >
import {ref} from 'vue'
import Count from "@/components/Count/index.vue";
import Message from "@/components/Message/index.vue";
import Header from "@/components/Header/index.vue";
import Carousel from '@/components/Carousel/index.vue';

const rangeValue = ref([Date.now(), Date.now()]);

</script>
<style></style>
