<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const form = ref({ name: '', email: '', message: '' })
const sending = ref(false)
const sent = ref(false)

function onSubmit() {
  sending.value = true
  setTimeout(() => {
    sending.value = false
    sent.value = true
  }, 800)
}
</script>

<template>
  <section id="contact">
    <div
      class="max-w-custom w-5/6 m-auto pt-20 pb-20 grid grid-cols-1 grid-rows-1 place lg:grid-cols-2 lg:grid-rows-2 gap-y-6 gap-x-14"
    >
      <div class="flex flex-col gap-1 w-full justify-center items-center lg:items-start lg:justify-end">
        <h2 class="title text-left">
          {{ t('contact.title') }}<span class="text-primary">.</span>
        </h2>
        <p class="text-center lg:text-left">{{ t('contact.subtitle') }}</p>
      </div>

      <form
        class="glow-card row-span-3 bg-bgLightSecondary dark:bg-bgDarkSecondary max-w-md w-full py-6 px-8 rounded-xl flex flex-col gap-3 place-self-center lg:place-self-end"
        @submit.prevent="onSubmit"
      >
        <div class="flex flex-col justify-center gap-1">
          <label for="name">{{ t('contact.form.name') }}:</label>
          <input v-model="form.name" type="text" name="name" id="name" class="contact-input" :placeholder="t('contact.form.name')" required />
        </div>
        <div class="flex flex-col justify-center gap-1">
          <label for="email">{{ t('contact.form.email') }}:</label>
          <input v-model="form.email" type="email" name="email" id="email" class="contact-input" :placeholder="t('contact.form.email')" required />
        </div>
        <div class="flex flex-col justify-center gap-1">
          <label for="message">{{ t('contact.form.message') }}:</label>
          <textarea v-model="form.message" name="message" id="message" cols="30" rows="10" class="contact-input resize-none h-52" :placeholder="t('contact.form.message')" required></textarea>
        </div>
        <button type="submit" class="btn w-full cursor-pointer text-sm h-10 disabled:bg-slate-400 mt-1" :disabled="sending">
          <span v-if="!sending && !sent">{{ t('contact.form.send') }}</span>
          <span v-else-if="sent">{{ t('contact.form.sent') }}</span>
          <div v-else class="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            {{ t('contact.form.sending') }}
          </div>
        </button>
      </form>

      <div class="flex flex-col gap-4 w-full items-center lg:items-start">
        <div class="flex flex-col gap-2">
          <p class="flex items-center justify-center gap-2 lg:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="text-primary w-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            bollainbermejoyon@gmail.com
          </p>
          <p class="flex items-center justify-center gap-2 lg:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="text-primary w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {{ t('contact.location') }}
          </p>
        </div>
        <div class="flex gap-4">
          <a href="https://github.com/YonBol" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-7 fill-primary">
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yon-bollain/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-7 fill-primary">
              <path
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
