<template>
  <div>
    <SectionHeader />
    <main class="pt-14">
      <router-view />
    </main>
  </div>
</template>

<script>
import SectionHeader from "./components/SectionHeader.vue";

export default {
  name: "App",
  components: { SectionHeader },
};
</script>
