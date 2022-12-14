<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a
        class="navbar-brand float-left"
        href="http://tsiklauri.ge"
        target="_blank"
      >
        წიკლაურები
      </a>
      <form class="form-inline">
        <router-link class="nav-link pr-3" to="/application"
          >აპლიკაცია</router-link
        >
        <div class="btn-group dropleft">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            მენიუ
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <div v-for="(menu, index) in menuBar" :key="index">
              <router-link class="dropdown-item pr-3" :to="menu.menuLink">{{
                menu.menuName
              }}</router-link>
            </div>
          </div>
        </div>
      </form>
    </nav>

    <div class="container">
      <router-view />

      <!-- <pageSwitching /> -->
    </div>

<footInfo />

  </div>
</template>

<script>
// import pageSwitching from "./components/pageSwitching";
import footInfo from "./components/Footer/Footer"
/* eslint-disable */

export default {
  name: "App",
  // comments: {
  //   pageSwitching,
  // },
  components: {
    footInfo,
  },
  data: function () {
    return {
      menuBar: [
        { menuName: "ჩვენს შესახებ", menuLink: "/about" },
        { menuName: "აქტივობები", menuLink: "/activity" },
        { menuName: "ჩვენი გუნდი", menuLink: "/ourTeam" },
        { menuName: "ფოტო გალერეა", menuLink: "/photoGallery" },
        { menuName: "ვიდეო გალერა", menuLink: "/videoGalery" },
        { menuName: "თანხის გადარიცხვა", menuLink: "/donation" },
        { menuName: "ბმულები", menuLink: "/links" },
        { menuName: "მაღაზია", menuLink: "/tsStore" },
        { menuName: "კონტაქტი", menuLink: "/contacts" },
      ],
    };
  },
};
</script>

<style>
</style>


