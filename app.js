"use strict";
/* HTML & CSS · Урок 4 · Подключение CSS: цвет, фон, шрифт
   Слайды описаны данными ниже. Типы: cover, quiz, theory, beforeafter, tabs, anatomy, live, color, devtools,
   bugs, practice, glossary, summary, end. */

// ───────── Страница-пример для всех предпросмотров
const PAGE = '<h1>Кофейня «Утро»</h1>\n<p>Свежий кофе с 8:00. Мы в <a href="https://instagram.com">Instagram</a> — пишите!</p>\n<h2>Меню</h2>\n<ul>\n  <li>Капучино — 180 сом</li>\n  <li>Латте — 200 сом</li>\n  <li>Круассан — 120 сом</li>\n</ul>\n<img src="assets/coffee.svg" alt="Чашка кофе">';

const FINAL_CSS = '/* фон и текст всей страницы */\nbody {\n  background-color: #fdf6ec;\n  color: #3b2f2f;\n  font-family: Arial, sans-serif;\n  line-height: 1.6;\n}\n\n/* заголовки */\nh1, h2 {\n  font-family: Georgia, serif;\n  color: #6f4e37;\n}\n\nh1 {\n  font-size: 44px;\n  text-align: center;\n}\n\n/* пункты меню */\nli {\n  color: #b5651d;\n  font-size: 18px;\n}\n\n/* ссылки */\na {\n  color: #b5651d;\n  font-weight: bold;\n  text-decoration: none;\n}';

// ───────── Пошаговые живые демо: каждое правило включается по очереди
const LIVE = {
  color: {
    base: '',
    start: 'Страница без CSS: белый фон, чёрный текст, шрифт браузера. Жмите «Следующий шаг».',
    rules: [
      ['body {\n  background-color: #fdf6ec;\n}', '`body` — вся страница. `background-color` сделал фон кремовым.', 'background-color — цвет фона'],
      ['p {\n  color: #6b5b53;\n}', '`p` — ВСЕ абзацы сразу. Селектор по тегу выбирает каждый такой тег на странице.', 'type selector — селектор типа'],
      ['h1, h2 {\n  color: #6f4e37;\n}', 'Через запятую — одно правило сразу для `h1` и `h2`. Не нужно писать два раза.', 'selector list — группировка селекторов'],
      ['li {\n  color: #b5651d;\n}', '`li` — пункты списка. Маркеры-точки перекрасились вместе с текстом.', 'color — цвет текста (foreground)'],
      ['a {\n  color: #b5651d;\n  background-color: #ffe2b8;\n}', 'Фон можно дать любому тегу, не только странице: у ссылки появилась «подсветка».', 'background — фон элемента'],
    ],
  },
  font: {
    base: 'body{background-color:#fdf6ec}p{color:#6b5b53}h1,h2{color:#6f4e37}li{color:#b5651d}a{color:#b5651d}',
    start: 'Цвета с прошлого демо уже подключены. Теперь меняем только шрифт.',
    rules: [
      ['body {\n  font-family: Arial, sans-serif;\n}', 'Шрифт для `body` — сменился шрифт ВСЕЙ страницы, даже у заголовков. `sans-serif` — запасной шрифт без засечек.', 'font stack + fallback — список шрифтов с запасным'],
      ['h1 {\n  font-family: Georgia, serif;\n  font-size: 44px;\n  text-align: center;\n}', 'У `h1` свой шрифт с засечками (`serif`), размер `44px` и выравнивание по центру.', 'serif / sans-serif — с засечками / без засечек'],
      ['h2 {\n  font-weight: normal;\n}', 'Заголовки жирные по умолчанию. `normal` убирает жирность, `bold` — добавляет.', 'font-weight — насыщенность (вес) шрифта'],
      ['p {\n  font-size: 18px;\n  line-height: 1.6;\n}', '`line-height: 1.6` — строка в 1.6 раза выше шрифта: текст «дышит».', 'line-height — межстрочный интервал (интерлиньяж)'],
      ['li {\n  font-style: italic;\n}', '`font-style: italic` — курсив.', 'font-style — начертание шрифта'],
      ['a {\n  font-weight: bold;\n  text-decoration: none;\n}', '`text-decoration: none` убирает подчёркивание у ссылки.', 'text-decoration — линия текста (подчёркивание)'],
    ],
  },
  inherit: {
    base: '',
    start: 'Чистая страница. Пишем стили только для одного тега — body.',
    rules: [
      ['body {\n  color: #6f4e37;\n  font-family: Georgia, serif;\n}', 'Писали только для `body`, а поменялось ВСЁ внутри: `h1`, `p`, `li`. Дочерние элементы наследуют цвет и шрифт от родителя.', 'inheritance — наследование (parent → child)'],
      ['/* а ссылка осталась синей! */', 'Ссылка не унаследовала цвет: у `a` есть свой цвет от браузера. Стиль самого тега сильнее унаследованного.', 'user agent stylesheet — стили браузера по умолчанию', 'a'],
      ['a {\n  color: #b5651d;\n}', 'Чтобы перекрасить ссылку — пишем правило именно для `a`.', 'override — переопределить стиль'],
      ['h1 {\n  font-family: Arial, sans-serif;\n}', 'Так же работает и наше правило: `h1` со своим шрифтом не слушает `body`.', 'override — своё правило сильнее наследования'],
    ],
  },
};

// ───────── Шрифты и иконки из интернета: index.html + style.css + результат
const GF_URL = 'https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Montserrat&display=swap';
const FA_URL = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css';
const WEB = {
  gfonts: {
    base: LIVE.font.base,
    page: () => PAGE,
    steps: [
      { html: '<head>\n  <title>Кофейня «Утро»</title>\n  <link rel="stylesheet" href="style.css">\n</head>', css: '/* цвета уже подключены — меняем только шрифт */', label: 'Цвета есть, а шрифт стандартный, как на любом компьютере. Подключим красивый шрифт из интернета.' },
      { html: '<head>\n  <title>Кофейня «Утро»</title>\n  <link rel="stylesheet"\n    href="' + GF_URL + '">\n  <link rel="stylesheet" href="style.css">\n</head>', hh: [3, 4], css: '/* цвета уже подключены — меняем только шрифт */', load: GF_URL, label: 'Скопировали `<link>` с fonts.google.com и вставили в `head` выше style.css. Страница не изменилась: шрифт скачался, но мы его ещё не применили.', term: 'web font — веб-шрифт' },
      { html: '<head>\n  <title>Кофейня «Утро»</title>\n  <link rel="stylesheet"\n    href="' + GF_URL + '">\n  <link rel="stylesheet" href="style.css">\n</head>', css: 'body {\n  font-family: "Montserrat", sans-serif;\n}', ch: [1, 2, 3], load: GF_URL, label: 'Имя шрифта пишем в `font-family`, как Arial: буква в букву, в кавычках. `sans-serif` — запасной, если шрифт не загрузится.', term: 'font-family — семейство шрифта' },
      { html: '<head>\n  <title>Кофейня «Утро»</title>\n  <link rel="stylesheet"\n    href="' + GF_URL + '">\n  <link rel="stylesheet" href="style.css">\n</head>', css: 'body {\n  font-family: "Montserrat", sans-serif;\n}\n\nh1, h2 {\n  font-family: "Lora", serif;\n}', ch: [5, 6, 7], load: GF_URL, label: 'Заголовкам — второй шрифт, с засечками. `wght@700` в ссылке — скачали жирное начертание для заголовков.', term: 'font pairing — пара шрифтов' },
    ],
  },
  icons: {
    base: FINAL_CSS,
    page: (n) => PAGE
      .replace('<h1>', '<h1>' + (n >= 2 ? '<i class="fa-solid fa-mug-hot"></i> ' : ''))
      .replace('<p>Свежий', '<p>' + (n >= 3 ? '<i class="fa-regular fa-clock"></i> ' : '') + 'Свежий')
      .replace('">Instagram', '">' + (n >= 3 ? '<i class="fa-brands fa-instagram"></i> ' : '') + 'Instagram'),
    steps: [
      { html: '<!-- head -->\n<link rel="stylesheet" href="style.css">\n<!-- body -->\n<h1>Кофейня «Утро»</h1>\n<p>Свежий кофе с 8:00.\n   Мы в <a href="…">Instagram</a></p>', css: '/* стили кофейни — как раньше */', label: 'Хотим иконки: чашку у заголовка, часы, логотип Instagram. Рисовать картинки не нужно — возьмём готовую библиотеку.' },
      { html: '<!-- head -->\n<link rel="stylesheet"\n  href="' + FA_URL + '">\n<link rel="stylesheet" href="style.css">\n<!-- body -->\n<h1>Кофейня «Утро»</h1>\n<p>Свежий кофе с 8:00.\n   Мы в <a href="…">Instagram</a></p>', hh: [2, 3], css: '/* стили кофейни — как раньше */', load: FA_URL, label: 'Подключили Font Awesome — тоже через `<link>`, с CDN (публичного сервера библиотек). Иконок пока нет: их нужно вставить в HTML.', term: 'CDN — сеть доставки файлов' },
      { html: '<!-- head -->\n<link rel="stylesheet"\n  href="' + FA_URL + '">\n<link rel="stylesheet" href="style.css">\n<!-- body -->\n<h1><i class="fa-solid fa-mug-hot"></i> Кофейня «Утро»</h1>\n<p>Свежий кофе с 8:00.\n   Мы в <a href="…">Instagram</a></p>', hh: [6], css: '/* стили кофейни — как раньше */', load: FA_URL, label: 'Иконка — пустой тег `<i>`. Копируем его с fontawesome.com: `fa-solid` — набор, `fa-mug-hot` — имя иконки.', term: 'icon font — иконочный шрифт' },
      { html: '<!-- head -->\n<link rel="stylesheet"\n  href="' + FA_URL + '">\n<link rel="stylesheet" href="style.css">\n<!-- body -->\n<h1><i class="fa-solid fa-mug-hot"></i> Кофейня «Утро»</h1>\n<p><i class="fa-regular fa-clock"></i> Свежий кофе с 8:00.\n   Мы в <a href="…"><i class="fa-brands fa-instagram"></i> Instagram</a></p>', hh: [7, 8], css: '/* стили кофейни — как раньше */', load: FA_URL, label: '`fa-regular` — контурные иконки, `fa-brands` — логотипы: Instagram, Telegram, WhatsApp.', term: 'brand icons — логотипы брендов' },
      { html: '<!-- head -->\n<link rel="stylesheet"\n  href="' + FA_URL + '">\n<link rel="stylesheet" href="style.css">\n<!-- body -->\n<h1><i class="fa-solid fa-mug-hot"></i> Кофейня «Утро»</h1>\n<p><i class="fa-regular fa-clock"></i> Свежий кофе с 8:00.\n   Мы в <a href="…"><i class="fa-brands fa-instagram"></i> Instagram</a></p>', css: 'i {\n  color: #b5651d;\n  font-size: 30px;\n}', ch: [1, 2, 3, 4], load: FA_URL, label: 'Иконка — это «буква» шрифта. Поэтому `color` её красит, а `font-size` меняет размер, как у обычного текста. Селектор `i` — все иконки сразу.', term: 'color · font-size работают и для иконок' },
    ],
  },
};

