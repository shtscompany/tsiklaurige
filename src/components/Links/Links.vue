<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <mainPages />
        </div>

        <div class="col-md-6 col-sm-12">
          <mountPages />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <familyUnions />
        </div>
        <div class="col-md-6 col-sm-12">
          <youthOrganizations />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <fightNgos />
        </div>
        <div class="col-md-6 col-sm-12">
          <appeal />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <govOrgs />
        </div>
        <div class="col-md-6 col-sm-12">
          <ngos />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <charityAndOter />
        </div>
        <div class="col-md-6 col-sm-12">
          <religOrg />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appeal from "./LinksComponents/Appeal";
import charityAndOter from "./LinksComponents/CharityAndOter";
import familyUnions from "./LinksComponents/FamilyUnions";
import fightNgos from "./LinksComponents/FightNgos";
import govOrgs from "./LinksComponents/GovOrgs";
import mainPages from "./LinksComponents/MainPages";
import mountPages from "./LinksComponents/MountPages";
import ngos from "./LinksComponents/Ngos";
import youthOrganizations from "./LinksComponents/YouthOrganizations";
import religOrg from "./LinksComponents/ReligOrg";

export default {
  name: "App",
  components: {
    appeal,
    charityAndOter,
    familyUnions,
    fightNgos,
    govOrgs,
    mainPages,
    mountPages,
    ngos,
    youthOrganizations,
    religOrg,
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