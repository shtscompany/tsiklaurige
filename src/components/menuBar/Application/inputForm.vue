<template>
  <div class="inputForm">
    <form class="needs-validation" novalidate>
      <div class="form-row">
        <name />
        <lastName />
      </div>
      <div class="form-row">
        <birthDate />
        <birthPlace />
      </div>
      <div class="form-row">
        <email />
        <tel />
      </div>
      <div class="form-row">
        <factAddress />
        <donation />
      </div>
    </form>
  </div>
</template>

<script>
import name from "./formPage/personInputFIelds/name.vue";
import lastName from "./formPage/personInputFIelds/lastName";
import birthDate from "./formPage/personInputFIelds/birthDate";
import birthPlace from "./formPage/personInputFIelds/birthPlace";
import factAddress from "./formPage/personInputFIelds/factAddress";
import tel from "./formPage/personInputFIelds/tel";
import email from "./formPage/personInputFIelds/email";
import donation from "./formPage/personInputFIelds/donation";

export default {
  name: "App",
  components: {
    name,
    lastName,
    birthDate,
    birthPlace,
    factAddress,
    tel,
    email,
    donation,
  },
};
</script>


  
