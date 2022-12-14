<template id="sentSuccesMassage">
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4 text-center">{{ sentMassage }}</h1>
      <p class="lead text-center mt-3">{{ devise }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      sentMassage: "თქვენი მოთხოვნა წარმატებით გაიგზავნა",
      devise: "ღმერთმა ერთად მეტი შეგვაძლებინოს",
    };
  },
};
</script>