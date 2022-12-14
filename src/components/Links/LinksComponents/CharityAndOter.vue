
<template>
  <div>
    <!-- charity and other organization -->
    <h4 class="mt-4">{{ charityAndOtherTitle }}</h4>
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
      charityAndOtherTitle: "საქველმოქმედო და სხვა არასამთავრობო ორგანიზაციები",
      charityAndOther: [
        {
          name: "	ჩართე	",
          link: "	https://charte.ge/	",
        },
        {
          name: "	სიკეთის კვალი	",
          link: "	http://www.siketiskvali.org/ka/	",
        },
        {
          name: "	იავნანა	",
          link: "	http://iavnana.ge/	",
        },
        {
          name: "	სოციალური პარტნიორობა	",
          link: "	https://fsp.ge/ge/	",
        },
        {
          name: "	კარატისი	",
          link: "	http://caritas.ge/	",
        },
        {
          name: "	ჩერნოვეცკის ფონდიწითელი ჯვარი	",
          link: "		",
        },
        {
          name: "	სიკეთის კვალი	",
          link: "	http://www.siketiskvali.ge/ka	",
        },
        {
          name: "	ევროპის ფონდი	",
          link: "	http://www.epfound.ge/georgian/mtavari.html	",
        },
        {
          name: "	სოციალური მეწარმეობის ცენტრი	",
          link: "	http://www.segeorgia.org/index.php?ID=1	",
        },
        {
          name: "	სიდა	",
          link: "	http://www.cida.ge/site/index.php/Geo/2012-11-16-18-32-11	",
        },
        {
          name: "	კოალიცია დამოუკიდებელი ცხოვრებისათვის	",
          link: "	http://disability.ge/index.php?option=com_frontpage&Itemid=1	",
        },
        {
          name: "	ჩვენ – ჯანსაღი მომავლისთვის	",
          link:
            "	https://www.facebook.com/ChvenJansaghiMomavlistvis/?hc_ref=PAGES_TIMELINE	",
        },
        {
          name: "	ინფორმაციის თავისუფლების განვითარების ინსტიტუტი (IDFI)	",
          link: "	https://idfi.ge/ge	",
        },
        {
          name: "	საქართველოს ახალგაზრდა ეკონომისტთა ასოციაცია	",
          link: "	http://www.economists.ge/ka/home	",
        },
        {
          name: "	ბიზნესისა და ეკონომიკის ცენტრი	",
          link: "	http://www.bec.ge/	",
        },
        {
          name: "	ახალგაზრდა ფინანსისტთა და ბიზნესმენთა ასოციაცია (აფბა)	",
          link: "	http://afba.ge/ge	",
        },
        {
          name: "	ქვაზე დადე გაიარე	",
          link: "	https://www.facebook.com/RiseByLiftingOthers/	",
        },
        {
          name: "	ვაჩუქოთ მომავალს ღიმილი	",
          link:
            "	https://www.facebook.com/GiftTheFutureSmile/?hc_ref=SEARCH&fref=nf	",
        },
        {
          name: "	ფონდი SOCO	",
          link: "	http://soco.ge/index.php	",
        },
        {
          name: "	დედების ფონდი Facebook	",
          link: "		",
        },
        {
          name: "	სიცოცხლის ხე (საქართველოს ბანკის)	",
          link: "	https://tree.ge/competition/	",
        },
        {
          name: "	ცხოველთა სამყარო	",
          link: "		",
        },
        {
          name: "	მომავლის ახალგაზრდული პოზიცია	",
          link: "		",
        },
        {
          name: "	საქველმოქმედო ორგანიზაცია “ქველი”	",
          link: "		",
        },
        {
          name: "	AURORA ფონდი შავი ზღვისა და პალიასტომის გადასარჩენად	",
          link: "		",
        },
        {
          name: "	პატიმრებისა და მათი ოჯახების დახმარების ფონდი	",
          link: "		",
        },
        {
          name: "	უტყუარი მეგობარი	",
          link: "		",
        },
        {
          name: "	WE HELP	",
          link: "		",
        },
        {
          name: "	საქველმოქმედო ფონდი “ბავშვებს სპორტი”	",
          link: "		",
        },
        {
          name: "	საქველმოქმედო ფონდი “მედიაკავშირი ობიექტივი”	",
          link: "		",
        },
        {
          name: "	საზოგადოება “ფერისცვალება”	",
          link: "		",
        },
        {
          name: "	საქართველოს გარემოს დამცველის ოფისი	",
          link: "		",
        },
        {
          name: "	წიწამური დღეს	",
          link: "		",
        },
        {
          name: "	ფონდი ბუზმარეთი	",
          link: "		",
        },
        {
          name: "	IFIT ინოვაციური ტექნოლოგიების საერთაშორისო ფონდი	",
          link: "		",
        },
        {
          name: "	ფონდი მოდი ნახე	",
          link: "		",
        },
        {
          name: "	იმედის სხივი 2013	",
          link: "		",
        },
        {
          name: "	საქართველოს ცხოველთა დაცვისა და გადარჩენის საზოგადოება	",
          link: "		",
        },
        {
          name: "	სოციალური პარტნიორობა	",
          link: "		",
        },
        {
          name: "	საქველმოქმედო ფონდი იავნანა	",
          link: "		",
        },

        {
          name: "	საქართველოს წითელი ჯვარი	",
          link: "		",
        },

        {
          name: "	სოფელი ნაკიეთი	",
          link: "		",
        },
        {
          name: "	დავით მიქელაძის მომავალ მეცნიერთა ფონდი	",
          link: "	http://www.fsf.ge/	",
        },
        {
          name: "	ცხოველთა მეგობრები	",
          link: "		",
        },

        {
          name: "	ლადო მესხიშვილის თეატრის განვითარების ფონდი	",
          link: "		",
        },
        {
          name: "	სოხუმის სახელმწიფო დრამატული თეატრი	",
          link: "		",
        },
        {
          name: "	დავეხმაროთ აუტიზმის მქონე ბავშვებს	",
          link: "		",
        },
        {
          name: "	ჩერნოვეცკის ფონდი	",
          link: "		",
        },

        {
          name: "	პირველი ნაბიჯი  FIRST STEP	",
          link: "		",
        },
        {
          name: "	საზოგადოება ფერისცვალება	",
          link: "		",
        },
        {
          name: "	სიცოცხლის ხე	",
          link: "		",
        },
        {
          name: "	დიმიტრი ცინცაძის სახელობის ფონდი	",
          link: "		",
        },
        {
          name: "	სოლიდარობის ფონდი	",
          link: "		",
        },

        {
          name: "	საერთაშორისო საქველმოქმედო ფონდი სიკეთის კვალი	",
          link: "		",
        },
        {
          name: "	ფონდი სიცოცხლე	",
          link: "		",
        },
        {
          name: "	ააიპ ფრესკოს საქველმოქმედო ფონდი	",
          link: "		",
        },
        {
          name: "	დედის ხელები	",
          link: "		",
        },
        {
          name: "	ფონდი გურული დღიურები	",
          link: "		",
        },
        {
          name: "	ქართული ფესვები	",
          link: "		",
        },
        {
          name: "	მანიფესტი	",
          link: "	http://www.manifest.ge/	",
        },
        {
          name: "	გააგრძელე საქართველოს ისტორია	",
          link: "		",
        },
        {
          name: "	ფონდი ბანა	",
          link: "		",
        },
        {
          name: "	კათარზისი	",
          link: "		",
        },
        {
          name: "	ქართული უნივერსიტეტის საზოგადოება	",
          link: "		",
        },

        {
          name: "	რენესანსი	",
          link: "		",
        },
        {
          name: "	სოციალური პედიატრიის დაცვის ფონდი	",
          link: "		",
        },
        {
          name: "	ფონდი მეოხი	",
          link: "		",
        },
        {
          name: "	აფხაზი	",
          link: "		",
        },
        {
          name: "	საქველმოქმედო ორგანიზაცია სიცოცხლე	",
          link: "		",
        },
        {
          name: "	ხელნაწერთა ე.ცენტრი	",
          link: "		",
        },
        {
          name: "	ფონდი მედინვესტი	",
          link: "		",
        },
        {
          name: "	ანდღულაძეთა საგვარეულო დარბაზი	",
          link: "		",
        },
        {
          name: "	ფონდი ტალავერი	",
          link: "		",
        },

        {
          name: "	VITANOVA ახალი სიცოცხლე	",
          link: "		",
        },
        {
          name: "	http://www.pdc.ge	",
          link: "	http://www.pdc.ge/	",
        },
        {
          name: "	თამაზ ელიზბარაშვილის ძაღლების გადარჩენის	",
          link: "		",
        },
        {
          name: "	ადამიანთა და პატიმართა უფლებების დაცვის	",
          link: "		",
        },
        {
          name: "	არასამთავრობო ორგანიზაცია “ჰერა”	",
          link: "		",
        },
        {
          name: "	დავეხმაროთ როსტომს როსტომი	",
          link: "		",
        },
        {
          name: "	ოქროს გული	",
          link: "		",
        },
        {
          name: "	ჩვენ თვითონ მივხედოთ ერთმანეთს	",
          link: "		",
        },

        {
          name: "	ქედელი	",
          link: "		",
        },
        {
          name: "	ფონდი თრეხვი	",
          link: "		",
        },

        {
          name: "	ჩვენ განსხვავებულები ვართ აუტიზმის მქონე ბავშვთა დახმარება	",
          link: "		",
        },
      ],
    };
  },
};
</script>

<style>
</style>