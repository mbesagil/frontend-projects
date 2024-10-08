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
        <h4 class="m-1">User Add</h4>
        <span class="cursor_pointer" @click="$emit('close')" >X</span>
      </div>
      <div class="modal-contet text-center py-3">
        <form action="">
          <label for="">name</label>
          <input type="text" class="w-100" v-model="data.name">
        </form>
      </div>
      <div class="modal-footer">
        <div class="d-flex justify-content-end p-2 text-white">
          <!-- We will handle these emits later -->
          <button @click="$emit('close')" class="btn btn-outline-dark me-1">
            No
          </button>
          <button @click="addUser" class="btn btn-dark">Add New User</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:{
        name:""
      }
    };
  },
  mounted() {
  },
  methods: {
    addUser(){
      console.log('data :>> ', this.data);
    }
  },
};
</script>

<style scoped>
.modal-card {
  width: 100%;
  max-width: 600px !important;
}
.bg-gray {
  background-color: rgb(211, 207, 207);
}
</style>
