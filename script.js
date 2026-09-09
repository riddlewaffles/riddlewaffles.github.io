const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

// translations
const translations = {
    en: {
        subtitle: "> DEVELOPER // 6 YEARS OF CODING // 1+ YEARS BUILDING PROJECTS",
        skillsTitle: "[ SKILLS ]",
        aboutTitle: "[ ABOUT ]",
        aboutP1: "Programming is where logic meets creativity, creating a space in which functionable code determines the unseen absolute base for human interaction. Each line of code is a chance to turn digital frameworks into efficient and accessible outcomes, or a undependable programs unintentionally aimed towards abyss. By syncing functionality with design, it becomes a connection between layers of systems and the users who depend on them.",
        aboutP2: "Hi, I'm Riddle. I aim for programs that assist users in a comfortable daily basis. My priority is functionality before fashion.",
        projectsTitle: "[ PROJECTS ]",
        rccDesc: "A lightweight tool designed to compute 2D Cartesian coordinates for points positioned evenly along a circle.",
        linearDesc: "2 player game where you have to input mathematical functions to destroy your opponent.",
        scrambleDesc: "Experimental face detection program that hides your face when detected.",
        connectionsTitle: "[ CONNECTIONS ]"
    },
    fi: {
        subtitle: "> KEHITTÄJÄ // 6 VUOTTA KOODAUSTA // 1+ VUOTTA PROJEKTEJA",
        skillsTitle: "[ TAIDOT ]",
        aboutTitle: "[ TIETOA MINUSTA ]",
        aboutP1: "Ohjelmointi on paikka, jossa logiikka kohtaa luovuuden luoden tilan, jossa toimiva koodi määrittää ihmisten välisen vuorovaikutuksen näkymättömän perustan. Jokainen koodirivi on mahdollisuus muuttaa digitaaliset kehykset tehokkaiksi ja saavutettaviksi tuloksiksi. Yhdistämällä toiminnallisuuden ja muotoilun koodista tulee silta järjestelmäkerrosten ja niistä riippuvaisten käyttäjien välillä.",
        aboutP2: "Hei, olen Riddle. Tavoitteenani on luoda ohjelmia, jotka auttavat käyttäjiä heidän arjessaan. Prioriteettini on toiminnallisuus ennen ulkonäköä.",
        projectsTitle: "[ PROJEKTIT ]",
        rccDesc: "Kevyt työkalu 2D-kartesisten koordinaattien laskemiseen ympyrälle tasaisesti sijoitetuille pisteille.",
        linearDesc: "Kaksinpeli, jossa syötät matemaattisia funktioita tuhotaksesi vastustajasi.",
        scrambleDesc: "Kokeellinen kasvontunnistusohjelma, joka piilottaa kasvot, kun ne havaitaan.",
        connectionsTitle: "[ YHTEYDET ]"
    },
    sv: {
        subtitle: "> UTVECKLARE // 6 ÅR AV KODNING // 1+ ÅR AV PROJEKT",
        skillsTitle: "[ FÄRDIGHETER ]",
        aboutTitle: "[ OM MIG ]",
        aboutP1: "Programmering är där logik möter kreativitet och skapar en plats där fungerande kod avgör den osynliga grunden för mänsklig interaktion. Varje kodrad är en chans att förvandla digitala ramverk till effektiva och tillgängliga resultat. Genom att synkronisera funktionalitet med design blir det en koppling mellan systemlager och användarna som är beroende av dem.",
        aboutP2: "Hej, jag är Riddle. Jag strävar efter program som hjälper användare i deras vardag. Min prioritet är funktionalitet före design.",
        projectsTitle: "[ PROJEKT ]",
        rccDesc: "Ett smidigt verktyg för att beräkna 2D Kartesiska koordinater för punkter jämnt placerade längs en cirkel.",
        linearDesc: "Ett tvåspelarspel där du anger matematiska funktioner för att förstöra din motståndare.",
        scrambleDesc: "Ett experimentellt ansiktsdetekteringsprogram som döljer ditt ansikte när det upptäcks.",
        connectionsTitle: "[ KONTAKTER ]"
    },
    de: {
        subtitle: "> ENTWICKLER // 6 JAHRE PROGRAMMIERUNG // 1+ JAHRE PROJEKTE",
        skillsTitle: "[ FÄHIGKEITEN ]",
        aboutTitle: "[ ÜBER MICH ]",
        aboutP1: "Programmierung ist der Ort, an dem Logik auf Kreativität trifft und ein Raum entsteht, in dem funktionaler Code die unsichtbare Basis für menschliche Interaktion bildet. Jede Codezeile ist eine Chance, digitale Frameworks in effiziente Ergebnisse zu verwandeln. Durch die Synchronisation von Funktionalität und Design wird Code zur Verbindung zwischen Systemebenen und den Benutzern.",
        aboutP2: "Hallo, ich bin Riddle. Mein Ziel sind Programme, die Benutzern im Alltag helfen. Meine Priorität ist Funktionalität vor Design.",
        projectsTitle: "[ PROJEKTE ]",
        rccDesc: "Ein leichtes Werkzeug zur Berechnung von 2D-kartesischen Koordinaten für Punkte auf einem Kreis.",
        linearDesc: "Ein 2-Spieler-Spiel, bei dem du mathematische Funktionen eingeben musst, um deinen Gegner zu zerstören.",
        scrambleDesc: "Ein experimentelles Gesichtserkennungsprogramm, das dein Gesicht verbirgt, wenn es erkannt wird.",
        connectionsTitle: "[ VERBINDUNGEN ]"
    },
    fa: {
        subtitle: "> توسعه‌دهنده // ۶ سال کدنویسی // بیش از ۱ سال پروژه‌های ساختمانی",
        skillsTitle: "[ مهارت‌ها ]",
        aboutTitle: "[ درباره ]",
        aboutP1: "برنامه‌نویسی جایی است که منطق با خلاقیت تلاقی می‌کند و فضایی ایجاد می‌کند که در آن کد کاربردی، پایه مطلق و نادیده برای تعامل انسانی را تعیین می‌کند. هر خط کد فرصتی است برای تبدیل چارچوب‌های دیجیتال به نتایج کارآمد و قابل دسترس، یا برنامه‌هایی غیرقابل اعتماد که ناخواسته به سمت ورطه نابودی کشیده شده‌اند. با همگام‌سازی عملکرد با طراحی، به ارتباطی بین لایه‌های سیستم‌ها و کاربرانی که به آنها وابسته هستند، تبدیل می‌شود.",
        aboutP2: "سلام، من ریدل هستم. هدف من برنامه‌هایی است که به کاربران در زندگی روزمره‌شان کمک کند. اولویت من قبل از مد، کارایی است.",
        projectsTitle: "[ پروژه‌ها ]",
        rccDesc: "ابزاری سبک که برای محاسبه مختصات دکارتی دوبعدی برای نقاطی که به طور مساوی در امتداد یک دایره قرار گرفته‌اند، طراحی شده است.",
        linearDesc: "بازی دو نفره که در آن باید با وارد کردن توابع ریاضی، حریف خود را نابود کنید.",
        scrambleDesc: "برنامه تشخیص چهره تجربی که هنگام شناسایی، چهره شما را پنهان می‌کند.",
        connectionsTitle: "[ اتصالات ]"
    },
    ru: {
        subtitle: "> РАЗРАБОТЧИК // 6 ЛЕТ В ПРОГРАММИРОВАНИИ // 1+ ГОД СОЗДАНИЯ ПРОЕКТОВ",
        skillsTitle: "[ НАВЫКИ ]",
        aboutTitle: "[ О СЕБЕ ]",
        aboutP1: "Программирование — это место, где логика встречается с творчеством, создавая пространство, в котором функциональный код определяет невидимую основу для человеческого взаимодействия. Каждая строчка кода — это шанс превратить цифровые структуры в эффективные и доступные решения или в надежные программы, не направленные случайно в бездну. Объединяя функциональность с дизайном, код становится связующим звеном между системными уровнями и пользователями, которые от них зависят.",
        aboutP2: "Привет, я Riddle. Я стремлюсь создавать программы, которые помогают пользователям в повседневной жизни. Мой приоритет — функциональность, а не гонка за трендами.",
        projectsTitle: "[ ПРОЕКТЫ ]",
        rccDesc: "Лёгкий инструмент, предназначенный для вычисления 2D-декартовых координат точек, равномерно расположенных по окружности.",
        linearDesc: "Игра для 2 игроков, в которой нужно вводить математические функции, чтобы уничтожить соперника.",
        scrambleDesc: "Экспериментальная программа распознавания лиц, которая скрывает ваше лицо при обнаружении.",
        connectionsTitle: "[ контакты ]"
    }
};

