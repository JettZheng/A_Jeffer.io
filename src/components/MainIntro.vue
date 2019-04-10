<template>
  <div class="intro">
    <h1>Paion Jeffery</h1>
    <h3>
      Self-learning software and electrical engineering through research & development.
      <br>Filming the entire process on YouTube.
    </h3>
<IOdometer class="iOdometer" :value="subscriberCount"/><a>Subscribers  </a> 
<IOdometer class="iOdometer" :value="videoCount"/><a>Videos</a>
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
      setInterval(function(){this.getYoutubeStatic(apikey,channelId)},the_interval);
    },
    getYoutubeStatic(apikey,channelId) {
      axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apikey}`)
          .then(res => (this.subscriberCount = res.data.items[0].statistics.subscriberCount,
                        this.videoCount = res.data.items[0].statistics.videoCount));
    }
  },
  created() {
    const apikey='AIzaSyDOT17cQIBRXfQzlFDyZau3IW5y6WtZuWY';
    const channelId = 'UCLsChHb_H87b9nW_RGCb73g';
    this.getYoutubeStatic(apikey,channelId);
    this.getApiInSchedule(0.2,apikey,channelId);
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
  font-size: 20px;
  margin: 0;
}
</style>
