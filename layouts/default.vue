<template>
  <v-app light>
    <v-app-bar app>
      <v-img
        class="mx-2"
        src="/icon.png"
        max-height="23"
        max-width="23"
        contain
      ></v-img>
      <v-toolbar-title
        style="cursor: pointer"
        @click="$router.push('/')"
        v-text="title"
      />
      <v-spacer />
      <v-btn depressed href="https://twitter.com/sorosoro_art">
        <v-icon color="blue darken-2">mdi-twitter</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
        <request-form></request-form>
      </v-container>
    </v-main>
    <v-footer padless
      ><v-col class="text-center" cols="12">
        &copy;{{ new Date().getFullYear() }} —
        <a href="https://ameblo.jp/artony/" target="_blank">Art Teller Tony</a>
        - All Rights Reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import RequestForm from '../components/RequestForm'

export default {
  components: {
    'request-form': RequestForm,
  },
  data() {
    return {
      title: 'そろそろ美術の話を...',
    }
  },
}
</script>
