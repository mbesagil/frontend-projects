<template>
  <div class="container my-3">
    <table class="table">
      <tr v-for="(data, k) in keyValueData" :key="k">
        <td>
          <input
            placeholder="Key"
            class="form-control"
            type="text"
            v-model="data.key"
          />
        </td>
        <td>
          <input
            placeholder="Value"
            class="form-control"
            type="text"
            v-model="data.value"
          />
        </td>
        <td scope="row" class="trashIconContainer">
          <i class="far fa-trash-alt" @click="deleteRow(k, data)"></i>
        </td>
      </tr>
    </table>
    <div>
      <button type="button" class="btn btn-info" @click="addNewRow">
        <i class="fas fa-plus-circle"></i>
        Add
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyValueData: [
        {
          // key: null,
          // value: null,
        },
      ],
    };
  },

  methods: {
    addNewRow() {
      console.log("this.keyValueData", this.keyValueData);

      this.keyValueData.push({
        key: "",
        value: "",
      });
    },
    deleteRow(index, data) {
      var idx = this.keyValueData.indexOf(data);
      console.log(idx, index);
      if (idx > -1) {
        this.keyValueData.splice(idx, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
