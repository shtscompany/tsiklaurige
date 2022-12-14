<template>
  <div>
    <div class="d-flex justify-content-center mt-4">
      <h2>{{ pageTitle }}</h2>
    </div>

    <!-- mobile operators hot numbers -->
    <div class="my-4 lead">
      <div class="d-flex justify-content-center mt-4 flex-wrap">
        <div
          class=""
          v-for="(operatorLogo, index) in operatorLogos"
          :key="index"
        >
          <img :src="operatorLogo" alt="mob operator logo" />
        </div>
      </div>
      <h4 class="text-center mt-2">{{ hotNum }}</h4>
      <h4 class="text-center mt-2">{{ colPrice }}</h4>
    </div>

    <h3 class="text-center mt-4">{{ bankAccountTitle }}</h3>

    <div class="text-center mt-2">
      <img :src="balnkLogo" alt="bank Logo" />
      <h4 class="mb-4">{{ bankCode }}</h4>
      <h4 class="mt-2" v-for="(currency, index) in currencys" :key="index">
        {{ bankAcountNum }} {{ currency }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      pageTitle: "თანხის გადარიცხვა",
      operatorLogos: [
        "https://tsfunion.files.wordpress.com/2020/03/dc302-m1.jpg",
        "https://tsfunion.files.wordpress.com/2020/03/27306-m2.jpg",
        "https://tsfunion.files.wordpress.com/2020/03/07e3b-m3.jpg",
      ],
      hotNum: "0 901 901 978",
      colPrice: "ზარის ღირებულება 1 ლარი",

      bankAccountTitle:
        "ა(ა)იპ წიკლაურთა საგვარეულო ერთობის საქველმოქმედო ფონდის ანგარიში ",
      balnkLogo: "https://tsfunion.files.wordpress.com/2020/03/add3a-m8.jpg",
      bankCode: "ბანკის კოდი: BAGAGE22",
      bankAcountNum: "GE88BG0000000800544300",
      currencys: ["GEL", "EUR", "USD"],
    };
  },
};
</script>

<style>
</style>