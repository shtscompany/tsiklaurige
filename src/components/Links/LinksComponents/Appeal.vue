<template>
  <div>
    <!-- Main pages -->
    <h4 class="mt-4">{{ title }}</h4>
    <ul class="mt-2">
      <li v-for="(item, index) in items" :key="index" class="break-text">
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
      // main pages data
      title: "მიმართვები",
      items: [
        {
          name: "	ვიდეო მიმართვები სიკეთის კვალი	",
          link: "	http://www.siketiskvali.org/ka/foundation/videogallery	",
        },
        {
          name: "	თემურ წიკლაურის მიმართვა	",
          link: "	https://youtu.be/V-JhBaSD8gI	",
        },
      ],
    };
  },
};
</script>

