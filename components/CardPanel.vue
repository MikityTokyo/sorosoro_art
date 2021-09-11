<template>
  <nuxt-link :to="path" class="text-decoration-none">
    <v-card outlined class="scroll-y">
      <v-card-title class="h4">#{{ slug }} {{ title }}</v-card-title>
      <v-card-subtitle>{{ guestname }}</v-card-subtitle>
    </v-card>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    guestname: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
.flexcard
  display: flex
  flex-direction: column

// Add the css below if your card has a toolbar, and if your toolbar's height increases according to the flex display.

  & .v-toolbar
    flex: 0
</style>
