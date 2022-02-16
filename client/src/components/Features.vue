<template>
  <div class="features__card">
    <h2 class="features__card--title heading-2 heading-2--blue">
      {{ feature.title }}
    </h2>
    <p class="features__card--text heading-3">{{ feature.description }}</p>
    <img class="features__card--icon" :src="feature.link" :alt="feature.alt" />
  </div>
</template>

<script>
export default {
  name: "Features",
  props: ["feature"],
};
</script>