// ───────── Слайды
const slides = [
  { type: 'cover', title: 'Подключение CSS', section: 'Начало', minutes: 1, notes: 'Сегодня страница из прошлого урока получает внешний вид. План на 90 минут: 5 — разминка и «до/после», 45 — теория с живыми демо (включая Google Fonts и Font Awesome), 25 — делаем вместе, 12 — сами, 3 — шпаргалка. Всё, что на слайдах, ученики увидят в практике.' },
  { type: 'quiz', label: '02 / РАЗМИНКА', section: 'Разминка', title: 'Вспомним <em>img</em>', lead: 'Прошлый урок. Сначала ответ вслух, потом кнопка.', minutes: 2, lang: 'html', file: 'index.html',
    code: '<h2>Наш кофе</h2>\n<img src="img/coffee.jpg">\n<a href="menu.html">Меню</a>', question: 'Чего не хватает у картинки?', choices: ['alt — описания картинки', 'href — адреса', 'закрывающего тега </img>', 'Ничего, всё верно'], correct: 0,
    explain: '`img` — одиночный тег (void element), закрывать не нужно. `src` — путь к файлу, `alt` — альтернативный текст, если картинка не загрузилась (и для незрячих). `href` — у ссылки `a`.', notes: 'Если путаются в src/href — напомните: src = «откуда взять файл», href = «куда перейти». Сегодня href понадобится ещё раз — в теге link.' },
  { type: 'beforeafter', label: '03 / ЗАЧЕМ', section: 'Зачем CSS', title: 'HTML — <em>что</em>. CSS — <em>как</em> выглядит', lead: 'Слева и справа — один и тот же index.html. Справа подключили один файл style.css.', minutes: 3, notes: 'Слева — «так выглядит ваша домашка с прошлого урока». Справа — то же самое с CSS. Скажите: к концу урока каждый сделает такую же, и каждое свойство слева вы сегодня разберёте.' },
  { type: 'tabs', label: '04 / ПОДКЛЮЧИТЬ', section: 'Подключение', title: 'Три способа <em>подключить CSS</em>', lead: 'Все три работают. Но на реальных сайтах — только третий. Переключайте вкладки.', minutes: 4, notes: 'Пройдите все три вкладки по порядку. Главный вопрос группе: «на сайте 20 страниц — где менять цвет заголовков?» Атрибут — на каждом теге, style — на каждой странице, link — в одном файле.' },
  { type: 'theory', label: '05 / LINK', section: 'Подключение', title: 'Тег <em>link</em> — мост к файлу стилей', lead: 'Пишем в head, рядом с title. Один раз — на каждой странице сайта.', minutes: 2, lang: 'html', file: 'index.html',
    code: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>Кофейня</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Кофейня «Утро»</h1>\n</body>\n</html>',
    items: [['rel="stylesheet"', 'Говорит браузеру: «этот файл — таблица стилей». Без `rel` файл не подключится.', 'stylesheet — таблица стилей'], ['href="style.css"', 'Путь к файлу — как `src` у картинки. Файл в папке css → `href="css/style.css"`.', 'relative path — относительный путь'], ['Одиночный тег', 'Как `img` — без закрывающего. Место — внутри `head`.', 'external CSS — внешние стили']], notes: 'Свяжите с уроком 3: путь в href работает так же, как путь у img. VS Code: напишите link и нажмите Tab — Emmet допишет rel и href.' },
  { type: 'anatomy', label: '06 / ПРАВИЛО', section: 'Синтаксис', title: 'Из чего состоит <em>CSS-правило</em>', lead: 'Нажимайте «Следующий шаг» — подсветится каждая часть.', minutes: 3, notes: 'Пусть ученики хором называют части: селектор, свойство, значение. Особо отметьте точку с запятой — это ошибка №1 на практике.' },
  { type: 'quiz', label: '07 / ПРОВЕРКА', section: 'Синтаксис', title: 'Найдите <em>ошибку</em>', lead: 'Заголовок не покраснел. Почему?', minutes: 1, lang: 'css', file: 'style.css',
    code: 'h1 {\n  color red;\n}', question: 'Что не так?', choices: ['Нет двоеточия после color', 'red нужно в кавычках', 'Нужно .h1 с точкой', 'Всё верно'], correct: 0,
    explain: 'Свойство (property) и значение (value) разделяет двоеточие: `color: red;` Браузер не покажет ошибку — он просто пропустит объявление (invalid declaration).', notes: '' },
  { type: 'theory', label: '08 / СЕЛЕКТОРЫ', section: 'Синтаксис', title: 'Селектор по <em>тегу</em>', lead: 'Пишем имя тега без < > — и правило применяется ко всем таким тегам на странице.', minutes: 3, lang: 'css', file: 'style.css',
    code: '/* все абзацы страницы */\np {\n  color: gray;\n}\n\n/* одно правило для h1 и h2 */\nh1, h2 {\n  color: navy;\n}\n\n/* все пункты в ul и ol */\nli {\n  color: teal;\n}',
    items: [['По тегу', '`p { }` — красит каждый `p` на странице. Пишем без угловых скобок.', 'type selector — селектор типа'], ['Через запятую', '`h1, h2 { }` — одно правило на несколько тегов.', 'selector list — группировка'], ['Комментарий', '`/* заметка */` — для человека. Браузер его пропускает.', 'CSS comment — комментарий']], notes: 'Выбирать отдельный элемент (только этот абзац) научимся через классы — это будет позже. Сегодня хватает тегов.' },
  { type: 'color', label: '09 / ЦВЕТ', section: 'Цвет и фон', title: 'Три способа <em>записать цвет</em>', lead: 'Двигайте ползунки: один и тот же цвет можно записать тремя способами.', minutes: 4, notes: 'Сначала покажите имена (tomato, navy) — проще всего. Потом RGB: «сколько красного, зелёного и синего от 0 до 255». HEX — те же три числа, только короче. В дизайн-макетах почти всегда HEX — его копируют из Figma.' },
  { type: 'live', demo: 'color', label: '10 / ЦВЕТ', section: 'Цвет и фон', title: '<em>color</em> и <em>background-color</em> — по шагам', lead: 'color — цвет текста. background-color — цвет фона. Слева страница, справа — что добавляем на этом шаге.', minutes: 4, notes: 'На каждом шаге спрашивайте до нажатия: «что сейчас поменяется?» Частая путаница: хотят покрасить текст, а пишут background-color.' },
  { type: 'quiz', label: '11 / ПРОВЕРКА', section: 'Цвет и фон', title: 'Куда <em>пропал текст</em>?', lead: 'Текст на странице есть, но его не видно.', minutes: 1, lang: 'css', file: 'style.css',
    code: 'body {\n  background-color: #ffffff;\n}\n\np {\n  color: #ffffff;\n}', question: 'Почему абзац не видно?', choices: ['#ffffff — белый текст на белом фоне', 'Неправильный HEX', 'p не наследует цвет', 'Нужно rgb() вместо HEX'], correct: 0,
    explain: '`#ffffff` — белый. Белый текст на белом фоне есть, но его не видно. Текст и фон должны контрастировать (contrast) — иначе страница нечитаема.', notes: 'Попросите выделить текст мышкой — он «появится». Хороший момент сказать про контраст и читаемость.' },
  { type: 'live', demo: 'font', label: '12 / ШРИФТ', section: 'Шрифт', title: 'Шрифт, размер, <em>начертание</em>', lead: 'Шесть свойств, которые делают текст «дизайнерским».', minutes: 4, notes: 'font-family: всегда с запасным вариантом через запятую. Если у пользователя нет Georgia, браузер возьмёт любой serif. Имена с пробелом — в кавычках: "Times New Roman".' },
  { type: 'live', demo: 'inherit', label: '13 / НАСЛЕДОВАНИЕ', section: 'Наследование', title: 'Дети <em>наследуют</em> от родителя', lead: 'Цвет и шрифт текста переходят от body ко всему, что внутри. Но не всегда.', minutes: 3, notes: 'Вспомните вложенность с урока 2: всё внутри body — его «дети». Поэтому общий шрифт и цвет пишем один раз для body. Исключение — ссылка: у неё свой цвет от браузера.' },
  { type: 'theory', label: '14 / GOOGLE FONTS', section: 'Веб-шрифты', title: 'Google Fonts — <em>шрифты из интернета</em>', lead: 'Бесплатная библиотека из сотен шрифтов. Подключение — один &lt;link&gt; и одна строка CSS.', minutes: 2, lang: 'css', file: 'style.css',
    code: '/* 1. fonts.google.com → выбрали шрифт\n   2. Get font → Get embed code\n   3. скопировали <link> → в head,\n      выше style.css\n   4. имя шрифта → в font-family */\n\nbody {\n  font-family: "Montserrat", sans-serif;\n}\n\nh1, h2 {\n  font-family: "Lora", serif;\n}',
    items: [['Веб-шрифт', 'Шрифт скачивается с серверов Google. У всех пользователей он одинаковый, даже если на компьютере его нет.', 'web font — веб-шрифт'], ['Только с кириллицей', 'Фильтр Language → Cyrillic. Иначе русский текст останется стандартным шрифтом.', 'subset — набор символов'], ['Имя — буква в букву', 'Копируем с сайта, в кавычках: `"Montserrat"`. Запасной через запятую — на случай опечатки или без интернета.', 'fallback font — запасной шрифт']], notes: 'Откройте fonts.google.com вживую. Сразу фильтр Language → Cyrillic — иначе русские буквы будут стандартными. Get font → Get embed code. Google даёт три строки (две preconnect — для скорости): копируем все три в head выше style.css. Шрифты с кириллицей: Montserrat, Inter, Roboto, Lora, Playfair Display, Rubik.' },
  { type: 'web', demo: 'gfonts', label: '15 / GOOGLE FONTS', section: 'Веб-шрифты', title: 'Подключаем <em>Google Fonts</em> — по шагам', lead: 'Сверху index.html, снизу style.css, справа результат. Два шага: ссылка в HTML и имя в CSS.', minutes: 3, notes: 'На шаге 1 спросите: «почему ничего не изменилось?» — шрифт скачали, но не применили. На шаге 2 обратите внимание: заголовки тоже сменили шрифт — наследование от body. На шаге 3 у h1, h2 своё правило, и оно сильнее унаследованного.' },
  { type: 'quiz', label: '16 / ПРОВЕРКА', section: 'Веб-шрифты', title: 'Почему <em>шрифт не сменился</em>?', lead: 'Ссылка на Google Fonts в head есть, интернет есть, а шрифт стандартный.', minutes: 1, lang: 'css', file: 'style.css',
    code: '/* в head подключён Google Fonts:\n   family=Montserrat */\n\nbody {\n  font-family: "Monserrat", sans-serif;\n}',
    question: 'Что не так в этом коде?', choices: ['Имя нельзя писать в кавычках', 'Опечатка: Monserrat без буквы t', 'Google Fonts — только для заголовков', 'sans-serif перебил Montserrat'], correct: 1,
    explain: 'Имя — буква в букву, как на сайте: `"Montserrat"`. Такого шрифта браузер не нашёл и молча взял запасной `sans-serif`.', notes: 'Ошибки CSS не видно — браузер просто берёт запасной шрифт. Проверка: F12 → Elements → Computed → font-family, или сравнить имя с сайтом Google.' },
  { type: 'theory', label: '17 / ИКОНКИ', section: 'Иконки', title: 'Font Awesome — <em>иконки шрифтом</em>', lead: 'Тысячи бесплатных иконок. Подключаем библиотеку один раз — и вставляем иконки тегом &lt;i&gt;.', minutes: 2, lang: 'html', file: 'index.html',
    code: '<!-- 1. fontawesome.com/icons → поиск\n     2. фильтр Free → выбрали иконку\n     3. скопировали тег <i> → в HTML -->\n\n<i class="fa-solid fa-mug-hot"></i>\n<i class="fa-regular fa-heart"></i>\n<i class="fa-brands fa-instagram"></i>',
    items: [['Иконка — это шрифт', 'Каждая иконка — «буква» специального шрифта. Поэтому её красят `color` и увеличивают `font-size`.', 'icon font — иконочный шрифт'], ['Три набора', '`fa-solid` — залитые, `fa-regular` — контурные, `fa-brands` — логотипы. Берём только Free.', 'free icons — бесплатные иконки'], ['Тег i — пустой', 'Внутри ничего не пишем. `class` копируем с сайта как есть — подробно про классы на следующих уроках.', 'class — метка элемента']], notes: 'Откройте fontawesome.com/icons, поиск «coffee», фильтр Free. Клик по иконке → копируете тег <i>. Ссылка на библиотеку уже есть в ТЗ домашки (cdnjs). Про class не углубляйтесь: «это имя, по которому библиотека находит иконку». Если вместо иконки квадратик или пусто — не подключён link или опечатка в имени.' },
  { type: 'web', demo: 'icons', label: '18 / ИКОНКИ', section: 'Иконки', title: 'Иконки на странице — <em>по шагам</em>', lead: 'Подключили библиотеку → вставили иконки → покрасили через CSS, как текст.', minutes: 3, notes: 'Главная мысль последнего шага: иконка — это текст. Поэтому color и font-size, которые мы сегодня учили, работают и на иконках. Спросите до нажатия: «как сделать иконки коричневыми?»' },
  { type: 'theory', label: '19 / КАСКАД', section: 'Каскад', title: 'Кто <em>победит</em>?', lead: 'Если два правила спорят за одно свойство — побеждает нижнее. Остальные свойства складываются.', minutes: 2, lang: 'css', file: 'style.css',
    code: 'p {\n  color: gray;\n  font-size: 18px;\n}\n\np {\n  color: navy;   /* ниже — побеждает */\n}\n\n/* итог для p:\n   color: navy\n   font-size: 18px */',
    items: [['Ниже — главнее', 'Одинаковый селектор, одно свойство → работает то, что написано позже.', 'source order — порядок в коде'], ['Правила складываются', '`font-size` из первого правила никуда не делся.', 'cascade — каскад'], ['style="…" сильнее файла', 'Атрибут перебивает style.css — поэтому его и не используем.', 'inline styles — инлайн-стили']], notes: 'Слово «каскад» — это и есть Cascading в CSS (Cascading Style Sheets). Подробно про силу селекторов — когда пройдём классы.' },
  { type: 'quiz', label: '20 / ПРОВЕРКА', section: 'Каскад', title: 'Каким будет <em>абзац</em>?', lead: 'Подумайте про оба правила.', minutes: 1, lang: 'css', file: 'style.css',
    code: 'p {\n  color: red;\n  font-size: 20px;\n}\n\np {\n  color: green;\n}', question: 'Как будет выглядеть p?', choices: ['Красный, 20px', 'Зелёный, 20px', 'Зелёный, обычного размера'], correct: 1,
    explain: 'За `color` спорят два правила — побеждает нижнее: `green`. `font-size` никто не переопределил (override) — остаётся `20px`.', notes: '' },
  { type: 'devtools', label: '21 / DEVTOOLS', section: 'DevTools', title: 'DevTools: <em>откуда этот стиль?</em>', lead: 'F12 → Elements → Styles. Выберите тег слева, отключайте свойства галочками.', minutes: 3, notes: 'Это копия настоящей панели Chrome. Покажите: 1) a — цвет body перечёркнут, потому что у ссылки свой цвет от браузера; 2) снимите галочку — стиль выключится; 3) потом откройте настоящий F12 на любом сайте. Главный инструмент, когда «стиль не работает».' },
  { type: 'bugs', label: '22 / ОТЛАДКА', section: 'Ошибки', title: 'Почему <em>не работает</em>?', lead: 'Сначала группа объясняет причину. Потом откройте исправление.', minutes: 4, notes: 'Эти ошибки будут на практике у каждого. Главное правило: CSS не ругается — он молча пропускает. Поэтому смотрим в DevTools.' },
  { type: 'practice', practice: 'joint', label: '23 / ВМЕСТЕ', section: 'Практика', title: 'Вместе: <em>сайт кофейни</em>', lead: 'С нуля по ТЗ: каркас и контент — повторение, потом подключаем CSS и красим шаг за шагом.', minutes: 25, notes: 'Подробный сценарий — teacher/JOINT-GUIDE.md. VS Code слева, браузер справа. После каждого шага: Ctrl+S → F5. Если стиль не применился — сразу открываем DevTools, а не гадаем.' },
  { type: 'practice', practice: 'solo', label: '24 / САМИ', section: 'Практика', title: 'Самостоятельно: <em>любимый фильм</em>', lead: 'Те же шаги, своя страница и тёмная тема. Подглядывать в совместную практику можно.', minutes: 15, notes: 'Не подсказывайте код — спрашивайте: «какой селектор?», «какое свойство меняет цвет текста?». Тёмная тема проверяет понимание color vs background-color.' },
  { type: 'glossary', label: '25 / СЛОВАРЬ', section: 'Итог', title: 'Словарь <em>разработчика</em>', lead: 'Как это называют в документации, на собеседованиях и в команде.', minutes: 3, notes: 'Пройдитесь по строкам: вы говорите русский термин — группа хором английский. Объясните, что гуглить лучше по-английски: «css inheritance», «user agent stylesheet» — ответов в разы больше.' },
  { type: 'summary', part: 'concepts', label: '26 / ШПАРГАЛКА 1/2', section: 'Итог', title: 'Шпаргалка: <em>главные понятия</em>', lead: 'Весь урок на одном экране. Листать презентацию не нужно — можно скачать или распечатать.', minutes: 3, notes: 'Пусть ученики сфотографируют или скачают. Пройдитесь по каждому блоку одной фразой.' },
  { type: 'summary', part: 'exceptions', label: '27 / ШПАРГАЛКА 2/2', section: 'Итог', title: 'Шпаргалка: <em>исключения и ловушки</em>', lead: 'Именно эти случаи дают ошибки в домашке. Проверьте себя по списку.', minutes: 2, notes: 'Спросите 2–3 пункта: «почему так?» — без подсказки.' },
  { type: 'end', title: 'Готово', section: 'Итог', minutes: 1, notes: 'Домашнее задание: страница-рецепт, CSS в отдельной папке css/. ТЗ — в комментариях файлов.' },
];

