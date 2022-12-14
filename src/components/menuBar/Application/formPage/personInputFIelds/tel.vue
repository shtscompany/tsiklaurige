<template id="telTemplate">
  <div class="col-md-6 mb-3">
    <div class="form-group">
      <label for="mobile" v-text="telTitle"></label>

      <svg v-if="validity() && telValueValid" height="20" width="30">
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
        <circle
          cx="15"
          cy="10"
          r="5"
          stroke="red"
          stroke-width="3"
          fill="red"
        />
        Sorry, your browser does not support inline SVG.
      </svg>

      <input
        v-model="telValue"
        :placeholder="placeHolder"
        v-bind:class="{
          'form-control': true,
          'is-invalid': !validTel(telValue) && telBlured,
        }"
        v-on:blur="telBlured = true"
        requeired
      />
      <div class="invalid-feedback" v-text="errorTelTitle"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: function () {
    return {
      telTitle: "ტელეფონი:",
      errorTelTitle: "გთხოვთ ჩაწეროთ სწორი ტელეფონის ნომერი",
      validTelName: "კარგია!",
      placeHolder: "საკონტაქტო ნომერი",
      telBlured: false,
    };
  },
  methods: {
    validTel: function (telValue) {
      let re = /^[0-9]{9,18}$/;
      return re.test(this.telValue);
    },
    validity() {
      return (this.$store.state.telValueValid = this.validTel(this.telValue));
    },
  },
  computed: {
    telValue: {
      get() {
        return this.$store.state.telValue;
      },
      set(value) {
        this.$store.commit("updateTelValue", value);
      },
    },
    telValueValid: {
      get() {
        return this.$store.state.telValueValid;
      },
    },
  },
};
</script>