<template>
  <div class="section-common-space">
    <h3 class="section-title text-xs-center">{{ $t('hobbies.title') }}</h3>
    <v-tabs raised icons :height="80">
      <v-tabs-slider color="secondary"></v-tabs-slider>
      <v-tab v-for="(tab, index) in tabs" :href="`#tab-${index}`" :key="index">
        <v-icon medium>{{ tab.icon }}</v-icon>
      </v-tab>
      <v-tab-item v-for="(tab, index) in tabs" :id="`tab-${index}`" :key="index">
        <v-container class="mt-5 mb-5">
          <v-layout row wrap>
            <v-flex md6 sm12 class="pr-5">
              <h4 class="title pb-3 mb-3">{{ $t(tab.title) }}</h4>
              <p>{{ $t(tab.description) }}</p>
              <p>{{ $t(tab.description) }}</p>
            </v-flex>
            <v-flex md6 sm12 class="pl-5">
              <img :src="tab.src" width="450" alt="" class="bordered-img">
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </div>
</template>


<script>
  export default {
    name: "Hobbies",
    data: () => ({
      tabs: [
        { icon: "headset", title:"hobbies.music.title", description: "hobbies.music.description", src: "/img/headphone.jpg" },
        { icon: "live_tv", title: "hobbies.shows.title", description: "hobbies.shows.description", src: "/img/tvshow.jpg" },
        { icon: "fitness_center", title: "hobbies.fitness.title", description: "hobbies.fitness.description", src: "/img/sport.jpg" },
        { icon: "computer", title: "hobbies.technologies.title", description: "hobbies.technologies.description", src: "/img/banner.jpg" },
        { icon: "mdi-beer", title: "hobbies.friends.title", description: "hobbies.friends.description", src: "/img/cheers.jpg" }
      ]
    })
  }
</script>

<style lang="stylus">
  h4.title
    position: relative
    font-weight: 700
    text-transform: uppercase

    &::after
      content: ""
      width: 70px
      height: 3px
      background-color: #dadada
      position: absolute
      left: 0
      bottom: 0

  .v-tabs__bar
    box-shadow: 0 1px 4px rgba(0,0,0,.26)
    margin: 0 auto
    max-width: 550px
    .v-tabs__div
      border-right: 1px solid #e0e0e0
      min-width: 110px !important

  .bordered-img
    border: 6px solid #fff
    border-radius: 3px
    box-shadow: 0 1px 4px rgba(0,0,0,.24)
</style>
