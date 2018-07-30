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
          <h4 class="title pb-3 mb-3">{{ $t(tab.title) }}</h4>
          <v-flex sm6 xs12>
            <p>{{ $t(tab.description) }}</p>
            <p>{{ $t(tab.description) }}</p>
          </v-flex>
          <v-flex sm6 xs12>

          </v-flex>
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
        { icon: "headset", title:"hobbies.music.title", description: "hobbies.music.description" },
        { icon: "live_tv", title: "hobbies.shows.title", description: "hobbies.shows.description" },
        { icon: "fitness_center", title: "hobbies.fitness.title", description: "hobbies.fitness.description" },
        { icon: "computer", title: "hobbies.technologies.title", description: "hobbies.technologies.description" },
        { icon: "mdi-beer", title: "hobbies.friends.title", description: "hobbies.friends.description" }
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

  .tabs__bar
    box-shadow: 0 1px 4px rgba(0,0,0,.26)
    margin: 0 auto
    max-width: 550px
    .tabs__div
      border-right: 1px solid #e0e0e0
      min-width: 110px !important
</style>
