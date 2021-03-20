<template>
  <v-row align="center" justify="center">
    <iframe
      :src="spotifyLink"
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
}
</script>
<style></style>
