<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200">
    <NavBar v-if="showNavbar" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
  computed: {
    showNavbar() {
      return this.$route.path !== "/login" && this.$route.path !== "/register";
    }
  }
};
</script>