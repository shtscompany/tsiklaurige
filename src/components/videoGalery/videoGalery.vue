<template>
  <div>
    <h3 class="text-xs-center text-center mt-4">ვიდეო გალერეა</h3>
    <div class="container pb-video-container mt-4">
      <div class="row pb-row">
        <div
          class="col-md-4 pb-video"
          v-for="(video, index) in videos"
          :key="index"
        >
          <iframe
            class="pb-video-frame d-inline-flex"
            width="100%"
            height="230"
            :src="video.videoLink"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center">{{
            video.videoName
          }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      videos: [
        {
          videoName: "გვარის დალოცვა",
          videoLink: "https://www.youtube.com/embed/tH0XOPU0f3A",
        },
        {
          videoName: "საგვარეულო ერთობა ერთსულოვნებაზე",
          videoLink: "https://www.youtube.com/embed/BcQdlC5I568",
        },
        {
          videoName: "ივანე წიკლაური ათენგენობაზე",
          videoLink: "https://youtube.be/embed/r2UD5AlUgOA",
        },
      ],
    };
  },
};
</script>

<style scoped>
.pb-video-container {
  padding-top: 20px;
  background: #bdc3c7;
  font-family: Lato;
}

.pb-video {
  border: 1px solid #e6e6e6;
  padding: 5px;
}

.pb-video:hover {
  background: #2c3e50;
}

.pb-video-frame {
  transition: width 2s, height 2s;
}

.pb-video-frame:hover {
  height: 300px;
}

.pb-row {
  margin-bottom: 10px;
}
</style>