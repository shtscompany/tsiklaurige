<template>
  <div id="storeGallery" class="container">
    <!-- gallery -->
    <div class="page">
      <div class="page-content">
        <div class="container">
          <div class="mt-4">
            <h1 class="h3 text-center">მაღაზია</h1>
          </div>

          <div class="container px-0">
            <div class="pp-gallery">
              <div class="card-columns">
                <div class="card" data-groups='["nature"]'>
                  <a
                    href="#"
                    v-for="(photo, index) in gulisaTs.photos"
                    :key="index"
                  >
                    <figure class="pp-effect">
                      <img
                        class="img-fluid"
                        :src="photo.photoLink"
                        alt="Nature"
                      />
                      <figcaption>
                        <div class="h4">{{ gulisaTs.title }}</div>
                        <p>{{ photo.photoName }}</p>
                      </figcaption>
                    </figure></a
                  >
                </div>

                <div class="card" data-groups='["nature"]'>
                  <a
                    href="#"
                    v-for="(photo, index) in anaTs.photos"
                    :key="index"
                  >
                    <figure class="pp-effect">
                      <img
                        class="img-fluid"
                        :src="photo.photoLink"
                        alt="Nature"
                      />
                      <figcaption>
                        <div class="h4">{{ anaTs.title }}</div>
                        <p>{{ photo.photoName }}</p>
                      </figcaption>
                    </figure></a
                  >
                </div>

                <div class="card" data-groups='["nature"]'>
                  <a
                    href="#"
                    v-for="(photo, index) in tsfunion.photos"
                    :key="index"
                  >
                    <figure class="pp-effect">
                      <img
                        class="img-fluid"
                        :src="photo.photoLink"
                        alt="Nature"
                      />
                      <figcaption>
                        <div class="h4">{{ tsfunion.title }}</div>
                        <p>{{ photo.photoName }}</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="pp-section"></div>
        </div>
      </div>
    </div>
    <!--end gallery  -->
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data: () => {
    return {
      // gulisa tsiklauri
      gulisaTs: {
        title: "Tsiklauris Art",
        photos: [
          {
            photoLink:
              "https://tsfunion.files.wordpress.com/2020/04/93791882_253161882481557_7459093522851823616_n-2.jpg?strip=info&w=532",
            photoName: "ქუდი",
          },
          {
            photoLink:
              "https://tsfunion.files.wordpress.com/2020/04/93597860_640369250077251_1462795981899694080_n-1.jpg?strip=info&w=401",
            photoName: "ქუდი",
          },
        ],
      },
      // tsikaluri family union
      tsfunion: {
        title: "წიკლაურთა საგვარეულო ერთობა",
        photos: [
          {
            photoLink:
              "https://tsfunion.files.wordpress.com/2020/04/49723821_225425708333540_7189962952164769792_n.png?strip=info&w=900",
            photoName: "საწერი კალამი",
          },
          {
            photoLink:
              "https://tsfunion.files.wordpress.com/2020/04/49666929_533090227188601_1249379980379422720_n.png?strip=info&w=900",
            photoName: "ჭიქა",
          },
        ],
      },

      anaTs: {
        title: "ანა წიკლაური",
        photos: [
          {
            photoLink:
              "https://tsfunion.files.wordpress.com/2021/04/166355221_244715187397133_4417387074158359580_n.jpg?strip=info&w=635",
            photoName: "მაისური",
          },
          {
            photoLink:
              "https://tsfunion.files.wordpress.com/2021/04/141525311_2063027067166519_5324465812297898118_n.jpg?strip=info&w=467",
            photoName: "მაისური",
          },
          {
            photoLink:
              "https://tsfunion.files.wordpress.com/2021/04/166221676_787594182161799_4665064865194976725_n.jpg?strip=info&w=634",
            photoName: "მაისური",
          },
          {
            photoLink:
              "https://tsfunion.files.wordpress.com/2021/04/168299214_808310263104570_8966076821226277108_n.jpg?strip=info&w=412",
            photoName: "მაისური",
          },
        ],
      },
    };
  },

  mounted() {
    var activeFilter = "all";

    $(".pp-filter-button").on("click", function (e) {
      // remove btn-primary from all buttons first
      $(".pp-filter-button").removeClass("btn-primary");
      $(".pp-filter-button").addClass("btn-outline-primary");

      // add btn-primary to active button
      var button = $(this);
      button.removeClass("btn-outline-primary");
      button.addClass("btn-primary");
      filterItems(button.data("filter"));
      e.preventDefault();
    });

    function filterItems(filter) {
      if (filter === activeFilter) {
        return;
      }

      activeFilter = filter;
      $(".pp-gallery .card").each(function () {
        var card = $(this);
        var groups = card.data("groups");
        var show = false;
        if (filter === "all") {
          show = true;
        } else {
          for (var i = 0; i < groups.length; i++) {
            if (groups[i] === filter) {
              show = true;
            }
          }
        }
        // hide everything first
        card.fadeOut(400);

        setTimeout(function () {
          if (show && !card.is(":visible")) {
            card.fadeIn(400);
          }
        }, 500);
      });
    }
  },
};
</script>

