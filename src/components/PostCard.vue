<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <div class="post-card__content">
      <h2 class="post-card__title"><g-link :to="post.path">{{post.title}}</g-link></h2>
      <PostMeta class="post-card__meta" :post="post" />

      <p class="post-card__description" v-html="post.description" />

      <g-link class="post-card__link btn" aria-hidden="true" :to="post.path">Read More</g-link>
      <!-- <PostTags class="post-card__tags" :post="post" /> -->

    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>