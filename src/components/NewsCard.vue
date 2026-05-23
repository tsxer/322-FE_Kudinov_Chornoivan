<template>
  <div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow cursor-pointer">
    <span class="text-xs text-gray-400 mb-2 block">{{ date }}</span>
    <h3 class="text-base font-semibold text-gray-900 mb-2 leading-snug">{{ title }}</h3>
    <p class="text-sm text-gray-500 leading-relaxed">{{ excerpt }}</p>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    title: { type: String, required: true },
    excerpt: { type: String },
    date: { type: String }
  }
}
</script>