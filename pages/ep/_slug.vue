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
    <v-col> <request-form></request-form> </v-col>
    <v-col cols="12" align="center" class="mb-6"
      ><v-btn outlined color="blue" @click="copy, (snackbar = true)">{{
        buttontext
      }}</v-btn></v-col
    >
    <v-col cols="12" align="center" class="mb-6">
      <a
        class="text-decoration-none"
        href="https://twitter.com/search?q=%23%E3%81%9D%E3%82%8D%E3%81%9D%E3%82%8D%E7%BE%8E%E8%A1%93%E3%81%AE%E8%A9%B1%E3%82%92"
        target="_blank"
        >#そろそろ美術の話をに関するツイートを見る</a
      >
    </v-col>
    <div class="text-center">
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}

        <template #action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-row>
</template>

<script>
import SpotifyPlayer from '../../components/SpotifyPlayer'
import PodcastBunner from '../../components/PodcastBunner'
import RequestForm from '../../components/RequestForm'

export default {
  components: {
    'spotify-player': SpotifyPlayer,
    'podcast-bunner': PodcastBunner,
    'request-form': RequestForm,
  },
  async asyncData({ $content, params }) {
    const article = await $content('ep', params.slug).fetch()

    return { article }
  },
  data() {
    return {
      buttontext: 'タイトルとURLをコピーする',
      snackbar: false,
      text: 'コピーしました！',
      timeout: 1500,
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
  methods: {
    copy() {
      const str =
        this.article.title +
        `https://sorosoro-art.vercel.app${this.article.path}`
      this.$copyText(str)
    },
  },
}
</script>

<style>
.nuxt-content h1 {
  margin-top: 30px;
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: 'Roboto', sans-serif !important;
}

.nuxt-content a {
  text-decoration: none;
}

.nuxt-content li {
  line-height: 175%;
  padding: 3px 0;
}
</style>
