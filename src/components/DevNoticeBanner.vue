<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const dismissed = ref(false)
</script>

<template>
  <div
    v-if="!dismissed"
    class="dev-notice glow-card fixed bottom-5 left-5 right-5 z-50 flex items-start gap-3 rounded-2xl bg-bgLightSecondary p-4 dark:bg-bgDarkSecondary sm:left-auto sm:right-5 sm:max-w-sm"
  >
    <span class="text-xl leading-none">🚧</span>
    <div class="flex-1">
      <p class="text-sm font-bold dark:text-white">{{ t('devNotice.title') }}</p>
      <p class="mt-1 text-[13px] leading-relaxed text-gray-600 dark:text-[#a7b2cf]">{{ t('devNotice.message') }}</p>
    </div>
    <button
      type="button"
      :aria-label="t('devNotice.dismiss')"
      class="flex h-7 w-7 flex-none items-center justify-center rounded-full text-gray-500 transition hover:bg-black/5 dark:text-[#a7b2cf] dark:hover:bg-white/10"
      @click="dismissed = true"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.dev-notice {
  box-shadow: 0 20px 45px -15px rgba(0, 0, 0, 0.35);
}

@media (prefers-reduced-motion: no-preference) {
  @keyframes devNoticeSlideIn {
    from {
      transform: translateY(16px);
    }
    to {
      transform: translateY(0);
    }
  }
  .dev-notice {
    animation: devNoticeSlideIn 0.35s ease;
  }
}
</style>
