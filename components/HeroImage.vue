<template>
  <v-parallax height="250" src="/HeroImage.jpg">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <div>
          <h1 :class="responsiveSubtitleClass">{{ subTitle }}</h1>
          <h1 :class="responsiveTitleClass">{{ mainTitle }}</h1>
        </div>
      </v-col>
    </v-row>
  </v-parallax>
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
