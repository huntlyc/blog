<template>
  <Layout>
    <div class="post-title">
      <h1 id="post-content-start" class="post-title__text">
          <a href="#post-content-start" aria-hidden="true"><span class="icon icon-link"></span></a>
        {{ $page.post.title }}
      </h1>

      <PostMeta class="post-title__meta"  :post="$page.post" />

    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <vue-disqus shortname="huntlycameron" :identifier="$page.post.title"></vue-disqus>
    </div>

  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
export default {
  components: {
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "Do MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 1280, blur: 10)
  }
}
</page-query>


<style>
.post__header{
  margin: 40px 0;
}

@media screen and (max-width: 600px){
  .post__header{
    margin: 15px 0;
  }
}

.post__content > a:focus,
.post__content > p > a:focus{
  padding: 0;
}
</style>