<template>
  <div class="bg-white dark:bg-slate-900">

    <section class="py-16 text-center border-b border-slate-100 dark:border-slate-800
                    bg-white dark:bg-slate-900">
      <div class="max-w-5xl mx-auto px-6">
        <span class="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold
                     bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
          Partneri
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight
                   text-slate-900 dark:text-white mb-4">
          Firmy, ktoré tvoria<br />
          <span class="text-blue-500">budúcnosť s nami</span>
        </h1>
        <p class="text-slate-500 dark:text-slate-400 text-[1.0625rem] leading-relaxed
                  max-w-xl mx-auto">
          Partnerské spoločnosti sú srdcom programu B — poskytujú reálne zadania,
          mentoring a príležitosti pre najlepších študentov.
        </p>
      </div>
    </section>

    <section class="py-20 bg-white dark:bg-slate-900">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
            Naši partneri
          </h2>
          <p class="text-slate-500 dark:text-slate-400 text-base">
            Spolupracujeme s lídrami technologického sektora na Slovensku i v zahraničí
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="p in partners" :key="p.name"
            class="bg-white dark:bg-slate-800 rounded-2xl
                   border border-slate-100 dark:border-slate-700/50
                   p-5 flex flex-col gap-4
                   transition-all duration-200
                   hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-slate-900/50"
          >
            <div :class="['w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0', p.color]">
              <span class="text-white text-[11px] font-extrabold tracking-wider">{{ p.initials }}</span>
            </div>
            <div>
              <p class="font-bold text-slate-900 dark:text-white text-[0.9375rem] mb-1">{{ p.name }}</p>
              <p class="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{{ p.focus }}</p>
            </div>
            <span class="mt-auto inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full
                         bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 self-start">
              {{ p.type }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50 dark:bg-slate-800/40">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-12">
          <span class="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold
                       bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            Pre firmy
          </span>
          <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
            Prečo spolupracovať s NTI
          </h2>
          <p class="text-slate-500 dark:text-slate-400 text-base max-w-md mx-auto">
            Získajte prístup k talentovaným študentom a inovatívnym projektom
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="b in benefits" :key="b.title"
               class="bg-white dark:bg-slate-800 rounded-2xl
                      border border-slate-100 dark:border-slate-700/50 p-6">
            <div class="w-11 h-11 rounded-xl mb-5 flex items-center justify-center
                        bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
              <span v-html="b.icon"></span>
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white text-base mb-2">{{ b.title }}</h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 dark:bg-gradient-to-b dark:from-[#0c1120] dark:via-[#0d1f42] dark:to-[#0c1120] py-16 border-t border-slate-100 dark:border-none transition-colors duration-250">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-start lg:items-center
                    justify-between gap-8">
          <div class="max-w-xl">
            <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
              Staňte sa partnerom NTI
            </h2>
            <p class="text-slate-600 dark:text-white/50 text-[0.9375rem] leading-relaxed">
              Máte záujem zadávať projekty študentom, prísť na prednášku alebo
              podporiť inovatívne nápady? Napíšte nám — spolu nájdeme ideálnu
              formu spolupráce.
            </p>
          </div>
          <div class="flex flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href="mailto:nti@umb.sk"
              class="px-7 py-3 rounded-full text-sm font-semibold no-underline
                     bg-slate-900 dark:bg-white text-white dark:text-[#0c1120] hover:bg-slate-800 dark:hover:bg-slate-100
                     transition-all duration-200 hover:-translate-y-px
                     hover:shadow-lg text-center"
            >
              Kontaktujte nás →
            </a>
            <p class="text-slate-400 dark:text-white/35 text-xs text-center">nti@umb.sk · Nitriansky kraj</p>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue';

export default {
  name: 'PartnersView',
  components: { AppFooter },
  data() {
    return {
      partners: [
        { name: 'Accenture',  initials: 'AC', focus: 'Digitálna transformácia & consulting',  color: 'bg-gradient-to-br from-purple-500 to-violet-600', type: 'Program B' },
        { name: 'T-Systems',  initials: 'TS', focus: 'IT infraštruktúra & cloud riešenia',     color: 'bg-gradient-to-br from-rose-500 to-pink-600',   type: 'Program B' },
        { name: 'Atos',       initials: 'AT', focus: 'Kybernetická bezpečnosť & big data',     color: 'bg-gradient-to-br from-sky-500 to-blue-600',    type: 'Program B' },
        { name: 'Datalan',    initials: 'DL', focus: 'Podnikové softvérové riešenia',          color: 'bg-gradient-to-br from-emerald-500 to-green-600', type: 'Program B' },
        { name: 'IBM',        initials: 'IB', focus: 'Umelá inteligencia & hybridný cloud',    color: 'bg-gradient-to-br from-blue-600 to-indigo-700',  type: 'Program A+B' },
        { name: 'SAP',        initials: 'SA', focus: 'ERP & podnikové procesy',                color: 'bg-gradient-to-br from-amber-500 to-orange-600', type: 'Program B' },
        { name: 'Dell',       initials: 'DE', focus: 'Hardvér, servery & dátové centrá',       color: 'bg-gradient-to-br from-cyan-500 to-sky-600',    type: 'Program A' },
        { name: 'Oracle',     initials: 'OR', focus: 'Databázy & cloud infraštruktúra',        color: 'bg-gradient-to-br from-red-500 to-rose-600',    type: 'Program B' },
      ],
      benefits: [
        {
          title: 'Prístup k talentom',
          desc:  'Pracujte so šikovnými študentmi zo slovenských univerzít a objavte budúcich kolegov.',
          icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                   <circle cx="8" cy="6" r="3.5" stroke="currentColor" stroke-width="1.5"/>
                   <path d="M2 18c0-3.3 2.7-5 6-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                   <path d="M14 12v6M11 15h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                 </svg>`,
        },
        {
          title: 'Reálne projekty',
          desc:  'Vaše interné zadania sa premenia na plnohodnotné projekty, ktoré riešia skutočné problémy.',
          icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                   <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
                   <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
                   <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
                   <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
                 </svg>`,
        },
        {
          title: 'Brand medzi mladými',
          desc:  'Prezentujte sa ako atraktívny zamestnávateľ pre nastupujúcu generáciu technologov.',
          icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                   <path d="M10 2l2 5.5L18 8.5l-4 4 1 5.5L10 15l-5 3 1-5.5-4-4 5.5-.5L10 2z"
                     stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                 </svg>`,
        },
        {
          title: 'Merateľné výstupy',
          desc:  'Každý projekt má jasné míľniky a Product Ownera priamo z vašej firmy.',
          icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                   <path d="M3 13h3l2-6 4 10 3-7 2 3h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>`,
        },
      ],
    };
  },
};
</script>