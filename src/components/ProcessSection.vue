<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SegmentedToggle from './SegmentedToggle.vue'

const { t, tm } = useI18n()
const variant = ref('ai')

const steps = computed(() => tm(`process.${variant.value}`))
</script>

<template>
  <section id="process" class="flex items-center justify-center">
    <div class="flex flex-col gap-5 max-w-custom w-5/6 pt-20 pb-20">
      <div class="flex flex-col gap-3">
        <h2 class="title text-left">
          {{ t('process.title') }}<span class="text-primary">.</span>
        </h2>
        <p class="section-subtitle max-w-[620px]">{{ t('process.subtitle') }}</p>
      </div>

      <SegmentedToggle
        v-model="variant"
        class="mb-4 self-start"
        :developer-label="t('process.toggleDeveloper')"
        :ai-label="t('process.toggleAi')"
      />

      <div class="grid gap-6" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))">
        <div v-for="step in steps" :key="step.n" class="flex flex-col gap-2.5">
          <span class="text-3xl font-extrabold text-primary opacity-55">{{ step.n }}</span>
          <h3 class="text-[17px] font-bold dark:text-white">{{ step.title }}</h3>
          <p class="text-sm leading-relaxed opacity-80">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
