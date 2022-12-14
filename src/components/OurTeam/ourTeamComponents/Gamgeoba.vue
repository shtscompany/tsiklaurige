<template>
  <div class="container-fluid" style="margin-left: auto">
    <h4 class="text-center pt-4">{{ mainTitle }}</h4>
    <!-- Cards -->
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div
          class="col-md-3 col-sm-6 col-xs-12"
          v-for="(person, index) in peoples"
          :key="index"
          style="width: 12rem"
        >
          <div class="card">
            <a :href="person.link">
              <img
                class="card-img-top"
                :src="person.picLink"
                alt="persons"
                height="300px"
              />
              <div class="card-body">
                <h5 class="card-title text-center">{{ person.name }}</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data: () => {
    return {
      mainTitle: "წიკლაურთა საგვარეულო ერთობის გამგეობის წევრები",
      peoples: [
        {
          name: "saxeli",
          picLink: "https://via.placeholder.com/200",
          link: "#",
        },
        {
          name: "saxeli",
          picLink: "https://via.placeholder.com/200",
          link: "#",
        },
        {
          name: "saxeli",
          picLink: "https://via.placeholder.com/200",
          link: "#",
        },
        {
          name: "saxeli",
          picLink: "https://via.placeholder.com/200",
          link: "#",
        },
      ],
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