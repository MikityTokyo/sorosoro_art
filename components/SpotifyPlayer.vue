<template>
  <v-row align="center" justify="center">
    <iframe
      class="spotify"
      :src="spotifyLink"
      :data-src="spotifyLink"
      marginwidth="10"
      width="95%"
      height="232"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </v-row>
</template>

<script>
export default {
  props: {
    spotifyLink: {
      type: String,
      default:
        'https://open.spotify.com/embed-podcast/show/7fuxu5V9ZAHNjrkCcevDww',
    },
  },
  watch: {
    $route(to, from) {
      // 遷移元と遷移先のパスが違った場合に発火する
      if (to.path !== from.path) {
        window.addEventListener('load', this.spotifyDefer)
      }
    },
  },

  mounted() {
    // うまくいかないので消すかも
    function spotifyDefer() {
      const iframes = document.querySelectorAll('.spotify')
      iframes.forEach(function (iframe) {
        if (iframe.getAttribute('data-src')) {
          iframe.setAttribute('src', iframe.getAttribute('data-src'))
        }
      })
    }

    window.addEventListener('load', spotifyDefer)
  },

  destroyed() {
    window.removeEventListener('load', this.spotifyDefer)
  },
}
</script>
<style scoped></style>
>
