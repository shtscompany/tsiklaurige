<template>
  <div>
    <!-- loop in activity -->
    <!-- responsive table -->
    <div class="table-responsive m-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">{{ this.tableHeaders[0] }}</th>
            <th @click="toggleSort()">
              <span>
                {{ this.tableHeaders[1] }}
                <i v-if="oldestFirst" class="fas fa-arrow-alt-circle-down"></i>
                <i v-else class="fas fa-arrow-alt-circle-up"></i>
              </span>
            </th>
            <th>{{ this.tableHeaders[2] }}</th>
            <th>{{ this.tableHeaders[3] }}</th>
            <th>{{ this.tableHeaders[4] }}</th>
            <th>{{ this.tableHeaders[5] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in sortDate" :key="index">
            <th scope="row">{{ item.id }}</th>

            <td>
              {{ item.date | moment }}
            </td>
            <td>
              <a :href="item.link"> {{ item.title }} </a>
            </td>
            <td>{{ item.proeqti[0] }}</td>
            <td>
              <a :href="item.organizatorLink">{{ item.organizator }}</a>
            </td>
            <td>{{ item.comment }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { firebase } from "@firebase/app";
import "firebase/firestore";
import moment from "moment";

export default {
  data() {
    return {
      titleText: "2012-დღემდე",
      activityMsg: [],
      newDataArr: [],
      // Default sort order
      oldestFirst: true,

      activityMsgLength: null,
      tableHeaders: [
        "#",
        "თარიღი",
        "აქტივობა",
        "პროექტი",
        "ორგანიზატორი",
        "კომენტარი",
      ],
    };
  },
  mounted() {
    this.fetchMessages();
  },

  methods: {
    toggleSort: function () {
      this.oldestFirst = !this.oldestFirst;
    },
    async fetchMessages() {
      const db = firebase.firestore();
      const messageSnap = await db.collection("activityMsg").get();
      this.activityMsg = messageSnap.docs.map((p) => p.data());
      this.activityMsgForUse = this.activityMsg;

      this.activityMsgLength = this.activityMsg.length;
    },
  },
  computed: {
    // sort the data by date using moment.js

    sortDate() {
      const sortIntFunc = (a, b) => {
        let order = this.oldestFirst ? 1 : -1;
        a = new Date(a.date).getTime();
        b = new Date(b.date).getTime();
        let results = a > b ? -1 : a < b ? 1 : 0;
        let newResults = results * order;
        return newResults;
      };

      // copy array with [...]  than sort. to awoid Unexpected side effect in "sortItem" computed property
      let sorted = [...this.activityMsg].sort(sortIntFunc);

      return sorted;
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).format("DD/MM/YYYY");
    },
  },
};
</script>

<style scoped>
.fas {
  color: green;
  display: inline;
}

span {
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
}
</style>