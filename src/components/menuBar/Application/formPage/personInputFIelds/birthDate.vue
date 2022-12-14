<template id="birthDateTemplate">
  <div class="col-md-6 mb-3">
    <label v-text="birthDateTitle">{{ birthDateTitle }} hi</label>

    <svg v-if="validity() && birthDateValueValid" height="20" width="30">
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

    <vuejs-datepicker
      :language="ge"
      :format="customDateFormat"
      monday-first
      input-class="form-control"
      :placeholder="placeHolder"
      v-model="birthDateValue"
      required
    ></vuejs-datepicker>

    <div class="invalid-feedback" v-text="errorBirthDateTitle"></div>
  </div>
</template>

<script>
import moment from "moment";
/* eslint-disable */

export default {
  data: function () {
    return {
      ge: vdp_translation_ge.js,
      birthDateTitle: "დაბადების თარიღი:",
      errorBirthDateTitle: "გთხოვთ მონიშნეთ დაბადების თარიღი.",
      validBirthDateText: "კარგია!",
      placeHolder: "თარიღი",
      birthDateBlured: false,
    };
  },
  components: {
    vuejsDatepicker,
  },
  methods: {
    customDateFormat(birthDateValue) {
      let formated = moment(birthDateValue).format("DD.MM.YYYY");
      this.birthDate = formated;
      return formated;
    },
    validBirthDateValue: function () {
      // hot empty string or space
      let re = /(.|\s)*\S(.|\s)*/;
      return re.test(this.birthDateValue);
    },
    validity() {
      return (this.$store.state.birthDateValueValid = this.validBirthDateValue(
        this.birthDateValue
      ));
    },
    circleValidCol: () => {
      if (validity() && birthDateValueValid) {
        return this.circleCol.green;
      } else {
        return this.circleCol.red;
      }
    },
  },
  computed: {
    birthDateValue: {
      get() {
        return this.$store.state.birthDateValue;
      },
      set(value) {
        this.$store.commit("updateBirthDateValue", value);
      },
    },
    birthDateValueValid: {
      get() {
        return this.$store.state.birthDateValueValid;
      },
    },
  },
};
</script>

