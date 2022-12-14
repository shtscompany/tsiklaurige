<template id="nameTemplate">
  <div class="col-md-6 mb-3">
    <label v-text="nameTitle"></label>

    <svg v-if="validity() && nameValid" height="20" width="30">
      <circle
        cx="15"
        cy="10"
        r="5"
        stroke="green"
        stroke-width="3"
        fill="green"
      />
      Sorry, your browser does not support inline SVG.
    </svg>

    <svg v-else height="20" width="30">
      <circle cx="15" cy="10" r="5" stroke="red" stroke-width="3" fill="red" />
      Sorry, your browser does not support inline SVG.
    </svg>

    <input
      v-model="name"
      type="text"
      :placeholder="placeHolder"
      v-bind:class="{
        'form-control': true,
        'is-invalid': !validName(name) && nameBlured,
      }"
      v-on:blur="nameBlured = true"
      maxlength="15"
      requeired
    />
    <div class="invalid-feedback" v-text="errorNameTitle"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: function () {
    return {
      nameTitle: "სახელი",
      errorNameTitle: "გთხოვთ ჩაწეროთ სწორი სახელი.",
      validNameText: "კარგია!",
      placeHolder: "სახელი",
      nameBlured: false,
    };
  },
  methods: {
    validName: function (name) {
      let re = /^[a-zA-Zა-ჰàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,15}$/;
      return re.test(this.name);
    },
    validity() {
      return (this.$store.state.nameValid = this.validName(this.name));
    },
  },

  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("updateName", value);
      },
    },
    nameValid: {
      get() {
        return this.$store.state.nameValid;
      },
    },
  },
};
</script>