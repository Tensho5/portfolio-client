<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp"></v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" app>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" color="secondary"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Logo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="goTo('home')" color="white">Home</v-btn>
        <v-btn flat @click="goTo('about')" color="white">About</v-btn>
        <v-btn flat @click="goTo('blog')" color="white">Blog</v-btn>
        <v-btn flat @click="goTo('contact')" color="white">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <nuxt/>
      <v-btn v-scroll="onScroll" v-show="fab" @click="goTo('home')" color="secondary" fab fixed bottom right>
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
  export default {
    name: "Layout",
    data: () => ({
      drawer: false,
      fab: false,
      navOptions: {
        duration: 1000,
        easing: 'easeInOutCubic',
        offset: -80
      }
    }),
    mounted() {
      this.onScroll();
    },
    methods: {
      goTo (target) {
        this.$vuetify.goTo(`#${target}`, this.navOptions)
      },
      onScroll () {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||
          document.documentElement.offsetTop ||
          0
        this.fab = top > 300
      },
    }
  }
</script>
