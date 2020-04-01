<template>
  <Layout>
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
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
.home-links a {
  margin-right: 1rem;
}
</style>
