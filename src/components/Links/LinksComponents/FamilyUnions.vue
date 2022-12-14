
<template>
  <div>
    <!-- charity and other organization -->
    <h4 class="mt-4">{{ title }}</h4>
    <ul class="mt-2">
      <li v-for="(item, index) in familyUnions" :key="index" class="break-text">
        <a :href="item.link">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data: () => {
    return {
      //charity and other organizations data
      title: "საგვარეულო ერთობები",
      familyUnions: [
        {
          link: "	http://bekauri.blogspot.com/	",
          name: "	ბექაურები	",
        },
        {
          link:
            "	https://www.facebook.com/%E1%83%A9%E1%83%9D%E1%83%AE%E1%83%94%E1%83%9A%E1%83%97%E1%83%90-%E1%83%A1%E1%83%90%E1%83%92%E1%83%95%E1%83%90%E1%83%A0%E1%83%94%E1%83%A3%E1%83%9A%E1%83%9D-%E1%83%94%E1%83%A0%E1%83%97%E1%83%9D%E1%83%91%E1%83%90-%E1%83%A1%E1%83%90%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98-896621157045024/	",
          name: "	ჩოხელთა საგვარეულო ერთობა “სამანი”	",
        },
        {
          link: "	http://burdulebi.blogspot.com/2009/12/blog-post_26.html	",
          name: "	ბურდულები	",
        },
        {
          link: "	http://chaduneli.ge/	",
          name: "	ჩადუნელები	",
        },
        {
          link: "	http://abuladzeebi.ge/home	",
          name: "	აბულაძეები	",
        },
        {
          link: "	http://www.shalamberidzeebi.com/	",
          name: "	შალამბერიძეები	",
        },
        {
          link: "	http://saladze.com/	",
          name: "	სალაძეები	",
        },
        {
          link: "	http://nizharadzeta.webs.com/	",
          name: "	ნიჟარაძეები	",
        },
        {
          link: "	http://ramazashvilebi.clan.su/	",
          name: "	რამაზაშვილები	",
        },
        {
          link: "	http://gagua.ge/index.php?action:7.1&id:10&lang:geo	",
          name: "	გაგუები	",
        },
        {
          link: "	http://shelegiebi.livejournal.com/	",
          name: "	შელეგიები	",
        },
        {
          link:
            "	http://www.shelia.ge/news/sheliebis_sagvareulo_tsignis_gamotsema/2016-01-23-46	",
          name: "	შელია	",
        },
        {
          link: "	http://shonia.org/marquee_news.php?id:75	",
          name: "	შონია	",
        },
        {
          link: "	http://medulashvili.ge/?page_id:22	",
          name: "	მედულაშვილები	",
        },
        {
          link: "	http://tsutskiridzeebi.hostwe.com/	",
          name: "	ცუცქირიძეები	",
        },
        {
          link: "	http://www.nozadze.ge/117/	",
          name: "	ნოზაძე	",
        },
        {
          link: "	http://maisuradzeni.com/sagvareulo-kavshiris-tsevrebi/	",
          name: "	მაისურაძე	",
        },
        {
          link: "	http://nakashidze.ucoz.com/	",
          name: "	ნაკაშიძე	",
        },
        {
          link: "	http://union.zarnadze.com/geo/	",
          name: "	ზარნაძე	",
        },
      ],
    };
  },
};
</script>

<style>
</style>