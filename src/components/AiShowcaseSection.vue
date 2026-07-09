<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

// Flip to false once real AI/UGC demos replace these placeholder cards.
defineProps({
  visible: { type: Boolean, default: true },
})

const { t, tm } = useI18n()

const lightbox = ref(null)

function openLightbox(item) {
  if (!item.img) return
  lightbox.value = { src: `/assets/ai-showcase/${item.img}`, title: item.title }
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.value = null
  document.body.style.overflow = ''
}

function onKeydown(e) {
  if (e.key === 'Escape') closeLightbox()
}

window.addEventListener('keydown', onKeydown)
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
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
          <div
            v-if="item.img"
            class="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden"
            role="button"
            tabindex="0"
            :aria-label="`View ${item.title} full size`"
            @click="openLightbox(item)"
            @keydown.enter="openLightbox(item)"
          >
            <img
              :src="`/assets/ai-showcase/${item.img}`"
              :alt="item.title"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100"
            >
              <span class="flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5v-3A1.5 1.5 0 014.5 3h3M3 16.5v3A1.5 1.5 0 004.5 21h3m9-18h3A1.5 1.5 0 0121 4.5v3m0 9v3a1.5 1.5 0 01-1.5 1.5h-3" />
                </svg>
                View full size
              </span>
            </div>
          </div>
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

  <Teleport to="body">
    <div
      v-if="lightbox"
      class="lightbox-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
      @click.self="closeLightbox"
    >
      <button
        type="button"
        aria-label="Close"
        class="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        @click="closeLightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <figure class="lightbox-figure flex max-h-full max-w-full flex-col items-center gap-3">
        <img :src="lightbox.src" :alt="lightbox.title" class="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl" />
        <figcaption class="text-sm font-medium text-white/80">{{ lightbox.title }}</figcaption>
      </figure>
    </div>
  </Teleport>
</template>

<style scoped>
@keyframes lightboxFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes lightboxScaleIn {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.lightbox-overlay {
  animation: lightboxFadeIn 0.18s ease;
}
.lightbox-figure {
  animation: lightboxScaleIn 0.22s ease;
}
</style>
