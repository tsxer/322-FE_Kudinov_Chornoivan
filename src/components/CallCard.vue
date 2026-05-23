<template>
  <div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow">
    <div class="flex justify-between items-start mb-3">
      <span :class="[
        'text-xs font-medium px-2 py-0.5 rounded-full',
        type === 'A' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
      ]">Program {{ type }}</span>
      <span class="text-xs text-red-500 font-medium">{{ deadline }}</span>
    </div>
    <h3 class="text-base font-semibold text-gray-900 mb-1">{{ title }}</h3>
    <p class="text-sm text-gray-500 mb-4">{{ description }}</p>
    <router-link to="/register" class="text-sm text-blue-500 font-medium hover:text-blue-600 transition-colors">
      Prihlásiť sa →
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CallCard',
  props: {
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, default: 'A' },
    deadline: { type: String }
  }
}
</script>