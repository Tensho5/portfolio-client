<template>
  <div>
    <section id="home">
      <v-carousel :hide-delimiters="false"  style="height: 100vh; background: rgba(35,35,40,0.8)">
        <v-carousel-item  !style="background: rgba(0, 0, 0, .9)" v-for="(slide, i) in slides" :src="slide.src" :key="i" transition="fade" reverse-transition="fade">
          <slot>
            <v-container fill-height>
              <v-layout row wrap align-center>
                <div style="transition: none; line-height: 27px; border-width: 0px; text-transform: uppercase; font-weight: 900; font-size: 30px; color: white;">
                  <li v-for="(text, i) in slide.text" :key="i">{{ $t(text) }}</li>
                </div>
                <v-btn color="primary">{{ $t('home.about') }}</v-btn>
                <v-btn color="secondary">{{ $t('home.contact') }}</v-btn>
              </v-layout>
            </v-container>
          </slot>
        </v-carousel-item>
      </v-carousel>
    </section>
    <section id="about">
      <v-container class="section-common-space">
        <h3 class="section-title">{{ $t('about.title') }}</h3>
        <v-layout row wrap>
          <v-flex xs6>
            <p>{{ $t('about.introduction') }}</p>
          </v-flex>
          <v-flex xs6>
            <v-btn color="primary">{{ $t('home.about') }}</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="section-bd-top secondary-bg-color">
      <v-container class="section-common-space">
        <h3 class="section-title">{{ $t('skills.title') }}</h3>
        <v-layout row wrap>
          <v-flex xs6>
            <p data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">{{ $t('about.introduction') }}</p>
          </v-flex>
          <v-flex xs6>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section id="portfolio" style="background: rgba(35,35,40,0.8)">
      <v-parallax src="http://coderpixel.com/demo/matx/img/banner/what-we-do_bg.jpg">
        <v-layout column align-center justify-center>
          <h1 class="white--text">Vuetify.js</h1>
          <h4 class="white--text">Build your application today!</h4>
        </v-layout>
      </v-parallax>
    </section>
    <section id="skills" class="section-bd-top secondary-bg-color">
      <v-container class="section-common-space">
        <v-layout row>
          <v-flex class="ma-2" xs4>
            <v-card>
              <v-list three-line>
                <template v-for="(item, index) in languages">
                  <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                  <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                  <v-list-tile v-else :key="item.title" avatar>
                    <v-list-tile-avatar tile>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex class="ma-2" xs4>
            <v-card>
              <v-list three-line>
                <template v-for="(item, index) in items">
                  <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                  <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                  <v-list-tile v-else :key="item.title" avatar>
                    <v-list-tile-avatar tile>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex class="ma-2" xs4>
            <v-card>
              <v-list three-line>
                <template v-for="(item, index) in items">
                  <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                  <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                  <v-list-tile v-else :key="item.title" avatar>
                    <v-list-tile-avatar tile>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
        <h3 class="section-title">{{ $t('skills.title') }}</h3>
        <p>{{ $t('skills.introduction') }}</p>
        <img src="/img/vue.png" width="70"/>

        <img src="/img/laravel.png" width="70"/>
        <img src="/img/angular.png" width="70"/>
        <img src="/img/sass.svg" width="70"/>
        <img src="/img/stylus.svg" width="70"/>
        <img src="/img/webpack.png" width="70"/>
      </v-container>
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
        <v-layout row wrap>
          <v-flex xs6>
            <h3 class="section-title">{{ $t('contact.title') }}</h3>
            <p>{{ $t('contact.introduction') }}</p>
          </v-flex>
          <v-flex xs6>

          </v-flex>
         </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      slides: [
        { src: "/img/banner.jpg", text: ["home.title", "home.introduction"] },
        { src: "/img/device.jpg", text: [] },
        { src: "/img/banner.jpg", text: ["home.welcome"] },
      ],
      languages: [
        { header: 'Languages' },
        { avatar: '/img/php.png', title: 'PHP5/7', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: '/img/javascript.png', title: 'JavaScript/TS/ES6', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
        { avatar: '/img/html.png', title: 'HTML5/CSS3', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
        { divider: true, inset: true },
        { avatar: '/img/angular.png', title: 'MySQL', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" }
      ],
      items: [
        { header: 'Framework front' },
        { avatar: '/img/vue.png', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: '/img/stylus.svg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
        { avatar: '/img/sass.svg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
        { divider: true, inset: true },
        { avatar: '/img/angular.png', title: 'Birthday gift', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
        { divider: true, inset: true },
        { avatar: '/static/doc-images/lists/5.jpg', title: 'Recipe to try', subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }
      ]
    }),
     mounted () {

     }
  }
</script>

