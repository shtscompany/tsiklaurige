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
      mainTitle: "წიკლაურთა საგვარეულო ერთობის დამფუძნებელები",
      peoples: [
        {
          name: "მამა ტიმოთე წიკლაური",
          picLink: "https://tsfunion.files.wordpress.com/2020/03/b0bb2-3.png",
          link: "#",
        },
        {
          name: "შალვა წიკლაური",
          picLink: "https://tsfunion.files.wordpress.com/2020/03/e4c00-2.png",
          link: "#",
        },
        {
          name: " ზაქრო წიკლაური",
          picLink: "https://tsfunion.files.wordpress.com/2020/03/46388-4.png",
          link: "https://www.facebook.com/zaqro.tsiklauri?fref=ts",
        },
        {
          name: "ეფემია წიკლაური",
          picLink: "https://tsfunion.files.wordpress.com/2020/03/1f145-7.png",
          link: "https://www.facebook.com/etsiklauri?fref=ts",
        },
        {
          name: "ალექსანდრე წიკლაური",
          picLink: "https://tsfunion.files.wordpress.com/2020/03/e4d52-6.png",
          link: "https://www.facebook.com/alexandre.tsiklauri.7?fref=ts",
        },
        {
          name: "გოჩა წიკლაური",
          picLink: "https://tsfunion.files.wordpress.com/2020/03/2e554-5.png",
          link: "https://www.facebook.com/gochats?fref=ts",
        },
        {
          name: " პაატა წიკლაური",
          picLink:
            "https://tsfunion.files.wordpress.com/2020/03/3cf40-13334760_1229247400442490_632941035_o.jpg?w=141&zoom=2",
          link: "#",
        },
        {
          name: "შოთა წიკლაური",
          picLink: "https://tsfunion.files.wordpress.com/2020/03/88a15-xx.jpg",
          link: "https://www.facebook.com/shtscompany?fref=ts",
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

<style scoped>
.card {
  min-height: 400px;
}
</style>