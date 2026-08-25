// ================= НАСТРОЙКА РАБОТ =================
// Каждый элемент: 
//   - title: { en: "Название на англ", ru: "Название на рус" }
//   - description: { en: "Описание на англ", ru: "Описание на рус" }
//   - tags: ["Тег1", "Тег2", ...] (теги одинаковы для обоих языков)
//   - media: { type: "youtube" | "local" | "none", src: "ссылка или путь" }
//     * для youtube: src = ID видео или полная ссылка (например "https://youtu.be/abc123")
//     * для local: src = путь к файлу (например "videos/myanim.mp4")
//     * для none: просто не указывайте media или поставьте { type: "none" }

const worksData = [
    {
        title: { en: "Scalable Gameplay Ability System", ru: "Масштабируемая система способностей" },
        description: {
            en: "A simple, scalable ability system based on OOP",
            ru: "Простоая масштабируемая система способностей, освоенная на ООП"
        },
        tags: ["OOP", "Janitor", "Signal"],
        media: { type: "youtube", src: "https://youtu.be/tf3yrTMoGKk" }
    },
    // {
    //     title: { en: "Forest Survival", ru: "Forest Survival" },
    //     description: {
    //         en: "Multiplayer survival with inventory, crafting, and leveling. Built with KnitFramework.",
    //         ru: "Мультиплеерное выживание с инвентарём, крафтом и прокачкой. На базе KnitFramework."
    //     },
    //     tags: ["Knit", "Janitor", "Signal"],
    //     media: { type: "youtube", src: "https://www.youtube.com/watch?v=ВАШ_ID_ВИДЕО" }
    // },
    // {
    //     title: { en: "Dungeon Crawler", ru: "Dungeon Crawler" },
    //     description: {
    //         en: "Procedural dungeon generation, combat system, and bosses. OOP architecture.",
    //         ru: "Процедурная генерация подземелий, боевая система и боссы. ООП-архитектура."
    //     },
    //     tags: ["OOP", "Roblox Studio", "Luau"],
    //     media: { type: "local", src: "videos/dungeon.mp4" }
    // },
    // {
    //     title: { en: "Economy System", ru: "Economy System" },
    //     description: {
    //         en: "Currency, shops, saves, and admin panel. DataStore and UI integration.",
    //         ru: "Валюта, магазины, сохранения и админ-панель. Интеграция DataStore и UI."
    //     },
    //     tags: ["Knit", "DataStore", "UI"],
    //     media: { type: "none" } // или просто удалите media
    // }
];

const skillsData = [
    {
        icon: "fa-cube",
        title: { en: "Roblox Studio", ru: "Roblox Studio" },
        description: {
            en: "Confident work with scripting, UI, animations, and optimization.",
            ru: "Уверенная работа со скриптингом, UI, анимациями и оптимизацией."
        }
    },
    {
        icon: "fa-layer-group",
        title: { en: "OOP", ru: "ООП" },
        description: {
            en: "Classes, inheritance, composition, clean modular code.",
            ru: "Классы, наследование, композиция, чистый модульный код."
        }
    },
    {
        icon: "fa-broom",
        title: { en: "Janitor", ru: "Janitor" },
        description: {
            en: "Resource management and cleanup without leaks.",
            ru: "Управление ресурсами и очистка без утечек памяти."
        }
    },
    {
        icon: "fa-bolt",
        title: { en: "Signal (GoodSignal)", ru: "Signal (GoodSignal)" },
        description: {
            en: "Event-driven architecture, reactive systems, clean ",
            ru: "Событийная архитектура, реактивные системы, чистые зависимости."
        }
    },
    {
        icon: "fa-lightbulb",
        title: { en: "Luau", ru: "Luau" },
        description: {
            en: "Modern syntax, typing, performance optimization.",
            ru: "Современный синтаксис, типизация, оптимизация производительности."
        }
    }
];

