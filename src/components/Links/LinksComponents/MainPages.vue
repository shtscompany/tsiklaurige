
<template>
  <div>
    <!-- Main pages -->
    <h4 class="mt-4">{{ mainPageTitle }}</h4>
    <ul class="mt-2">
      <li
        v-for="(mainPage, index) in mainPages"
        :key="index"
        class="break-text"
      >
        <a :href="mainPage.link">
          {{ mainPage.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      // main pages data
      mainPageTitle: "ძირითადი გვერდები",
      mainPages: [
        {
          name: "წიკლაურების ისტორიები",
          link: "http://www.tsiklaurebi.blogspot.com/",
        },
        {
          name: "წიკლაურთა საგვარეულო ერთობის facebook გვერდი",
          link: "https://www.facebook.com/tsfunion",
        },
        {
          name: "სალოცავები",
          link: "http://salocavebi.blogspot.com/",
        },
      ],
    };
  },
};
</script>

<style>
</style>