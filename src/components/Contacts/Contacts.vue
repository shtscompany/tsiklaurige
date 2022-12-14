<template>
  <div class="d-flex justify-content-center my-4">
    <div class="card bg-light" style="width: 16rem">
      <img class="card-img-top" :src="logoImg" alt="logo Image" />
      <div class="card-body">
        <h6 class="text-center">
          {{ contactName }}<br />ტელ:
          <a :href="contactTel">{{ conntactTelValue }}</a
          ><br />ელ. ფოსტა: <a :href="contactMail">{{ contactMailValue }}</a>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data: () => {
    return {
      logoImg:
        "https://tsfunion.files.wordpress.com/2020/03/3cf40-13334760_1229247400442490_632941035_o.jpg?w=141",
      contactName: "წიკლაურთა საგვარეულო ერთობა",
      contactTel: "tel:+995577651114",
      conntactTelValue: "577651114",
      contactMail: "mailto:tsfunion@tsiklauri.ge",
      contactMailValue: "shtscompany@gmail.com",
    };
  },

  mounted() {
    // Your JQuery code here
    $(document).ready(function () {
      // executes when HTML-Document is loaded and DOM is ready
      console.log("document is ready");

      $(".card").hover(
        function () {
          $(this).addClass("shadow-lg").css("cursor", "pointer");
        },
        function () {
          $(this).removeClass("shadow-lg");
        }
      );

      // document ready
    });
  },
};
</script>

<style>
</style>