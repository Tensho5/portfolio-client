<template>
  <div>
    <section id="home">
      <v-parallax src="/img/banner-computer.jpg" style="height: 700px">
        <v-layout column align-center justify-center>
          <h1 class="white--text">Bonjour</h1>
          <h4 class="white--text">Bienvenue sur mon portfolio</h4>
        </v-layout>
      </v-parallax>
    </section>
    <section id="about" style="background-color: white">
      <v-container class="section-common-space">
        <v-layout row wrap>
          <v-flex md4 sm12 class="pr-5">
            <img src="/img/profile.jpg" width="250" alt="" class="bordered-img profile">
          </v-flex>
          <v-flex md8 sm12>
            <div class="pl-5">
              <h3 class="section-title">{{ $t('about.title') }}</h3>
              <p>{{ $t('about.introduction.part1') }}</p>
              <p>{{ $t('about.introduction.part2') }}</p>
            </div>
            <div class="mt-4 ml-3 pl-4">
              <v-btn color="primary">{{ $t('about.downloadResume') }}</v-btn>
              <v-btn color="secondary">{{ $t('about.contactMe') }}</v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section id="hobbies" class="section-bd-top secondary-bg-color">
      <hobbies />
    </section>
    <section id="education">
      <v-parallax style="height: 600px;" src="http://coderpixel.com/demo/matx/img/banner/what-we-do_bg.jpg">
        <education />
      </v-parallax>
    </section>
    <section id="skills" class="section-bd-top secondary-bg-color">
      <v-container class="section-common-space text-xs-center">
        <h3 class="section-title">{{ $t('skills.title') }}</h3>
        <p>{{ $t('skills.introduction') }}</p>
        <v-layout row wrap>
          <v-flex class="pa-2" md4 sm12>
            <v-card>
              <v-list subheader two-line>
                <template v-for="(item, index) in languages">
                  <v-subheader v-if="item.header" :key="item.header">{{ $t(item.header) }}</v-subheader>
                  <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                  <v-list-tile v-else :key="item.title" avatar>
                    <v-list-tile-avatar tile>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        <span>{{ item.title }}</span>
                        <span class="progress-percent">{{ item.progress }}&nbsp;%</span>
                      </v-list-tile-title>
                      <v-list-tile-sub-title>
                        <v-progress-linear :height="4" v-model="item.progress"></v-progress-linear>
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex class="pa-2" md4 sm12>
            <v-card>
              <v-list subheader two-line>
                <template v-for="(item, index) in frameworks">
                  <v-subheader v-if="item.header" :key="item.header">{{ $t(item.header) }}</v-subheader>
                  <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                  <v-list-tile v-else :key="item.title" avatar>
                    <v-list-tile-avatar tile>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        <span>{{ item.title }}</span>
                        <span class="progress-percent">{{ item.progress }}&nbsp;%</span>
                      </v-list-tile-title>
                      <v-list-tile-sub-title>
                        <v-progress-linear :height="4" v-model="item.progress"></v-progress-linear>
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex class="pa-2" md4 sm12>
            <v-card>
              <v-list subheader two-line>
                <template v-for="(item, index) in otherSkills">
                  <v-subheader v-if="item.header" :key="item.header">{{ $t(item.header) }}</v-subheader>
                  <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                  <v-list-tile v-else :key="item.title">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section id="portfolio">
    </section>
    <section id="blog">
    </section>
    <section id="twitter" style="background: rgba(35,35,40,0.8)">
      <v-parallax src="https://matx.coderpixel.com/wp/wp-content/uploads/2016/04/keyboard.jpg?id=2809">
        <v-layout column align-center justify-center>
          <h1 class="white--text">Vuetify.js</h1>
          <h4 class="white--text">Build your application today!</h4>
        </v-layout>
      </v-parallax>
    </section>
    <section id="contact">
      <v-container class="section-common-space">
        <h3 class="section-title">{{ $t('contact.title') }}</h3>
        <v-layout row wrap>
          <v-flex md6 xs12 class="pr-5">
            <v-card>
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action>
                    <span class="ci-icons">
                      <v-icon>phone</v-icon>
                    </span>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Phone</v-list-tile-title>
                    <v-list-tile-sub-title>+ 33 6 31 37 53 13</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider inset></v-divider>
                <v-list-tile>
                  <v-list-tile-action>
                    <span class="ci-icons">
                      <v-icon>mail</v-icon>
                    </span>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Email</v-list-tile-title>
                    <v-list-tile-sub-title>leclercmaxime14@gmail.com</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider inset></v-divider>
                <v-list-tile>
                  <v-list-tile-action>
                    <span class="ci-icons">
                      <v-icon>location_on</v-icon>
                    </span>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Website</v-list-tile-title>
                    <v-list-tile-sub-title>https://www.maxime-leclerc.com</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex md6 sm12>
            <v-form ref="form" v-model="validateForm" lazy-validation>
              <v-text-field v-model="contact.name" label="Name" required></v-text-field>
              <v-text-field v-model="contact.email" :rules="emailRules" label="E-mail" required></v-text-field>
              <v-text-field v-model="contact.text" label="Content" required></v-text-field>
              <v-btn :disabled="!validateForm" @click="sendContactForm">Send</v-btn>
              <v-btn @click="clearContactForm">Cancel</v-btn>
            </v-form>
          </v-flex>
         </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
  import axios from "axios";
  import Hobbies from "~/components/home/Hobbies";
  import Education from "~/components/home/Education";

  export default {
    components: {
      Hobbies,
      Education
    },
    data: () => ({
      slides: [
        { src: "/img/banner.jpg", text: ["home.title", "home.introduction"] },
        { src: "/img/device.jpg", text: [] },
        { src: "/img/banner.jpg", text: ["home.welcome"] },
      ],
      languages: [
        { header: 'skills.languages.title' },
        { avatar: '/img/php.jpg', title: 'PHP5/7', progress: 80 },
        { divider: true, inset: true },
        { avatar: '/img/javascript.png', title: 'JS(ES6)/TS', progress: 80 },
        { divider: true, inset: true },
        { avatar: '/img/mysql.png', title: 'MySQL', progress: 70 },
        { divider: true, inset: true },
        { avatar: '/img/html5.png', title: 'HTML5/CSS3', progress: 70 },
        { divider: true, inset: true },
        { avatar: '/img/graphql.png', title: 'GraphQL', progress: 30 },
      ],
      frameworks: [
        { header: 'skills.frameworks.title' },
        { avatar: '/img/laravel.png', title: 'Laravel 5', progress: 80 },
        { divider: true, inset: true },
        { avatar: '/img/vue.png', title: 'VueJS', progress: 80 },
        { divider: true, inset: true },
        { avatar: '/img/expressjs.png', title: 'ExpressJS', progress: 70 },
        { divider: true, inset: true },
        { avatar: '/img/angular.png', title: 'Angular 4+', progress: 40 },
        { divider: true, inset: true },
        { avatar: '/img/symfony.png', title: 'Symfony 3', progress: 30 },
      ],
      otherSkills: [
        { header: 'skills.others.title' },
        { title: 'Continuous integration', subtitle: "Jenkins/GitlabCI/Docker/Ansible" },
        { divider: true, inset: false },
        { title: 'Preprocessors', subtitle: "Sass/Stylus (Webpack)" },
        { divider: true, inset: false },
        { title: 'Versionning', subtitle: "GIT/GIT Flow" },
        { divider: true, inset: false },
        { title: 'Operating System', subtitle: "Linux/Macintosh/Windows" },
        { divider: true, inset: false },
        { title: 'Languages', subtitle: "English, notions d'Espagnol" }
      ],
      validateForm: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      contact: {
        name: "",
        email: "",
        text: ""
      }
    }),
    mounted () {

    },
    methods: {
      sendContactForm() {},
      clearContactForm() {
        this.contact = { name: "", email: "", text: "" };
      }
    }
  }
</script>

