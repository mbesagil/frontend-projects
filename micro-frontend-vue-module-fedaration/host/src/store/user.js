import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    name: "Can",
    age: "24",
  });

  return { user };
});
