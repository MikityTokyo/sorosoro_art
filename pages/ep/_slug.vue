<template>
  <v-row>
    <v-col cols="12">
      <spotify-player
        :spotify-link="article.spotifyLink"
        class="pt-4"
      ></spotify-player
    ></v-col>
    <v-col cols="12">
      <podcast-bunner
        :apppe-link="article.appleLink"
        :google-link="article.googleLink"
      ></podcast-bunner
    ></v-col>
    <v-col cols="12">
      <article>
        <li>{{ article.discription }}</li>
        <nuxt-content :document="article" />
      </article>
    </v-col>
  </v-row>
</template>

<script>
import SpotifyPlayer from '../../components/SpotifyPlayer'
import PodcastBunner from '../../components/PodcastBunner'

export default {
  components: {
    'spotify-player': SpotifyPlayer,
    'podcast-bunner': PodcastBunner,
  },
  async asyncData({ $content, params }) {
    const article = await $content('ep', params.slug).fetch()

    return { article }
  },
  data() {
    return {
      loadapplelink: this.article,
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.article.title + ' - そろそろ美術の話を...',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://sorosoro-art.vercel.app${this.article.path}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>

<style>
.nuxt-content h1 {
  margin-top: 50px;
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: 'Roboto', sans-serif !important;
}

.nuxt-content a {
  text-decoration: none;
}
</style>
