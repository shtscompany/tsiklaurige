<template id="checkedTextTemplate">
  <div>
    <p v-text="'მე ' + this.name + ' ' + this.famName + ' ' + tsikAppText1"></p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <span v-text="birthDate.birthDateTitle"></span>
        <span>{{ customDateFormat(birthDateValue) }}</span>
      </li>
      <li class="list-group-item">
        <span v-text="birthPlace.birthPlaceTitle"></span>
        <span>{{ birthPlaceValue }}</span>
      </li>
      <li class="list-group-item">
        <span v-text="addressFact.addressFactTitle"></span>
        <span>{{ addressFactValue }}</span>
      </li>
      <li class="list-group-item">
        <span v-text="tel.telTitle"></span>
        <span>{{ telValue }}</span>
      </li>
      <li class="list-group-item">
        <span v-text="email.emailTitle"></span>
        <span>{{ emailValue }}</span>
      </li>
    </ul>
    <form action="">
      <div class="form-check col-md-10 mt-3">
        <label class="form-check-label pr-3" for="gridCheck1">
          ვეთანხმები მოცემულ პირობას და მოყვანილ მონაცემებს და თანახმა ვარ
          ყოველთვიურად ჩავრიცხო {{ donation }} ლარი.
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          id="checkbox"
          v-model="checked"
        />
      </div>
    </form>
  </div>
</template>


<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  data: function () {
    return {
      birthDate: {
        birthDateTitle: "დაბადების თარიღი: ",
      },
      birthPlace: {
        birthPlaceTitle: "დაბადების ადგილი: ",
      },
      addressFact: {
        addressFactTitle: "მისამართი: ",
      },
      email: {
        emailTitle: "ელ-ფოსტა: ",
      },
      tel: {
        telTitle: "ტელეფონი: ",
      },
      tsikAppText1:
        "ვაღიარებ ა(ა)იპ წიკლაურთა საგვარეულო ერთობის წესდებას,   ვადასტურებ რომ  ვაკმაყოფილებ წესდების პირობებს და სურვილი მაქვს გავხდე წიკლაურთა საგვარეულო ერთობის წევრი. ქვემოთ მოცემული ინფორმაცია არის ჩემს მიერ შევსებული. ",
      submitted: false,
      valid: false,
    };
  },
  methods: {
    customDateFormat(birthDateValue) {
      let formated = moment(birthDateValue).format("DD.MM.YYYY");
      return formated;
    },
  },
  computed: {
    ...mapState([
      "name",
      "famName",
      "birthDateValue",
      "birthPlaceValue",
      "addressFactValue",
      "donation",
      "emailValue",
      "telValue",

      "birthDateValueValid",
    ]),
    checked: {
      get() {
        return this.$store.state.checked;
      },
      set(value) {
        this.$store.commit("updateChecked", value);
      },
    },
  },
};
</script>
