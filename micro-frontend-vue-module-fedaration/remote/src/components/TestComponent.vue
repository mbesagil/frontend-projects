<script setup>
defineProps({
  user: Object,
});
</script>

<template>
  <div
    style="
      background-color: bisque;
      color: black;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.3rem;
      padding: 0.5rem;
    "
  >
    <div>
      <div>Test component is here !~!</div>
      <pre>
    {{ user || "null" }}
  </pre
      >
    </div>
  </div>
</template>

<style scoped></style>
