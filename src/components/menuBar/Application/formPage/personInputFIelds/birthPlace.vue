<template id="birthPlaceTemplate">
  <div class="col-md-6 mb-3">
    <label v-text="birthPlaceTitle"></label>

    <svg v-if="validity() && birthPlaceValueValid" height="20" width="30">
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
      type="text"
      class="form-control"
      :placeholder="placeHolder"
      v-model="birthPlaceValue"
      v-bind:class="{
        'form-control': true,
        'is-invalid':
          !validBirthPlaceValue(birthPlaceValue) && birthPlaceValueBlured,
      }"
      v-on:blur="birthPlaceValueBlured = true"
      maxlength="20"
      requeired
    />
    <div class="invalid-feedback" v-text="errorBirthPlaceValueTitle"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: function () {
    return {
      birthPlaceTitle: "დაბადების ადგილი:",
      errorBirthPlaceValueTitle: "გთხოვთ ჩაწეროთ სწორი დაბადების ადგილი.",
      validBirthPlace: "კარგია!",
      placeHolder: "დაბადების ადგილი",
      birthPlaceValueBlured: false,
    };
  },
  // mounted() {
  //   if (localStorage.birthPlaceValue)
  //     this.birthPlaceValue = localStorage.birthPlaceValue;
  // },
  methods: {
    validate: function () {
      this.birthPlaceValueBlured = true;
      if (this.validBirthPlaceValue(this.birthPlaceValue)) {
        this.valid = true;
        // add to local storage
        // localStorage.birthPlaceValue = this.birthPlaceValue;
      }
    },
    validBirthPlaceValue: function (birthPlaceValue) {
      let re = /^[a-zA-Zა-ჰàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$/;
      return re.test(this.birthPlaceValue);
    },
    validity() {
      return (this.$store.state.birthPlaceValueValid = this.validBirthPlaceValue(
        this.birthPlaceValue
      ));
    },
  },
  computed: {
    birthPlaceValue: {
      get() {
        return this.$store.state.birthPlaceValue;
      },
      set(value) {
        this.$store.commit("updateBirthPlaceValue", value);
      },
    },
    birthPlaceValueValid: {
      get() {
        return this.$store.state.birthPlaceValueValid;
      },
    },
  },
};
</script>