<template>
  <div class="flex min-h-screen">

    <aside
      class="hidden lg:flex lg:w-[42%] relative overflow-hidden flex-col
             bg-gradient-to-b from-[#0c1120] via-[#0d1f42] to-[#0c1120]"
    >
      <svg class="absolute -top-10 -right-20 w-[500px] h-[500px] pointer-events-none"
           viewBox="0 0 500 500" aria-hidden="true">
        <circle cx="440" cy="80" r="210" fill="none" stroke="white" stroke-width="1" opacity="0.06"/>
        <circle cx="440" cy="80" r="150" fill="none" stroke="white" stroke-width="1" opacity="0.05"/>
        <circle cx="440" cy="80" r="90"  fill="none" stroke="white" stroke-width="1" opacity="0.04"/>
        <circle cx="60"  cy="440" r="170" fill="none" stroke="white" stroke-width="1" opacity="0.04"/>
      </svg>

      <div class="relative z-10 flex flex-col h-full p-10">
        <router-link to="/" class="inline-flex items-center gap-2.5 no-underline">
          <div class="w-9 h-9 rounded-lg bg-white/10 border border-white/20
                      flex items-center justify-center
                      text-white text-[11px] font-extrabold tracking-wider">
            NTI
          </div>
          <span class="text-white/60 text-sm font-medium">Inkubátor</span>
        </router-link>

        <div class="mt-auto pb-4">
          <h2 class="text-[2rem] font-extrabold leading-[1.25] text-white mb-4">
            Miesto kde<br />
            <span class="text-blue-400">nápady rastú</span><br />
            do projektov
          </h2>
          <p class="text-white/50 text-[0.9375rem] leading-relaxed mb-8 max-w-xs">
            Prepájame študentov s reálnymi príležitosťami cez
            dva špeciálne programy.
          </p>

          <div class="flex gap-8">
            <div>
              <p class="text-white text-3xl font-extrabold leading-none">2+</p>
              <p class="text-white/40 text-xs mt-1.5">Programy</p>
            </div>
            <div>
              <p class="text-white text-3xl font-extrabold leading-none">50+</p>
              <p class="text-white/40 text-xs mt-1.5">Projekty</p>
            </div>
            <div>
              <p class="text-white text-3xl font-extrabold leading-none">∞</p>
              <p class="text-white/40 text-xs mt-1.5">Možnosti</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <main class="flex-1 flex items-center justify-center
                 bg-white dark:bg-slate-900 p-8 min-h-screen">
      <div class="w-full max-w-sm">

        <router-link
          to="/"
          class="inline-flex items-center gap-1.5 mb-10 no-underline
                 text-slate-500 dark:text-slate-400 text-sm font-medium
                 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Späť na úvod
        </router-link>

        <div class="mb-8">
          <h1 class="text-[1.875rem] font-extrabold leading-none mb-1.5
                     text-slate-900 dark:text-white">
            Vitaj späť
          </h1>
          <p class="text-slate-500 dark:text-slate-400 text-base">
            Prihlás sa do svojho účtu
          </p>
        </div>

        <transition name="fade-down">
          <div
            v-if="error"
            class="mb-5 px-4 py-3 rounded-xl text-sm
                   bg-red-50 dark:bg-red-950/50
                   border border-red-200 dark:border-red-800
                   text-red-600 dark:text-red-400"
          >
            {{ error }}
          </div>
        </transition>

        <div class="mb-4">
          <label class="block text-[13px] font-semibold mb-2
                        text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="meno@email.sk"
            autocomplete="email"
            @keyup.enter="handleLogin"
            class="w-full h-11 px-4 text-base rounded-xl transition
                   border border-slate-200 dark:border-slate-600
                   bg-white dark:bg-slate-800
                   text-slate-900 dark:text-white
                   placeholder:text-slate-400 dark:placeholder:text-slate-500
                   focus:outline-none focus:border-blue-500
                   focus:ring-2 focus:ring-blue-500/10"
          />
        </div>

        <div>
          <label class="block text-[13px] font-semibold mb-2
                        text-slate-700 dark:text-slate-300">
            Heslo
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            autocomplete="current-password"
            @keyup.enter="handleLogin"
            class="w-full h-11 px-4 text-base rounded-xl transition
                   border border-slate-200 dark:border-slate-600
                   bg-white dark:bg-slate-800
                   text-slate-900 dark:text-white
                   placeholder:text-slate-400 dark:placeholder:text-slate-500
                   focus:outline-none focus:border-blue-500
                   focus:ring-2 focus:ring-blue-500/10"
          />
        </div>

        <button
          @click="handleLogin"
          :disabled="loading"
          class="w-full h-12 mt-6 rounded-xl font-semibold text-base
                 bg-blue-600 hover:bg-blue-700 text-white
                 disabled:opacity-60 disabled:cursor-not-allowed
                 transition-all duration-200
                 hover:-translate-y-px hover:shadow-lg hover:shadow-blue-600/25
                 active:translate-y-0 cursor-pointer border-0"
        >
          {{ loading ? 'Prihlasujem…' : 'Prihlásiť sa' }}
        </button>

        <p class="text-center mt-6 text-sm text-slate-500 dark:text-slate-400">
          Nemáš účet?
          <router-link
            to="/register"
            class="font-semibold no-underline
                   text-blue-600 dark:text-blue-400
                   hover:text-blue-700 dark:hover:text-blue-300"
          >
            Registruj sa zadarmo →
          </router-link>
        </p>

      </div>
    </main>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth.js';
export default {
  name: 'LoginView',
  data() { return { email: '', password: '' }; },
  computed: {
    loading() { return useAuthStore().loading; },
    error()   { return useAuthStore().error; },
  },
  methods: {
    async handleLogin() {
      const store = useAuthStore();
      const success = await store.login(this.email, this.password);
      if (success) this.$router.push('/dashboard');
    },
  },
};
</script>

<style scoped>
.fade-down-enter-active, .fade-down-leave-active { transition: all 0.2s ease; }
.fade-down-enter-from { opacity: 0; transform: translateY(-6px); }
.fade-down-leave-to   { opacity: 0; }
</style>