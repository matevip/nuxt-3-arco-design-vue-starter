export default defineNuxtConfig({
  modules: ["nuxt-windicss", '@pinia/nuxt'],

  // 引入arco-design样式
  css: ['@arco-design/web-vue/dist/arco.css'],

  // 插件方式引入arco-design组件
  plugins: ["@/plugins/arco-design"],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});