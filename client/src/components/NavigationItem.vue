<template>
  <li class="navigation-bar__index--item" > 
    <router-link class="navigation-bar__index--link" :to="section.path">{{section.title}}</router-link>
  </li>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: ['section']
}
</script>