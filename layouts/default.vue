<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp"></v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" app>
      <v-toolbar-title>
        <v-toolbar-side-icon v-if="$vuetify.breakpoint.mdAndDown" @click.stop="drawer = !drawer" color="secondary"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <nav class="nav-menu">
          <ul>
            <li><a @click="goTo('home')">Home</a></li>
            <li><a @click="goTo('about')">About</a></li>
            <li><a @click="goTo('blog')">Blog</a></li>
            <li><a @click="goTo('contact')">Contact</a></li>
          </ul>
        </nav>
      </v-toolbar-items>
      <v-btn icon>
        <v-icon color="white">more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content style="padding: 0;">
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
