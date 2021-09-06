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
    <v-col
      v-for="article of ListItems"
      :key="article.path"
      cols="12"
      xs="12"
      md="6"
    >
      <card-list
        :path="article.path"
        :title="article.title"
        :guestname="article.guestname"
        :slug="article.slug"
      ></card-list
    ></v-col>
    <v-col align="center"
      ><v-btn
        v-if="ListItems.length - count >= 0"
        outlined
        color="blue"
        @click="isMore"
        >▽もっと見る（残り{{ publicArticles.length - count }}件）</v-btn
      ></v-col
    >
    <v-col cols="12"> <request-form></request-form> </v-col>
  </v-row>
</template>
<script>
import HeroImage from '../components/HeroImage'
import SpotifyPlayer from '../components/SpotifyPlayer'
import PodcastBunner from '../components/PodcastBunner'
import CardList from '../components/CardList'
import RequestForm from '../components/RequestForm'
export default {
  components: {
    'hero-image': HeroImage,
    'spotify-player': SpotifyPlayer,
    'podcast-bunner': PodcastBunner,
    'card-list': CardList,
    'request-form': RequestForm,
  },
  async asyncData({ $content, params }) {
    const articles = await $content('ep')
      .only(['title', 'guestname', 'slug', 'path', 'isPublic'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles,
    }
  },
  data() {
    return {
      subtitle: 'アートテラー・とに～の',
      maintitle: 'そろそろ美術の話を...',
      spotifylink:
        'https://open.spotify.com/embed-podcast/show/7fuxu5V9ZAHNjrkCcevDww',
      count: 6,
    }
  },
  head() {
    return {
      title: 'アートテラー・とに～のそろそろ美術の話を...',
      titleTemplate: '',
    }
  },
  computed: {
    publicArticles() {
      return this.articles.filter(function (article) {
        return article.isPublic
      })
    },
    ListItems() {
      const list = this.publicArticles
      return list.slice(0, this.count)
    },
  },
  methods: {
    isMore() {
      this.count += 8
    },
  },
}
</script>
