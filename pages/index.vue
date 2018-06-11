<template>
  <div>
  <section id="home" style="height: 100vh; background-color: grey;">
    <v-container>
      {{ $t('home.title') }}
      {{ $t('home.introduction') }}
      {{ $t('home.welcome') }}
      <v-btn color="primary">{{ $t('home.about') }}</v-btn>
      <v-btn color="secondary">{{ $t('home.contact') }}</v-btn>
    </v-container>
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
  <section id="contact" style="height: 800px;">
    <h3>{{ $t('contact.title') }}</h3>
    <p>{{ $t('contact.introduction') }}</p>
  </section>
  </div>
</template>
