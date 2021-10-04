<template>
  <div>

    <div class="uk-section uk-padding-remove-top">
      <div class="uk-container uk-container-expand uk-padding-remove">
        <div
          class="uk-background-cover uk-height-large uk-background-muted uk-panel uk-flex uk-flex-center uk-flex-middle"
          uk-height-viewport="offset-bottom: 35" style="background-image: url(/img/bg.png);"
          uk-parallax="bgy: -200; easing: 0">
          <div class="uk-width-1-2 uk-light uk-text-center">
          <p class="uk-text-bold subtitle uk-margin-large-bottom">ОНЛАЙН-КУРС</p>
          <h1 class="uk-heading-large">МОНТАЖ 2.0</h1>
          <p class="uk-text-lead uk-width-3-4 uk-margin-auto uk-margin-medium-top">Базовый курс по монтажу видео в Adobe Premiere, режиссуре и монтажному мышлению</p>
          </div>
        </div>
        <div class="uk-container uk-container-small">
          <FreeVideos :freeVideos="freeVideos"></FreeVideos>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
  import freeVideosQuery from '~/apollo/queries/freeVideo/freeVideos'
  import FreeVideos from '~/components/FreeVideos'


  export default {
    data() {
      return {
        freeVideos: Array,
      }
    },
    components: {
      FreeVideos
    },
    apollo: {
      freeVideos: {
        prefetch: true,
        query: freeVideosQuery,
        variables() {
          return {
            id: parseInt(this.$route.params.id)
          }
        }
      }
    }
  }

</script>
