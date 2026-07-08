<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const menuOpen = ref(false)
const isDark = ref(document.documentElement.classList.contains('dark'))

function setLang(e) {
  locale.value = e.target.value
  localStorage.setItem('lang', e.target.value)
}

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const links = [
  { href: '#home', key: 'home' },
  { href: '#about', key: 'about' },
  { href: '#services', key: 'services' },
  { href: '#ai-showcase', key: 'aiShowcase' },
  { href: '#work', key: 'work' },
  { href: '#contact', key: 'contact' },
]
</script>

<template>
  <header
    class="bg-bgLightTransparent dark:bg-bgDarkTransparent z-10 h-20 flex items-center justify-center fixed w-full outline outline-1 shadow shadow-gray-300 outline-gray-200 dark:shadow-none dark:outline-primary before:-z-10 before:absolute before:backdrop-blur before:w-full before:h-20"
  >
    <div class="flex justify-between max-w-custom w-5/6">
      <a href="#home">
        <h1 class="select-none font-bold text-2xl text-gray-700 dark:text-white lg:text-3xl lg:scale-95">
          ybbdev<span class="text-primary">.</span>
        </h1>
      </a>
      <div class="flex items-center justify-center gap-5 lg:gap-8">
        <nav
          class="gap-10 text-lg backdrop-blur bg-bgLightTransparent dark:bg-bgDarkTransparent lg:flex lg:static lg:w-auto lg:h-auto lg:bg-transparent dark:lg:bg-transparent"
          :class="menuOpen ? 'fixed top-0 right-0 w-full h-screen flex' : 'hidden'"
        >
          <ul
            class="text-center flex flex-col items-center relative justify-center gap-5 text-gray-600 dark:text-gray-300 text-2xl max-w-screen-xl w-5/6 h-screen lg:flex-row lg:h-0 lg:text-lg m-auto whitespace-nowrap"
          >
            <li>
              <button aria-label="close-menu" class="lg:hidden" @click="menuOpen = false">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-8 absolute top-6 right-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
            <li v-for="link in links" :key="link.key">
              <a :href="link.href" class="hover:text-primary transition ease-out duration-300" @click="menuOpen = false">
                {{ t(`navbar.${link.key}`) }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center justify-center gap-3">
          <label for="lang" class="sr-only">Select language</label>
          <select id="lang" class="text-primary focus:border-none focus:outline-none bg-transparent cursor-pointer"
            :value="locale" @change="setLang">
            <option class="dark:bg-bgDarkSecondary" value="en">EN</option>
            <option class="dark:bg-bgDarkSecondary" value="es">ES</option>
          </select>
          <button aria-label="toggle-theme" @click="toggleTheme">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 text-primary">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </button>
        </div>
        <button aria-label="open-menu" class="lg:hidden dark:text-gray-300" @click="menuOpen = true">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