const TABS = [
  { name: 'style="…"', title: 'Инлайн-стили · inline styles', verdict: 'bad', text: 'Только для одного тега. 10 заголовков — 10 раз писать одно и то же. HTML и оформление перемешаны.',
    files: [['index.html', 'html', '<h1 style="color: tomato;">Кофейня</h1>\n<p>Свежий кофе</p>\n<h1>Меню</h1>']], html: '<h1 style="color: tomato;">Кофейня</h1>\n<p>Свежий кофе</p>\n<h1>Меню</h1>', css: '' },
  { name: '<style>', title: 'Внутренние стили · internal CSS', verdict: 'mid', text: 'Работает для всех тегов страницы. Но на каждой странице сайта — своя копия стилей.',
    files: [['index.html', 'html', '<head>\n  <style>\n    h1 { color: tomato; }\n    p { color: gray; }\n  </style>\n</head>\n<body>\n  <h1>Кофейня</h1>\n  <p>Свежий кофе</p>\n  <h1>Меню</h1>\n</body>']], html: '<h1>Кофейня</h1>\n<p>Свежий кофе</p>\n<h1>Меню</h1>', css: 'h1 { color: tomato; }\np { color: gray; }' },
  { name: '<link> + файл', title: 'Внешний файл · external CSS', verdict: 'good', text: 'Один файл на весь сайт. Поменяли цвет в нём — поменялся на всех страницах. Так делаем всегда.',
    files: [['index.html', 'html', '<head>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Кофейня</h1>\n  <p>Свежий кофе</p>\n  <h1>Меню</h1>\n</body>'], ['style.css', 'css', 'h1 {\n  color: tomato;\n}\n\np {\n  color: gray;\n}']], html: '<h1>Кофейня</h1>\n<p>Свежий кофе</p>\n<h1>Меню</h1>', css: 'h1 { color: tomato; }\np { color: gray; }' },
];

const ANATOMY = [
  ['sel', 'Селектор', 'selector', 'КОГО оформляем. Здесь — все заголовки `h1`.'],
  ['brace', 'Фигурные скобки', 'declaration block', 'Блок объявлений: всё внутри `{ }` относится к селектору.'],
  ['prop', 'Свойство', 'property', 'ЧТО меняем: цвет, размер, шрифт…'],
  ['colon', 'Двоеточие', 'colon', 'Отделяет свойство от значения.'],
  ['val', 'Значение', 'value', 'КАК меняем: `tomato`, `40px`.'],
  ['semi', 'Точка с запятой', 'semicolon', 'Конец объявления. Без неё ломается и следующая строка.'],
  ['decl', 'Объявление', 'declaration', 'Свойство + значение. Всё правило целиком — rule (ruleset).'],
];

const COLOR_PRESETS = [['tomato', 255, 99, 71], ['navy', 0, 0, 128], ['gold', 255, 215, 0], ['teal', 0, 128, 128], ['black', 0, 0, 0], ['white', 255, 255, 255], ['кофе', 111, 78, 55]];

// DevTools: правила автора, стили браузера, наследование
const DEV_RULES = [
  { sel: 'body', decls: [['background-color', '#fdf6ec'], ['color', '#3b2f2f'], ['font-family', 'Georgia, serif']] },
  { sel: 'h1', decls: [['color', '#b5651d'], ['font-size', '44px']] },
  { sel: 'p', decls: [['line-height', '1.6']] },
  { sel: 'li', decls: [['font-style', 'italic']] },
  { sel: 'a', decls: [['color', '#b5651d'], ['text-decoration', 'none']] },
];
const DEV_UA = { h1: [['font-size', '2em'], ['font-weight', 'bold']], h2: [['font-size', '1.5em'], ['font-weight', 'bold']], a: [['color', 'blue'], ['text-decoration', 'underline']] };
const DEV_TREE = [['body', 0, '<body>'], ['h1', 1, '<h1>Кофейня «Утро»</h1>'], ['p', 1, '<p>Свежий кофе…</p>'], ['a', 2, '<a href="…">Instagram</a>'], ['h2', 1, '<h2>Меню</h2>'], ['ul', 1, '<ul>'], ['li', 2, '<li>Капучино…</li>'], ['img', 1, '<img src="…">']];
const INHERITED = ['color', 'font-family', 'font-size', 'font-style', 'font-weight', 'line-height', 'text-align'];

