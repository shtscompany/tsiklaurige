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
      title: "NGO’s",
      items: [
        {
          name: "	დემოკრატიის ლაბორატორია	",
          link: "	http://www.demlab.ge/	",
        },
        {
          name: "	ახალგაზრდა ადვოკატები	",
          link: "	http://www.barristers.ge/ge	",
        },
        {
          name: "	საქართველოს ახალგაზრდა კონსტიტუციონალისტთა ასოციაცია	",
          link: "	http://www.gyca.ge/ge	",
        },
        {
          name:
            "	საარჩევნო სისტემების განვითარების, რეფორმებისა და სწავლების ცენტრი	",
          link: "	http://electionreforms.ge/geo	",
        },
        {
          name: "	როგორ მოვიძიოთ დაფინანსება	",
          link:
            "	https://drive.google.com/file/d/0ByxzZWk5w2xoSUVjVU5EZHdOQms/view?usp=sharing	",
        },
      ],
    };
  },
};
</script>