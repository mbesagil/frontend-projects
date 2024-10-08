<template>
  <div
    class="position-fixed top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center bg-opacity-50"
  >
    <div
      class="modal-card mx-2 bg-white text-black rounded-2 shadow p-6"
      role="dialog"
      aria-modal="true"
    >
      <div class="modal-header bg-gray rounded-top d-flex justify-content-between align-items-center px-2">
        <h4 class="m-1">{{ data.payload.title }}</h4>
        <span class="cursor_pointer" @click="$emit('close')" >X</span>
      </div>
      <div class="modal-contet text-center py-3">{{ data.payload.content }}</div>
      <div class="modal-footer">
        <div class="d-flex justify-content-end p-2 text-white">
          <!-- We will handle these emits later -->
          <button @click="$emit('close')" class="btn btn-outline-dark me-1">
            No
          </button>
          <button @click="data.confirmBtn" class="btn btn-dark">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {};
  },
  mounted() {
    console.log("this.data :>> ", this.data);
  },
  methods: {
    goTo() {
      console.log("hello world");
    },
  },
};
</script>

<style>
.modal-card {
  width: 100%;
  max-width: 500px !important;
}
.bg-gray {
  background-color: rgb(211, 207, 207);
}
</style>
