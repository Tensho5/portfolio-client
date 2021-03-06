<template>
  <div class="main-container elevation-4" :class="{'grabbing': dragging}" @mousemove="mouseMoving" @mouseup="stopDrag">
    <template v-if="currentExperience">
      <v-container>
        <v-layout row wrap class="experience-section">
          <v-flex md2 sm12>
            <h3 class="title-date">{{ currentExperience.date }}</h3>
          </v-flex>
          <v-flex md10 sm12>
            <h3 v-if="hasEducation" class="section-title">Education</h3>
            <template v-for="(education, i) in currentExperience.education">
              <p :key="`title-education-${i}`" class="title" v-html="education.title"></p>
              <p :key="`description-education-${i}`" class="description" v-html="education.description"></p>
            </template>
            <h3 v-if="hasJob" class="section-title">Job</h3>
            <template v-for="(job, j) in currentExperience.job">
              <p :key="`title-job-${j}`" class="title" v-html="job.title"></p>
              <p :key="`description-job-${j}`" class="description" v-html="job.description"></p>
            </template>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
    <div class="timeline">
      <div class="date-item" v-for="(experience, k) in experiences" :key="k" :style="tempElementStyle(experience.date)">
        <span>{{ experience.date }}</span><br>
        <span class="date-line">|</span>
      </div>
    </div>
    <div class="lower-container">
      <div class="slider-container" :style="sliderStyle">
        <svg class="slider-wave">
          <path d="M74.3132 0C47.0043 2.44032e-05 50.175 30 7.9179 30H144.27C99.4571 30 101.622 -2.44032e-05 74.3132 0Z" transform="translate(-7.38794 0)" fill="rgba(255,82,82,.6)"/>
        </svg>
        <div class="slider-button"  style="box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12);"  :class="{'grabbing': dragging}" @mousedown="startDrag">
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
    sliderX: 420,
    initialMouseX: 0,
    initialSliderX: 0,
		experiences: [
			{ date: 2011, education: [{ title: "Lycée Dumont D'urville - Caen", description: "Bac scientifique option sciences de l'ingénieur et anglais européen" }] },
			{ date: 2012, education: [{ title: "IUT Informatique - Ifs Campus 3", description: "DUT Informatique option génie logiciel" }] },
			{
        date: 2013, education: [{ title: "IUT Informatique - Ifs Campus 3", description: "DUT Informatique option génie logiciel" }],
        job: [{ title: "Développeur Web (Stage) - Tumorothèque de Caen", description: "Développement site web de la tumorothèque de caen et statistiques sur la base de données médicale" }]
      },
			{
				date: 2014, education: [{ title: "Licence ATC Webmestre - Caen campus 2", description: "Obtention de la licence Activités et Techniques de Communication Webmestre" }],
        job: [
          { title: "Développeur Web (CDI) - Agence Web Interactive", description: "Développement de sites web sur mesure.<ul><li>Développment de sites web sur mesure avec le framework PHP Laravel principalement pour des sites de gestion de contenu et sites marchands</li></ul>" },
        ]
			},
			{ date: 2015, job: [{ title: "Développeur Web (CDI) - Web Interactive", description: "Développement de sites web sur mesure.<ul><li>Développment de sites web sur mesure avec le framework PHP Laravel principalement pour des sites de gestion de contenu et sites marchands</li></ul>" }]},
      { date: 2016, job: [{ title: "Développeur Web (CDI) - Web Interactive",  description: "Développement de sites web sur mesure.<ul><li>Développment de sites web sur mesure avec le framework PHP Laravel principalement pour des sites de gestion de contenu et sites marchands</li></ul>" }]},
			{ date: 2017, job: [
        { title: "Développeur Web (CDI) - Web Interactive", description: "Développement de sites web sur mesure.<ul><li>Développment de sites web sur mesure avec le framework PHP Laravel principalement pour des sites de gestion de contenu et sites marchands</li></ul>" },
        { title: "Développeur Web (CDI) - NCI", description:
          "Développement d'interfaces web dans le domaine de la logistique.<ul><li>Développement de fonctionnalités sur l'ERP de l'entreprise en PHP</li><li>Développement d'une application web de statistiques sur les transports en VueJS</li><li>Développement d'une API de gestion d'envoie de sms avec le micro-framework PHP Lumen</li><li>Développement d'une application web de logistique avec VueJS (API Rest avec Datasnap)</li><li>Réalisation de formations web en interne pour faciliter la transition de l'entreprise d'une solution client lourd en Delphi vers une solution web intégrale</li></ul>"
        }
        ]
      },
			{ date: 2018, job: [
        { title: "Développeur Web (CDI) - NCI", description:
        "Développement d'interfaces web dans le domaine de la logistique.<ul><li>Développement de fonctionnalités sur l'ERP de l'entreprise en PHP</li><li>Développement d'une application web de statistiques sur les transports en VueJS</li><li>Développement d'une API de gestion d'envoie de sms avec le micro-framework PHP Lumen</li><li>Développement d'une application web de logistique avec VueJS (API Rest avec Datasnap)</li><li>Réalisation de formations web en interne pour faciliter la transition de l'entreprise d'une solution client lourd en Delphi vers une solution web intégrale</li></ul>"
        },
        { title: "Développeur Web (CDD) - CICD", description: "Développement d'interfaces web dans le domaine de la comptabilité.<ul><li>Développement d'une application web de comptabilité avec une stack complète en JavaScript: API avec ExpressJS, interface client avec VueJS et base de données avec DynamoDB. Intégration continue avec Gitflow, Docker, GitlabCI et AWS.</li></ul>" }
      ] },
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
    hasEducation() {
      return this.currentExperience && this.currentExperience.education && this.currentExperience.education.length > 0;
    },
    hasJob() {
      return this.currentExperience && this.currentExperience.job && this.currentExperience.job.length > 0;
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
