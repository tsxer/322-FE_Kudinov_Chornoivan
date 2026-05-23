<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Registrácia</h2>

      <div v-if="error" class="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
        {{ error }}
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input v-model="email" type="email" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">Heslo</label>
        <input v-model="password" type="password" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-1">Rola</label>
        <select v-model="role" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="student">Študent</option>
          <option value="company">Firma</option>
        </select>
      </div>

      <button @click="handleRegister" :disabled="loading" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50">
        {{ loading ? 'Načítava...' : 'Registrovať sa' }}
      </button>

      <p class="text-center text-sm text-gray-600 mt-4">
        Máte účet?
        <router-link to="/login" class="text-blue-600 hover:underline">Prihlásiť sa</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth.js'

export default {
  name: 'RegisterView',
  data() {
    return {
      email: '',
      password: '',
      role: 'student'
    }
  },
  computed: {
    loading() { return useAuthStore().loading },
    error() { return useAuthStore().error }
  },
  methods: {
    async handleRegister() {
      const store = useAuthStore()
      const success = await store.register(this.email, this.password, this.role)
      if (success) {
        this.$router.push('/dashboard')
      }
    }
  }
}
</script>