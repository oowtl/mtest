<template>
  <nav class="navBar-nav">
    <span class="navBar-nav-title">NavBar</span>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style>
.navBar-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #343a40;
}
.navBar-nav-title {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  color: white;
}
</style>