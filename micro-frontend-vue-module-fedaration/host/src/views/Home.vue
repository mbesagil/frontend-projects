<script setup>
import TestComponent from "remote/TestComponent";
import { useUserStore } from "@/store/user.js";

const userStore = useUserStore();
</script>

<template>
  <div class="bg">
    <div>
      <router-link to="/remote">Remote Project</router-link>
    </div>
  </div>
  <div style="background-color: rgb(175, 201, 175); padding: 0.5rem">
    <h1>Home</h1>
    <div style="display: flex; justify-content: center">
      user info : {{ userStore.user }}
    </div>
    <div style="border: 1px dashed black">
      <span style="padding: 0.5rem; margin-bottom: 30px">
        This Zone get Remote Component
      </span>
      <TestComponent :user="userStore.user"></TestComponent>
    </div>
  </div>
</template>
