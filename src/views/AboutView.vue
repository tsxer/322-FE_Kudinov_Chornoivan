<template>
  <div class="bg-white dark:bg-slate-900">

    <section class="relative overflow-hidden
                    bg-slate-50 dark:bg-gradient-to-b dark:from-[#0c1120] dark:via-[#0d1f42] dark:to-[#0c1120]
                    py-24 text-center border-b border-slate-100 dark:border-none transition-colors duration-250">
      <div class="absolute inset-0 pointer-events-none hidden dark:block
                  bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.18),transparent)]">
      </div>

      <div class="relative max-w-5xl mx-auto px-6">
        <span class="inline-block mb-4 text-blue-600 dark:text-blue-400 text-xs font-semibold
                     tracking-widest uppercase">
          O inkubátore
        </span>
        <h1 class="text-4xl md:text-[3.25rem] font-extrabold leading-tight
                   text-slate-900 dark:text-white mb-5">
          Budujeme most medzi<br />
          <span class="text-blue-500 dark:text-blue-400">vzdelaním a praxou</span>
        </h1>
        <p class="text-slate-600 dark:text-white/55 text-[1.0625rem] leading-relaxed max-w-2xl mx-auto mb-12">
          Nitriansky technologický inkubátor prepája talentovaných študentov
          s inovatívnymi firmami. Spoločne tvoríme produkty, riešime reálne
          problémy a rozvíjame technologický ekosystém regiónu.
        </p>

        <div class="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <div v-for="s in heroStats" :key="s.label" class="text-center">
            <p class="text-slate-900 dark:text-white text-[2rem] font-extrabold leading-none">{{ s.value }}</p>
            <p class="text-slate-500 dark:text-white/40 text-xs mt-1.5">{{ s.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white dark:bg-slate-900">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-14">
          <span class="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold
                       bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
            Naša misia
          </span>
          <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
            Čo nás poháňa
          </h2>
          <p class="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-lg mx-auto">
            Veríme, že najlepšie učenie prebieha na skutočných projektoch —
            nie na cvičných úlohách.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-5">
          <div v-for="v in values" :key="v.title"
               class="bg-slate-50 dark:bg-slate-800 rounded-2xl
                      border border-slate-100 dark:border-slate-700/50
                      p-8 transition-all duration-200
                      hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-slate-900/50">
            <div :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-5', v.iconBg]">
              <span v-html="v.icon" class="text-white"></span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
              {{ v.title }}
            </h3>
            <p class="text-slate-500 dark:text-slate-400 text-[0.9375rem] leading-relaxed">
              {{ v.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50 dark:bg-slate-800/40">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-14">
          <span class="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold
                       bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            Proces
          </span>
          <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
            Ako to funguje
          </h2>
          <p class="text-slate-500 dark:text-slate-400 text-base max-w-md mx-auto">
            Od registrácie po úspešný projekt v troch krokoch
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-5">
          <div v-for="step in steps" :key="step.num"
               class="bg-white dark:bg-slate-800 rounded-2xl
                      border border-slate-100 dark:border-slate-700/50 p-8">
            <p class="text-[2.5rem] font-extrabold text-slate-100 dark:text-slate-700 leading-none mb-4">
              {{ step.num }}
            </p>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
              {{ step.title }}
            </h3>
            <p class="text-slate-500 dark:text-slate-400 text-[0.9375rem] leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 dark:bg-gradient-to-b dark:from-[#0c1120] dark:via-[#0d1f42] dark:to-[#0c1120] py-16 transition-colors duration-250">
      <div class="max-w-5xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 dark:divide-white/8
                    border border-slate-200 dark:border-white/8 rounded-2xl overflow-hidden bg-white dark:bg-transparent">
          <div v-for="n in numbers" :key="n.label"
               class="px-6 py-8 text-center">
            <p class="text-slate-900 dark:text-white text-[1.75rem] font-extrabold leading-none mb-2.5">
              {{ n.value }}
            </p>
            <p class="text-slate-500 dark:text-white/40 text-sm leading-snug">{{ n.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 text-center bg-white dark:bg-slate-900">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-extrabold
                   text-slate-900 dark:text-white mb-4">
          Pripravený začať?
        </h2>
        <p class="text-slate-500 dark:text-slate-400 text-base mb-8">
          Otvor si dvere k reálnym projektom, mentoringu a novým možnostiam.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <router-link
            to="/register?role=student"
            class="px-7 py-3 rounded-full text-sm font-semibold no-underline
                   bg-blue-600 hover:bg-blue-700 text-white
                   transition-all duration-200 hover:-translate-y-px
                   hover:shadow-lg hover:shadow-blue-600/25"
          >
            Registrácia študenta
          </router-link>
          <router-link
            to="/register?role=company"
            class="px-7 py-3 rounded-full text-sm font-semibold no-underline
                   bg-slate-900 dark:bg-white hover:bg-slate-700 dark:hover:bg-slate-100
                   text-white dark:text-slate-900
                   transition-all duration-200 hover:-translate-y-px"
          >
            Registrácia firmy
          </router-link>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue';

export default {
  name: 'AboutView',
  components: { AppFooter },
  data() {
    return {
      heroStats: [
        { value: '2026', label: 'Rok vzniku' },
        { value: '2+',   label: 'Programy'  },
        { value: '50+',  label: 'Projekty'  },
        { value: '10+',  label: 'Partnerské firmy' },
      ],
      values: [
        {
          title: 'Inovácia',
          desc: 'Podporujeme odvážne myšlienky, ktoré menia zavedené postupy. Každý nápad dostane šancu.',
          iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
          icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                   <path d="M11 2L20.5 7.5v7L11 20L1.5 14.5v-7L11 2Z"
                     stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                 </svg>`,
        },
        {
          title: 'Spolupráca',
          desc: 'Najlepšie výsledky vznikajú vtedy, keď rôzne perspektívy pracujú na jednom cieli.',
          iconBg: 'bg-gradient-to-br from-violet-500 to-violet-600',
          icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                   <circle cx="7" cy="8" r="3.5" stroke="white" stroke-width="1.5"/>
                   <circle cx="15" cy="8" r="3.5" stroke="white" stroke-width="1.5"/>
                   <path d="M1 19c0-3 2.7-5 6-5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                   <path d="M21 19c0-3-2.7-5-6-5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                   <path d="M8 19c0-3 1.3-4 3-4s3 1 3 4" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                 </svg>`,
        },
        {
          title: 'Rast',
          desc: 'Každý projekt, každá chyba, každý úspech je príležitosť stať sa lepším profesionálom.',
          iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600',
          icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                   <path d="M3 18L8 12l4 3 4-5 4 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>`,
        },
      ],
      steps: [
        {
          num: '01',
          title: 'Zaregistruj sa',
          desc: 'Vytvor si účet ako študent alebo firma. Vyber program, ktorý ti vyhovuje.',
        },
        {
          num: '02',
          title: 'Podaj prihlášku',
          desc: 'Pošli svoju prihlášku do aktívneho kola. Tím ti dá spätnú väzbu do 14 dní.',
        },
        {
          num: '03',
          title: 'Pracuj a rastieš',
          desc: 'Získaj mentoring, funding alebo reálne zadanie. Buduj produkt, získavaj skúsenosti.',
        },
      ],
      numbers: [
        { value: '14 dní',   label: 'Priemerná doba na rozhodnutie' },
        { value: '3 mes.',   label: 'Dĺžka inkubačného cyklu'       },
        { value: '100 %',    label: 'Projektov s reálnym výstupom'  },
        { value: 'Zadarmo',  label: 'Pre študentov'                 },
      ],
    };
  },
};
</script>