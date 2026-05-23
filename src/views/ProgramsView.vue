<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">Programy</h1>
      
      <div v-if="loading" class="text-gray-500">Načítava...</div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="program in programs" :key="program.id" class="bg-white p-6 rounded-xl shadow-sm border">
          <span class="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">Program {{ program.type }}</span>
          <h3 class="text-lg font-semibold text-gray-900 mt-2">{{ program.title }}</h3>
          <p class="text-gray-500 text-sm mt-1">{{ program.description }}</p>
        </div>
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
      loading: false
    }
  },
  async created() {
    this.loading = true
    try {
      const response = await api.get('/programs')
      this.programs = response.data
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  }
}
</script>