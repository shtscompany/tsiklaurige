<template>
  <div id="app">
    <banner />
    <welcomeText />
    <offer />
    <deviseLogo />
    <filesPdf />
  </div>
</template>

<script>
import banner from "./AbuttComponents/Banner";
import welcomeText from "./AbuttComponents/WelcomeText.vue";
import offer from "./AbuttComponents/Offer.vue";
import deviseLogo from "./AbuttComponents/deviseLogo.vue";
import filesPdf from "./AbuttComponents/FilesPdf.vue";

export default {
  name: "App",
  components: {
    banner,
    welcomeText,
    offer,
    deviseLogo,
    filesPdf,
  },
};
</script>

