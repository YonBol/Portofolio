<script setup>
defineProps({
  modelValue: { type: String, required: true },
  developerLabel: { type: String, required: true },
  aiLabel: { type: String, required: true },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="pill-track">
    <button
      type="button"
      class="pill-btn"
      :class="{ 'is-active': modelValue === 'developer' }"
      @click="$emit('update:modelValue', 'developer')"
    >
      {{ developerLabel }}
    </button>
    <button
      type="button"
      class="pill-btn"
      :class="{ 'is-active': modelValue === 'ai' }"
      @click="$emit('update:modelValue', 'ai')"
    >
      {{ aiLabel }}
    </button>
  </div>
</template>
