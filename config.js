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
