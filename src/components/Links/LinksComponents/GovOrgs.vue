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
      title: "სახელმწიფო პროგრამები",
      items: [
        {
          name: "	მერიის სოციალური პროგრამები	",
          link: "	http://tbilisi.gov.ge/page/293	",
        },
        {
          name: "	ბავშვთა და ახალგაზრდობის განვითარების ფონდი	",
          link: "	http://www.fondi.gov.ge/	",
        },
        {
          name: "	www.csrdg.ge	",
          link: "	http://www.csrdg.ge/	",
        },
        {
          name: "	www.kedec.ge	",
          link: "	http://www.kedec.ge/	",
        },
        {
          name: "	www.asb-georgia.org	",
          link: "	http://www.asb-georgia.org/	",
        },
        {
          name: "	საქართველოს სტრატეგიული კვლევებისა და განვითარების ცენტრი	",
          link: "	http://www.csrdg.ge/	",
        },
        {
          name: "	თემის განვითარების რესურს ცენტრი	",
          link: "	http://cdrc.ge/	",
        },
        {
          name: "	მომხმარებელი.გე	",
          link: "	http://momxmarebeli.ge/	",
        },
        {
          name: "	პრო ბონო საქართველო	",
          link: "	http://probonogeorgia.ge/	",
        },
      ],
    };
  },
};
</script>

