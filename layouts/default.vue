<template>
  <v-app>
    <v-toolbar :height="toolbarHeight" v-bind:class="[ stickyToolbar ? 'sticky-toolbar' : '']" app>
      <v-toolbar-title class="brand">
        Maxime Leclerc
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.smAndDown">
        <v-toolbar-items>
          <v-icon class="toggle-menu" @click="toggleSidenav()">menu</v-icon>
        </v-toolbar-items>
      </template>
      <template v-else>
        <v-toolbar-items>
          <nav class="nav-menu">
            <scrollactive>
              <ul>
                <li><a v-ripple href="#home" class="scrollactive-item">{{ $t('links.home') }}</a></li>
                <li><a v-ripple href="#about" class="scrollactive-item">{{ $t('links.about') }}</a></li>
                <li><a v-ripple href="#education" class="scrollactive-item">{{ $t('links.education') }}</a></li>
                <li><a v-ripple href="#skills" class="scrollactive-item">{{ $t('links.skills') }}</a></li>
            <!--<li><a v-ripple href="#portfolio" class="scrollactive-item">{{ $t('links.portfolio') }}</a></li>-->
            <!--<li><a v-ripple href="#blog" class="scrollactive-item">{{ $t('links.blog') }}</a></li>-->
                <li><a v-ripple href="#contact" class="scrollactive-item">{{ $t('links.contact') }}</a></li>
              </ul>
            </scrollactive>
          </nav>
          <v-menu offset-y>
            <v-btn flat slot="activator">
              <img v-if="$i18n.locale === 'fr'" src="https://countryflags.io/fr/flat/32.png" width="32px">
              <img v-else src="https://countryflags.io/us/flat/32.png" width="32px">
            </v-btn>
            <v-list>
              <v-list-tile avatar @click="setLanguage('fr')">
                <v-list-tile-action>
                  <v-avatar :size="32" :tile="true">
                    <img src="https://countryflags.io/fr/flat/32.png" alt="avatar">
                  </v-avatar>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $t('links.french') }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="setLanguage('en')">
                <v-list-tile-action>
                  <v-avatar :size="32" :tile="true">
                    <img src="https://countryflags.io/us/flat/32.png" alt="avatar">
                  </v-avatar>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $t('links.english') }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </template>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" fixed right app>
      <scrollactive>
        <ul>
          <li><a v-ripple href="#home" class="scrollactive-item"><v-icon>home</v-icon> {{ $t('links.home') }}</a></li>
          <li><a v-ripple href="#about" class="scrollactive-item"><v-icon>person</v-icon> {{ $t('links.about') }}</a></li>
          <li><a v-ripple href="#education" class="scrollactive-item"><v-icon>school</v-icon> {{ $t('links.education') }}</a></li>
          <li><a v-ripple href="#skills" class="scrollactive-item"><v-icon>show_chart</v-icon>{{ $t('links.skills') }}</a></li>
          <!--<li><a v-ripple href="#portfolio" class="scrollactive-item">{{ $t('links.portfolio') }}</a></li>-->
          <!--<li><a v-ripple href="#blog" class="scrollactive-item">{{ $t('links.blog') }}</a></li>-->
          <li><a v-ripple href="#contact" class="scrollactive-item"><v-icon>mail</v-icon>{{ $t('links.contact') }}</a></li>
        </ul>
      </scrollactive>
    </v-navigation-drawer>
    <v-content class="pa-0">
      <nuxt/>
      <v-btn v-scroll="onScroll" v-show="fab" @click="goTo('home')" color="secondary" fab fixed bottom right>
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-content>
    <section class="footer-top" style="background-color: #232328;">
      <div class="section">
        <div class="section-common-space">
          <div class="text-xs-center">
            <ul class="social">
              <li><a href="https://twitter.com"><v-icon>mdi-twitter</v-icon></a></li>
              <li><a href="https://google.com"><v-icon>mdi-google-plus</v-icon></a></li>
              <li><a href="https://linkedin.com"><v-icon>mdi-linkedin</v-icon></a></li>
              <li><a href="https://github.com"><v-icon>mdi-github-circle</v-icon></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="footer-bottom pt-3" style="background-color: #1d1d21;">
      <div class="text-xs-center">
        <p style="font-weight: 400; font-size: 11px; color: rgba(255,255,255,.3);">MAXIME LECLERC © {{ currentYear }}. ALL RIGHT RESERVED</p>
      </div>
    </section>
  </v-app>
</template>

<script>
  export default {
    name: "Layout",
    data: () => ({
      toolbarHeight: "64px",
      fab: false,
      currentYear: null,
      stickyToolbar: false,
      drawer: false
    }),
    mounted() {
      import('aos').then(AOS => AOS.init())
      this.onScroll()
      this.currentYear = (new Date()).getFullYear()
    },
    methods: {
      onScroll () {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset || document.documentElement.offsetTop || 0
        this.stickyToolbar = top > 50
        this.fab = top > 300
      },
      toggleSidenav() {
        this.drawer = !this.drawer
      },
      setLanguage(lang) {
        this.$i18n.locale = lang
      }
    }
  }
</script>
