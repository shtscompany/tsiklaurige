import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: JSON.parse(localStorage.getItem("name")),
    famName: JSON.parse(localStorage.getItem("famName")),
    birthDateValue: JSON.parse(localStorage.getItem("birthDateValue")),
    birthPlaceValue: JSON.parse(localStorage.getItem("birthPlaceValue")),
    emailValue: JSON.parse(localStorage.getItem("emailValue")),
    telValue: JSON.parse(localStorage.getItem("telValue")),
    addressFactValue: JSON.parse(localStorage.getItem("addressFactValue")),
    donation: JSON.parse(localStorage.getItem("donation")),

    nameValid: false,
    famNameValid: false,
    birthDateValueValid: false,
    birthPlaceValueValid: false,
    emailValueValid: false,
    telValueValid: false,
    addressFactValueValid: false,
    donationValid: false,

    checked: ""
  },
  mutations: {
    nextButtonDisabled(state) {
      state.nextDisabled = state.nameValid;
    },
    // name and validation getter
    updateName(state, name) {
      state.name = name;
      localStorage.setItem("name", JSON.stringify(name));
    },
    updateNameValid(state, nameValid) {
      state.nameValid = nameValid;
    },

    // family name and validation getter
    updateFamName(state, famName) {
      state.famName = famName;
      localStorage.setItem("famName", JSON.stringify(famName));
    },
    updateFamNameValid(state, famNameValid) {
      state.famNameValid = famNameValid;
    },
    // birth date and validation getter
    updateBirthDateValue(state, birthDateValue) {
      state.birthDateValue = birthDateValue;
      localStorage.setItem("birthDateValue", JSON.stringify(birthDateValue));
    },
    updateBirthDateValueValid(state, birthDateValueValid) {
      state.birthDateValueValid = birthDateValueValid;
    },

    // birth date place and validation getter
    updateBirthPlaceValue(state, birthPlaceValue) {
      state.birthPlaceValue = birthPlaceValue;
      localStorage.setItem("birthPlaceValue", JSON.stringify(birthPlaceValue));
    },
    updateBirthPlaceValueValid(state, birthPlaceValueValid) {
      state.birthPlaceValueValid = birthPlaceValueValid;
    },

    // email and validation getter
    updateEmailValue(state, emailValue) {
      state.emailValue = emailValue;
      localStorage.setItem("emailValue", JSON.stringify(emailValue));
    },
    updateEmailValueValid(state, emailValueValid) {
      state.emailValueValid = emailValueValid;
    },

    // telephon and validation getter
    updateTelValue(state, telValue) {
      state.telValue = telValue;
      localStorage.setItem("telValue", JSON.stringify(telValue));
    },
    updateTelValueValid(state, telValueValid) {
      state.telValueValid = telValueValid;
    },

    // address and validation getter
    updateAddressFactValue(state, addressFactValue) {
      state.addressFactValue = addressFactValue;
      localStorage.setItem(
        "addressFactValue",
        JSON.stringify(addressFactValue)
      );
    },
    updateAddressFactValueValid(state, addressFactValueValid) {
      state.addressFactValueValid = addressFactValueValid;
    },

    // donation and validation getter
    updateDonation(state, donation) {
      state.donation = donation;
      localStorage.setItem("donation", JSON.stringify(donation));
    },
    updateDonationValid(state, donationValid) {
      state.donationValid = donationValid;
    },

    // check input for rules activates send button
    updateChecked(state, checked) {
      state.checked = checked;
    }
  }
});
