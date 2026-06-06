<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 p-6 transition-colors duration-300">
    <div v-if="loading" class="max-w-7xl mx-auto space-y-8 animate-pulse">
      <div class="h-44 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="h-28 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
        <div class="h-28 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
        <div class="h-28 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
      </div>
    </div>

    <div v-else class="max-w-7xl mx-auto space-y-8">
      <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white shadow-lg">
        <div class="relative z-10 max-w-2xl">
          <span class="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-md">
            <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Partner sekcia
          </span>
          <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Vitaj späť, <span class="underline decoration-wavy decoration-emerald-400">{{ user.email }}</span>!
          </h1>
          <p class="mt-2 text-indigo-100 text-lg">
            Správa tvojich inkubačných programov a prihlášok na jednej obrazovke.
          </p>
        </div>
        <div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
        <div class="absolute right-20 -bottom-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="overflow-hidden rounded-xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200/60 dark:border-slate-800/50">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Aktívne programy</p>
            <div class="rounded-lg bg-indigo-50 dark:bg-indigo-950/50 p-2 text-indigo-600 dark:text-indigo-400">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
          </div>
          <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">{{ activeProgramsCount }}</p>
        </div>
        
        <div class="overflow-hidden rounded-xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200/60 dark:border-slate-800/50">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Podané prihlášky</p>
            <div class="rounded-lg bg-emerald-50 dark:bg-emerald-950/50 p-2 text-emerald-600 dark:text-emerald-400">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
          </div>
          <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">{{ applicationsCount }}</p>
        </div>

        <div class="overflow-hidden rounded-xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200/60 dark:border-slate-800/50">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Aktuálna rola</p>
            <span class="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-950/40 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-400 ring-1 ring-inset ring-purple-700/10 uppercase">
              {{ user.role }}
            </span>
          </div>
          <p class="mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-white capitalize">
            {{ user.role === 'company' ? 'Partner inkubátora' : 'Užívateľ' }}
          </p>
        </div>
      </div>

      <div>
        <h2 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Rýchle akcie</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          
          <div @click="$router.push('/programs')" class="group relative flex items-start space-x-4 rounded-xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200/60 dark:border-slate-800/50 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer">
            <div class="flex h-12 w-12 shrink-0 items-center justify-between rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/20 group-hover:bg-indigo-700 transition-colors">
              <svg class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" /></svg>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-base font-semibold text-slate-900 dark:text-white">
                Programy
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Zobraziť dostupné programy, technologické výzvy a možnosti inkubácie.</p>
            </div>
          </div>

          <div @click="$router.push('/applications')" class="group relative flex items-start space-x-4 rounded-xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200/60 dark:border-slate-800/50 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer">
            <div class="flex h-12 w-12 shrink-0 items-center justify-between rounded-lg bg-purple-600 text-white shadow-md shadow-purple-600/20 group-hover:bg-purple-700 transition-colors">
              <svg class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-base font-semibold text-slate-900 dark:text-white">
                Moje prihlášky
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Sledovanie stavu tvojich podaných žiadostí, posudkov a spätnej väzby v reálnom čase.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api/index.js'
import { useAuthStore } from '../stores/auth.js'

export default {
  name: 'DashboardView',
  data() {
    return {
      activeProgramsCount: 0,
      applicationsCount: 0,
      loading: false
    }
  },
  computed: {
    user() {
      return useAuthStore().user || { email: '', role: '' }
    }
  },
  async created() {
    this.loading = true
    try {
      const [programsRes, appsRes] = await Promise.all([
        api.get('/programs'),
        api.get('/applications')
      ])
      this.activeProgramsCount = programsRes.data ? programsRes.data.length : 0
      this.applicationsCount = appsRes.data ? appsRes.data.length : 0
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  },
  methods: {
    async handleLogout() {
      await useAuthStore().logout()
      this.$router.push('/login')
    }
  }
}
</script>