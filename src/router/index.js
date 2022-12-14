import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: () => import("../components/About/About.vue")
  },
  {
    path: "/organization",
    name: "organization",
    component: () => import("../components/menuBar/organization.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/About/About.vue")
  },
  {
    path: "/activity",
    name: "activity",
    component: () => import("../components/Activity/Activity.vue")
  },
  {
    path: "/Application",
    name: "pageSwitching",
    component: () =>
      import("../components/menuBar/Application/pageSwitching.vue")
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../components/Contacts/Contacts.vue")
  },
  {
    path: "/donation",
    name: "donation",
    component: () => import("../components/Donation/Donation.vue")
  },
  {
    path: "/photogallery",
    name: "photoGallery",
    component: () => import("../components/PhotoGallery/PhotoGallery.vue")
  },
  {
    path: "/links",
    name: "links",
    component: () => import("../components/Links/Links.vue")
  },
  {
    path: "/ourTeam",
    name: "ourTeam",
    component: () => import("../components/OurTeam/ourTeam.vue")
  },
  {
    path: "/prayPlaces",
    name: "prayPlaces",
    component: () => import("../components/menuBar/prayPlaces.vue")
  },
  {
    path: "/tsHistory",
    name: "tsHistory",
    component: () => import("../components/menuBar/tsHistory.vue")
  },
  {
    path: "/tsStore",
    name: "tsStore",
    component: () => import("../components/Store/Store.vue")
  },
  {
    path: "/videoGalery",
    name: "videoGalery",
    component: () => import("../components/videoGalery/videoGalery.vue")
  },
  {
    path: "/sentSuccess",
    name: "sentSuccess",
    component: () => import("../components/menuBar/Application/sentSuccess.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
