<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section id="services" class="flex items-center justify-center">
    <div class="flex flex-col gap-10 max-w-custom w-5/6 pt-20 pb-20">
      <div class="flex flex-col gap-3">
        <h2 class="title text-left">
          {{ t('services.title') }}<span class="text-primary">.</span>
        </h2>
        <p class="section-subtitle max-w-[620px]">{{ t('services.subtitle') }}</p>
      </div>

      <div class="grid gap-[22px]" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))">
        <div
          v-for="service in tm('services.items')"
          :key="service.title"
          class="glow-card flex flex-col gap-3.5 rounded-2xl bg-slate-100 p-7 dark:bg-bgDarkSecondary"
        >
          <div class="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-primary/10 text-[22px]">
            {{ service.icon }}
          </div>
          <h3 class="text-lg font-bold dark:text-white">{{ service.title }}</h3>
          <p class="text-[14.5px] leading-relaxed opacity-80">{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
