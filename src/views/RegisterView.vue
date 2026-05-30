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
            Začni svoju<br />
            <span class="text-blue-400">technologickú</span><br />
            cestu dnes
          </h2>
          <p class="text-white/50 text-[0.9375rem] leading-relaxed mb-8 max-w-xs">
            Pridaj sa k študentom a firmám, ktorí spoločne
            tvoria budúcnosť technológií na Slovensku.
          </p>

          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-xl p-3.5">
              <div class="w-[34px] h-[34px] rounded-lg bg-blue-500/40 flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5L14.5 5v6L8 14.5L1.5 11V5L8 1.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <p class="text-white text-sm font-bold leading-none mb-0.5">Program A</p>
                <p class="text-white/45 text-xs">Grantový inkubátor</p>
              </div>
            </div>
            <div class="flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-xl p-3.5">
              <div class="w-[34px] h-[34px] rounded-lg bg-purple-500/40 flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12M2 8h12M2 12h7" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <div>
                <p class="text-white text-sm font-bold leading-none mb-0.5">Program B</p>
                <p class="text-white/45 text-xs">Živá prax od firiem</p>
              </div>
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

        <div class="mb-7">
          <h1 class="text-[1.875rem] font-extrabold leading-none mb-1.5
                     text-slate-900 dark:text-white">
            Vytvor si účet
          </h1>
          <p class="text-slate-500 dark:text-slate-400 text-base">
            Bezplatne, za pár sekúnd
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
            Registrujem sa ako
          </label>
          <div class="grid grid-cols-2 gap-2">
            <button
              type="button"
              @click="role = 'student'"
              :class="[
                'flex items-center justify-center gap-2 h-11 rounded-xl border transition-all text-sm font-medium cursor-pointer',
                role === 'student'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'
                  : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-500'
              ]"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="5.5" r="3" stroke="currentColor" stroke-width="1.4"/>
                <path d="M2 14c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
              </svg>
              Študent
            </button>
            <button
              type="button"
              @click="role = 'company'"
              :class="[
                'flex items-center justify-center gap-2 h-11 rounded-xl border transition-all text-sm font-medium cursor-pointer',
                role === 'company'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'
                  : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-500'
              ]"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="6" width="12" height="8" rx="1" stroke="currentColor" stroke-width="1.4"/>
                <path d="M5 6V4a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
              </svg>
              Firma
            </button>
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-[13px] font-semibold mb-2
                        text-slate-700 dark:text-slate-300">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="meno@email.sk"
            autocomplete="email"
            @keyup.enter="handleRegister"
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
                        text-slate-700 dark:text-slate-300">Heslo</label>
          <input
            v-model="password"
            type="password"
            placeholder="Minimálne 8 znakov"
            autocomplete="new-password"
            @keyup.enter="handleRegister"
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
          @click="handleRegister"
          :disabled="loading"
          class="w-full h-12 mt-6 rounded-xl font-semibold text-base
                 bg-blue-600 hover:bg-blue-700 text-white
                 disabled:opacity-60 disabled:cursor-not-allowed
                 transition-all duration-200
                 hover:-translate-y-px hover:shadow-lg hover:shadow-blue-600/25
                 active:translate-y-0 cursor-pointer border-0"
        >
          {{ loading ? 'Registrujem…' : 'Registrovať sa' }}
        </button>

        <p class="text-center mt-6 text-sm text-slate-500 dark:text-slate-400">
          Máš už účet?
          <router-link
            to="/login"
            class="font-semibold no-underline
                   text-blue-600 dark:text-blue-400
                   hover:text-blue-700 dark:hover:text-blue-300"
          >
            Prihlás sa →
          </router-link>
        </p>

      </div>
    </main>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth.js';
export default {
  name: 'RegisterView',
  data() { return { email: '', password: '', role: 'student' }; },
  computed: {
    loading() { return useAuthStore().loading; },
    error()   { return useAuthStore().error; },
  },
  created() {
    const q = this.$route?.query?.role;
    if (q === 'student' || q === 'company') this.role = q;
  },
  methods: {
    async handleRegister() {
      const store = useAuthStore();
      const success = await store.register(this.email, this.password, this.role);
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