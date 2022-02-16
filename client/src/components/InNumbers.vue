<template>
  <div>
    <h1 class="heading-1 heading-1--main heading-1--main-light">
      {{ numbers.number }}
    </h1>
    <h2 class="heading-2 heading-2--blue">{{ numbers.description }}</h2>
  </div>
</template>

<script>
export default {
  name: "numbers",
  props: ["numbers"],
};
</script>
