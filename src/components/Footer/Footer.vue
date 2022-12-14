<template>
  <div>
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>აქტიური პროექტები</h3>
              <ol style="list-style-type: georgian">
                <li v-for="(projName, index) in projects" :key="index">
                  {{ projName.name }}
                </li>
              </ol>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <div v-for="(menu, index) in menuBar" :key="index">
                <router-link class="dropdown-item pr-3" :to="menu.menuLink">{{
                  menu.menuName
                }}</router-link>
              </div>
            </div>
            <div class="col-md-6 item text">
              <h3>წიკლაურთა საგვარეულო ერთობა</h3>
              <p>
                ვემსახურებით უფლს, სამშობლოს, წიკლაურებს. 2012 წლიდან
                ვახორციელებთ მრავალ პროექტს და აქტივობას. ჩვენ გჯერა, რომ ერთად
                მეტის კეთებას შევძლებთ.
              </p>
              <h3 class="mt-4">კონტაქტი</h3>
              <ul>
                <li>ტელეფონი: 577651114</li>
                <li>ელ-ფოსტა: shtscompany@gmail.com</li>
              </ul>
            </div>
            <div class="col item social">
              <a href="https://facebook.com/tsfunion"
                ><i
                  class="fab fa-facebook bg-white text-primary"
                  style="font-size: 38px"
                ></i
              ></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- footer dark copyright -->
    <footer class="p-3 bg-dark text-white text-center">
      <div class="row">
        <p class="lead col-md-11">
          CopyRight &copy; ვებ გვერდი დამზადებული წიკლაურთა საგვარეულო ერთობის
          მიერ
        </p>
        <a href="#" class="position-relative col-md-1 float-right">
          <i class="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
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
      projects: [
        { name: "ივერიის ყოვლადწმინდა ღვთისმშობლის ხატის გადაბრძანება" },
        { name: "დავეხმაროთ ერთმანეთს" },
        { name: "კინო და თეატრი ბავშვებისთვის" },
        { name: "თავისუფალი დარბაზი ხელოვანს" },
        { name: "დარგე ხე წიკლაურებთან ერთად" },
        { name: "ბავშვები გასართობ ცენტრში" },
        { name: "მოაწესრიგე სალოცავი  წიკლაურებთან  ერთად" },
      ],
    };
  },
};
</script>

<style scoped>
.footer-dark {
  padding: 50px 0;
  color: #282d32;
  background-color: #f0f9ff;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
</style>