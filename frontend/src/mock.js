export const mockPlans = [
  {
    id: 1,
    name: "Free",
    price: 0,
    originalPrice: 0,
    cpu: "2 vCPU Intel Xeon",
    ram: "6 GB DDR4",
    disk: "5 GB SSD",
    databases: "1 БД",
    region: "Германия",
    features: [
      "Мгновенная настройка",
      "Защита от DDoS 2 Тбит/с",
      "24/7 техподдержка",
      "Панель управления"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Axolotl",
    price: 99,
    originalPrice: 199,
    cpu: "2.5 vCPU Ryzen 9 5950X",
    ram: "6 GB DDR5",
    disk: "25 GB NVMe SSD",
    databases: "5 БД",
    region: "Германия",
    features: [
      "Мгновенная настройка",
      "Защита от DDoS 2 Тбит/с",
      "24/7 техподдержка",
      "Панель управления",
      "Возможность бэкапов",
      "Установка плагинов"
    ],
    popular: false
  },
  {
    id: 3,
    name: "Dolphin",
    price: 149,
    originalPrice: 299,
    cpu: "3 vCPU Ryzen 9 5950X",
    ram: "8 GB DDR5",
    disk: "35 GB NVMe SSD",
    databases: "5 БД",
    region: "Германия",
    features: [
      "Мгновенная настройка",
      "Защита от DDoS 2 Тбит/с",
      "24/7 техподдержка",
      "Панель управления",
      "Возможность бэкапов",
      "Установка плагинов",
      "Приоритетная поддержка"
    ],
    popular: false
  },
  {
    id: 4,
    name: "Drowned",
    price: 249,
    originalPrice: 499,
    cpu: "4 vCPU Ryzen 9 5950X",
    ram: "8 GB DDR5",
    disk: "50 GB NVMe SSD",
    databases: "5 БД",
    region: "Германия",
    features: [
      "Мгновенная настройка",
      "Защита от DDoS 2 Тбит/с",
      "24/7 техподдержка",
      "Панель управления",
      "Возможность бэкапов",
      "Установка плагинов",
      "Приоритетная поддержка",
      "Мониторинг производительности"
    ],
    popular: false
  },
  {
    id: 5,
    name: "Hoglin",
    price: 349,
    originalPrice: 699,
    cpu: "4 vCPU Ryzen 9 5950X",
    ram: "12 GB DDR5",
    disk: "65 GB NVMe SSD",
    databases: "5 БД",
    region: "Германия",
    features: [
      "Мгновенная настройка",
      "Защита от DDoS 2 Тбит/с",
      "24/7 техподдержка",
      "Панель управления",
      "Возможность бэкапов",
      "Установка плагинов",
      "Приоритетная поддержка",
      "Мониторинг производительности"
    ],
    popular: true
  },
  {
    id: 6,
    name: "Ravager",
    price: 469,
    originalPrice: 939,
    cpu: "5 vCPU Ryzen 9 5950X",
    ram: "12 GB DDR5",
    disk: "75 GB NVMe SSD",
    databases: "5 БД",
    region: "Германия",
    features: [
      "Мгновенная настройка",
      "Защита от DDoS 2 Тбит/с",
      "24/7 техподдержка",
      "Панель управления",
      "Возможность бэкапов",
      "Установка плагинов",
      "Приоритетная поддержка",
      "Мониторинг производительности",
      "Выделенные ресурсы"
    ],
    popular: false
  },
  {
    id: 7,
    name: "Golem",
    price: 669,
    originalPrice: 1339,
    cpu: "6 vCPU Ryzen 9 5950X",
    ram: "16 GB DDR5",
    disk: "90 GB NVMe SSD",
    databases: "5 БД",
    region: "Германия",
    features: [
      "Мгновенная настройка",
      "Защита от DDoS 2 Тбит/с",
      "24/7 техподдержка",
      "Панель управления",
      "Возможность бэкапов",
      "Установка плагинов",
      "Приоритетная поддержка",
      "Мониторинг производительности",
      "Выделенные ресурсы"
    ],
    popular: false
  },
  {
    id: 8,
    name: "Warden",
    price: 999,
    originalPrice: 1999,
    cpu: "7 vCPU Ryzen 9 5950X",
    ram: "24 GB DDR5",
    disk: "120 GB NVMe SSD",
    databases: "5 БД",
    region: "Германия",
    features: [
      "Мгновенная настройка",
      "Защита от DDoS 2 Тбит/с",
      "24/7 техподдержка",
      "Панель управления",
      "Возможность бэкапов",
      "Установка плагинов",
      "Приоритетная поддержка",
      "Мониторинг производительности",
      "Выделенные ресурсы",
      "Кастомные конфигурации"
    ],
    popular: false
  },
  {
    id: 9,
    name: "Wither",
    price: 1399,
    originalPrice: 2799,
    cpu: "8 vCPU Ryzen 9 5950X",
    ram: "32 GB DDR5",
    disk: "150 GB NVMe SSD",
    databases: "5 БД",
    region: "Германия",
    features: [
      "Мгновенная настройка",
      "Защита от DDoS 2 Тбит/с",
      "24/7 техподдержка",
      "Панель управления",
      "Возможность бэкапов",
      "Установка плагинов",
      "Приоритетная поддержка",
      "Мониторинг производительности",
      "Выделенные ресурсы",
      "Кастомные конфигурации"
    ],
    popular: false
  }
];

export const mockRegions = [
  { id: 1, name: "Германия", flag: "🇩🇪", available: true },
  { id: 2, name: "Россия", flag: "🇷🇺", available: false }
];

export const mockFeatures = [
  {
    id: 1,
    title: "Мгновенная настройка",
    description: "Ваш сервер будет готов к игре через 30 секунд после оплаты",
    icon: "⚡"
  },
  {
    id: 2,
    title: "Защита от DDoS",
    description: "Надежная защита от атак до 2 Тбит/с",
    icon: "🛡️"
  },
  {
    id: 3,
    title: "Панель управления",
    description: "Интуитивная панель для управления сервером",
    icon: "⚙️"
  },
  {
    id: 4,
    title: "Возможность бэкапов",
    description: "Создание резервных копий по требованию",
    icon: "💾"
  },
  {
    id: 5,
    title: "24/7 Поддержка",
    description: "Круглосуточная техническая поддержка",
    icon: "🎧"
  },
  {
    id: 6,
    title: "Моды и плагины",
    description: "Поддержка Forge, Fabric, Bukkit, Spigot",
    icon: "🔧"
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Алексей М.",
    avatar: "👨‍💻",
    text: "Отличный хостинг! Сервер работает стабильно, поддержка отвечает быстро. Рекомендую!",
    rating: 5
  },
  {
    id: 2,
    name: "Мария К.",
    avatar: "👩‍🎮",
    text: "Использую уже полгода для своего сервера выживания. Все работает отлично!",
    rating: 5
  },
  {
    id: 3,
    name: "Дмитрий В.",
    avatar: "🎮",
    text: "Панель управления очень удобная, все настройки понятны даже новичку.",
    rating: 4
  }
];

export const mockFAQ = [
  {
    id: 1,
    question: "Как быстро активируется сервер?",
    answer: "Сервер активируется автоматически в течение 30 секунд после подтверждения оплаты."
  },
  {
    id: 2,
    question: "Какие версии Minecraft поддерживаются?",
    answer: "Мы поддерживаем все версии Minecraft начиная с 1.7.10 и до последней версии."
  },
  {
    id: 3,
    question: "Можно ли установить моды и плагины?",
    answer: "Да, мы поддерживаем Forge, Fabric, Bukkit, Spigot и другие модификации."
  },
  {
    id: 4,
    question: "Есть ли защита от DDoS?",
    answer: "Да, все серверы защищены от DDoS-атак до 2 Тбит/с."
  },
  {
    id: 5,
    question: "Как часто создаются бэкапы?",
    answer: "Вы можете создать резервную копию вручную в любое время через панель управления."
  }
];