const PLAY_PRESETS = {
  'Кофейня': 'body {\n  background-color: #fdf6ec;\n  color: #3b2f2f;\n  font-family: Arial, sans-serif;\n}\n\nh1, h2 {\n  font-family: Georgia, serif;\n  color: #6f4e37;\n}\n\na {\n  color: #b5651d;\n}',
  'Ночь': 'body {\n  background-color: #1e1b2e;\n  color: #f1eefe;\n  font-family: Arial, sans-serif;\n}\n\nh1, h2 {\n  color: gold;\n}\n\na {\n  color: #8be9fd;\n}',
  'Газета': 'body {\n  background-color: #f4f1e8;\n  color: #222222;\n  font-family: Georgia, serif;\n  line-height: 1.6;\n}\n\nh1 {\n  font-size: 48px;\n  text-align: center;\n}\n\nli {\n  font-style: italic;\n}',
  'Пусто': '/* пишите здесь */\n',
};

const BUGS = [
  { title: 'Нет точки с запятой', lang: 'css', bad: 'h1 {\n  color: navy\n  font-size: 40px;\n}', good: 'h1 {\n  color: navy;\n  font-size: 40px;\n}', why: 'Без `;` браузер читает «navy font-size: 40px» как одно значение `color` — invalid value, оба свойства выброшены.' },
  { title: 'Такого свойства нет', lang: 'css', bad: 'p {\n  font-color: gray;\n  text-color: gray;\n}', good: 'p {\n  color: gray;\n}', why: 'Цвет текста — просто `color`. Unknown property — браузер молча пропускает (в DevTools — жёлтый треугольник).' },
  { title: 'Пробел перед px', lang: 'css', bad: 'h1 {\n  font-size: 40 px;\n}', good: 'h1 {\n  font-size: 40px;\n}', why: 'Число и единица измерения (unit) — слитно: `40px`. С пробелом — invalid value, свойство пропускается.' },
  { title: 'Стили не подключились', lang: 'html', bad: '<!-- файл называется style.css -->\n<link rel="stylesheet" href="styles.css">', good: '<link rel="stylesheet" href="style.css">', why: 'Путь в `href` должен совпасть с файлом буква в букву. Лишняя s — браузер не найдёт файл (в DevTools → Network: 404).' },
  { title: 'Ссылка осталась синей', lang: 'css', bad: 'body {\n  color: white;\n  background-color: black;\n}\n/* текст белый, а ссылка — синяя */', good: 'body {\n  color: white;\n  background-color: black;\n}\n\na {\n  color: gold;\n}', why: 'У ссылки цвет из user agent stylesheet — он сильнее унаследованного от `body`. Пишем правило для `a`.' },
  { title: 'Точка перед тегом', lang: 'css', bad: '.h1 {\n  color: tomato;\n}', good: 'h1 {\n  color: tomato;\n}', why: 'Точка — это class selector. `.h1` ищет элементы с `class="h1"`. Для тега — type selector, просто `h1`.' },
];

const PRACTICE = {
  joint: {
    caption: 'materials/joint · 25 минут', zip: './materials/joint.zip', spec: './materials/view.html?p=joint', title: 'Кофейня «Утро»', files: 'index.html · style.css · img/',
    tasks: [
      ['Каркас', '<!DOCTYPE html>', 'урок 2'],
      ['Контент', '<h1> <p> <img> <ul> <a>', 'урок 3'],
      ['Подключить CSS', '<link rel="stylesheet">', 'НОВОЕ: link'],
      ['Фон и текст', 'background-color: …;', 'НОВОЕ: цвет'],
      ['Шрифт страницы', 'font-family: …;', 'НОВОЕ: наследование'],
      ['Заголовки', 'h1, h2 { }', 'НОВОЕ: группа, каскад'],
      ['Списки и ссылки', 'li { } a { }', 'НОВОЕ: свой цвет у a'],
      ['Проверка', 'F12 → Styles', 'НОВОЕ: DevTools'],
    ],
  },
  solo: {
    caption: 'materials/solo · 15 минут', zip: './materials/solo.zip', spec: './materials/view.html?p=solo', title: 'Любимый фильм', files: 'index.html · style.css · img/',
    tasks: [
      ['Каркас', '<!DOCTYPE html>', 'как в кофейне'],
      ['Контент', '<h1> <p> <img> <ul> <a>', 'как в кофейне'],
      ['Подключить CSS', '<link rel="stylesheet">', 'как в кофейне'],
      ['Тёмная тема', 'background-color: …;', 'тёмный фон — светлый текст'],
      ['Шрифт', 'font-family: …;', 'с запасным шрифтом'],
      ['Заголовки', 'h1, h2 { }', 'через запятую'],
      ['Списки и ссылки', 'li { } a { }', 'ссылка не синяя'],
      ['Бонус', 'rgb() #hex tomato', 'все три формата'],
    ],
  },
};

const GLOSSARY = [
  ['Таблица стилей', 'stylesheet', '«стили», «цээска»', '<link rel="stylesheet">'],
  ['Правило', 'rule / ruleset', '«правило»', 'h1 { color: red; }'],
  ['Селектор', 'selector', '«селектор»', 'h1, h2'],
  ['Селектор типа', 'type selector', '«по тегу»', 'p { }'],
  ['Объявление', 'declaration', '«строчка стиля»', 'color: red;'],
  ['Свойство · значение', 'property · value', '«проперти», «значение»', 'font-size: 18px;'],
  ['Внешние · инлайн-стили', 'external · inline CSS', '«вынести в файл», «инлайн»', 'style="color: red;"'],
  ['Наследование', 'inheritance', '«наследуется от родителя»', 'body { color: navy; }'],
  ['Каскад', 'cascade · source order', '«перебивает», «переопределить»', 'p { } … p { }'],
  ['Стили браузера', 'user agent stylesheet', '«дефолтные стили»', 'a { color: blue; }'],
  ['Запасной шрифт', 'fallback font', '«фолбэк»', 'Georgia, serif'],
  ['Межстрочный интервал', 'line-height', '«лайн-хайт», «интерлиньяж»', 'line-height: 1.6;'],
  ['Контраст', 'contrast', '«текст не читается»', 'color: #fff;'],
  ['Веб-шрифт', 'web font · Google Fonts', '«гугл-фонтс», «подключить шрифт»', 'font-family: "Lora";'],
  ['Иконочный шрифт', 'icon font · Font Awesome', '«фонт авесом»', 'fa-star'],
  ['Инструменты разработчика', 'DevTools', '«девтулзы», «инспектор»', 'F12'],
];
function glossaryView() {
  return '<div class="gl-grid">' + GLOSSARY.map((g) => '<div class="gl-row"><div class="gl-ru"><b>' + esc(g[0]) + '</b><em>' + esc(g[1]) + '</em></div><span class="gl-say">' + esc(g[2]) + '</span>' + (g[3] === 'F12' ? '<code class="ic"><span class="token keyword">F12</span></code>' : inlineCode(g[3])) + '</div>').join('') + '</div>';
}

const SUMMARY = [
  ['Подключение <em>external CSS</em>', ['В head: <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>.', 'href — путь к файлу, как src у img: <code>css/style.css</code>.', 'Один файл стилей на весь сайт. Инлайн <code>style="…"</code> и <code>&lt;style&gt;</code> — не используем.']],
  ['Правило <em>rule</em>', ['<code>селектор { свойство: значение; }</code>', 'Свойство и значение — через <b>двоеточие</b>, в конце — <b>точка с запятой</b>.', 'Комментарий: <code>/* … */</code>.']],
  ['Селекторы <em>selectors</em>', ['По тегу: <code>p { }</code> — все абзацы страницы.', 'Группа: <code>h1, h2 { }</code> — одно правило на несколько тегов.', 'Имя тега — без угловых скобок и без точки: <code>p</code>, не <code>&lt;p&gt;</code> и не <code>.p</code>.']],
  ['Цвет и фон <em>color · background</em>', ['<code>color</code> — цвет текста. <code>background-color</code> — цвет фона.', 'Записи цвета: <code>tomato</code> <code>#ff6347</code> <code>rgb(255, 99, 71)</code>', 'Текст и фон должны контрастировать.']],
  ['Шрифт <em>typography</em>', ['<code>font-family: Georgia, serif;</code> — всегда с запасным.', 'Google Fonts: <code>&lt;link&gt;</code> в head + имя в <code>font-family</code>.', 'Font Awesome: иконки — это шрифт, их меняют <code>color</code> и <code>font-size</code>.']],
  ['Наследование и каскад <em>inheritance · cascade</em>', ['Цвет и шрифт body наследуют все теги внутри.', 'Спор за одно свойство: побеждает <b>нижнее</b> правило. Остальные свойства складываются.', 'Не работает? F12 → Elements → Styles.']],
];
const EXCEPTIONS = [
  'Ссылка не берёт цвет от body: у <code>a</code> свой синий цвет от браузера. Пишем <code>a { color: … }</code>.',
  'Заголовки не берут размер и жирность от body: у <code>h1–h6</code> свои. Меняем правилом для h1, h2…',
  'Нет <code>;</code> — ломается не только эта строка, но и следующая.',
  'CSS не показывает ошибок: неверное свойство или значение просто пропускается. Ищем в DevTools.',
  'Число и единица — слитно: <code>40px</code>, не <code>40 px</code>. У <code>line-height</code> можно без единиц: <code>1.6</code>.',
  'Название шрифта с пробелом — в кавычках: <code>"Times New Roman"</code>.',
  'Точка перед именем — это класс: <code>.h1</code> ≠ <code>h1</code>. Для тега — без точки.',
  'Файл в папке: <code>href="css/style.css"</code>. Имя должно совпасть буква в букву.',
  '<code>style="…"</code> в HTML сильнее файла стилей — поэтому атрибут не используем.',
  'Изменения не видно? Сохраните файл (Ctrl+S) и обновите страницу (F5).',
];

// ───────── Движок
const stage = document.getElementById('stage');
const store = Object.create(null);
let current = 0, toastTimeout, playTimer;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const state = () => store[current] || (store[current] = { step: 0 });
const removeTags = (s) => String(s).replace(/<[^>]*>/g, '');
const tok = (t, cls) => t ? '<span class="token ' + cls + '">' + esc(t) + '</span>' : '';

