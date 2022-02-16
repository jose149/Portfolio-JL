<template>
  <section id="section--0" class="section home">
    <section class="banner">
      <div class="banner__background">
        <img
          class="banner__background--image"
          src="@/assets/prueba1.jpg"
          alt="Background image"
        />
      </div>
      <div class="banner__starter-background"></div>
      <div class="banner__title">
        <h1 class="heading-1 heading-1--main">Kero JL</h1>
        <h2 class="heading-1 heading-1--sub">Web Development</h2>
        <contactBtn></contactBtn>
      </div>
      <div class="banner__phone">
        <img
          class="banner__phone--case"
          src="@/assets/whitePhone.png"
          alt="white phone"
        />
      </div>
      <div class="banner__theCompany">
        <h2 class="heading-4 heading-4--light banner__theCompany--text">
          We are a creative agency specialized in web design, SEO and marketing.
        </h2>
      </div>
    </section>

    <section class="features">
      <features
        v-for="item of $store.state.features"
        v-bind:key="item.title"
        :feature="item"
      ></features>
    </section>

    <section class="ourWork">
      <div
        v-for="card of $store.state.ourWork"
        v-bind:key="card.number"
        class="ourWork__card"
        :class="card.class"
      >
        <img class="ourWork__card--number" :src="card.src" :alt="card.alt" />
        <h2 class="ourWork__card--title heading-2 heading-2--blue">
          {{ card.title }}
        </h2>
        <p class="ourWork__card--text heading-3">{{ card.description }}</p>
      </div>
      <section class="inNumbers">
        <numbers
          v-for="element of $store.state.inNumbers"
          v-bind:key="element.number"
          class="inNumbers__element"
          :numbers="element"
        ></numbers>
      </section>
    </section>

    <section class="testimonials"></section>
  </section>
</template>

<script>
// @ is an alias to /src

import contactBtn from "@/components/ContactCtaButton.vue";
import features from "@/components/Features.vue";
import numbers from "@/components/InNumbers.vue";

export default {
  name: "Home",
  components: {
    contactBtn,
    features,
    numbers,
  },
};
</script>
