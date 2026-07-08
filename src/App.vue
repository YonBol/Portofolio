<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AiShowcaseSection from './components/AiShowcaseSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

// Flip to false once real AI/UGC demos exist and this section should retire.
const AI_SHOWCASE_VISIBLE = true
</script>

<template>
  <div id="app">
    <AppHeader />
    <main class="bg-white text-gray-600 selection:bg-gray-400 selection:text-white dark:bg-bgDark dark:text-gray-300">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AiShowcaseSection :visible="AI_SHOWCASE_VISIBLE" />
      <ProcessSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
