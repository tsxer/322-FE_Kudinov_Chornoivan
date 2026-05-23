<template>
  <div class="bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-center hover:shadow-sm transition-shadow">
    <span class="text-lg font-semibold text-gray-400">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'PartnerCard',
  props: {
    name: { type: String, required: true }
  }
}
</script>