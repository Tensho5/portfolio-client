<template>
  <div class="main-container elevation-4" :class="{'grabbing': dragging}" @mousemove="mouseMoving" @mouseup="stopDrag">
    <template v-if="currentExperience">
      <v-container>
        <v-layout row wrap class="experience-section">
          <v-flex md2 sm12>
            <h3 class="title-date">{{ currentExperience.date }}</h3>
          </v-flex>
          <v-flex md10 sm12>
            <template v-for="(education, index) in currentExperience.education">
              <p :key="index" class="title">{{ education.title }}</p>
              <p :key="index" class="description">{{ education.description }}</p>
            </template>
            <template v-for="(job, index) in currentExperience.job">
              <p :key="index" class="title">{{ job.title }}</p>
              <p :key="index" class="description">{{ job.description }}</p>
            </template>
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
          <path d="M74.3132 0C47.0043 2.44032e-05 50.175 30 7.9179 30H144.27C99.4571 30 101.622 -2.44032e-05 74.3132 0Z" transform="translate(-7.38794 0)" fill="rgba(255,82,82,.6)"/>
        </svg>
        <div class="slider-button" :class="{'grabbing': dragging}" @mousedown="startDrag">
          <v-icon class="slider-icon">mdi-school</v-icon>
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
			{ date: 2011, education: [{ title: "Lycée Dumont D'urville - Caen", description: "Obtention du Bac scientifique options sciences de l'ingénieur et anglais européen" }] },
			{ date: 2012, education: [{ title: "IUT Informatique - Ifs Campus 3", description: "Obtention du DUT Informatique option génie logiciel" }] },
			{ date: 2013, education: [{ title: "IUT Informatique - Ifs Campus 3", description: "Obtention du DUT Informatique option génie logiciel" }] },
			{
				date: 2014, education: [{ title: "Licence ATC Webmestre - Caen campus 2", description: "Obtention de la licence Activités et Techniques de Communication Webmestre" }],
				job: [{ title: "Développeur Web (Stage) - Chambre de métiers de Caen", description: "Développement web sur le site 360 artisans éclairés avec le framework PHP Symfony 2" }]
			},
			{ date: 2015, job: [{ title: "Developpeur Web (CDI) - Agence Web Interactive", description: "Réalisation de site web sur mesure avec le framework PHP Laravel" }] },
			{ date: 2016, job: [{ title: "Developpeur Web (CDI) - Agence Web Interactive", description: "Réalisation de site web sur mesure avec le framework PHP Laravel" }] },
			{ date: 2017, job: [{ title: "Developpeur Web (CDI) - NCI", description: "Développement d'interfaces web dans le domaine de la logistique" }] },
			{ date: 2018, job: [{ title: "Developpeur Web (CDD) - CICD", description: "Développement d'interfaces web dans le domaine de la comptabilité" }] },
		],
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

      const diff = Math.abs(this.currentExperience.date-tempDate);
      const distY = (diff/nearDistance) - 1;

      const elementY = Math.min(distY*liftDistance, 0);
      return `transform: translate3d(0, ${elementY}px, 0);`;
    }
  }
};
</script>
