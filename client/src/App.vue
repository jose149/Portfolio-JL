<template>
  <div id="app">
    <div id="nav" class="navigation-bar">
      <img class="navigation-bar__logo" src="../src/assets/Logo.png">
      <ul class="navigation-bar__index">
        <navigationItem
          v-for="item of $store.state.sections" 
          v-bind:key="item.id"
          :section="item"
          >  
        </navigationItem>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

  import navigationItem from '@/components/NavigationItem.vue';
  export default {
    name: 'App',
    components: {
      navigationItem
    },
    data(){
      return{
      }
    },
    methods:{},
    computed:{}
  };
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>