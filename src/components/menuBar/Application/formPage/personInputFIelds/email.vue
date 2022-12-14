<template id="emailTemplate">
  <div class="col-md-6 mb-3">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="email" v-text="emailTitle"></label>

        <svg v-if="validity() && emailValueValid" height="20" width="30">
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
          v-model="emailValue"
          :placeholder="placeHolder"
          v-bind:class="{
            'form-control': true,
            'is-invalid': !validEmail(emailValue) && emailBlured,
          }"
          v-on:blur="emailBlured = true"
        />
        <div class="invalid-feedback" v-text="errorEmailTitle"></div>
      </div>
      <!--             <div class="form-group">
        <a type="submit" href="#" v-on:click.stop.prevent="submit" class="btn btn-lg btn-success">Submit</a>
      </div> -->
    </div>
    <div v-else class="alert alert-success" role="alert">
      <h5>Thank you</h5>
      <p>Your validation was a success!</p>
    </div>
  </div>
  <!--end form-wrapper-->
</template>

<script>
/* eslint-disable */
export default {
  data: function () {
    return {
      emailTitle: "ელ-ფოსტა",
      errorEmailTitle: "გთხოვთ ჩაწეროთ სწორი ელ-ფოსტა.",
      placeHolder: "vanotsiklauri@gmail.com",
      emailBlured: false,
      valid: false,
      submitted: false,
    };
  },
  methods: {
    validEmail: function (emailValue) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(emailValue);
    },
    validity() {
      return (this.$store.state.emailValueValid = this.validEmail(
        this.emailValue
      ));
    },
  },
  computed: {
    emailValue: {
      get() {
        return this.$store.state.emailValue;
      },
      set(value) {
        this.$store.commit("updateEmailValue", value);
      },
    },
    emailValueValid: {
      get() {
        return this.$store.state.emailValueValid;
      },
    },
  },
};
</script>