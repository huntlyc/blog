
<template>
   <div class="post-meta">
      Posted {{ post.date }}.
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
