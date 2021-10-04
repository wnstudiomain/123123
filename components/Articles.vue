<template>
  <div>

    <div class="uk-child-width-1-2" uk-grid>
      <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
        <nuxt-link v-for="article in articles" :to="{ name: 'video-slug', params: {slug: article.slug} }"
          class="uk-link-reset" :key="article.id">
          <div class="uk-card uk-card-muted">
            <div v-if="article.media" class="uk-card-media-top">
              <img :src="api_url + article.media.url" alt="" height="100">
              <p>{{article.id}}</p>
            </div>
            <div class="uk-card-body">
              <p id="category" v-if="article.category" class="uk-text-uppercase">{{ article.category.name }}</p>
              <p id="title" class="uk-text-large">{{ article.title }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
  import articlesQuery from '~/apollo/queries/article/articles'

  export default {
    data() {
      return {
        api_url: process.env.strapiBaseUri
      }
    },
    props: {
      articles: Array
    },
  }

</script>
