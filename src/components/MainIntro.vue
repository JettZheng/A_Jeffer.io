<template>
  <div class="intro">
    <h1>Paion Jeffery</h1>
    <h3>
      Self-learning software
      <br>and electrical engineering through research & development.
      <br>Filming the entire process on YouTube.
    </h3>
    <h4 > {{subscriberCount}}subscribers {{videoCount}}videos </h4>
<IOdometer class="iOdometer" :value="subscriberCount"/>
<!-- <IOdometer class="iOdometer" :value="videoCount"/> -->
  </div>
</template>

<script>
import axios from 'axios';
import IOdometer from 'vue-odometer';
import 'odometer/themes/odometer-theme-default.css';

export default {
  name: "MainIntro",
  components:{
    IOdometer
  },
  data(){
    return{
      subscriberCount:'',
      videoCount:''
    }
  },
  methods: {
    getApiInSchedule(minutes,apikey,channelId){
      var the_interval = minutes * 60 *1000;
      setInterval(this.getYoutubeStatic,the_interval);
    },
    getYoutubeStatic() {
      const apikey='AIzaSyDOT17cQIBRXfQzlFDyZau3IW5y6WtZuWY';
      const channelId = 'UCLsChHb_H87b9nW_RGCb73g';
      axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apikey}`)
          .then(res => (this.subscriberCount = res.data.items[0].statistics.subscriberCount,
                        this.videoCount = res.data.items[0].statistics.videoCount));
    }
  },
  created() {
    this.getYoutubeStatic();
    this.getApiInSchedule(0.2,'AIzaSyDOT17cQIBRXfQzlFDyZau3IW5y6WtZuWY','UCLsChHb_H87b9nW_RGCb73g');
  }
};
</script>

<style scoped>
.intro {
    position: absolute;
    top: 60%;
    left: 80%;
    transform: translateX(-50%) translateY(-50%);
    color: white;
}
.iOdometer {
  font-size: 2em;
  margin: 0;
}
</style>
