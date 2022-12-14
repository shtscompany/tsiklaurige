
<template>
  <div>
    <!-- charity and other organization -->
    <h4 class="mt-4">{{ title }}</h4>
    <ul class="mt-2">
      <li
        v-for="(item, index) in charityAndOther"
        :key="index"
        class="break-text"
      >
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
      title: "მთის გვარების და მხარეების გვერდები",
      charityAndOther: [
        {
          name: "ფშავლები ",
          link: "http://pshavi.ge/index.php",
        },
      ],
    };
  },
};
</script>

<style>
</style>