// Подсветка CSS с образцами цвета, как в VS Code
const NAMED = ['tomato', 'navy', 'gold', 'teal', 'black', 'white', 'gray', 'red', 'green', 'blue', 'orange'];
function hlVal(v) {
  return v.split(/(rgb\([^)]*\)|"[^"]*"|#[0-9a-fA-F]{3,8}\b|\d*\.?\d+(?:px|em|%)?|[A-Za-z-]+)/).map((t) => {
    if (!t) return '';
    const isColor = /^#[0-9a-fA-F]{3,8}$/.test(t) || /^rgb\(/.test(t) || NAMED.includes(t);
    if (isColor) return '<i class="sw" style="background:' + esc(t) + '"></i>' + tok(t, /^[a-z]/.test(t) && !/^rgb/.test(t) ? 'string' : 'number');
    if (/^"/.test(t)) return tok(t, 'string');
    if (/^[\d.]/.test(t)) return tok(t, 'number');
    if (/^[A-Za-z-]+$/.test(t)) return tok(t, 'string');
    return esc(t);
  }).join('');
}
function hlCSS(line) {
  const ci = line.indexOf('/*');
  let rest = ci >= 0 ? line.slice(0, ci) : line;
  const comment = ci >= 0 ? line.slice(ci) : '';
  let html = '';
  const bi = rest.indexOf('{');
  if (bi >= 0) { html += tok(rest.slice(0, bi), 'keyword') + tok('{', 'operator'); rest = rest.slice(bi + 1); }
  const re = /([a-z-]+)(\s*:\s*)([^;}]*)(;?)|(\})/g;
  let last = 0, m;
  while ((m = re.exec(rest))) {
    html += esc(rest.slice(last, m.index));
    html += m[5] ? tok('}', 'operator') : tok(m[1], 'method') + tok(m[2], 'operator') + hlVal(m[3]) + tok(m[4], 'operator');
    last = re.lastIndex;
  }
  html += esc(rest.slice(last));
  return html + tok(comment, 'comment');
}
function hlHTML(line) {
  return String(line).split(/(<!--.*?-->|<!--.*$|<\/?[A-Za-z!][A-Za-z0-9]*|\/?>|[a-z-]+(?==)|"[^"]*"|=)/).map((t) => {
    if (!t) return '';
    if (/^<!--/.test(t)) return tok(t, 'comment');
    if (/^<\/?[A-Za-z!]/.test(t)) return tok(t, 'keyword');
    if (/^\/?>$/.test(t)) return tok(t, 'keyword');
    if (/^"/.test(t)) return tok(t, 'string');
    if (t === '=') return tok(t, 'operator');
    if (/^[a-z-]+$/.test(t)) return tok(t, 'method');
    return esc(t);
  }).join('');
}
const hl = (line, lang) => (lang === 'html' ? hlHTML(line) : hlCSS(line));
const TAGS = /^\.?(html|head|body|title|link|style|meta|h[1-6]|p|a|img|ul|ol|li)(,\s*\.?(h[1-6]|p|a|li))*$/;
// фрагмент кода внутри текста: <тег>, правило, объявление, тег или значение
function inlineCode(t) {
  t = String(t);
  let html;
  if (/^</.test(t)) html = hlHTML(t);
  else if (/[{:]|\/\*/.test(t)) html = hlCSS(t);
  else if (TAGS.test(t)) html = tok(t, 'keyword');
  else if (/^(color|background(-color)?|font(-[a-z]+)?|line-height|text-[a-z]+|rel|href|src|alt|class|style)$/.test(t)) html = tok(t, 'method');
  else html = hlVal(t);
  return '<code class="ic">' + html + '</code>';
}
// текст с `кодом` в обратных кавычках
const rich = (text) => {
  const parts = String(text).split('`');
  let out = '';
  parts.forEach((part, i) => {
    if (i % 2) {
      const next = parts[i + 1] || '';
      const glue = (next.match(/^[.,:;!?)»]+/) || [''])[0];
      parts[i + 1] = next.slice(glue.length);
      out += '<span class="nw">' + inlineCode(part) + esc(glue) + '</span>';
    } else out += esc(part);
  });
  return out;
};
const term = (t) => (t ? '<span class="term"><b>термин</b>' + esc(t) + '</span>' : '');

// opts: caption, lang, active: [номера строк], dimFrom: строки после — приглушить
function codeWindow(code, opts = {}) {
  const lang = opts.lang || 'css', active = opts.active || [];
  let inComment = false;
  const paint = (line) => {
    if (lang !== 'css') {
      if (inComment) { const e = line.indexOf('-->'); if (e < 0) return tok(line, 'comment'); inComment = false; return tok(line.slice(0, e + 3), 'comment') + hl(line.slice(e + 3), lang); }
      const o = line.lastIndexOf('<!--');
      if (o >= 0 && line.indexOf('-->', o) < 0) { inComment = true; return hl(line.slice(0, o), lang) + tok(line.slice(o), 'comment'); }
      return hl(line, lang);
    }
    let pre = '', rest = line;
    if (inComment) {
      const end = line.indexOf('*/');
      if (end < 0) return tok(line, 'comment');
      pre = tok(line.slice(0, end + 2), 'comment'); rest = line.slice(end + 2); inComment = false;
    }
    const open = rest.lastIndexOf('/*');
    if (open >= 0 && rest.indexOf('*/', open) < 0) inComment = true;
    return pre + hlCSS(rest);
  };
  return '<div class="code-window"><div class="code-head"><span><span class="dots"><i></i><i></i><i></i></span></span><span>' + esc(opts.caption || (lang === 'html' ? 'index.html' : 'style.css')) + '</span></div><pre class="code-pre">'
    + String(code).split('\n').map((line, i) => '<span class="code-line ' + (active.includes(i + 1) ? 'active-line' : '') + (opts.dimFrom && i + 1 > opts.dimFrom ? ' dim-line' : '') + '"><span class="line-no">' + (i + 1) + '</span><span>' + (line ? paint(line) : ' ') + '</span></span>').join('') + '</pre></div>';
}
function head(s) { return '<div class="intro"><span class="tag">' + (s.label || '04 / CSS') + '</span><h2>' + s.title + '</h2><p>' + s.lead + '</p></div>'; }

