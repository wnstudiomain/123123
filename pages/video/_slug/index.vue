<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <div v-if="article.media" id="banner" class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding" :data-src="api_url + article.media.url" uk-img>
        <h1>{{ article.title }}</h1>
      </div>

      <div class="uk-section">
        <div class="uk-container uk-container-small">
            <div v-if="article.content" id="editor">{{ article.content }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/article'
var moment = require('moment')

export default {
   middleware: 'notguest',
  data() {
    return {
      articles: [],
      moment: moment,
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { slug: String(this.$route.params.slug) }
      }
    }
  }
}
</script>
