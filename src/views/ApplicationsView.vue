<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 p-6 transition-colors duration-300">
    <div class="max-w-7xl mx-auto space-y-8">
      
      <div class="border-b border-slate-200/60 dark:border-slate-800/50 pb-5">
        <h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Moje prihlášky</h1>
        <p class="text-slate-500 dark:text-slate-400 mt-1">Sledujte stav a históriu vašich podaných žiadostí v reálnom čase.</p>
      </div>

      <div v-if="loading" class="space-y-4">
        <div v-for="n in 3" :key="n" class="animate-pulse bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/50 flex justify-between items-center h-24">
          <div class="space-y-2 w-1/3">
            <div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2"></div>
            <div class="h-3 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
          </div>
          <div class="h-6 bg-slate-200 dark:bg-slate-800 rounded w-20"></div>
        </div>
      </div>

      <div v-else-if="applications.length === 0" class="text-center py-16 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/50">
        <svg class="mx-auto h-12 w-12 text-slate-400 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-slate-900 dark:text-white">Žiadne prihlášky</h3>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">Zatiaľ ste neodoslali žiadne prihlášky do inovačných programov.</p>
      </div>

      <div v-else class="grid grid-cols-1 gap-4">
        <div 
          v-for="app in applications" 
          :key="app.id" 
          class="group bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/60 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all duration-200"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center space-x-4">
              <div class="rounded-lg bg-slate-50 dark:bg-slate-950 p-3 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800/50">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Prihláška #{{ app.id }}
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Call ID: <span class="font-mono text-slate-700 dark:text-slate-300">{{ app.call_id }}</span>
                </p>
              </div>
            </div>
            
            <div class="flex items-center sm:justify-end">
              <span :class="statusClass(app.status)" class="text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider border">
                {{ app.status }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import api from '../api/index.js'

export default {
  name: 'ApplicationsView',
  data() {
    return {
      applications: [],
      loading: false
    }
  },
  async created() {
    this.loading = true
    try {
      const response = await api.get('/applications')
      this.applications = response.data || []
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  },
  methods: {
    statusClass(status) {
      const classes = {
        draft: 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800/40 dark:text-slate-400 dark:border-slate-700/50',
        submitted: 'bg-blue-50 text-blue-700 border-blue-200/50 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/50',
        approved: 'bg-emerald-50 text-emerald-700 border-emerald-200/50 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/50',
        rejected: 'bg-rose-50 text-rose-700 border-rose-200/50 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800/50',
        in_review: 'bg-amber-50 text-amber-700 border-amber-200/50 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/50'
      }
      return classes[status] || 'bg-slate-50 text-slate-600 border-slate-200'
    }
  }
}
</script>