// Предпросмотр страницы в «браузере»
function pageDoc(html, css, zoom = 0.8) {
  const base = location.href.replace(/[#?].*$/, '').replace(/[^/]*$/, '');
  return '<!doctype html><html><head><meta charset="utf-8"><base href="' + base + '" target="_blank"><style>html{zoom:' + zoom + '}@keyframes flash{0%,40%{box-shadow:inset 0 0 0 100vmax #c8f25a8c}100%{box-shadow:inset 0 0 0 100vmax #c8f25a00}}</style><style>' + css + '</style></head><body>' + html + '</body></html>';
}
function browser(html, css, caption = 'index.html', id = '', zoom = 0.8) {
  return '<div class="browser"><div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="addr">' + esc(caption) + '</span></div><iframe class="pv" tabindex="-1"' + (id ? ' id="' + id + '"' : '') + ' title="Предпросмотр страницы" srcdoc="' + esc(pageDoc(html, css, zoom)) + '"></iframe></div>';
}

function quiz(s, st) {
  const answered = Number.isInteger(st.answer);
  return '<div class="quiz-grid"><div class="quiz-left"><div class="quiz-question">' + esc(s.question) + '</div><div class="quiz-options">' + s.choices.map((c, i) => '<button class="answer-option ' + (answered ? (i === s.correct ? 'correct' : i === st.answer ? 'wrong' : '') : '') + ' ' + (st.answer === i ? 'selected' : '') + '" data-action="answer" data-value="' + i + '" aria-pressed="' + (st.answer === i) + '"><b>' + String.fromCharCode(65 + i) + '</b>' + esc(c) + '</button>').join('') + '</div>' + (answered ? '<div class="feedback ' + (st.answer === s.correct ? '' : 'warn') + '">' + (st.answer === s.correct ? '✓ Верно. ' : 'Не совсем. ') + rich(s.explain) + '</div><button class="small-btn" data-action="reset-answer">Ответить ещё раз ↺</button>' : '<p class="action-hint">Выберите вариант — появится разбор.</p>') + '</div><div class="quiz-right">' + codeWindow(s.code, { lang: s.lang, caption: s.file }) + '</div></div>';
}

function theoryView(s) {
  return '<div class="pair"><div class="pane left"><div class="pane-heading">КОД</div>' + codeWindow(s.code, { lang: s.lang, caption: s.file }) + '</div><div class="pane right theory-pane"><div class="pane-heading">ГЛАВНОЕ</div>' + s.items.map((x, i) => '<div class="concept"><span>' + String(i + 1).padStart(2, '0') + '</span><div><h3>' + esc(x[0]) + '</h3><p>' + rich(x[1]) + '</p>' + term(x[2]) + '</div></div>').join('') + '</div></div>';
}

function beforeAfter() {
  return '<div class="pair ba-grid"><div class="pane"><div class="pane-heading"><span>Только HTML</span><span>так было на уроке 3</span></div>' + browser(PAGE, '') + '</div>'
    + '<div class="pane"><div class="pane-heading"><span class="hl">HTML + style.css</span><span>сегодня</span></div>' + browser(PAGE, FINAL_CSS) + '</div></div>';
}

function tabsView(st) {
  const i = st.tab || 0, t = TABS[i];
  const verdict = { bad: ['✗', 'Не используем'], mid: ['~', 'Иногда'], good: ['✓', 'Так делаем'] }[t.verdict];
  return '<div class="tabs-row">' + TABS.map((x, k) => '<button class="tab-btn ' + (k === i ? 'active' : '') + '" data-action="tab" data-value="' + k + '"><span>' + (k + 1) + '</span>' + esc(x.name) + '</button>').join('') + '</div>'
    + '<div class="pair tabs-pair"><div class="pane left"><div class="pane-heading"><span>' + esc(t.title.toUpperCase()) + '</span><span>' + t.files.length + (t.files.length > 1 ? ' ФАЙЛА' : ' ФАЙЛ') + '</span></div>' + t.files.map((f) => codeWindow(f[2], { caption: f[0], lang: f[1] })).join('') + '</div>'
    + '<div class="pane right"><div class="pane-heading"><span>РЕЗУЛЬТАТ</span></div>' + browser(t.html, t.css) + '<div class="verdict ' + t.verdict + '"><b>' + verdict[0] + ' ' + verdict[1] + '</b><p>' + rich(t.text) + '</p></div></div></div>';
}

function anatomyView(st) {
  const idx = Math.max(0, Math.min(st.step || 0, ANATOMY.length - 1));
  const part = ANATOMY[idx][0];
  const P = (name, text, cls) => '<span class="ana token ' + cls + ' ' + (name === part ? 'on' : '') + '">' + text + '</span>';
  const decl = (prop, val) => '<span class="ana-decl ' + (part === 'decl' ? 'on' : '') + '">' + P('prop', prop, 'method') + P('colon', ':', 'operator') + ' ' + P('val', val, /^\d/.test(val) ? 'number' : 'string') + P('semi', ';', 'operator') + '</span>';
  const code = P('sel', 'h1', 'keyword') + ' ' + P('brace', '{', 'operator') + '\n  ' + decl('color', 'tomato') + '\n  ' + decl('font-size', '40px') + '\n' + P('brace', '}', 'operator');
  return '<div class="pair ana-pair"><div class="pane left"><div class="pane-heading"><span>style.css</span><span class="caps">' + (idx + 1) + ' / ' + ANATOMY.length + '</span></div><pre class="ana-code part-' + part + '">' + code + '</pre>'
    + '<div class="buttons"><button class="secondary" data-action="prev-step" ' + (idx === 0 ? 'disabled' : '') + '>← Шаг назад</button><button class="primary" data-action="next-step" ' + (idx === ANATOMY.length - 1 ? 'disabled' : '') + '>Следующий шаг →</button><button class="secondary" data-action="reset-step" title="Сначала">↺</button><span class="key-hint">Пробел — шаг · ← → — слайды</span></div></div>'
    + '<div class="pane right ana-list"><div class="pane-heading"><span>ЧАСТИ ПРАВИЛА</span><span>по-русски · in English</span></div>' + ANATOMY.map((x, k) => '<button class="ana-row ' + (k === idx ? 'on' : '') + (k < idx ? ' seen' : '') + '" data-action="set-step" data-value="' + k + '"><span class="ana-n">' + String(k + 1).padStart(2, '0') + '</span><span class="ana-name"><b>' + esc(x[1]) + '</b><em>' + esc(x[2]) + '</em></span><span class="ana-desc">' + rich(x[3]) + '</span></button>').join('') + '</div></div>';
}

function liveView(kind, st) {
  const d = LIVE[kind], total = d.rules.length;
  const idx = Math.max(0, Math.min(st.step || 0, total));
  const shown = d.rules.slice(0, idx).map((r) => r[0]);
  const cur = idx ? d.rules[idx - 1] : null;
  const flashSel = cur ? (cur[3] || (cur[0].includes('{') ? cur[0].split('{')[0].trim() : '')) : '';
  const applied = d.base + shown.join('\n') + (flashSel ? '\n' + flashSel + '{animation:flash 1.6s ease-out 1}' : '');
  // что добавляем на этом шаге — крупно
  const added = cur ? '<pre class="add-code">' + cur[0].split('\n').map((l) => '<span class="add-line">' + (hlCSS(l) || ' ') + '</span>').join('') + '</pre>' : '<div class="add-empty">Пока ничего. Жмите «Следующий шаг» →</div>';
  const text = cur ? rich(cur[1]) : esc(d.start);
  const steps = d.rules.map((r, k) => {
    const first = r[0].split('\n')[0].replace(/\s*\{$/, '');
    return '<button class="lv-step ' + (k + 1 === idx ? 'on' : k + 1 < idx ? 'done' : '') + '" data-action="set-step" data-value="' + (k + 1) + '"><span>' + (k + 1) + '</span><b>' + esc(first.startsWith('/*') ? 'a' : first) + '</b></button>';
  }).join('');
  return '<div class="pair live-pair"><div class="pane left"><div class="pane-heading"><span>РЕЗУЛЬТАТ</span><span>index.html</span></div>' + browser(PAGE, applied, 'index.html', '', 0.95) + '</div>'
    + '<div class="pane right"><div class="pane-heading"><span>ДОБАВЛЯЕМ</span><span class="caps">ШАГ ' + idx + ' / ' + total + '</span></div>'
    + '<div class="add-card">' + added + '<p class="add-text">' + text + '</p>' + (cur ? term(cur[2]) : '') + '</div>'
    + '<div class="lv-steps">' + steps + '</div>'
    + '<div class="buttons"><button class="secondary" data-action="prev-step" ' + (idx === 0 ? 'disabled' : '') + '>← Шаг назад</button><button class="primary" data-action="next-step" ' + (idx === total ? 'disabled' : '') + '>Следующий шаг →</button><button class="secondary" data-action="reset-step" title="Сначала">↺</button><span class="key-hint">Пробел — шаг</span></div></div></div>';
}
function webView(kind, st) {
  const d = WEB[kind], total = d.steps.length - 1;
  const idx = Math.max(0, Math.min(st.step || 0, total)), t = d.steps[idx];
  const css = d.base + (t.css.includes('{') ? '\n' + t.css : '');
  const page = (t.load ? '<link rel="stylesheet" href="' + t.load + '">' : '') + d.page(idx);
  const label = rich(t.label) + term(t.term);
  return '<div class="web-grid web-' + kind + '"><div class="pane web-html">' + codeWindow(t.html, { lang: 'html', caption: 'index.html', active: t.hh || [] }) + '</div>'
    + '<div class="pane web-css">' + codeWindow(t.css, { caption: 'style.css', active: t.ch || [] }) + '</div>'
    + '<div class="pane web-result"><div class="pane-heading"><span>РЕЗУЛЬТАТ</span><span class="caps">ШАГ ' + idx + ' / ' + total + '</span></div><div class="mem-step">' + label + '</div>' + browser(page, css, 'index.html', '', 0.95)
    + '<div class="buttons"><button class="secondary" data-action="prev-step" ' + (idx === 0 ? 'disabled' : '') + '>← Шаг назад</button><button class="primary" data-action="next-step" ' + (idx === total ? 'disabled' : '') + '>Следующий шаг →</button><button class="secondary" data-action="reset-step" title="Сначала">↺</button></div></div></div>';
}
const liveSteps = (s) => (s.type === 'live' ? LIVE[s.demo].rules.length : s.type === 'web' ? WEB[s.demo].steps.length - 1 : s.type === 'anatomy' ? ANATOMY.length - 1 : 0);

// Смеситель цвета
const hex2 = (n) => Number(n).toString(16).padStart(2, '0');
function colorView(st) {
  if (st.r === undefined) Object.assign(st, { r: 255, g: 99, b: 71 });
  const slider = (k, label) => '<label class="mx-row mx-' + k + '"><span>' + label + '</span><input type="range" min="0" max="255" value="' + st[k] + '" data-ch="' + k + '" aria-label="' + label + '"><output id="mx-' + k + '">' + st[k] + '</output></label>';
  return '<div class="pair color-pair"><div class="pane left"><div class="pane-heading">ТРИ ЗАПИСИ ОДНОГО ЦВЕТА</div>'
    + '<div class="fmt-card"><b>Имя</b><code>tomato</code><p>140 готовых названий на английском. Удобно для учёбы, но оттенков мало.</p></div>'
    + '<div class="fmt-card"><b>HEX</b><code>#ff6347</code><p># и три пары символов: красный · зелёный · синий от 00 до ff. Так цвета дают дизайнеры (Figma).</p></div>'
    + '<div class="fmt-card"><b>RGB</b><code>rgb(255, 99, 71)</code><p>Сколько красного, зелёного и синего — каждое от 0 до 255.</p></div></div>'
    + '<div class="pane right"><div class="pane-heading"><span>СМЕСИТЕЛЬ</span><span>двигайте ползунки</span></div>'
    + '<div class="mx-swatch" id="mxSwatch"><span>Кофейня «Утро»</span></div>' + slider('r', 'Красный') + slider('g', 'Зелёный') + slider('b', 'Синий')
    + '<div class="mx-out" id="mxOut"></div><div class="mx-presets">' + COLOR_PRESETS.map((p) => '<button data-action="preset-color" data-value="' + p.slice(1).join(',') + '"><i style="background:rgb(' + p.slice(1).join(',') + ')"></i>' + esc(p[0]) + '</button>').join('') + '</div></div></div>';
}
function paintMixer() {
  const st = state(), sw = document.getElementById('mxSwatch');
  if (!sw) return;
  const { r, g, b } = st;
  const hex = '#' + hex2(r) + hex2(g) + hex2(b);
  const name = COLOR_PRESETS.find((p) => p[1] === +r && p[2] === +g && p[3] === +b && /^[a-z]/.test(p[0]));
  sw.style.background = hex;
  sw.style.color = (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#22233c' : '#ffffff';
  ['r', 'g', 'b'].forEach((k) => { document.getElementById('mx-' + k).textContent = st[k]; });
  document.getElementById('mxOut').innerHTML = '<div>' + hlCSS('color: rgb(' + r + ', ' + g + ', ' + b + ');') + '</div><div>' + hlCSS('color: ' + hex + ';') + '</div><div>' + (name ? hlCSS('color: ' + name[0] + ';') : '<span class="mx-noname">/* у этого оттенка нет имени */</span>') + '</div>';
}

// DevTools
function devCSS(st, sel) {
  const off = st.off || {};
  let css = DEV_RULES.map((r, ri) => r.sel + '{' + r.decls.filter((d) => !off[ri + ':' + d[0]]).map((d) => d[0] + ':' + d[1]).join(';') + '}').join('');
  if (sel && sel !== 'body') css += sel + '{outline:2px dashed #7956f7;outline-offset:3px;background-color:#7956f71a}';
  return css;
}
function devtoolsView(st) {
  st.off = st.off || {};
  const sel = st.el || 'a';
  const own = DEV_RULES.map((r, ri) => ({ ...r, ri })).filter((r) => r.sel === sel);
  const ownProps = new Set(own.flatMap((r) => r.decls.filter((d) => !st.off[r.ri + ':' + d[0]]).map((d) => d[0])));
  const ua = DEV_UA[sel] || [];
  const uaProps = new Set(ua.map((d) => d[0]));
  const decl = (prop, val, ri, struck) => '<label class="dt-decl ' + (struck ? 'struck' : '') + '">' + (ri === undefined ? '<span class="dt-nobox"></span>' : '<input type="checkbox" data-off="' + ri + ':' + prop + '" ' + (st.off[ri + ':' + prop] ? '' : 'checked') + '>') + '<span><span class="dt-p">' + esc(prop) + '</span>: <span class="dt-v">' + (/^#/.test(val) ? '<i class="sw" style="background:' + val + '"></i>' : '') + esc(val) + '</span>;</span></label>';
  let styles = '';
  own.forEach((r) => { styles += '<div class="dt-rule"><div class="dt-sel">' + r.sel + ' {<span class="dt-src">style.css</span></div>' + r.decls.map((d) => decl(d[0], d[1], r.ri, st.off[r.ri + ':' + d[0]])).join('') + '<div class="dt-end">}</div></div>'; });
  if (ua.length) styles += '<div class="dt-rule ua"><div class="dt-sel">' + sel + ' {<span class="dt-src">стили браузера</span></div>' + ua.map((d) => decl(d[0], d[1], undefined, ownProps.has(d[0]))).join('') + '<div class="dt-end">}</div></div>';
  if (sel !== 'body') {
    const body = DEV_RULES[0];
    const inh = body.decls.filter((d) => INHERITED.includes(d[0]));
    styles += '<div class="dt-inh">Унаследовано от <b>body</b></div><div class="dt-rule"><div class="dt-sel">body {<span class="dt-src">style.css</span></div>' + inh.map((d) => decl(d[0], d[1], 0, st.off['0:' + d[0]] || ownProps.has(d[0]) || uaProps.has(d[0]))).join('') + '<div class="dt-end">}</div></div>';
  }
  return '<div class="pair dt-pair"><div class="pane left"><div class="pane-heading"><span>СТРАНИЦА</span><span>выбран: &lt;' + esc(sel) + '&gt;</span></div><div class="dt-banner ' + (st.msg ? 'on' : '') + '">' + (st.msg || 'Кликните по тегу в Elements, снимите галочку у свойства — и смотрите на страницу.') + '</div>' + browser(PAGE, devCSS(st, sel), 'index.html', '', 1) + '</div>'
    + '<div class="pane right"><div class="pane-heading"><span>DEVTOOLS · F12</span><span>Elements → Styles</span></div><div class="devtools"><div class="dt-tabs"><span class="on">Elements</span><span>Console</span><span>Sources</span></div><div class="dt-body"><div class="dt-tree">'
    + DEV_TREE.map(([t, lvl, label]) => '<button class="dt-node ' + (t === sel ? 'on' : '') + '" style="padding-left:' + (10 + lvl * 16) + 'px" data-action="dt-pick" data-value="' + t + '">' + hlHTML(label) + '</button>').join('')
    + '</div><div class="dt-styles"><div class="dt-subtabs"><span class="on">Styles</span><span>Computed</span></div>' + styles + '</div></div></div></div></div>';
}

// Песочница: прозрачный textarea поверх подсвеченного кода
function pgPaint(css) {
  let inComment = false;
  return String(css).split('\n').map((line) => {
    if (!line) return '';
    let pre = '', rest = line;
    if (inComment) { const end = line.indexOf('*/'); if (end < 0) return tok(line, 'comment'); pre = tok(line.slice(0, end + 2), 'comment'); rest = line.slice(end + 2); inComment = false; }
    const open = rest.lastIndexOf('/*'); if (open >= 0 && rest.indexOf('*/', open) < 0) inComment = true;
    return pre + hlCSS(rest);
  }).join('\n') + '\n';
}
function playgroundView(st) {
  if (st.css === undefined) st.css = PLAY_PRESETS['Кофейня'];
  return '<div class="pair"><div class="pane left"><div class="pane-heading"><span>style.css — можно печатать</span><span class="pg-presets">' + Object.keys(PLAY_PRESETS).map((k) => '<button class="small-btn" data-action="play-preset" data-value="' + esc(k) + '">' + esc(k) + '</button>').join('') + '</span></div><div class="pg-wrap"><pre class="pg-hl" id="pgHl" aria-hidden="true">' + pgPaint(st.css) + '</pre><textarea class="pg-text" id="pgText" spellcheck="false" aria-label="CSS-код">' + esc(st.css) + '</textarea></div></div>'
    + '<div class="pane right"><div class="pane-heading"><span>РЕЗУЛЬТАТ</span><span>обновляется при вводе</span></div>' + browser(PAGE, st.css, 'index.html', 'pgFrame') + '</div></div>';
}

function bugsView(st) {
  st.open = st.open || {};
  const i = st.bug || 0, b = BUGS[i], open = st.open[i];
  const cap = b.lang === 'html' ? 'index.html' : 'style.css';
  return '<div class="bugs2"><div class="bug-list">' + BUGS.map((x, k) => '<button class="bug-tab ' + (k === i ? 'active' : '') + ' ' + (st.open[k] ? 'done' : '') + '" data-action="bug-pick" data-value="' + k + '"><span>' + String(k + 1).padStart(2, '0') + '</span>' + esc(x.title) + '</button>').join('') + '</div>'
    + '<div class="bug-main"><div class="bug-col"><div class="caps bad-cap">✗ С ОШИБКОЙ</div>' + codeWindow(b.bad, { lang: b.lang, caption: cap }) + '</div>'
    + (open ? '<div class="bug-col"><div class="caps good-cap">✓ ИСПРАВЛЕНО</div>' + codeWindow(b.good, { lang: b.lang, caption: cap }) + '<p class="bug-why">' + rich(b.why) + '</p></div>'
      : '<div class="bug-hidden"><p>Почему не работает? Ответьте вслух.</p><button class="primary" data-action="bug" data-value="' + i + '">Показать исправление</button></div>')
    + '</div></div>';
}

function practice(s, st) {
  const p = PRACTICE[s.practice];
  const joint = s.practice === 'joint';
  const remaining = st.remaining ?? s.minutes * 60;
  return '<div class="practice-layout"><div class="task-list"><div class="pane-heading">ШАГ → ЧТО ПИШЕМ → ' + (joint ? 'ПОВТОРЯЕМ / НОВОЕ' : 'ПОДСКАЗКА') + '<span>index.html · style.css</span></div>'
    + p.tasks.map((x, i) => '<div class="task-step pr-row"><i>' + String(i + 1).padStart(2, '0') + '</i><div class="pr-btn">' + esc(x[0]) + '</div>' + (/→/.test(x[1]) ? '<code class="ic">' + esc(x[1]) + '</code>' : inlineCode(x[1])) + '<div class="pr-ret">→ ' + esc(x[2]) + '</div></div>').join('')
    + '<div class="tip">В файлах нет кода — только <b>ТЗ в комментариях</b>: что сделать, зачем и «Проверка». Пишем всё с нуля под каждым пунктом.</div></div>'
    + '<div class="task-side"><div class="goal"><span class="caps">' + esc(p.caption) + '</span><h3>' + esc(p.title) + '</h3>'
    + '<ol class="flow"><li>Распаковать ZIP, открыть папку в <b>VS Code</b></li><li>Открыть <b>index.html</b> в браузере (двойной клик)</li><li>Пункт ТЗ → код → <b>Ctrl+S</b> → <b>F5</b> в браузере</li></ol>'
    + '<div class="minutes" id="timerDisplay" role="timer">' + formatTime(remaining) + '</div><div class="buttons"><button class="primary" data-action="timer">' + (st.running ? 'Пауза' : 'Старт таймера') + '</button><button class="secondary" data-action="timer-reset">Сброс</button></div></div>'
    + '<div class="download"><div class="file-label">Файлы практики<small>' + esc(p.files) + '</small></div><a href="' + p.spec + '" target="_blank" rel="noopener" class="open-link">ТЗ</a><a href="' + p.zip + '" download>↓ ZIP</a></div></div></div>';
}

function summaryView(s) {
  const buttons = '<div class="buttons sum-actions"><a class="primary" href="./materials/SUMMARY.md" download>↓ Шпаргалка .md</a><button class="secondary" data-action="print">Печать / PDF</button></div>';
  if (s.part === 'exceptions') {
    return '<div class="exc-grid">' + EXCEPTIONS.map((x, i) => '<div class="exc-card"><span>' + String(i + 1).padStart(2, '0') + '</span><p>' + x + '</p></div>').join('') + '</div>' + buttons;
  }
  return '<div class="sum-grid">' + SUMMARY.map(([h, list], i) => '<div class="sum-card"><div class="sum-n">' + String(i + 1).padStart(2, '0') + '</div><h3>' + h + '</h3><ul>' + list.map((x) => '<li>' + x + '</li>').join('') + '</ul></div>').join('') + '</div>' + buttons;
}

function cover() {
  return '<div class="cover-grid"><div class="cover-copy"><div class="overline"><i></i> HTML &amp; CSS <b></b> УРОК 4</div><h1>Один файл.<br><span>Весь стиль сайта.</span></h1><p>Подключаем CSS и даём странице цвет, фон и шрифт — без единой правки в HTML.</p><div class="pills"><span>&lt;link&gt;</span><span>селектор { }</span><span>color</span><span>background-color</span><span>font-family</span></div><button class="primary" data-action="next-slide">Начать урок →</button></div>'
    + '<div class="cover-art"><div class="art-glow"></div><div class="art-glow two"></div><div class="art-stage"><div class="art-card cover-ba"><div class="art-heading"><span>CSS LAB / 04</span><span>до → после</span></div>'
    + '<div class="cv-split"><div class="cv-page plain"><b>Кофейня «Утро»</b><span>Свежий кофе и выпечка</span><span>• Капучино — 180 сом</span><u>Instagram</u></div><div class="cv-page styled"><b>Кофейня «Утро»</b><span>Свежий кофе и выпечка</span><span>• Капучино — 180 сом</span><em>Instagram</em></div></div>'
    + '<div class="art-input">' + hlCSS('h1 { color: #6f4e37; font-family: Georgia; }') + '</div></div></div></div></div>';
}
function finish() {
  return '<div class="closing"><div class="closing-mark">{ }</div><span class="tag green">УРОК 4 / ГОТОВО</span><h1>HTML — что.<br><em>CSS — как.</em></h1><p>Файл стилей подключаем через link. Правило: селектор, свойство, значение. Цвет, фон и шрифт body наследуют все — кроме тех, у кого свой стиль.</p><div class="end-tags"><span>&lt;link rel="stylesheet"&gt;</span><span>color · background-color</span><span>font-family</span><span>нижнее побеждает</span></div><div class="buttons" style="justify-content:center"><a class="primary" href="./materials/homework.zip" download>↓ Домашнее задание</a><a class="secondary" href="./materials/view.html?p=homework" target="_blank" rel="noopener">ТЗ домашки</a><a class="secondary" href="./materials/SUMMARY.md" download>↓ Шпаргалка</a></div><p class="lesson-note">Дальше: блочная модель — margin, padding, border.</p></div>';
}

function formatTime(t) { return String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0'); }
function toggleTimer() { const st = state(); st.remaining ??= slides[current].minutes * 60; st.running = !st.running; render(false); }
setInterval(() => {
  Object.keys(store).forEach((k) => {
    const st = store[k];
    if (!st.running) return;
    if (st.remaining > 0) st.remaining--;
    if (st.remaining === 0) { st.running = false; if (Number(k) === current) { render(false); notify('Время практики закончилось'); } }
    if (Number(k) === current) { const el = document.getElementById('timerDisplay'); if (el) el.textContent = formatTime(st.remaining); }
  });
}, 1000);

function render(isNavigation) {
  const s = slides[current], st = state();
  let content = '';
  switch (s.type) {
    case 'cover': content = cover(); break;
    case 'quiz': content = head(s) + quiz(s, st); break;
    case 'theory': content = head(s) + theoryView(s); break;
    case 'beforeafter': content = head(s) + beforeAfter(st); break;
    case 'tabs': content = head(s) + tabsView(st); break;
    case 'anatomy': content = head(s) + anatomyView(st); break;
    case 'live': content = head(s) + liveView(s.demo, st); break;
    case 'web': content = head(s) + webView(s.demo, st); break;
    case 'color': content = head(s) + colorView(st); break;
    case 'devtools': content = head(s) + devtoolsView(st); break;
    case 'playground': content = head(s) + playgroundView(st); break;
    case 'bugs': content = head(s) + bugsView(st); break;
    case 'practice': content = head(s) + practice(s, st); break;
    case 'summary': content = head(s) + summaryView(s); break;
    case 'glossary': content = head(s) + glossaryView(); break;
    case 'end': content = finish(); break;
  }
  stage.innerHTML = '<section class="slide active ' + (isNavigation ? '' : 'instant') + ' ' + (s.type === 'cover' ? 'cover' : '') + ' type-' + s.type + '" aria-label="Слайд ' + (current + 1) + ' из ' + slides.length + '">' + (s.type === 'cover' || s.type === 'end' ? content : '<div class="slide-content">' + content + '</div>') + '</section>';
  if (s.type === 'color') paintMixer();
  stage.querySelectorAll('.sum-card code, .exc-card code').forEach((c) => { c.outerHTML = inlineCode(c.textContent); });
  fitCode();
  fitPreviews();

  document.getElementById('sectionTitle').textContent = s.section;
  document.getElementById('currentTitle').textContent = removeTags(s.title);
  document.getElementById('slideCounter').textContent = String(current + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
  document.getElementById('segments').innerHTML = slides.map((_, i) => '<i class="' + (i < current ? 'done' : i === current ? 'now' : '') + '"></i>').join('');
  document.getElementById('prevBtn').disabled = current === 0;
  document.getElementById('nextBtn').disabled = current === slides.length - 1;
  document.querySelectorAll('[data-slide]').forEach((b, i) => { b.classList.toggle('active', i === current); b.setAttribute('aria-current', i === current ? 'page' : 'false'); });
  document.getElementById('notesContent').innerHTML = '<h3>' + esc(removeTags(s.title)) + '</h3><p>' + esc(s.notes || '') + '</p><p><b>План на слайд:</b> ' + s.minutes + ' мин.</p>';
}
// Подбираем крупнейший шрифт, при котором код целиком помещается в окно
function fitCode() {
  // помещается ли код: высота — по scrollHeight, ширина — по самой длинной строке
  const fits = (pre) => {
    if (pre.scrollHeight > pre.clientHeight + 1) return false;
    if (pre.closest('.web-html')) return true; // длинные строки переносятся
    const lines = pre.querySelectorAll('.code-line');
    if (!lines.length) return pre.scrollWidth <= pre.clientWidth + 1;
    let widest = 0;
    lines.forEach((l) => { widest = Math.max(widest, l.firstElementChild.offsetWidth + l.lastElementChild.offsetWidth); });
    return widest <= pre.clientWidth - 48;
  };
  stage.querySelectorAll('.code-pre, .ana-code, .add-code').forEach((pre) => {
    const max = pre.classList.contains('ana-code') ? 104 : pre.classList.contains('add-code') ? 40 : pre.closest('.quiz-right, .bug-col') ? 46 : 40;
    let lo = 18, hi = max;
    pre.style.overflow = '';
    pre.style.fontSize = hi + 'px';
    if (!fits(pre)) {
      while (hi - lo > 0.5) {
        const mid = (lo + hi) / 2;
        pre.style.fontSize = mid + 'px';
        if (fits(pre)) lo = mid; else hi = mid;
      }
      pre.style.fontSize = lo + 'px';
    }
    // даже на минимальном шрифте не влезает — разрешаем прокрутку и показываем активную строку
    if (!fits(pre)) {
      pre.style.overflow = 'auto';
      const act = pre.querySelector('.active-line');
      if (act) pre.scrollTop = Math.max(0, act.offsetTop - pre.clientHeight / 3);
    }
  });
}
// Масштаб страницы в предпросмотре: текст должен читаться с последней парты
function fitPreviews() {
  stage.querySelectorAll('.pv').forEach((f) => {
    const apply = () => { const d = f.contentDocument; if (!d || !d.documentElement) return; d.documentElement.style.zoom = Math.max(1.5, Math.min(2, f.clientHeight / 300)); };
    f.addEventListener('load', apply); apply();
  });
}
let fitTimer;
window.addEventListener('resize', () => { clearTimeout(fitTimer); fitTimer = setTimeout(() => { fitCode(); fitPreviews(); }, 80); });
if (document.fonts) document.fonts.ready.then(fitCode);
function fromHash() { const h = Number(location.hash.replace('#', '')); return Number.isInteger(h) && h >= 1 && h <= slides.length ? h - 1 : 0; }
function go(i, push = true) { current = Math.max(0, Math.min(slides.length - 1, i)); if (push && location.hash !== '#' + (current + 1)) history.replaceState(null, '', '#' + (current + 1)); render(true); }
function closeOverlays() { document.getElementById('outlineOverlay').hidden = true; document.getElementById('notesOverlay').hidden = true; }
function toggleOverlay(id) { const el = document.getElementById(id), open = el.hidden; closeOverlays(); el.hidden = !open; if (open) el.querySelector('button')?.focus(); }
function notify(msg) { const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('visible'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => el.classList.remove('visible'), 1900); }
function stepBy(delta) { const st = state(), max = liveSteps(slides[current]); st.step = Math.max(0, Math.min(max, (st.step || 0) + delta)); render(false); }

stage.addEventListener('click', (e) => {
  const node = e.target.closest('[data-action]');
  if (!node) return;
  node.blur();
  const action = node.dataset.action, st = state(), v = node.dataset.value;
  if (action === 'next-slide') { go(current + 1); return; }
  if (action === 'answer') { st.answer = Number(v); render(false); return; }
  if (action === 'reset-answer') { delete st.answer; render(false); return; }
  if (action === 'timer') { toggleTimer(); return; }
  if (action === 'timer-reset') { st.remaining = slides[current].minutes * 60; st.running = false; render(false); return; }
  if (action === 'reset-step') { st.step = 0; render(false); return; }
  if (action === 'prev-step') { stepBy(-1); return; }
  if (action === 'next-step') { stepBy(1); return; }
  if (action === 'set-step') { st.step = Number(v); render(false); return; }
  if (action === 'ba') { st.on = v === '1'; render(false); return; }
  if (action === 'tab') { st.tab = Number(v); render(false); return; }
  if (action === 'preset-color') { const [r, g, b] = v.split(',').map(Number); Object.assign(st, { r, g, b }); ['r', 'g', 'b'].forEach((k) => { stage.querySelector('[data-ch="' + k + '"]').value = st[k]; }); paintMixer(); return; }
  if (action === 'dt-pick') { st.el = v; st.msg = 'Выбран ' + inlineCode('<' + v + '>') + ' — справа все стили, которые на него действуют.'; render(false); return; }
  if (action === 'play-preset') { st.css = PLAY_PRESETS[v]; render(false); return; }
  if (action === 'bug') { st.open = st.open || {}; st.open[Number(v)] = true; render(false); return; }
  if (action === 'bug-pick') { st.bug = Number(v); render(false); return; }
  if (action === 'print') { window.print(); }
});
stage.addEventListener('input', (e) => {
  const st = state(), t = e.target;
  if (t.dataset.ch) { st[t.dataset.ch] = Number(t.value); paintMixer(); return; }
  if (t.id === 'pgText') {
    st.css = t.value;
    const hlBox = document.getElementById('pgHl'); if (hlBox) hlBox.innerHTML = pgPaint(st.css);
    clearTimeout(playTimer);
    playTimer = setTimeout(() => { const f = document.getElementById('pgFrame'); if (f) f.srcdoc = pageDoc(PAGE, st.css); }, 150);
  }
});
stage.addEventListener('scroll', (e) => {
  if (e.target.id === 'pgText') { const h = document.getElementById('pgHl'); if (h) { h.scrollTop = e.target.scrollTop; h.scrollLeft = e.target.scrollLeft; } }
}, true);
stage.addEventListener('keydown', (e) => {
  if (e.target.id === 'pgText' && e.key === 'Tab') {
    e.preventDefault(); const t = e.target, a = t.selectionStart;
    t.setRangeText('  ', a, t.selectionEnd, 'end'); t.dispatchEvent(new Event('input', { bubbles: true }));
  }
});
stage.addEventListener('change', (e) => {
  const t = e.target;
  if (t.dataset.off) {
    const st = state(); st.off = st.off || {}; st.off[t.dataset.off] = !t.checked;
    const [ri, prop] = t.dataset.off.split(':');
    const rule = DEV_RULES[ri], val = rule.decls.find((d) => d[0] === prop)[1];
    st.msg = (t.checked ? '✓ Включили ' : '✕ Выключили ') + inlineCode(prop + ': ' + val + ';') + ' в правиле ' + inlineCode(rule.sel + ' { }') + (t.checked ? '' : ' — что изменилось на странице?');
    render(false);
  }
});
document.getElementById('prevBtn').addEventListener('click', () => go(current - 1));
document.getElementById('nextBtn').addEventListener('click', () => go(current + 1));
document.getElementById('outlineBtn').addEventListener('click', () => toggleOverlay('outlineOverlay'));
document.getElementById('notesBtn').addEventListener('click', () => toggleOverlay('notesOverlay'));
function setThemeLabel() { const light = document.body.classList.contains('light'); document.getElementById('themeToggle').innerHTML = light ? '<span>☾</span>Тёмная' : '<span>☀</span>Светлая'; }
function toggleTheme() { document.body.classList.toggle('light'); try { localStorage.setItem('css-lab-theme-v6', document.body.classList.contains('light') ? 'light' : 'dark'); } catch (e) { /* */ } setThemeLabel(); }
document.getElementById('themeBtn').addEventListener('click', toggleTheme);
document.getElementById('themeToggle').addEventListener('click', (e) => { e.currentTarget.blur(); toggleTheme(); });
document.getElementById('fullscreenBtn').addEventListener('click', () => { if (document.fullscreenElement) document.exitFullscreen?.(); else document.documentElement.requestFullscreen?.(); });
document.querySelectorAll('[data-close]').forEach((n) => n.addEventListener('click', closeOverlays));
document.getElementById('outlineList').innerHTML = slides.map((s, i) => '<button type="button" data-slide="' + i + '"><strong>' + String(i + 1).padStart(2, '0') + '</strong><span>' + esc(removeTags(s.title)) + '</span></button>').join('');
document.getElementById('outlineList').addEventListener('click', (e) => { const n = e.target.closest('[data-slide]'); if (n) { closeOverlays(); go(Number(n.dataset.slide)); } });
window.addEventListener('hashchange', () => { const next = fromHash(); if (next !== current) go(next, false); });
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeOverlays(); return; }
  if (!document.getElementById('outlineOverlay').hidden || !document.getElementById('notesOverlay').hidden) return;
  const typing = e.target && (e.target.tagName === 'TEXTAREA' || e.target.isContentEditable || (e.target.tagName === 'INPUT' && /^(text|search|email|number)$/.test(e.target.type)));
  if (typing) return;
  const s = slides[current];
  if ((s.type === 'live' || s.type === 'anatomy') && (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowDown')) { e.preventDefault(); stepBy(1); return; }
  if ((s.type === 'live' || s.type === 'anatomy') && e.key === 'ArrowUp') { e.preventDefault(); stepBy(-1); return; }
  if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); go(current + 1); return; }
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(current - 1); return; }
  if (e.key === 'Home') { e.preventDefault(); go(0); } else if (e.key === 'End') { e.preventDefault(); go(slides.length - 1); }
  else if (e.key.toLowerCase() === 'g') toggleOverlay('outlineOverlay');
  else if (e.key.toLowerCase() === 'n') toggleOverlay('notesOverlay');
  else if (e.key.toLowerCase() === 't') document.getElementById('themeBtn').click();
  else if (e.key.toLowerCase() === 'f') document.getElementById('fullscreenBtn').click();
}, true);
try { if (localStorage.getItem('css-lab-theme-v6') === 'dark') document.body.classList.remove('light'); else document.body.classList.add('light'); } catch (e) { document.body.classList.add('light'); }
setThemeLabel();
// Холст 1920×1080 масштабируется под окно
const deck = document.getElementById('deck');
function scaleDeck() { deck.style.setProperty('--s', Math.min(innerWidth / 1920, innerHeight / 1080)); }
scaleDeck();
window.addEventListener('resize', scaleDeck);
// Панель настроек появляется при движении мыши и прячется через 2.5 с
const hud = document.getElementById('hud');
let hudTimer;
window.addEventListener('mousemove', () => { hud.classList.add('visible'); clearTimeout(hudTimer); hudTimer = setTimeout(() => { if (!hud.matches(':hover')) hud.classList.remove('visible'); }, 2500); });
if (!location.hash) history.replaceState(null, '', '#1');
current = fromHash();
render(true);
