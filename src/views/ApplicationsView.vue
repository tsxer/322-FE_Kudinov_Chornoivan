<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">Moje prihlášky</h1>
      
      <div v-if="loading" class="text-gray-500">Načítava...</div>
      
      <div v-if="applications.length === 0 && !loading" class="text-gray-500">
        Zatiaľ nemáte žiadne prihlášky.
      </div>

      <div class="space-y-4">
        <div v-for="app in applications" :key="app.id" class="bg-white p-6 rounded-xl shadow-sm border">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-gray-500">Prihláška #{{ app.id }}</p>
              <p class="text-sm text-gray-500 mt-1">Call ID: {{ app.call_id }}</p>
            </div>
            <span :class="statusClass(app.status)" class="text-xs font-medium px-2 py-1 rounded">
              {{ app.status }}
            </span>
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
      this.applications = response.data
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  },
  methods: {
    statusClass(status) {
      const classes = {
        draft: 'bg-gray-100 text-gray-700',
        submitted: 'bg-blue-100 text-blue-700',
        approved: 'bg-green-100 text-green-700',
        rejected: 'bg-red-100 text-red-700',
        in_review: 'bg-yellow-100 text-yellow-700'
      }
      return classes[status] || 'bg-gray-100 text-gray-700'
    }
  }
}
</script>