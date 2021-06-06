<template>
  <div class="pure-g">
    <div class="pure-u-1-24"></div>
    <div class="pure-u-22-24">
      <div class="pure-menu pure-menu-horizontal">
        <h1 class="pure-menu-heading">CSVX</h1>
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <nuxt-link to="/" class="pure-menu-link">Home</nuxt-link>
          </li>
          <li class="pure-menu-item">
            <nuxt-link to="/about" class="pure-menu-link">About</nuxt-link>
          </li>
          <li class="pure-menu-item">
            <nuxt-link to="/developer" class="pure-menu-link">
              Developer
            </nuxt-link>
          </li>
          <li class="pure-menu-item">
            <nuxt-link to="/contact" class="pure-menu-link">Contact</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <Nuxt />
      </div>
    </div>
    <div class="pure-u-1-24"></div>
  </div>
</template>
