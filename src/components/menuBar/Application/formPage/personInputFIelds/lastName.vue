<template id="familyNameTemplate">
  <div class="col-md-6 mb-3">
    <label v-text="famNameTitle"></label>

    <svg v-if="validity() && famNameValid" height="20" width="30">
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
      v-model="famName"
      v-bind:class="{
        'form-control': true,
        'is-invalid': !validFamName(famName) && famNameBlured,
      }"
      v-on:blur="famNameBlured = true"
      maxlength="20"
      requeired
    />
    <div class="invalid-feedback" v-text="errorFamNameTitle"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: function () {
    return {
      famNameTitle: "გვარი",
      errorFamNameTitle: "გთხოვთ ჩაწეროთ სწორი გვარი.",
      validFamNameTitle: "კარგია!",
      placeHolder: "გვარი",
      famNameBlured: false,
      submitted: false,
    };
  },
  methods: {
    validFamName: function (famName) {
      let re = /^[a-zA-Zა-ჰàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,20}$/;
      return re.test(this.famName);
    },
    validity() {
      return (this.$store.state.famNameValid = this.validFamName(this.famName));
    },
  },
  computed: {
    famName: {
      get() {
        return this.$store.state.famName;
      },
      set(value) {
        this.$store.commit("updateFamName", value);
      },
    },
    famNameValid: {
      get() {
        return this.$store.state.famNameValid;
      },
    },
  },
};
</script>