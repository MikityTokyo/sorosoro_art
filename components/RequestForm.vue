<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1 class="headline ma-3 text-center">Request</h1>
      <p class="text-center">
        番組へのお問い合わせ、ゲストやテーマのリクエストはこちらまで
      </p>
      <v-btn rounded block color="primary" @click="externalLink">
        お問い合わせ・リクエスト
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  methods: {
    externalLink() {
      const url = 'https://forms.gle/ivVQxW3g8REh63uy9'
      window.location.href = url
    },
  },
}
</script>
<style></style>
