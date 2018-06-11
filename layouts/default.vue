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
          <ul>
            <li><a @click="goTo('home')">{{ $t('links.home') }}</a></li>
            <li><a @click="goTo('about')">{{ $t('links.about') }}</a></li>
            <li><a @click="goTo('blog')">{{ $t('links.blog') }}</a></li>
            <li><a @click="goTo('contact')">{{ $t('links.contact') }}</a></li>
          </ul>
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
