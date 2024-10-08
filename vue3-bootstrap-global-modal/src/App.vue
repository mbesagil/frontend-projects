<template>
  <div class="d-flex justify-content-center align-items-center">
    <Teleport to="#modal">
      <Transition>
        <component
          :is="modal.component"
          v-if="modal.show"
          @close="modal.hideModal"
          :data="modal.data"
        />
      </Transition>
    </Teleport>
    <button @click="confirmOpenModal({ id: '12' })">Open Confirm Modal</button>
    <button @click="userAdd()">Addd user</button>
    <button @click="deleteUser({ id: '1' })">delete user</button>
    <span class="mx-4"></span>
  </div>
</template>
<script>
import { useModal } from "./composables/useModal";
import { markRaw } from "vue";
import ConfirmModal from "./components/Modals/ConfirmModal.vue";
import AddUserModal from "./components/Modals/User/AddUserModal.vue";
export default {
  data() {
    return {
      modal: useModal(),
      addUser: false,
      updateUser: false,
    };
  },
  components: {
    ConfirmModal,
    AddUserModal,
  },

  mounted() {
    console.log("this.modal :>> ", this.modal);
  },
  methods: {
    confirmOpenModal(data) {
      this.modal.component = markRaw(ConfirmModal);
      this.modal.data = {
        payload: {title:"Default Confirm", content:"Contentttt"},
      };
      this.modal.showModal();
      console.log("this.modal :>> ", this.modal);
    },

    userAdd() {
      this.modal.component = markRaw(AddUserModal);
      this.modal.showModal();
      console.log("this.modal :>> ", this.modal);
    },

    deleteUser(data) {
      this.modal.component = markRaw(ConfirmModal);
      this.modal.data = {
        payload: {title:"Delete Confirm", content:"Do you delte User Are you sure"},
        confirmBtn: () => {
          console.log("data silinecek :>> ", data.id);
        },
      };
      this.modal.showModal();
      console.log("this.modal :>> ", this.modal);
    },

  },
};
</script>

<style>
.cursor_pointer{
  cursor: pointer;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
