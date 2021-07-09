<template>
  <v-row align="center" justify="center">
    <nuxt-img
      src="/HeroImage.png"
      sizes="xs: 95vw sm: 95vw  md:95vw  lg: 95vw xl: 95vw"
    />
  </v-row>
</template>

<script>
export default {
  props: {
    subTitle: {
      type: String,
      default: '',
    },
    mainTitle: {
      type: String,
      default: '',
    },
  },
  computed: {
    responsiveSubtitleClass() {
      if (this.$vuetify.breakpoint.name === 'xs') {
        return 'title font-weight-bold'
      } else {
        return 'headline font-weight-bold'
      }
    },
    responsiveTitleClass() {
      if (this.$vuetify.breakpoint.name === 'xs') {
        return 'display-1 font-weight-bold'
      } else {
        return 'display-2 font-weight-bold'
      }
    },
  },
}
</script>

<style scoped></style>
