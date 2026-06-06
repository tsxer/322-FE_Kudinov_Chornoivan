<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 p-6 transition-colors duration-300">
    <div class="max-w-7xl mx-auto space-y-8">
      
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800/50 pb-5">
        <div>
          <h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Inovačné programy</h1>
          <p class="text-slate-500 dark:text-slate-400 mt-1">Objavte technologické výzvy, mentorskú podporu a možnosti rozvoja vášho startupu.</p>
        </div>
        
        <div class="flex items-center gap-3">
          <div class="relative">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Hľadať program..." 
              class="w-64 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="n in 3" :key="n" class="animate-pulse rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/50 p-6 h-72 flex flex-col justify-between">
          <div>
            <div class="h-10 w-10 rounded-lg bg-slate-200 dark:bg-slate-800 mb-4"></div>
            <div class="h-6 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
              <div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
            </div>
          </div>
          <div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4 mt-4"></div>
        </div>
      </div>

      <div v-else-if="filteredPrograms.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="program in filteredPrograms" 
          :key="program.id"
          class="group flex flex-col justify-between rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/50 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="rounded-lg bg-indigo-50 dark:bg-indigo-950/50 p-2.5 text-indigo-600 dark:text-indigo-400">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span v-if="program.is_active" class="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 border border-emerald-200/30">
                <span class="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Aktívny
              </span>
              <span v-else class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                Neaktívny
              </span>
            </div>

            <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ program.title }}
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-3">
              {{ program.description }}
            </p>

            <div v-if="program.calls && program.calls.length > 0" class="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 space-y-2">
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Aktuálne výzvy</p>
              
              <div v-for="call in program.calls" :key="call.id" class="flex items-center justify-between rounded-lg bg-slate-50 dark:bg-slate-950 p-2.5 text-xs">
                <div class="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <svg class="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{{ call.title }}</span>
                </div>
                <span class="text-amber-600 dark:text-amber-400 font-medium">{{ call.deadline }}</span>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-4 flex items-center justify-between">
            <span class="text-xs text-slate-400 dark:text-slate-500">Kategória: {{ program.category }}</span>
            <button @click="$router.push(`/programs/${program.id}`)" class="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
              Zobraziť detail
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-16 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/50">
        <svg class="mx-auto h-12 w-12 text-slate-400 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2 2m16 0V9a2 2 0 00-2-2H6a2 2 0 00-2 2v4.586a1 1 0 01-.293.707l-2.828 2.828a1 1 0 01-.707.293H2" />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-slate-900 dark:text-white">Žiadne programy</h3>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">Nenašli sa žiadne inovačné programy zodpovedajúce kritériám.</p>
      </div>

    </div>
  </div>
</template>

<script>
import api from '../api/index.js'

export default {
  name: 'ProgramsView',
  data() {
    return {
      programs: [],
      searchQuery: '',
      loading: false
    }
  },
  computed: {
    filteredPrograms() {
      if (!this.searchQuery) return this.programs
      const query = this.searchQuery.toLowerCase()
      return this.programs.filter(p => 
        (p.title && p.title.toLowerCase().includes(query)) ||
        (p.description && p.description.toLowerCase().includes(query)) ||
        (p.category && p.category.toLowerCase().includes(query))
      )
    }
  },
  async created() {
    this.loading = true
    try {
      const response = await api.get('/programs')
      this.programs = response.data || []
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  }
}
</script>