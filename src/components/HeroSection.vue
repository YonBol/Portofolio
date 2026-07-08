<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SegmentedToggle from './SegmentedToggle.vue'

const { t } = useI18n()
const variant = ref('ai')

const copy = computed(() => ({
  main: t(`hero.${variant.value}.main`),
  accent: t(`hero.${variant.value}.accent`),
  subtitle: t(`hero.${variant.value}.subtitle`),
}))
</script>

<template>
  <section id="home" class="bg-bgLightSecondary dark:hero-dark-bg min-h-screen">
    <div
      class="max-w-custom w-5/6 min-h-screen pt-20 flex flex-col items-center justify-center gap-9 m-auto lg:flex-row-reverse lg:justify-between"
    >
      <img
        src="/assets/profile-pic-28e73db2.webp"
        alt="Yon Bollain"
        width="320"
        height="320"
        class="w-60 border-8 border-solid border-primary md:w-80 animate-radiusMorph select-none bg-white"
      />
      <div class="text-center lg:text-left">
        <div class="pill-track mb-5 inline-flex">
          <button
            type="button"
            class="pill-btn"
            :class="{ 'is-active': variant === 'developer' }"
            @click="variant = 'developer'"
          >
            {{ t('hero.toggleDeveloper') }}
          </button>
          <button
            type="button"
            class="pill-btn"
            :class="{ 'is-active': variant === 'ai' }"
            @click="variant = 'ai'"
          >
            {{ t('hero.toggleAi') }}
          </button>
        </div>

        <p class="hero-greeting">
          {{ t('hero.greeting') }}
        </p>
        <h2 class="hero-title mb-3">
          {{ copy.main }}<span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500"
          >{{ copy.accent }}</span>
        </h2>
        <p class="hero-subtitle mx-auto lg:mx-0">
          {{ copy.subtitle }}
        </p>
        <div class="flex items-center justify-center gap-4 mt-5 lg:justify-start">
          <a href="#contact" class="btn btn-outline">{{ t('hero.resumeBtn') }} 📄</a>
          <a href="#work" class="btn pr-4">{{ t('hero.portfolioBtn') }}
            <svg class="fill-white animate-pulseRight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
              style="margin-bottom: -2px; width: 14px">
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
