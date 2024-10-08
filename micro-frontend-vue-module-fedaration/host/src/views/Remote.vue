<script setup>
import TestComponent from "remote/TestComponent";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
</script>

<template>
  <TestComponent :user="userStore.user"></TestComponent>
</template>
