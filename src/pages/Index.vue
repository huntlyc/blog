<template>
  <Layout>
    <section>
      <article class="about">
        <h1>Hey there!</h1>
        <p>I&rsquo;m Huntly. I&rsquo;m a web developer with about 9 years of professional WordPress experience working for a close knit design agency based in the Highlands of Scotland. <g-link to="/about/">Find out more about me</g-link></p>
      </article>
    </section>
    <section class="posts">
      <h1 class="underline">Latest Posts</h1>
      <div class="posts-container">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "Do MMMM YYYY")
        timeToRead
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
  import PostCard from '~/components/PostCard.vue'
  export default {
    components: {
      PostCard
    },
    metaInfo: {
      title: 'Latest Posts'
    }
}
</script>

<style>
.posts{
  margin-top: 60px;
}
.home-links a {
  margin-right: 1rem;
}

.about h1,
.about h2{
  margin-top: 2em;
  margin-bottom: 0.2em;
}

.about h1{
  margin-top: 1em;
}

</style>
