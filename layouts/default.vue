<template>
  <v-app>
    <v-navigation-drawer v-model="drawer"></v-navigation-drawer>
    <v-toolbar color="primary" app>
      <v-toolbar-title>
        <v-toolbar-side-icon v-if="$vuetify.breakpoint.mdAndDown" @click.stop="drawer = !drawer" color="secondary"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <nav class="nav-menu">
          <scrollactive class="nav-menu">
            <ul>
              <li><a href="#home" class="scrollactive-item">{{ $t('links.home') }}</a></li>
              <li><a href="#about" class="scrollactive-item">{{ $t('links.about') }}</a></li>
              <li><a href="#blog" class="scrollactive-item">{{ $t('links.blog') }}</a></li>
              <li><a href="#contact" class="scrollactive-item">{{ $t('links.contact') }}</a></li>
            </ul>
          </scrollactive>
        </nav>
        <v-menu offset-y>
          <v-btn icon>
            <v-icon slot="activator" color="white">more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>{{ $t('links.french') }}</v-list-tile-title>
              <v-list-tile-title>{{ $t('links.english') }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-content class="pa-0">
      <nuxt/>
      <v-btn v-scroll="onScroll" v-show="fab" @click="goTo('home')" color="secondary" fab fixed bottom right>
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-content>
    <footer-app></footer-app>
  </v-app>
</template>

<script>
  import Footer from "./footer.vue"

  export default {
    name: "Layout",
    components: {
      "footer-app": Footer
    },
    data: () => ({
      drawer: false,
      fab: false
    }),
    mounted() {
      this.onScroll();
    },
    methods: {
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
