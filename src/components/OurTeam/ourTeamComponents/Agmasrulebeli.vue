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
      mainTitle: "საგვარეულო ერთობის აღმასრულებელი წევრები",
      peoples: [
        {
          name: "შოთა წიკლაური",
          picLink: "https://tsfunion.files.wordpress.com/2020/03/88a15-xx.jpg",
          link: "https://www.facebook.com/shtscompany?fref=ts",
        },
        {
          name: "ლევანი წიკლაური",
          picLink:
            "https://tsfunion.files.wordpress.com/2020/03/d7700-levan2btsiklauri.png",
          link: "https://www.facebook.com/levani.tsiklauri.77",
        },
        {
          name: "ნინო წიკლაური",
          picLink:
            "https://tsfunion.files.wordpress.com/2020/03/c6e23-25e12583259c25e12583259825e12583259c25e12583259d2b25e1258325ac25e12583259825e12583259925e12583259a25e12583259025e1258325a325e1258325a025e125832598.png",
          link: "https://www.facebook.com/nino.tsiklauri.5855",
        },
        {
          name: "გიორგი წიკლაური",
          picLink:
            "https://tsfunion.files.wordpress.com/2020/03/5fa87-25e12583259225e12583259825e12583259d25e1258325a025e12583259225e1258325982b25e1258325ac25e12583259825e12583259925e12583259a25e12583259025e1258325a325e1258325a025e125832598.png",
          link: "https://www.facebook.com/Giorgi.Tsiklauri1993?fref=ts",
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
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}
</style>