<template>
  <div>
    <div class="">
      <div class="mt-3">
        <div id="banner" class="text-center">
          <h2 class="text-light text-center align-middle">
            {{ orgTitle }}
          </h2>
          <p class="lead text-center text-light">
            {{ orgDevise }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      orgTitle: "წიკლაურთა საგვარეულო ერთობა",
      orgDevise: "გვიყვარს უფალი, სამშობლო, წიკლაურები",
      imgUrl:
        "https://tsfunion.files.wordpress.com/2020/03/13422363_1032688446766276_1848968898054992065_o-1.jpg",
      altInfo: "Tsiklauri's In trinity",
    };
  },
};
</script>

<style scoped>
#banner {
  height: 24rem;
  background-position: center center;
  background-image: url("https://tsfunion.files.wordpress.com/2020/03/13422363_1032688446766276_1848968898054992065_o-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #464646;
}
h2 {
  padding-top: 6rem;
}
p {
  padding-top: 3rem;
}

.view {
  height: 100%;
}
</style>