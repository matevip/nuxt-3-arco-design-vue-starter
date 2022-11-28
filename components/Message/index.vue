<template>
  <a-space>
    <a-button type="primary" status="success" @click="success">Success</a-button>
    <a-button type="primary" status="danger" @click="error">Error</a-button>
    <a-button type="primary" status="warning" @click="warning">Warning</a-button>
  </a-space>
</template>
<script lang="ts">
import { Message } from "@arco-design/web-vue";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const success = () => {
      Message.success("This is a success message");
    };
    const error = () => {
      Message.error("This is an error message");
    };
    const warning = () => {
      Message.warning("This is a warning message");
    };
    return {
      success,
      error,
      warning,
    };
  },
});
</script>
