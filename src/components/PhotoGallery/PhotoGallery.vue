<template>
  <div>
    <!-- xatis gadabrdzaneba -->
    <div id="photoGallery" class="container gallery-container">
      <h3 class="text-light text-center">{{ xatis.name }}</h3>
      <div class="tz-gallery">
        <div class="row">
          <div
            class="col-sm-6 col-md-3 image"
            v-for="(image, index) in xatis.images"
            :key="index"
          >
            <a class="lightbox" :href="image">
              <img
                :src="image"
                alt="xatis gadabrdzaneba"
                height="200"
                class="p-1"
              />
              <i class="fas fa-search overlay fa-4x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- davexmarot ertmanets -->

    <div id="photoGallery" class="container gallery-container">
      <h3 class="text-light text-center">{{ davErtmanets.name }}</h3>
      <div class="tz-gallery">
        <div class="row">
          <div
            class="col-sm-6 col-md-3 image"
            v-for="(image, index) in davErtmanets.images"
            :key="index"
          >
            <a class="lightbox" :href="image">
              <img
                :src="image"
                :alt="davErtmanets.name"
                height="200"
                class="p-1"
              />
              <i class="fas fa-search overlay fa-4x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- cinema and theater -->
    <div id="photoGallery" class="container gallery-container">
      <h3 class="text-light text-center">{{ cinemaTheatre.name }}</h3>
      <div class="tz-gallery">
        <div class="row">
          <div
            class="col-sm-6 col-md-3 image"
            v-for="(image, index) in cinemaTheatre.images"
            :key="index"
          >
            <a class="lightbox" :href="image">
              <img
                :src="image"
                :alt="cinemaTheatre.name"
                height="200"
                class="p-1"
              />
              <i class="fas fa-search overlay fa-4x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- tavisufali darbazi xelovans -->
    <div id="photoGallery" class="container gallery-container">
      <h3 class="text-light text-center">{{ freeHoll.name }}</h3>
      <div class="tz-gallery">
        <div class="row">
          <div
            class="col-sm-6 col-md-3 image"
            v-for="(image, index) in freeHoll.images"
            :key="index"
          >
            <a class="lightbox" :href="image">
              <img :src="image" :alt="freeHoll.name" height="200" class="p-1" />
              <i class="fas fa-search overlay fa-4x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baguetteBox from "baguettebox.js";

