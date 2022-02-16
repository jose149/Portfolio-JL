<template>
  <div id="app">
    <div id="nav" class="navigation-bar">
      <img class="navigation-bar__logo" src="../src/assets/Logo.png" />
      <ul class="navigation-bar__index">
        <navigationItem
          v-for="item of $store.state.sections"
          v-bind:key="item.id"
          :section="item"
        >
        </navigationItem>
        <div class="navigation-bar__flags">
          <img
            v-show="language === 'spa'"
            @click="changeLanguage()"
            id="spanish"
            class="navigation-bar__flags--lang"
            src="../src/assets/spain.png"
            alt="Spanish flag"
          />
          <img
            v-show="language === 'eng'"
            @click="changeLanguage()"
            id="english"
            class="navigation-bar__flags--lang"
            src="../src/assets/united-kingdom.png"
            alt="UK flag"
          />
        </div>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

import navigationItem from "@/components/NavigationItem.vue";
export default {
  name: "App",
  components: {
    navigationItem,
  },
  data() {
    return {
      language: "spa",
    };
  },
  methods: {
    changeLanguage() {
      if (this.language === "spa") {
        this.language = "eng";
      } else if (this.language === "eng") {
        this.language = "spa";
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
