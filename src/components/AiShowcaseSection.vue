<script setup>
import { useI18n } from 'vue-i18n'

// Flip to false once real AI/UGC demos replace these placeholder cards.
defineProps({
  visible: { type: Boolean, default: true },
})

const { t, tm } = useI18n()
</script>

<template>
  <section
    v-if="visible"
    id="ai-showcase"
    class="bg-bgLight flex items-center justify-center dark:bg-bgDarkSecondary"
  >
    <div class="flex flex-col gap-10 max-w-custom w-5/6 pt-20 pb-20">
      <div class="flex flex-col gap-3">
        <h2 class="title text-left">
          {{ t('aiShowcase.title') }}<span class="text-primary">.</span>
        </h2>
        <p class="section-subtitle max-w-[640px]">{{ t('aiShowcase.subtitle') }}</p>
      </div>

      <div class="grid gap-[22px]" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))">
        <div
          v-for="item in tm('aiShowcase.items')"
          :key="item.title"
          class="glow-card overflow-hidden rounded-2xl bg-white dark:bg-bgDark"
        >
          <img
            v-if="item.img"
            :src="`/assets/ai-showcase/${item.img}`"
            :alt="item.title"
            class="aspect-[4/3] w-full object-cover"
          />
          <div
            v-else
            class="flex aspect-[4/3] w-full items-center justify-center"
            style="background: repeating-linear-gradient(135deg, #101b30 0px, #101b30 14px, #0c1526 14px, #0c1526 28px)"
          >
            <span class="px-4 text-center font-mono text-[12.5px] tracking-wide text-[#6f7fa3]">{{ item.label }}</span>
          </div>
          <div class="flex items-center justify-between gap-3 px-5 py-[18px]">
            <h3 class="text-base font-bold dark:text-white">{{ item.title }}</h3>
            <span
              v-if="!item.img"
              class="whitespace-nowrap rounded-full bg-primary/10 px-[10px] py-[5px] text-[11.5px] font-bold tracking-wide text-primary"
            >
              {{ t('aiShowcase.badge') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
