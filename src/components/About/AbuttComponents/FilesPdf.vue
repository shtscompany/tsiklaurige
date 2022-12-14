<template>
  <div class="pt-4">
    <div class="row pt-4">
      <div
        class="col-md-6 col-sm-12 text-center mb-4 d-flex justify-content-center"
      >
        <a :href="amonaceri.link">
          <div style="width: 10rem">
            <img class="card-img-top" :src="pdfLogo" :alt="pdfLogoAlt" />
            <div class="card-body" style="width: 18rem; margin-left: -4rem">
              <p class="card-text">{{ amonaceri.title }}</p>
            </div>
          </div>
        </a>
      </div>

      <div
        class="col-md-6 col-sm-12 text-center mb-4 d-flex justify-content-center"
      >
        <a :href="amonaceri.link">
          <div style="width: 10rem">
            <img class="card-img-top" :src="pdfLogo" :alt="pdfLogoAlt" />
            <div class="card-body" style="width: 18rem; margin-left: -4rem">
              <p class="card-text">{{ amonaceri.title }}</p>
            </div>
          </div>
        </a>
      </div>

      <!-- 
    <div class="col-md-6 col-sm-12 text-center mx-auto">
      <a :href="cesdeba.link">
        <img :src="pdfLogo" :alt="pdfLogoAlt" width="80px" />
        <p>{{ cesdeba.title }}</p>
      </a>
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      pdfLogo:
        "https://tsfunion.files.wordpress.com/2020/03/400px-pdf_file_icon.svg_.png?w=400",
      pdfLogoAlt: "Pdf Logo",
      amonaceri: {
        title:
          "ამონაწერი მეწარმეთა და არასამეწარმეო იურიდიული პირების რეესტრიდან",
        link:
          "https://drive.google.com/file/d/0ByxzZWk5w2xoSkVEajE3WmM1TUU/view?usp=sharing",
      },
      cesdeba: {
        title: "ა(ა)იპ წიკლაურთა საგვარეულო ერთობის წესდება",
        link:
          "https://drive.google.com/file/d/0ByxzZWk5w2xoUnVybWN2NGl6VDg/view?usp=sharing",
      },
    };
  },
};
</script>