const pricingData = [
    {
        title: { 
            en: "Small Tasks", 
            ru: "Небольшие задачи" 
        },
        description: { 
            en: "Bug fixes and simple mechanics (double jump, custom sprint, loading screen).", 
            ru: "Исправление багов и простые механики (двойной прыжок, кастомный спринт, загрузочный экран)." 
        },
        price: "1 500 – 2 500 R$ / $10 – $20 / 800 – 1 500 ₽"
    },
    {
        title: { 
            en: "Medium Tasks", 
            ru: "Средние задачи" 
        },
        description: { 
            en: "Autonomous modules and systems (Ability System, Stamina Manager, Zone Service).", 
            ru: "Готовые автономные модули и системы (Ability System, Stamina Manager, Zone Service)." 
        },
        price: "3 000 – 6 500 R$ / $25 – $50 / 2 500 – 5 000 ₽"
    },
    {
        title: { 
            en: "Complex Systems", 
            ru: "Сложные задачи" 
        },
        description: { 
            en: "Full architectural frameworks (Inventory System, Combat Framework, DataStores/ProfileService).", 
            ru: "Полноценные архитектурные системы (Inventory System, Combat Framework, датасторы ProfileService)." 
        },
        price: "8 000+ R$ / $65+ / 6 000+ ₽"
    }
];

const processData = [
    {
        title: { en: "Discussion & Terms", ru: "Обсуждение ТЗ" },
        description: { 
            en: "We discuss your project requirements, technical specs, and fix the price.", 
            ru: "Обсуждаем задачи, формируем ТЗ и фиксируем итоговую стоимость." 
        }
    },
    {
        title: { en: "Development & Demo", ru: "Разработка и Демонстрация" },
        description: { 
            en: "I write clean code and show you the working system via video or a test place.", 
            ru: "Пишу чистый код и демонстрирую готовую работу на видео или в тестовом плейсе." 
        }
    },
    {
        title: { en: "Payment & Delivery", ru: "Оплата и Передача" },
        description: { 
            en: "After your approval, payment is made, and I send all source files with support.", 
            ru: "После вашей проверки происходит оплата, и я передаю исходники." 
        }
    }
];

const modalData = {
    terms: {
        title: {
            en: "Terms of Service",
            ru: "Условия использования"
        },
        sections: [
            {
                heading: { en: "1. Acceptance of Terms", ru: "1. Принятие условий" },
                text: {
                    en: "By placing an order, you agree to these terms. Work is strictly based on the agreed Technical Specification (TZ).",
                    ru: "Оформляя заказ, вы соглашаетесь с данными условиями. Работа ведется строго по согласованному ТЗ."
                }
            },
            {
                heading: { en: "2. Bug Warranty", ru: "2. Гарантия и исправление багов" },
                text: {
                    en: "All bugs or code issues on my side will be fixed completely free of charge after delivery.",
                    ru: "Все ошибки и недоработки с моей стороны исправляются абсолютно бесплатно после сдачи."
                }
            },
            {
                heading: { en: "3. Revisions & Changes", ru: "3. Правки и доработки" },
                text: {
                    en: "Minor tweaks to existing mechanics are included. Significant changes to the initial spec after work has started may cost extra.",
                    ru: "Мелкие правки в рамках ТЗ бесплатны. Существенные изменения логики в процессе работы оплачиваются отдельно."
                }
            },
            {
                heading: { en: "4. Ownership & Portfolio", ru: "4. Права и портфолио" },
                text: {
                    en: "Upon full payment, you gain 100% ownership of the code. I reserve the right to showcase a video demo in my portfolio unless an NDA is requested.",
                    ru: "После полной оплаты вы получаете полные права на код. Я оставляю за собой право использовать видео демонстрации в портфолио."
                }
            }
        ]
    },
    payment: {
        title: {
            en: "Payment Information",
            ru: "Информация об оплате"
        },
        sections: [
            {
                heading: { en: "- Accepted Methods", ru: "- Способы оплаты" },
                text: {
                    en: "I accept Cards / SBP (RUB), Robux (Group Funds or Gamepass), and Crypto / PayPal (USD).",
                    ru: "Принимаю оплату на Карту / СБП (₽), Robux (Group Funds или Gamepass) и Криптовалюту / PayPal ($)."
                }
            },
            {
                heading: { en: "- Roblox Tax Policy", ru: "- Комиссия Robux (+30%)" },
                text: {
                    en: "If paying via Gamepass or T-Shirt, the buyer covers the 30% Roblox marketplace commission so the agreed amount is received in full.",
                    ru: "При оплате через Gamepass или T-Shirt покупатель покрывает комиссию Roblox (+30%), чтобы пришла чистая сумма."
                }
            },
            {
                heading: { en: "- Work Safety & Transfer", ru: "- Порядок передачи" },
                text: {
                    en: "No upfront payment is required for small/medium tasks. Payment is made AFTER you test the system on video or in a test place.",
                    ru: "Для мелких и средних задач предоплата не требуется. Оплата происходит ПОСЛЕ проверки системы на видео или тестовом плейсе."
                }
            }
        ]
    }
};
