<script setup>
import { useI18n } from 'vue-i18n'
import { coreStack, aiStack } from '../data/stack'

const { t, tm } = useI18n()
</script>

<template>
  <section id="about" class="bg-bgLight flex items-center justify-center dark:bg-bgDarkSecondary">
    <div class="flex flex-col gap-12 max-w-custom w-5/6 pt-20 pb-20">
      <div class="flex flex-col gap-3">
        <h2 class="title text-left">
          {{ t('about.title') }}<span class="text-primary">.</span>
        </h2>
        <p class="section-subtitle max-w-[780px]">
          {{ t('about.description') }}
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <h3 class="text-left text-2xl font-medium dark:text-white">
          {{ t('about.educationTitle') }}
        </h3>
        <ul class="marker:text-primary list-disc text-lg flex flex-wrap flex-row gap-5 lg:flex-col lg:gap-2">
          <li v-for="item in tm('about.education')" :key="item" class="ml-5">{{ item }}</li>
        </ul>
      </div>

      <div class="flex flex-col gap-3">
        <h3 class="text-left text-2xl font-medium dark:text-white">
          {{ t('about.coreStackTitle') }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in coreStack"
            :key="tag.label"
            class="inline-flex items-center gap-[5px] rounded-md border border-black/5 bg-slate-200 px-[11px] py-[5px] text-xs font-semibold whitespace-nowrap text-gray-700 dark:border-white/10 dark:bg-[#101b30] dark:text-[#dbe3f7]"
          >
            <span class="h-[6px] w-[6px] flex-none rounded-sm" :style="{ background: tag.color }" />
            {{ tag.label }}
          </span>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h3 class="text-left text-2xl font-medium dark:text-white">
          {{ t('about.aiStackTitle') }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in aiStack"
            :key="tag"
            class="inline-flex items-center rounded-md border border-primary/25 bg-primary/10 px-[11px] py-[5px] text-xs font-semibold whitespace-nowrap text-[#0a7ca3] dark:text-[#b6f1fb]"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
