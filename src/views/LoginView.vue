<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Prihlásiť sa</h2>
      
      <div v-if="error" class="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
        {{ error }}
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input v-model="email" type="email" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-1">Heslo</label>
        <input v-model="password" type="password" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <button @click="handleLogin" :disabled="loading" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50">
        {{ loading ? 'Načítava...' : 'Prihlásiť sa' }}
      </button>

      <p class="text-center text-sm text-gray-600 mt-4">
        Nemáte účet? 
        <router-link to="/register" class="text-blue-600 hover:underline">Registrovať sa</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth.js'

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    loading() { return useAuthStore().loading },
    error() { return useAuthStore().error }
  },
  methods: {
    async handleLogin() {
      const store = useAuthStore()
      const success = await store.login(this.email, this.password)
      if (success) {
        this.$router.push('/dashboard')
      }
    }
  }
}
</script>