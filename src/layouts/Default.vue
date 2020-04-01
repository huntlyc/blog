<template>
  <div class="layout page-container">
    <header class="header">
      <g-link class="header-home-link" to="/"><span class="highlight">//</span>&thinsp;{{ $static.metadata.siteName }}</g-link>
      <nav class="header-nav">
        <ul>
          <li>
            <g-link class="nav__link" to="/">Latest Posts</g-link>
          </li>
          <!-- <li>
            <g-link class="nav__link" to="/about/">About</g-link>
          </li> -->
        </ul>
      </nav>
    </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <footer>
      &copy; 2020 &ndash; Huntly Cameron |
      <a href="https://creativecommons.org/licenses/by/4.0/">Content on CC 4.0 License</a>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
