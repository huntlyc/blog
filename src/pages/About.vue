<template>
  <Layout>
    <section>
      <article class="about">
        <div class="text-centered">
          <g-image fit="cover" width="200" height="200" class="rounded img-centered" src="~/assets/huntly-cameron.jpg" alt="Picture of Huntly wearing an ironed shirt - quite a rare sight"/>
        </div>
        <h1>All about me</h1>
        <p>That&rsquo;s me, I&rsquo;m Huntly. Pleased to meet you!</p>
        <h2>Who am I?</h2>
        <p><del>I&rsquo;m Huntly. Pleased t&hellip;</del> I&rsquo;m a web developer with about 9 years of professional WordPress experience working for a close knit design agency based in the Highlands of Scotland, focusing on crafting bespoke, beautiful, quality websites that users love to visit and clients love to work with.</p>
        <p>I&rsquo;m passionate about all things tech related, but I lean more towards web technologies with a side embedded technologies.</p>
        <h2>What do I do for the day job?</h2>
        <p>I&rsquo;m primarily responsible for helping the design team turn their designs into fully functioning websites.  Being part of a smaller team allows me to cover all of our dev stack in any given day which includes:</p>
        <ul>
          <li>SQL</li>
          <li>PHP/WordPress</li>
          <li>Gutenberg Blocks/React &amp; ACF</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <h2>What do I do for fun?</h2>
        <p>I like to try out lots of things, some stick, some do not. At the moment this is my (non-exhaustive) list of projects:</p>
        <dl>
          <dt>Electronics/Low level programming:</dt>
          <dd>I'm building an 8-bit computer from scratch to plug gaps in my basic computing science knowledge</dd>
          <dt>Games Programming (Python/Basic):</dt>
          <dd>I'm getting into making silly games for the Raspberry Pi/Amstrad CPC to experience a different style of programming than just the usual CRUD style web development I do for the day job</dd>
          <dt>Sourdough:</dt>
          <dd>Have been at this for a while - still aiming for the "perfect" loaf!</dd>
        </dl>
      </article>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style>
  .text-centered{
    text-align: center;
  }
  img.rounded.img-centered{
    border-radius: 100%;
    margin: 0 auto;
  }

</style>