// decode animation
function decodeAnimation(element, targetText) {
    let iterations = 0;
    element.dataset.value = targetText;
    
    const interval = setInterval(() => {
        element.innerText = targetText
            .split("")
            .map((char, index) => {
                if (char === " " || char === "/" || char === ">" || char === "[" || char === "]") {
                    return char;
                }
                if (index < iterations) {
                    return targetText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

        if (iterations >= targetText.length) {
            clearInterval(interval);
        }

        iterations += 3;
    }, 20);
}

// language update
function setLanguage(lang) {
    const selectedTrans = translations[lang] || translations.en;
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (selectedTrans[key]) {
            decodeAnimation(el, selectedTrans[key]);
        }
    });
}

// initialize
window.addEventListener("DOMContentLoaded", () => {
    const mainTitle = document.querySelector("header h1");
    decodeAnimation(mainTitle, mainTitle.dataset.value);

    setLanguage("en");

    const langSelect = document.getElementById("lang-select");
    langSelect.addEventListener("change", (e) => {
        setLanguage(e.target.value);
    });
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("fade-out");

        setTimeout(() => {
            const mainTitle = document.querySelector("header h1");
            decodeAnimation(mainTitle, mainTitle.dataset.value);
            setLanguage("en");
            animateSkillBars();
        }, 300);
    }, 1200);
});
