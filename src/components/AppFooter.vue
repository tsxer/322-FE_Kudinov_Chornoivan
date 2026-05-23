<template>
  <footer class="bg-white border-t border-gray-100">
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="4" fill="#1a56db" opacity="0.7" />
              <circle cx="18" cy="7" r="3" fill="#1a56db" />
              <circle cx="28" cy="13" r="3" fill="#1a56db" />
              <circle cx="28" cy="25" r="2.5" fill="#1a56db" opacity="0.6" />
              <circle cx="8" cy="13" r="2.5" fill="#1a56db" opacity="0.6" />
              <circle cx="10" cy="26" r="2" fill="#1a56db" opacity="0.4" />
              <line
                x1="18"
                y1="10"
                x2="18"
                y2="14"
                stroke="#1a56db"
                stroke-width="1.5"
              />
              <line
                x1="25"
                y1="15"
                x2="22"
                y2="17"
                stroke="#1a56db"
                stroke-width="1.5"
              />
              <line
                x1="25"
                y1="23"
                x2="22"
                y2="20"
                stroke="#1a56db"
                stroke-width="1.5"
              />
              <line
                x1="11"
                y1="15"
                x2="14"
                y2="17"
                stroke="#1a56db"
                stroke-width="1.5"
              />
              <line
                x1="12"
                y1="24"
                x2="15"
                y2="20"
                stroke="#1a56db"
                stroke-width="1.5"
              />
            </svg>
            <span class="text-base font-bold text-gray-900">NTI</span>
          </div>
          <p class="text-sm text-gray-500 leading-relaxed">
            Nitriansky technologický inkubátor — miesto kde nápady rastú do
            reálnych projektov.
          </p>
        </div>

        <div>
          <p class="text-sm font-semibold text-gray-900 mb-4">Navigácia</p>
          <ul class="space-y-2.5">
            <li>
              <router-link
                to="/"
                class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >Domov</router-link
              >
            </li>
            <li>
              <router-link
                to="/programs"
                class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >Programy</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >O nás</router-link
              >
            </li>
            <li>
              <router-link
                to="/partners"
                class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >Partneri</router-link
              >
            </li>
            <li>
              <router-link
                to="/news"
                class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >Aktuality</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <p class="text-sm font-semibold text-gray-900 mb-4">Účet</p>
          <ul class="space-y-2.5">
            <li>
              <router-link
                to="/login"
                class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >Prihlásiť sa</router-link
              >
            </li>
            <li>
              <router-link
                to="/register?role=student"
                class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >Som študent</router-link
              >
            </li>
            <li>
              <router-link
                to="/register?role=company"
                class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >Som firma</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <p class="text-sm font-semibold text-gray-900 mb-4">Kontakt</p>
          <ul class="space-y-2.5">
            <li
              class="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 3.5L7 8L13 3.5M1 3.5H13V11H1V3.5Z"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="mailto:nti@ukf.sk">nti@ukf.sk</a>
            </li>
            <li
              class="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 2.5C2 2.5 3 1 4.5 1C6 1 7 3.5 7 3.5S6 5 5.5 5.5C6.5 7.5 8.5 9.5 10.5 10.5C11 10 12.5 9 12.5 9S13 10 13 11.5C13 13 11.5 13 11.5 13C6 13 1 8 1 2.5C1 2.5 2 2.5 2 2.5Z"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="tel:+421376408555">037 640 8555</a>
            </li>
            <li
              class="flex items-start gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                class="mt-0.5 flex-shrink-0"
              >
                <path
                  d="M7 1C4.24 1 2 3.24 2 6C2 9.5 7 13 7 13C7 13 12 9.5 12 6C12 3.24 9.76 1 7 1ZM7 7.5C6.17 7.5 5.5 6.83 5.5 6C5.5 5.17 6.17 4.5 7 4.5C7.83 4.5 8.5 5.17 8.5 6C8.5 6.83 7.83 7.5 7 7.5Z"
                  stroke="currentColor"
                  stroke-width="1.2"
                />
              </svg>
              <a
                href="https://maps.app.goo.gl/pJZ5KYJ52BJyESVk6"
                target="_blank"
                class="leading-relaxed"
              >
                Trieda Andreja Hlinku 603/1,<br />949 74 Nitra-Chrenová
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-2"
      >
        <p class="text-xs text-gray-400">
          © 2026 Nitriansky technologický inkubátor
        </p>
        <p class="text-xs text-gray-400">Všetky práva vyhradené</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
