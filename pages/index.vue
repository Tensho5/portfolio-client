<template>
  <div>
    <section id="home" v-swiper:mySwiper="swiperOption" style="height: 100vh;">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-color: rgba(51, 51, 51, 0.75);" v-for="(banner, index) in banners" :key="index">
          <img :src="banner" style="position: absolute; z-index: -1;">
            <v-container fill-height>
              <v-layout row wrap align-center>
                <div style="transition: none; line-height: 27px; border-width: 0px; text-transform: uppercase; font-weight: 900; font-size: 30px; color: white;">
                  {{ $t('home.title') }}<br/>
                  {{ $t('home.introduction') }}<br/>
                  {{ $t('home.welcome') }}<br/>
                </div>
                <v-btn color="primary">{{ $t('home.about') }}</v-btn>
                <v-btn color="secondary">{{ $t('home.contact') }}</v-btn>
              </v-layout>
            </v-container>
          </div>
        </div>
     <div class="swiper-pagination swiper-pagination-bullets"></div>
   </section>
  <section id="about" class="secondary-bg" style="height: 800px;">
    <v-container>
      <h3>{{ $t('about.title') }}</h3>
      <p>{{ $t('about.introduction') }}</p>
    </v-container>
  </section>
  <section id="skills">
    <h3>{{ $t('skills.title') }}</h3>
    <p>{{ $t('skills.introduction') }}</p>
  </section>
  <section id="blog" style="height: 800px;">

  </section>
  <section id="twitter" style="background: rgba(35,35,40,0.8)">
   <v-parallax src="https://matx.coderpixel.com/wp/wp-content/uploads/2016/04/keyboard.jpg?id=2809">
    <v-layout column align-center justify-center>
      <h1 class="white--text">Vuetify.js</h1>
      <h4 class="white--text">Build your application today!</h4>
    </v-layout>
  </v-parallax>
  </section>
  <section id="contact" style="height: 800px;">
    <h3>{{ $t('contact.title') }}</h3>
    <p>{{ $t('contact.introduction') }}</p>
  </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
  banners: [
          '/img/banner.jpg',
         '/img/banner.jpg',
            '/img/banner.jpg',
        ],
         swiperOption: {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
    })
  }
</script>

