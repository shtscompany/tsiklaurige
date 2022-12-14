<template>
  <div class="d-flex justify-content-center">
    <div class="pt-4" style="width: 18rem">
      <img class="card-img-top" :src="logo" :alt="logoAlt" />
      <div class="card-body">
        <p class="card-text text-center lead">{{ logoDevise }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: () => {
    return {
      logo:
        "https://tsfunion.files.wordpress.com/2020/03/13613498_1048583785176742_2019035676890439635_o.jpg?w=220",
      logoAlt: "logo",
      logoDevise: "ჩვენ, ერთად ვქმნით სიყვარულს!",
    };
  },
};
</script>