<style scoped>
#storeGallery {
  background: #ffffff;
  min-height: 900px;
  position: relative;
  background-size: cover;
  font-family: "Arimo", sans-serif;
}

.page {
  background: white;
  max-width: 1280px;
  margin: 0 auto;
}

.navbar-brand {
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
}
@media (max-width: 992px) {
  .navbar-brand {
    display: none;
  }
}

.pp-header {
  padding-top: 3rem;
}
.pp-header img {
  width: auto;
  height: 80px;
  margin-left: -12px;
}
.pp-header h1 {
  font-weight: 400;
}
.pp-header .navbar-nav {
  letter-spacing: 1px;
  font-family: "Arimo", sans-serif;
  font-size: 18px;
  font-weight: 400;
}
@media (max-width: 576px) {
  .pp-header {
    padding-top: 0;
  }
}

/* Body Section  */
.pp-category-filter a {
  display: inline-block;
  margin: 0 10px 6px 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 3px;
}

.pp-gallery {
  min-height: 500px;
}
.pp-gallery .card-columns .card {
  border: none;
  margin-bottom: 0;
  border-radius: none;
}
@media (max-width: 992px) {
  .pp-gallery .card-columns {
    -moz-column-count: 2;
    column-count: 2;
  }
}
@media (max-width: 576px) {
  .pp-gallery .card-columns {
    -moz-column-count: 1;
    column-count: 1;
  }
}
.pp-gallery .card figure {
  position: relative;
  overflow: hidden;
  margin: 10px 1%;
  text-align: center;
}
.pp-gallery .card figure img {
  position: relative;
  display: block;
  max-width: 100%;
  opacity: 1;
}
.pp-gallery .card figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.pp-gallery .card figure figcaption,
.pp-gallery .card figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.pp-gallery .card figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}
.pp-gallery .card figure .h4 {
  word-spacing: -0.15em;
  font-weight: 600;
}
.pp-gallery .card figure .h4,
.pp-gallery .card figure p {
  margin: 0;
}
.pp-gallery .card figure p {
  letter-spacing: 1px;
  font-size: 60%;
}
.pp-gallery figure.pp-effect figcaption {
  padding: 12px;
}
.pp-gallery figure.pp-effect figcaption::before,
.pp-gallery figure.pp-effect figcaption::after {
  position: absolute;
  content: "";
  opacity: 0;
}
.pp-gallery figure.pp-effect figcaption::before {
  top: 50px;
  right: 30px;
  bottom: 50px;
  left: 30px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: scale(0, 1);
  transform-origin: 0 0;
}
.pp-gallery figure.pp-effect figcaption::after {
  top: 30px;
  right: 50px;
  bottom: 30px;
  left: 50px;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  transform: scale(1, 0);
  transform-origin: 100% 0;
}
.pp-gallery figure.pp-effect .h4 {
  padding-top: 26%;
  transition: transform 0.35s;
  opacity: 0;
}
.pp-gallery figure.pp-effect p {
  padding: 0.5em 2em;
  text-transform: none;
  opacity: 0;
  transform: translate3d(0, -10px, 0);
}
.pp-gallery figure.pp-effect img,
.pp-gallery figure.pp-effect .h4 {
  transform: translate3d(0, -25px, 0);
}
.pp-gallery figure.pp-effect img,
.pp-gallery figure.pp-effect figcaption::before,
.pp-gallery figure.pp-effect figcaption::after,
.pp-gallery figure.pp-effect p {
  transition: opacity 0.35s, transform 0.35s;
}
.pp-gallery figure.pp-effect:hover img {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.pp-gallery figure.pp-effect:hover figcaption::before,
.pp-gallery figure.pp-effect:hover figcaption::after {
  opacity: 1;
  transform: scale(1);
}
.pp-gallery figure.pp-effect:hover figcaption:before {
  background: rgba(31, 30, 30, 0.5);
}
.pp-gallery figure.pp-effect:hover .h4,
.pp-gallery figure.pp-effect:hover p {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  color: #FFFFFF;
}
.pp-gallery figure.pp-effect:hover figcaption::after,
.pp-gallery figure.pp-effect:hover .h4,
.pp-gallery figure.pp-effect:hover p,
.pp-gallery figure.pp-effect:hover img {
  transition-delay: 0.15s;
}
@media (max-width: 768px) and (min-width: 578px) {
  .pp-gallery figure.pp-effect:hover .h4 {
    padding-top: 20%;
    font-size: 16px;
  }
}
@media (max-width: 375px) {
  .pp-gallery figure.pp-effect:hover .h4 {
    padding-top: 20%;
    font-size: 16px;
  }
}

/* Footer sectiom */
.pp-footer {
  background: #f8f8f8;
}
.pp-footer a.credit {
  color: inherit;
  border-bottom: 1px dashed;
  text-decoration: none;
}
.pp-footer .fa {
  width: 18px;
}
.pp-footer .fa-2x {
  font-size: 22px;
}
.pp-footer i {
  color: #888;
}
.pp-footer .pp-facebook:hover i {
  color: #3b5998;
}
.pp-footer .pp-twitter:hover i {
  color: #1da1f2;
}
.pp-footer .pp-youtube:hover i {
  color: #ff0000;
}
.pp-footer .pp-instagram:hover i {
  color: #405de6;
}

/* About page */
.pp-about .pp-client-brand {
  text-align: center;
}
.pp-about .pp-client-brand img {
  opacity: 0.6;
  width: 90%;
}

.pp-about .pp-client-brand img:hover {
  opacity: 1;
}

.pp-about .pp-team .h5 {
  padding-top: 15px;
}

.pp-about .pp-team img {
  width: 80%;
}

@media (max-width: 768px) {
  .pp-about .pp-team p {
    margin-bottom: 2rem;
  }
}

/* Contact page */
.pp-contact textarea {
  min-height: 200px;
}

.pp-contact .pp-contact-message {
  padding-left: 5rem;
}

@media (max-width: 768px) {
  .pp-contact .h4 {
    padding-top: 4rem;
  }
  .pp-contact .pp-contact-message {
    padding-left: 0;
  }
}

/*Blog Page*/
.pp-container-readable {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 760px;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
}
.pp-container-readable .pp-post {
  margin-bottom: 50px;
}
.pp-container-readable .pp-post + .pp-post {
  padding-top: 50px;
  border-top: 1px solid rgba(228, 226, 226, 0.7);
}
.pp-container-readable .pp-post .pp-post-meta {
  color: #aaa;
  margin-bottom: 24px;
}
.pp-container-readable .pp-post .pp-post-meta ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.pp-container-readable .pp-post .pp-post-meta ul li {
  display: inline;
  padding-right: 18px;
}
.pp-container-readable .pp-post .pp-post-meta ul li i {
  padding-right: 5px;
}
.pp-container-readable .pp-post .pp-post-title {
  margin-top: 18px;
  margin-bottom: 8px;
}
.pp-container-readable .pp-post a {
  text-decoration: none;
}
.pp-container-readable .pp-post .pp-post-read-more {
  padding-top: 10px;
}
.pp-container-readable .pp-pagination {
  padding-top: 2rem;
}
.pp-container-readable .pp-pagination ul {
  list-style-type: disc;
  border-radius: 4px;
  padding: 0;
}
.pp-container-readable .pp-pagination ul li {
  display: inline-block;
  margin-right: 2px;
}
.pp-container-readable .pp-pagination ul li a {
  border: 2px solid #eeeeee;
  border-radius: 3px;
  display: block;
  float: none;
  padding: 8px 15px;
  text-decoration: none;
}
.pp-container-readable .pp-pagination ul li a:hover {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
}

/* Blog Post Page */
.pp-blog-details {
  margin-top: 20px;
}
.pp-blog-details blockquote {
  font-style: italic;
  padding-left: 20px;
  margin-right: 20px;
}
.pp-blog-details .pp-tags {
  margin-top: 40px;
  margin-bottom: 60px;
}
.pp-blog-details .pp-tags a {
  margin-right: 10px;
}
.pp-blog-details .pp-comments .media {
  margin-top: 3rem;
}
.pp-blog-details .pp-comments .media .fa {
  padding-right: 5px;
}
@media (max-width: 576px) {
  .pp-blog-details .pp-comments .media {
    display: block;
  }
}
.pp-blog-details .pp-comments img {
  height: 60px;
  width: 60px;
}
.pp-blog-details .pp-comments a {
  text-decoration: none;
}
.pp-blog-details .pp-comments span {
  padding-left: 6px;
}

/* Common Style */
.pp-section {
  padding-top: 6rem;
}
</style>