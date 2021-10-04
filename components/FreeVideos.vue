<template>
  <div>
    <div v-for="videos in freeVideos" class="uk-card uk-card-muted" :key="videos.id">
      <div class="uk-card-body">
        <iframe :src="videos.video_url" width="720" height="400" frameborder="0" allowfullscreen uk-responsive
          uk-video="automute: true"></iframe>
        <h3 class="uk-card-title">{{ videos.title }}</h3>
        <p>{{videos.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import freeVideosQuery from '~/apollo/queries/freeVideo/freeVideos'

  export default {
    data() {
      return {
        api_url: process.env.strapiBaseUri
      }
    },
    props: {
      freeVideos: Array
    },
  }

</script>
