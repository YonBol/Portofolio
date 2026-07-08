<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="bg-bgLight dark:bg-bgDarkSecondary text-center py-6 border-t border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 text-sm">
    {{ t('footer.more') }} <a href="#about" class="text-primary hover:underline">{{ t('footer.me') }}</a>
  </footer>
</template>
