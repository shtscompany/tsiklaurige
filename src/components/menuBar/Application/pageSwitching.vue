<template>
  <div class="inputForm">
    <h3 class="p-4 text-center" v-text="tsikAppTitle"></h3>
    <div v-if="appliing">
      <div v-if="showText">
        <form class="needs-validation" novalidate>
          <!-- showing inpunt forms -->
          <inputForm />
          <!-- reset data & go next for checking -->
          <div class="text-center col-md-12 mb-3">
            <input
              type="reset"
              class="btn btn-warning text-center"
              v-on:click="reset"
              value="გასუფთავება"
            />
            <button
              type="submit"
              class="btn btn-success text-center ml-2"
              v-on:click="showNext"
              :disabled="buttonValid()"
            >
              შემდეგ
            </button>
          </div>
        </form>
      </div>
      <div v-if="!showText">
        <!-- show checked text -->
        <showCheckedText />
        <!-- read and access to the data -->
        <form @submit.prevent="onSubmit">
          <div
            class="text-center col-md-12 mb-4 mt-4"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              class="btn btn-secondary mr-2 bg-warning"
              @click="correction"
            >
              შესწორება
            </button>

            <button
              type="submit"
              class="btn btn-secondary ml-2 bg-success"
              :disabled="!checked"
            >
              გაგზავნა
            </button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="!appliing">
      <sentSuccess />
    </div>
  </div>
</template>

<script>
import inputForm from "./inputForm";
import showCheckedText from "./showCheckedText";
import sentSuccess from "./sentSuccess";
import { mapState } from "vuex";
import moment from "moment";
// import { projectFirestore } from "./firebase/config";
import { projectFirestore } from "../../../main";
import "firebase/firestore";

export default {
  name: "App",
  components: {
    inputForm,
    showCheckedText,
    sentSuccess,
  },
  data: function () {
    return {
      tsikAppTitle: "წიკლაურთა საგვარეულო ერთობაში გასაწევრიანებელი განაცხადი",
      showText: true,
      terms: true,
      appliing: true,
      poorDate: Date(),
    };
  },
  methods: {
    buttonValid: function () {
      let checkTrueth = !(
        this.nameValid &&
        this.famNameValid &&
        this.birthDateValueValid &&
        this.birthPlaceValueValid &&
        this.emailValueValid &&
        this.telValueValid &&
        this.addressFactValueValid &&
        this.donationValid
      );
      while (checkTrueth) {
        return this.terms;
      }
    },
    showNext: function () {
      this.showText = false;
    },

    correction: function () {
      this.showText = true;
    },
    reset: function () {
      this.$store.commit("updateName", "");
      this.$store.commit("updateFamName", "");
      this.$store.commit("updateBirthDateValue", "");
      this.$store.commit("updateBirthPlaceValue", "");
      this.$store.commit("updateAddressFactValue", "");
      this.$store.commit("updateTelValue", "");
      this.$store.commit("updateEmailValue", "");
      this.$store.commit("updateDonation", "");
    },
    onSubmit: function () {
      const persInfo = {
        name: this.name,
        famName: this.famName,
        birthDateValue: moment(this.birthDateValue).format("DD/MM/YYYY"),
        birthPlaceValue: this.birthPlaceValue,
        addressFactValue: this.addressFactValue,
        donation: this.donation,
        emailValue: this.emailValue,
        telValue: this.telValue,
        dateCreated: moment().format("DD/MM/YYYY hh:mm:ss"),
        poorDate: this.poorDate,
      };

      projectFirestore
        .collection("userMessages")
        .add(persInfo)
        .then(() => {
          this.$router.push("/sentSuccess");
        });
    },
  },
  computed: mapState([
    "name",
    "famName",
    "birthDateValue",
    "birthPlaceValue",
    "addressFactValue",
    "donation",
    "emailValue",
    "telValue",
    "checked",

    "nameValid",
    "famNameValid",
    "birthDateValueValid",
    "birthPlaceValueValid",
    "emailValueValid",
    "telValueValid",
    "addressFactValueValid",
    "donationValid",
  ]),
};
</script>


  
