<template>
  <div class="container">
    <h4 class="pt-2" style="letter-spacing: 3px">{{ offerTitle }}</h4>
    <ol class="pt-2">
      <template v-for="(offerItem, index) in offerItems">
        <div :key="offerItem.id">
          {{ index + 1 }}) {{ offerItem.itemTitle }}
          <ul>
            <li v-for="(itemInfo, index2) in offerItem.itemInfos" :key="index2">
              {{ itemInfo }}
            </li>
          </ul>
        </div>
      </template>
    </ol>
  </div>
</template>


<script>
export default {
  data: () => {
    return {
      offerTitle: "საგვარეულო ერთობა გთავაზობთ:",
      offerItems: [
        {
          itemTitle:
            "საგვარეულო ხატის მიბრძანების მსურველებს, ხატის მიბრძანების ორგანიზებას.",
        },
        {
          itemTitle: "დახმარების მსურველ ოჯახებს:",
          itemInfos: [
            "საგვარეულო ერთობის საქველმოქმედო ანგარიშის ნომერს.",
            "საქველმოქმედო ტელეფონის ნომერს (1 ზარი 1 ლარი) მაგთის, ჯეოსელის და  ბილაინის სატელეფონო ქსელიდან განხორციელებული ზარებისთვის  (0901 901 978) .",
            "არსებული წიკლაურების ტელეფონის ნომრებზე SMS შეტყობინებების გადაგზავნას.",
            "ქველმოქმედებისთვის საჭირო ტრანსპორტის გამოყოფას.",
          ],
        },
        {
          itemTitle: "ხელოვან პირებს:",
          itemInfos: [
            "საგამოფენო დარბაზის დაქირავებას.",
            "პოეზიის საღამოს მოწყობის ორგანიზებას.",
            "შემოქმედებითი საღამოების მოწყობის ორგანიზებას.",
          ],
        },
        {
          itemTitle: "სხვა დაინტერესებულ პირებს.",
          itemInfos: [
            "სიკეთის კეთებაში ურთიერთ თანადგომას.",
            "საკუთრებაში არსებული ბიზნესებისთვის ბანერის დამზადებას და ბლოგზე განთავსებას.",
            "სალოცავებში წასვლის ორგანიზებას.",
            "წარმატებული წიკლაურების PR-ს facebook გვერდის საშუალებით.",
            "სუბდომენს www.*****.tsiklauri.ge ზე და ვებ გვერდის განსათავსებელ სივრცეს (hosting-ს).",
            "და სხვა.",
          ],
        },
      ],
    };
  },
};
</script>

<style  scoped>
ol {
  counter-reset: list;
}
ol > li {
  list-style: none;
}
ol > li:before {
  content: counter(list) ") ";
  counter-increment: list;
}
</style>



 




