<template>
  <div class="intro">
    <h1 class="name">Paion Jeffery</h1>
    <h3>
      Self-learning software and electrical engineering through research & development.
      <br>Filming the entire process on YouTube.
    </h3>
    <div class="statitisics">
    <IOdometer class="iOdometer" :value="subscriberCount"/>
    <a>&nbsp;subscribers &nbsp;-</a>
    <IOdometer class="iOdometer" :value="videoCount"/>
    <a>&nbsp;videos</a>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import IOdometer from "vue-odometer";
import "odometer/themes/odometer-theme-default.css";

export default {
  name: "MainIntro",
  components: {
    IOdometer
  },
  data() {
    return {
      subscriberCount: 0,
      videoCount: 0
    };
  },
  methods: {
    getApiInSchedule(minutes, apikey, channelId) {
      var the_interval = minutes * 60 * 1000;
      setInterval(this.getYoutubeStatic, the_interval, apikey, channelId);
    },
    getYoutubeStatic(apikey, channelId) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apikey}`
        )
        .then(
          res => (
            (this.subscriberCount = parseInt(
              res.data.items[0].statistics.subscriberCount
            )),
            (this.videoCount = parseInt(
              res.data.items[0].statistics.videoCount
            ))
          )
        );
    }
  },
  created() {
    // Todo: Hide apikey if apikey can write
    const apikey = "AIzaSyDOT17cQIBRXfQzlFDyZau3IW5y6WtZuWY";
    const channelId = "UCLsChHb_H87b9nW_RGCb73g";
    this.getYoutubeStatic(apikey, channelId);
    this.getApiInSchedule(
      0.2,
      "AIzaSyDOT17cQIBRXfQzlFDyZau3IW5y6WtZuWY",
      "UCLsChHb_H87b9nW_RGCb73g"
    );
  }
};
</script>

<style scoped>
.name {
  letter-spacing: 4px;
  font-size: 5rem;
  margin:25px;
  font-family: Arial, Helvetica, sans-serif,!important;
}

.intro {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: white;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1.5s;
}

.statitisics{
  display: inline;
}

.iOdometer {
  font-size: 1rem;
  margin: 0;
  font-family: 'Gravity-Bold';
}

a{
  font-size: 14px;
  margin: 0;
  line-height: 1.1em;
}

@keyframes fadeOutOpacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
