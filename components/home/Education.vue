<template>
  <div class="main-container" :class="{'grabbing': dragging}" @mousemove="mouseMoving" @mouseup="stopDrag">
    <template v-if="currentExperience">
      <v-container>
        <v-layout row wrap class="experience-section">
          <v-flex md2 sm12>
            <h3 class="title-date">{{ currentExperience.date }}</h3>
          </v-flex>
          <v-flex md10 sm12>
            <p style="color: white; font-size: 1.4rem">{{ currentExperience.title }}</p>
            <p style="color: white; font-size: 1.2rem">{{ currentExperience.description }}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
    <div class="timeline">
      <div class="date-item" v-for="(experience, index) in experiences" :key="index" :style="tempElementStyle(experience.date)">
        <span>{{ experience.date }}</span><br>
        <span class="date-line">|</span>
      </div>
    </div>
    <div class="lower-container">
      <div class="slider-container" :style="sliderStyle">
        <svg class="slider-wave">
          <path d="M74.3132 0C47.0043 2.44032e-05 50.175 30 7.9179 30H144.27C99.4571 30 101.622 -2.44032e-05 74.3132 0Z" transform="translate(-7.38794 0)" fill="rgba(255,82,82,.5)"/>
        </svg>
        <div class="slider-button" :class="{'grabbing': dragging}" @mousedown="startDrag">
          <v-icon style="padding-left: 13px; padding-top: 13px">school</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sliderMinX = 0;
const sliderMaxX = 420;

export default {
  data: () =>  ({
    dragging: false,
    sliderX: 0,
    initialMouseX: 0,
    initialSliderX: 0,
    experiences: [
      { date: 2011, title: "Lycée Dumont D'urville - Caen", description: "Obtention du bac scientifique options sciences de l'ingénieur et anglais européen" },
      { date: 2012, title: null, description: "" },
      { date: 2013, title: "IUT Informatique - Ifs Campus 3", description: "Obtention du DUT Informatique option génie logiciel" },
      { date: 2014, title: "Licence ATC Webmestre - Caen campus 2", description: "Obtention de la licence Activités et Techniques de Communication Webmestre" },
      { date: 2015, title: "Developpeur Web - Agence Web Interactive", description: "Développement de sites web sur mesure avec le framework PHP Laravel" },
      { date: 2016, title: "Developpeur Web - Agence Web Interactive", description: "Développement de sites web sur mesure avec le framework PHP Laravel" },
      { date: 2017, title: "Developpeur Web - NCI", description: "Développement d'interfaces web dans le domaine de la logistique" },
      { date: 2018, title: "Developpeur Web - CICD", description: "Développement d'interfaces web dans le domaine de la comptabilité" },
    ]
  }),
  computed: {
    currentExperience () {
      const rangeStart = 2011;
      const range = 7;
      const currentDate = Math.round((this.sliderX / sliderMaxX * range) + rangeStart);
      const currentExperience = this.experiences.find((experience) => experience.date === currentDate);
      if (currentExperience) return currentExperience;
    },
    sliderStyle () {
      return `transform: translate3d(${this.sliderX}px,0,0)`;
    }
  },
  methods: {
    startDrag (e) {
      this.dragging = true;
      this.initialMouseX = e.pageX;
      this.initialSliderX = this.sliderX;
    },
    stopDrag () {
      this.dragging = false;
    },
    mouseMoving (e) {
      if(this.dragging) {
        const dragAmount = e.pageX - this.initialMouseX;
        const targetX = this.initialSliderX + dragAmount;
        this.sliderX = Math.max(Math.min(targetX, sliderMaxX), sliderMinX);
      }
    },
    tempElementStyle (tempDate) {
      const nearDistance = 3;
      const liftDistance = 12;

      const diff = Math.abs(this.currentDate-tempDate);
      const distY = (diff/nearDistance) - 1;

      const elementY = Math.min(distY*liftDistance, 0);
      return `transform: translate3d(0, ${elementY}px, 0);`;
    },
    showTips() {
      this.dialog = true;
    }
  }
};
</script>

<style>

.main-container {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
}

.experience-section {
  position: absolute;
  bottom: 300px;
  user-select: none;
  width: 100%;
}

.title-date {
  font-size: 5rem;
}

.timeline {
  left: calc(50% - 250px);
  position: absolute;
  bottom: -5px;
  user-select: none;
}

.date-item {
  text-align: center;
  display: inline-block;
  width: 40px;
  font-weight: 700;
  color: #f8f8f8;
  margin: 0 10px 0 10px;
}

.date-line {
  font-size: 7px;
}

.lower-container {
  background-color: rgba(255,82,82,.5);
}

.slider-wave {
  z-index: 500;
  position:relative;
  top: -30px;
}

.slider-container {
  width: 150px;
  height: 80px;
  margin-top: -30px;
  margin-left: calc(50% - 287px);
  position: relative;
}
.slider-button {
  position: absolute;
  z-index: 999;
  left: 42px;
  top: -25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f8f8f8;

  cursor: grab;
  cursor: -webkit-grab;
  cursor: -moz-grab;
}
.grabbing {
  cursor: grabbing;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
}

.slider-icon {
  margin-top: 16px;
  margin-left: 21px;
  color: #232328;
}
</style>
