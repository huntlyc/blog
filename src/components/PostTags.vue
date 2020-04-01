<template>
   <ul class="post-tags inline">
       <li v-for="tag in post.tags" :key="tag.id" >
   		<g-link class="post-tags__link" :to="tag.path"><span>#</span>{{ tag.title }}</g-link>
       </li>
    </ul>
</template>

<script>
export default {
  props: ['post']
}
</script>