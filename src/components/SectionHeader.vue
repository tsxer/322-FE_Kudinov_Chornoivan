<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
  >
    <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
      <router-link to="/">
        <AppLogo />
      </router-link>

      <div class="hidden md:flex items-center gap-6">
        <router-link
          to="/programs"
          class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >Programy</router-link
        >
        <router-link
          to="/about"
          class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >O nás</router-link
        >
        <router-link
          to="/partners"
          class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >Partneri</router-link
        >
        <router-link
          v-if="!isLoggedIn"
          to="/login"
          class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >Prihlásiť sa</router-link
        >
        <router-link
          v-if="!isLoggedIn"
          to="/register"
          class="text-sm bg-gray-900 text-white px-4 py-1.5 rounded-full hover:bg-gray-700 transition-colors"
          >Registrovať sa</router-link
        >
        <router-link
          v-if="isLoggedIn"
          to="/dashboard"
          class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >Dashboard</router-link
        >
        <button
          v-if="isLoggedIn"
          @click="handleLogout"
          class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Odhlásiť sa
        </button>
      </div>

      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden flex flex-col gap-1.5 p-1"
      >
        <span
          :class="[
            'block w-5 h-0.5 bg-gray-900 transition-all',
            menuOpen ? 'rotate-45 translate-y-2' : '',
          ]"
        ></span>
        <span
          :class="[
            'block w-5 h-0.5 bg-gray-900 transition-all',
            menuOpen ? 'opacity-0' : '',
          ]"
        ></span>
        <span
          :class="[
            'block w-5 h-0.5 bg-gray-900 transition-all',
            menuOpen ? '-rotate-45 -translate-y-2' : '',
          ]"
        ></span>
      </button>
    </div>

    <div
      v-if="menuOpen"
      class="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4"
    >
      <router-link
        to="/programs"
        @click="menuOpen = false"
        class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >Programy</router-link
      >
      <router-link
        to="/about"
        @click="menuOpen = false"
        class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >O nás</router-link
      >
      <router-link
        to="/partners"
        @click="menuOpen = false"
        class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >Partneri</router-link
      >
      <router-link
        to="/news"
        @click="menuOpen = false"
        class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >Aktuality</router-link
      >
      <router-link
        v-if="!isLoggedIn"
        to="/login"
        @click="menuOpen = false"
        class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >Prihlásiť sa</router-link
      >
      <router-link
        v-if="!isLoggedIn"
        to="/register"
        @click="menuOpen = false"
        class="text-sm bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors text-center"
        >Registrovať sa</router-link
      >
      <router-link
        v-if="isLoggedIn"
        to="/dashboard"
        @click="menuOpen = false"
        class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >Dashboard</router-link
      >
      <button
        v-if="isLoggedIn"
        @click="handleLogout"
        class="text-sm text-gray-600 hover:text-gray-900 transition-colors text-left"
      >
        Odhlásiť sa
      </button>
    </div>
  </nav>
</template>

<script>
import AppLogo from "./AppLogo.vue";
import { useAuthStore } from "../stores/auth.js";

export default {
  name: "NavBar",
  components: { AppLogo },
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    isLoggedIn() {
      return useAuthStore().isLoggedIn;
    },
  },
  methods: {
    async handleLogout() {
      await useAuthStore().logout();
      this.$router.push("/");
      this.menuOpen = false;
    },
  },
};
</script>
