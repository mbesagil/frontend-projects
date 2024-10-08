import { reactive, ref } from 'vue'

// keep track of component to render
const component = ref();
// keep track of whether to show modal
const show = ref(false);
const data = reactive({})

export function useModal() {
    return {
        component,
        show,
        data,
        // methods to show/hide modal
        showModal: () => show.value = true,
        hideModal: () => show.value = false,
    }
}