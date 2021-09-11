<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <hero-image :sub-title="subtitle" :main-title="maintitle"></hero-image>
    </v-col>
    <v-col cols="12">
      <h1 class="headline">About</h1>
      <p>
        アートテラー・とに～がアートに関わる方をゲストにお迎えしてトークする不定期配信のPodcast番組です。<br />
        番組の感想は、<a
          class="text-decoration-none"
          href="https://twitter.com/search?q=%23%E3%81%9D%E3%82%8D%E3%81%9D%E3%82%8D%E7%BE%8E%E8%A1%93%E3%81%AE%E8%A9%B1%E3%82%92"
          target="_blank"
          >#そろそろ美術の話を</a
        >
        でお願いいたします。
      </p>
    </v-col>
    <v-col cols="12">
      <h1 class="headline">Latest Episode</h1>
    </v-col>
    <v-col cols="12">
      <spotify-player :spotify-link="spotifylink"></spotify-player>
    </v-col>
    <v-col cols="12">
      <podcast-bunner></podcast-bunner>
    </v-col>
    <v-col cols="12"> <h1 class="headline">Past Episodes</h1></v-col>

    <v-col cols="12">
      <v-tabs v-model="tab" fixed-tabs>
        <v-tab>Guest</v-tab>
        <v-tab>Special</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" touchless>
        <v-tab-item>
          <v-container>
            <v-row>
              <v-col
                v-for="article of gtListItems"
                :key="article.path"
                cols="12"
                xs="12"
                md="6"
              >
                <card-panel
                  :path="article.path"
                  :title="article.title"
                  :guestname="article.guestname"
                  :slug="article.slug"
                ></card-panel
              ></v-col>
              <v-col align="center"
                ><v-btn
                  v-if="gtListItems.length - gtCount >= 0"
                  outlined
                  color="blue"
                  @click="isMoreGt"
                  >▽もっと見る（残り{{
                    gtPublicArticles.length - gtCount
                  }}件）</v-btn
                ></v-col
              >
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container>
            <v-row>
              <v-col
                v-for="article of spListItems"
                :key="article.path"
                cols="12"
                xs="12"
                md="6"
              >
                <card-panel
                  :path="article.path"
                  :title="article.title"
                  :guestname="article.guestname"
                  :slug="article.slug"
                ></card-panel
              ></v-col>
              <v-col align="center"
                ><v-btn
                  v-if="spListItems.length - gtCount >= 0"
                  outlined
                  color="blue"
                  @click="isMoreSp"
                  >▽もっと見る（残り{{
                    gtPublicArticles.length - spCount
                  }}件）</v-btn
                ></v-col
              >
            </v-row></v-container
          ></v-tab-item
        >
      </v-tabs-items>
    </v-col>

    <v-col cols="12"> <request-form></request-form> </v-col>
  </v-row>
</template>

<script>
import HeroImage from '../components/HeroImage'
import SpotifyPlayer from '../components/SpotifyPlayer'
import PodcastBunner from '../components/PodcastBunner'
import CardPanel from '../components/CardPanel'
import RequestForm from '../components/RequestForm'

export default {
  components: {
    'hero-image': HeroImage,
    'spotify-player': SpotifyPlayer,
    'podcast-bunner': PodcastBunner,
    'card-panel': CardPanel,
    'request-form': RequestForm,
  },
  async asyncData({ $content, params }) {
    const gtArticles = await $content('ep')
      .only(['title', 'guestname', 'slug', 'path', 'type', 'isPublic'])
      .where({ type: 'guest' })
      .sortBy('createdAt', 'desc')
      .fetch()
    const spArticles = await $content('ep')
      .only(['title', 'guestname', 'slug', 'path', 'type', 'isPublic'])
      .where({ type: 'special' })
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      gtArticles,
      spArticles,
    }
  },
  data() {
    return {
      subtitle: 'アートテラー・とに～の',
      maintitle: 'そろそろ美術の話を...',
      spotifylink:
        'https://open.spotify.com/embed-podcast/show/7fuxu5V9ZAHNjrkCcevDww',
      gtCount: 6,
      spCount: 6,
      tab: null,
    }
  },
  head() {
    return {
      title: 'アートテラー・とに～のそろそろ美術の話を...',
      titleTemplate: '',
    }
  },
  computed: {
    gtPublicArticles() {
      return this.gtArticles.filter(function (article) {
        return article.isPublic
      })
    },
    gtListItems() {
      const list = this.gtPublicArticles
      return list.slice(0, this.gtCount)
    },
    spPublicArticles() {
      return this.spArticles.filter(function (article) {
        return article.isPublic
      })
    },
    spListItems() {
      const list = this.spPublicArticles
      return list.slice(0, this.spCount)
    },
  },
  methods: {
    isMoreGt() {
      this.gtCount += 8
    },
    isMoreSp() {
      this.spCount += 8
    },
  },
}
</script>