export default {
  mounted() {
    baguetteBox.run(".tz-gallery");
  },
  data: () => {
    return {
      xatis: {
        name: "ხატის გადაბრძანება",
        images: [
          "	https://tsfunion.files.wordpress.com/2020/03/95b6d-191879_191942337507562_4842607_o.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/5806d-16826015_1253032254731893_3603622080556451381_o.jpg?w=750	",
          "	https://tsfunion.files.wordpress.com/2020/03/5414e-17880303_1296712277030557_3560745142216760365_o.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/119cd-734554_486341521400974_1940345915_n.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/87b44-1979956_659116784123446_648848693_o.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/d8304-17017155_1253026884732430_2896932175004758015_o.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/bc96a-1979158_681633118538479_8558823796388781988_o.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/9def8-17359298_1269816429720142_1892212446525534303_o.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/bf37b-1658554_647961905238934_538701561_o.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/3a92a-1597240_668383956530062_3967727771732201970_o.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/4f821-15390949_1184509474917505_3159307948201218967_n.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/29b7f-14322230_1096600377041749_6937581427444666170_n.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/9b338-14980565_1145352692166517_6401348564681618083_n.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/989be-14258342_1096600167041770_500800076721428173_o.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/40935-14206223_1087073607994426_6026833042015139431_o.jpg?w= 750	",
          "	https://tsfunion.files.wordpress.com/2020/03/772f6-12241325_924081124293676_7992729541796946769_n.jpg?w= 750	",
        ],
      },
      davErtmanets: {
        name: "დავეხმაროთ ერთმანეთს",
        images: [
          "	https://tsfunion.files.wordpress.com/2020/03/d52a3-15085670_1153961497972303_7494977252479316346_n.jpg?w=750	",
          "	https://tsfunion.files.wordpress.com/2020/03/fff7d-15168930_1163132800388506_3216757236325548932_o.jpg?w=750	",
          "	https://tsfunion.files.wordpress.com/2020/03/cabde-12512315_953325741369214_8048537948767765515_n.jpg?w=750	",
          "	https://tsfunion.files.wordpress.com/2020/03/ea85c-17972369_1303196073048844_4572150370691190610_o.jpg?w=750	",
          "	https://tsfunion.files.wordpress.com/2020/03/3fd08-14566368_1119439424757844_7330475675769209856_o.jpg?w=750	",
          "	https://tsfunion.files.wordpress.com/2020/03/1b868-12540580_953325734702548_2903451125531787720_n.jpg?w=750	",
          "	https://tsfunion.files.wordpress.com/2020/03/c69fe-10955504_844314195603703_7696194233989646503_o.jpg?w=750	",
          "	https://tsfunion.files.wordpress.com/2020/03/ae2cc-10295050_671932406175217_3968246886605362951_o.jpg?w=750	",
          "	https://tsfunion.files.wordpress.com/2020/03/e423e-14379818_1100387573329696_1293975364028512236_o.jpg?w=750	",
          "	https://tsfunion.files.wordpress.com/2020/03/b7d7d-10422171_829135103788279_7542921650714151273_n.jpg?w=750	",
          "	https://tsfunion.files.wordpress.com/2020/03/1eabb-14591845_1113776005324186_572205458408879431_n.jpg?w=628	",
          "	https://tsfunion.files.wordpress.com/2020/03/10487-12122960_907578549277267_1340267059547483396_n.jpg?w=750	",
        ],
      },
      cinemaTheatre: {
        name: "კინო და თეატრი ბავშვებისთვის",
        images: [
          "https://tsfunion.files.wordpress.com/2020/03/1f09a-10985559_810822412286215_7937064144107122077_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/8a8ee-10942755_796532867048503_1196975364739873738_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/bcc8d-988878_780319395336517_257838951478965545_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/a3268-1488163_780319368669853_6477974152082540673_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/cc8a3-16265284_1218952284806557_111270654208404689_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/66550-10548180_772686632766460_6855519430826199910_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/c0e67-16107444_1218986134803172_413494935204287433_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/34525-16142879_1218952288139890_5189355464285911880_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/a33c4-10445513_780319375336519_1922189241678847852_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/f19cf-1798872_796335693734887_6192958363955175966_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/cfa90-11024196_810822418952881_628298682376709491_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/a66b4-10850213_779318655436591_4014057346672325232_n.jpg?w=750",
        ],
      },
      freeHoll: {
        name: "თავისუფალი დარბაზი ხელოვანს",
        images: [
          "https://tsfunion.files.wordpress.com/2020/03/693f6-705089_456475584387568_1844525813_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/5b39a-1404583_609166635785128_2087384810_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/e1040-1401223_609158189119306_1327620790_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/282f4-1450348_609157915786000_1707184064_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/372d5-13307361_1032688446766276_1848968898054992065_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/089dd-1400771_609158352452623_799000288_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/7d843-906167_609157855786006_174798394_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/a1ef9-904441_609157885786003_1396707632_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/8dec8-1426746_609158615785930_2123636064_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/6e882-1441541_609158452452613_381034764_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/b950a-1402328_609158079119317_190526464_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/cb4ba-1472004_609158249119300_1150686289_n.jpg?w=640",
          "https://tsfunion.files.wordpress.com/2020/03/23530-704648_456479757720484_642443562_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/3654d-883246_609158515785940_147421703_o.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/4322a-1461585_609158425785949_667572147_n.jpg?w=750",
          "https://tsfunion.files.wordpress.com/2020/03/a64b9-68472_455340894501037_880509869_n.jpg?w=750",
        ],
      },
    };
  },
};
</script>

<style>
#photoGallery {
  background-color: #434c50;
  min-height: 100vh;
  font: normal 16px sans-serif;
  padding: 40px 0;
}

.image {
  position: relative;
  display: inline-block;
}
.overlay {
  display: none;
}
.image:hover .overlay {
  position: absolute;
  top: 42%;
  left: 42%;
  display: inline-block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.fa-search {
  color: white;
}

.container.gallery-container {
  background-color: #fff;
  color: #35373a;
  min-height: 100vh;
  padding: 30px 50px;
}

.gallery-container h1 {
  text-align: center;
  margin-top: 50px;
  font-family: "Droid Sans", sans-serif;
  font-weight: bold;
}

.gallery-container p.page-description {
  text-align: center;
  margin: 25px auto;
  font-size: 18px;
  color: #999;
}

.tz-gallery {
  padding: 40px;
}

/* Override bootstrap column paddings */
.tz-gallery .row > div {
  padding: 2px;
}

.tz-gallery .lightbox img {
  width: 100%;
  border-radius: 0;
  position: relative;
}

.tz-gallery .lightbox:before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  opacity: 0;
  color: #fff;
  font-size: 26px;
  pointer-events: none;
  z-index: 9000;
  transition: 0.4s;
}

.tz-gallery .lightbox:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(46, 132, 206, 0.7);
  content: "";
  transition: 0.4s;
}

.tz-gallery .lightbox:hover:after,
.tz-gallery .lightbox:hover:before {
  opacity: 1;
}

.baguetteBox-button {
  background-color: transparent !important;
}

@media (max-width: 768px) {
  body {
    padding: 0;
  }
}
</style>