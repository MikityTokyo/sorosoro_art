<template>
  <v-row justify="center" align="center">
    <v-col cols="6">
      <a :href="apppeLink" target="_blank">
        <v-img
          max-height="65"
          contain
          src="/Apple_Podcasts_Badge.svg"
          alt="Apple_Podcasts_Badge"
      /></a>
    </v-col>
    <v-col cols="6">
      <a :href="googleLink" target="_blank">
        <v-img
          max-height="65"
          contain
          src="/Google_Podcasts_Badge.png"
          alt="Google_Podcasts_Badge.png"
        />
      </a>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    apppeLink: {
      type: String,
      default:
        'https://podcasts.apple.com/jp/podcast/%E3%81%9D%E3%82%8D%E3%81%9D%E3%82%8D%E7%BE%8E%E8%A1%93%E3%81%AE%E8%A9%B1%E3%82%92/id1529179129',
    },
    googleLink: {
      type: String,
      default:
        'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yY2EzOWE2OC9wb2RjYXN0L3Jzcw==',
    },
  },
}
</script>
<style></style>
