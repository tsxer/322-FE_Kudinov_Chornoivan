<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p class="text-gray-600 mb-6">Vitaj, {{ user?.email }}</p>
      <p class="text-sm text-gray-500 mb-8">Rola: {{ user?.role }}</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <router-link to="/programs" class="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md">
          <h3 class="font-semibold text-gray-900">Programy</h3>
          <p class="text-sm text-gray-500 mt-1">Zobraziť dostupné programy</p>
        </router-link>
        <router-link to="/applications" class="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md">
          <h3 class="font-semibold text-gray-900">Moje prihlášky</h3>
          <p class="text-sm text-gray-500 mt-1">Zobraziť vaše prihlášky</p>
        </router-link>
      </div>

      <button @click="handleLogout" class="mt-8 text-sm text-red-600 hover:underline">
        Odhlásiť sa
      </button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth.js'

export default {
  name: 'DashboardView',
  computed: {
    user() { return useAuthStore().user }
  },
  methods: {
    async handleLogout() {
      await useAuthStore().logout()
      this.$router.push('/login')
    }
  }
}
</script>