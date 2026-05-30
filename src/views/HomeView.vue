<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200">
    
    <section class="min-h-screen flex items-center pt-14">
      <div class="max-w-6xl mx-auto px-6 py-20 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Nitriansky technologický inkubátor
            </div>
            <h1 class="text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6 tracking-tight">
              Miesto kde<br />
              <span class="text-blue-500 dark:text-blue-400">nápady rastú</span><br />
              do projektov
            </h1>
            <p class="text-lg text-gray-500 dark:text-slate-400 mb-10 leading-relaxed">
              Prepájame študentov s reálnymi príležitosťami. Dva programy, jeden cieľ — váš úspech.
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <router-link to="/register?role=student" class="bg-blue-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors text-center">
                Registrácia študenta
              </router-link>
              <router-link to="/register?role=company" class="bg-gray-900 dark:bg-slate-800 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-700 dark:hover:bg-slate-700 transition-colors text-center">
                Registrácia firmy
              </router-link>
            </div>
          </div>

          <div class="hidden lg:grid grid-cols-2 gap-4">
            <div class="bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-6">
              <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" stroke="#3b82f6" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
              </div>
              <p class="text-sm font-semibold text-gray-900 dark:text-white mb-1">Program A</p>
              <p class="text-xs text-gray-500 dark:text-slate-400">Grantový inkubačný program</p>
            </div>
            <div class="bg-purple-50 dark:bg-purple-950/20 rounded-2xl p-6 mt-6">
              <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 6h14M3 10h14M3 14h8" stroke="#8b5cf6" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>
              <p class="text-sm font-semibold text-gray-900 dark:text-white mb-1">Program B</p>
              <p class="text-xs text-gray-500 dark:text-slate-400">Živá prax od firiem</p>
            </div>
            <div class="bg-green-50 dark:bg-green-950/20 rounded-2xl p-6">
              <p class="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">2+</p>
              <p class="text-xs text-gray-500 dark:text-slate-400">Aktívne programy</p>
            </div>
            <div class="bg-orange-50 dark:bg-orange-950/20 rounded-2xl p-6 mt-6">
              <p class="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-1">∞</p>
              <p class="text-xs text-gray-500 dark:text-slate-400">Príležitostí</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="min-h-screen flex items-center bg-gray-50 dark:bg-slate-900/50">
      <div class="max-w-6xl mx-auto px-6 py-20 w-full">
        <SectionHeader title="Dva programy, jedna platforma" subtitle="Vyber si cestu ktorá ti vyhovuje najlepšie" :centered="true" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="prog in programDetails" :key="prog.id" class="bg-white dark:bg-slate-800 rounded-3xl p-10 border border-gray-100 dark:border-slate-700 flex flex-col">
            <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center mb-6', prog.badgeBg]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="prog.strokeColor" stroke-width="1.5">
                <path v-if="prog.id === 'A'" d="M12 2L22 8V16L12 22L2 16V8L12 2Z" stroke-linejoin="round"/>
                <path v-else d="M3 7h18M3 12h18M3 17h10" stroke-linecap="round"/>
              </svg>
            </div>
            <span :class="['text-xs font-medium px-2 py-0.5 rounded-full w-fit mb-2', prog.badgeTextBg]">{{ prog.tag }}</span>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ prog.title }}</h3>
            <p class="text-gray-500 dark:text-slate-400 mb-6 leading-relaxed">{{ prog.description }}</p>
            <ul class="space-y-3 mb-8 flex-1">
              <li v-for="feat in prog.features" :key="feat" class="flex items-center gap-3 text-sm text-gray-600 dark:text-slate-300">
                <span :class="['w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0', prog.badgeBg]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" :stroke="prog.strokeColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2 5L4 7L8 3"/>
                  </svg>
                </span>
                {{ feat }}
              </li>
            </ul>
            <router-link :to="prog.link" :class="['text-white px-6 py-3 rounded-full text-sm font-medium transition-colors text-center', prog.btnBg]">
              {{ prog.btnText }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white dark:bg-slate-900 py-20">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeader title="Aktívne výzvy" subtitle="Otvorené kolá na ktoré sa môžeš prihlásiť" badge="Výzvy" :centered="true" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <CallCard v-for="call in calls" :key="call.title" :title="call.title" :description="call.description" :type="call.type" :deadline="call.deadline" />
        </div>
        <div class="text-center">
          <router-link to="/programs" class="text-sm text-blue-500 dark:text-blue-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
            Zobraziť všetky výzvy →
          </router-link>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 dark:bg-slate-900/50 py-20">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeader title="Naši partneri" subtitle="Firmy ktoré spolupracujú s NTI" badge="Partneri" :centered="true" />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <PartnerCard v-for="partner in partners" :key="partner" :name="partner" />
        </div>
        <div class="text-center">
          <router-link to="/partners" class="text-sm text-blue-500 dark:text-blue-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
            Zobraziť všetkých partnerov →
          </router-link>
        </div>
      </div>
    </section>

    <section class="bg-white dark:bg-slate-900 py-20">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeader title="Aktuality" subtitle="Novinky z NTI inkubátora" badge="Novinky" :centered="true" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <NewsCard v-for="item in news" :key="item.title" :title="item.title" :excerpt="item.excerpt" :date="item.date" />
        </div>
        <div class="text-center">
          <router-link to="/news" class="text-sm text-blue-500 dark:text-blue-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
            Zobraziť všetky aktuality →
          </router-link>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import SectionHeader from "../components/SectionHeader.vue";
import PartnerCard from "../components/PartnerCard.vue";
import NewsCard from "../components/NewsCard.vue";
import CallCard from "../components/CallCard.vue";
import AppFooter from '../components/AppFooter.vue'

export default {
  name: "HomeView",
  components: { SectionHeader, PartnerCard, NewsCard, CallCard, AppFooter },
  data() {
    return {
      programDetails: [
        {
          id: 'A',
          tag: 'Program A',
          title: 'Grantový inkubačný program',
          description: 'Pre tých, ktorí majú vlastný inovatívny nápad. Získaj financovanie, mentoring a podporu pre rozvoj svojho startupu alebo produktu.',
          badgeBg: 'bg-blue-100 dark:bg-blue-900/40',
          badgeTextBg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
          strokeColor: '#3b82f6',
          features: ['Finančná podpora a grant', 'Mentoring od odborníkov', 'Tímová spolupráca', 'Cieľ: startup alebo produkt'],
          link: '/programs',
          btnBg: 'bg-blue-500 hover:bg-blue-600',
          btnText: 'Zistiť viac o programe A'
        },
        {
          id: 'B',
          tag: 'Program B',
          title: 'Živá prax od firiem',
          description: 'Pre tých, ktorí chcú reálnu prax. Pracuj na skutočných zadaniach od firiem, získaj skúsenosti a odmenu za svoju prácu.',
          badgeBg: 'bg-purple-100 dark:bg-purple-900/40',
          badgeTextBg: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400',
          strokeColor: '#8b5cf6',
          features: ['Reálne zadania od firiem', 'Finančná odmena', 'Product Owner z firmy', 'Cieľ: zákazkový softvér'],
          link: '/programs',
          btnBg: 'bg-purple-500 hover:bg-purple-600',
          btnText: 'Zistiť viac o programe B'
        }
      ],
      calls: [
        { title: 'Inkubačný program 2026', description: 'Podaj prihlášku so svojím inovatívnym nápadom', type: 'A', deadline: 'Deadline: 30. 6. 2026' },
        { title: 'Živá prax — leto 2026', description: 'Reálne zadania od partnerských firiem', type: 'B', deadline: 'Deadline: 15. 6. 2026' },
        { title: 'Inkubačný program 2026', description: 'Druhé kolo grantového programu', type: 'A', deadline: 'Deadline: 31. 7. 2026' }
      ],
      partners: ['Accenture', 'T-Systems', 'Atos', 'Datalan'],
      news: [
        { title: 'NTI otvára nové kolo inkubačného programu', excerpt: 'Od júna 2026 prijímame prihlášky do programu A. Tento rok podporíme až 10 projektov.', date: '22. 5. 2026' },
        { title: 'Partnerstvo s Accenture Slovakia', excerpt: 'NTI podpísalo memorandum o spolupráci s Accenture Slovakia pre program živeй praxe.', date: '15. 5. 2026' },
        { title: 'Úspešné projekty z minulého roka', excerpt: 'Tri projekty z programu A získali seed investíciu a pokračujú ako samostatné startupy.', date: '1. 5. 2026' }
      ]
    };
  }
};
</script>