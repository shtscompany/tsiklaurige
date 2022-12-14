
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
      title: "საბრძოლო არასამთავრობო ორგანიზაციები",
      items: [
        {
          name: "	საზოგადოებრივი ორგანიზაცია აისი	",
          link: "	http://www.aisiforce.org/word/	",
        },
        {
          name: "	შავფაროსნები	",
          link: "	https://www.facebook.com/shavparosnebi/	",
        },
      ],
    };
  },
};
</script>
