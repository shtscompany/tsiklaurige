<template>
  <div>
    <h2 class="text-center pt-4">{{ mainTitle }}</h2>
    <div class="col-sm-12 d-flex adjust-content-center break-text">
      <agmasrulebeli />
    </div>
    <gamgeoba />
    <damfudznebeli />
  </div>
</template>

<script>
import agmasrulebeli from "./ourTeamComponents/Agmasrulebeli.vue";
import gamgeoba from "./ourTeamComponents/Gamgeoba.vue";
import damfudznebeli from "./ourTeamComponents/Damfudznebeli.vue";

export default {
  data: () => {
    return {
      mainTitle: "ჩვენი გუნდი",
    };
  },
  components: {
    agmasrulebeli,
    gamgeoba,
    damfudznebeli,
  },
};
</script>


<style >
.break-text {
  overflow-wrap: break-word;
  /* word-wrap: break-word;
  word-break: keep-all; */
}
</style>
