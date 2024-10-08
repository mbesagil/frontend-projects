<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://vue-i18n.intlify.dev/" target="_blank">
      <img
        src="https://vue-i18n.intlify.dev/vue-i18n-logo.svg"
        class="logo vue"
        alt="Vue logo"
      />
    </a>
  </div>

  <div>
    <select v-model="$i18n.locale">
      <option value="en">en</option>
      <option value="tr">tr</option>
    </select>
  </div>

  <div>{{ $t("success") }} - {{ $t("not_found") }}</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
