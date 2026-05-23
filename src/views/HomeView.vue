<template>
  <div class="min-h-screen bg-white">
    <section class="min-h-screen flex items-center">
      <div class="max-w-6xl mx-auto px-6 py-20 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1.5 rounded-full mb-6"
            >
              <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Nitriansky technologický inkubátor
            </div>
            <h1
              class="text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight"
            >
              Miesto kde<br />
              <span class="text-blue-500">nápady rastú</span><br />
              do projektov
            </h1>
            <p class="text-lg text-gray-500 mb-10 leading-relaxed">
              Prepájame študentov s reálnymi príležitosťami. Dva programy, jeden
              cieľ — váš úspech.
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <router-link
                to="/register?role=student"
                class="bg-blue-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors text-center"
              >
                Registrácia študenta
              </router-link>
              <router-link
                to="/register?role=company"
                class="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors text-center"
              >
                Registrácia firmy
              </router-link>
            </div>
          </div>

          <div class="hidden lg:grid grid-cols-2 gap-4">
            <div class="bg-blue-50 rounded-2xl p-6">
              <div
                class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2L18 7V13L10 18L2 13V7L10 2Z"
                    stroke="#3b82f6"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="text-sm font-semibold text-gray-900 mb-1">Program A</p>
              <p class="text-xs text-gray-500">Grantový inkubačný program</p>
            </div>
            <div class="bg-purple-50 rounded-2xl p-6 mt-6">
              <div
                class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3 6h14M3 10h14M3 14h8"
                    stroke="#8b5cf6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <p class="text-sm font-semibold text-gray-900 mb-1">Program B</p>
              <p class="text-xs text-gray-500">Živá prax od firiem</p>
            </div>
            <div class="bg-green-50 rounded-2xl p-6">
              <p class="text-3xl font-bold text-green-600 mb-1">2+</p>
              <p class="text-xs text-gray-500">Aktívne programy</p>
            </div>
            <div class="bg-orange-50 rounded-2xl p-6 mt-6">
              <p class="text-3xl font-bold text-orange-500 mb-1">∞</p>
              <p class="text-xs text-gray-500">Príležitostí</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="min-h-screen flex items-center bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 py-20 w-full">
        <SectionHeader
          title="Dva programy, jedna platforma"
          subtitle="Vyber si cestu ktorá ti vyhovuje najlepšie"
          :centered="true"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="bg-white rounded-3xl p-10 border border-gray-100 flex flex-col"
          >
            <div
              class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L22 8V16L12 22L2 16V8L12 2Z"
                  stroke="#3b82f6"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span
              class="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full w-fit mb-2"
              >Program A</span
            >
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Grantový inkubačný program
            </h3>
            <p class="text-gray-500 mb-6 leading-relaxed">
              Pre tých, ktorí majú vlastný inovatívny nápad. Získaj
              financovanie, mentoring a podporu pre rozvoj svojho startupu alebo
              produktu.
            </p>
            <ul class="space-y-3 mb-8 flex-1">
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <span
                  class="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="#3b82f6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Finančná podpora a grant
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <span
                  class="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="#3b82f6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Mentoring od odborníkov
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <span
                  class="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="#3b82f6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Tímová spolupráca
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <span
                  class="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="#3b82f6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Cieľ: startup alebo produkt
              </li>
            </ul>
            <router-link
              to="/programs"
              class="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors text-center"
            >
              Zistiť viac o programe A
            </router-link>
          </div>

          <div
            class="bg-white rounded-3xl p-10 border border-gray-100 flex flex-col"
          >
            <div
              class="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 7h18M3 12h18M3 17h10"
                  stroke="#8b5cf6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <span
              class="text-xs font-medium bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full w-fit mb-2"
              >Program B</span
            >
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Živá prax od firiem
            </h3>
            <p class="text-gray-500 mb-6 leading-relaxed">
              Pre tých, ktorí chcú reálnu prax. Pracuj na skutočných zadaniach
              od firiem, získaj skúsenosti a odmenu za svoju prácu.
            </p>
            <ul class="space-y-3 mb-8 flex-1">
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <span
                  class="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="#8b5cf6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Reálne zadania od firiem
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <span
                  class="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="#8b5cf6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Finančná odmena
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <span
                  class="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="#8b5cf6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Product Owner z firmy
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <span
                  class="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="#8b5cf6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Cieľ: zákazkový softvér
              </li>
            </ul>
            <router-link
              to="/programs"
              class="bg-purple-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-purple-600 transition-colors text-center"
            >
              Zistiť viac o programe B
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-20">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Aktívne výzvy"
          subtitle="Otvorené kolá na ktoré sa môžeš prihlásiť"
          badge="Výzvy"
          :centered="true"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <CallCard
            title="Inkubačný program 2026"
            description="Podaj prihlášku so svojím inovatívnym nápadom"
            type="A"
            deadline="Deadline: 30. 6. 2026"
          />
          <CallCard
            title="Živá prax — leto 2026"
            description="Reálne zadania od partnerských firiem"
            type="B"
            deadline="Deadline: 15. 6. 2026"
          />
          <CallCard
            title="Inkubačný program 2026"
            description="Druhé kolo grantového programu"
            type="A"
            deadline="Deadline: 31. 7. 2026"
          />
        </div>
        <div class="text-center">
          <router-link
            to="/programs"
            class="text-sm text-blue-500 font-medium hover:text-blue-600 transition-colors"
            >Zobraziť všetky výzvy →</router-link
          >
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Naši partneri"
          subtitle="Firmy ktoré spolupracujú s NTI"
          badge="Partneri"
          :centered="true"
        />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <PartnerCard name="Accenture" />
          <PartnerCard name="T-Systems" />
          <PartnerCard name="Atos" />
          <PartnerCard name="Datalan" />
        </div>
        <div class="text-center">
          <router-link
            to="/partners"
            class="text-sm text-blue-500 font-medium hover:text-blue-600 transition-colors"
            >Zobraziť všetkých partnerov →</router-link
          >
        </div>
      </div>
    </section>

    <section class="bg-white py-20">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Aktuality"
          subtitle="Novinky z NTI inkubátora"
          badge="Novinky"
          :centered="true"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <NewsCard
            title="NTI otvára nové kolo inkubačného programu"
            excerpt="Od júna 2026 prijímame prihlášky do programu A. Tento rok podporíme až 10 projektov."
            date="22. 5. 2026"
          />
          <NewsCard
            title="Partnerstvo s Accenture Slovakia"
            excerpt="NTI podpísalo memorandum o spolupráci s Accenture Slovakia pre program živej praxe."
            date="15. 5. 2026"
          />
          <NewsCard
            title="Úspešné projekty z minulého roka"
            excerpt="Tri projekty z programu A získali seed investíciu a pokračujú ako samostatné startupy."
            date="1. 5. 2026"
          />
        </div>
        <div class="text-center">
          <router-link
            to="/news"
            class="text-sm text-blue-500 font-medium hover:text-blue-600 transition-colors"
            >Zobraziť všetky aktuality →</router-link
          >
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
};
</script>
