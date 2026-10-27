"use strict";
/* HTML & CSS · Урок 4 · Подключение CSS: цвет, фон, шрифт
   Слайды описаны данными ниже. Типы: cover, quiz, theory, beforeafter, tabs, anatomy, live, color, devtools,
   playground, bugs, practice, summary, end. */

// ───────── Страница-пример для всех предпросмотров
const PAGE = '<h1>Кофейня «Утро»</h1>\n<p>Свежий кофе с 8:00. Мы в <a href="https://instagram.com">Instagram</a> — пишите!</p>\n<h2>Меню</h2>\n<ul>\n  <li>Капучино — 180 сом</li>\n  <li>Латте — 200 сом</li>\n  <li>Круассан — 120 сом</li>\n</ul>\n<img src="assets/coffee.svg" alt="Чашка кофе">';

const FINAL_CSS = '/* фон и текст всей страницы */\nbody {\n  background-color: #fdf6ec;\n  color: #3b2f2f;\n  font-family: Arial, sans-serif;\n  line-height: 1.6;\n}\n\n/* заголовки */\nh1, h2 {\n  font-family: Georgia, serif;\n  color: #6f4e37;\n}\n\nh1 {\n  font-size: 44px;\n  text-align: center;\n}\n\n/* пункты меню */\nli {\n  color: #b5651d;\n  font-size: 18px;\n}\n\n/* ссылки */\na {\n  color: #b5651d;\n  font-weight: bold;\n  text-decoration: none;\n}';

// ───────── Пошаговые живые демо: каждое правило включается по очереди
const LIVE = {
  color: {
    base: '',
    start: 'Страница без CSS: белый фон, чёрный текст, шрифт браузера. Жмите «Следующий шаг».',
    rules: [
      ['body {\n  background-color: #fdf6ec;\n}', 'body — вся страница. Фон стал кремовым.'],
      ['p {\n  color: #6b5b53;\n}', 'p — ВСЕ абзацы сразу. Селектор по тегу выбирает каждый такой тег на странице.'],
      ['h1, h2 {\n  color: #6f4e37;\n}', 'Через запятую — одно правило сразу для h1 и h2. Не нужно писать два раза.'],
      ['li {\n  color: #b5651d;\n}', 'li — пункты списка. Маркеры-точки перекрасились вместе с текстом.'],
      ['a {\n  color: #b5651d;\n  background-color: #ffe2b8;\n}', 'Фон можно дать любому тегу, не только странице: у ссылки появилась «подсветка».'],
    ],
  },
  font: {
    base: 'body{background-color:#fdf6ec}p{color:#6b5b53}h1,h2{color:#6f4e37}li{color:#b5651d}a{color:#b5651d}',
    start: 'Цвета с прошлого демо уже подключены. Теперь меняем только шрифт.',
    rules: [
      ['body {\n  font-family: Arial, sans-serif;\n}', 'Шрифт для body — сменился шрифт ВСЕЙ страницы, даже у заголовков. Это наследование — разберём через слайд.'],
      ['h1 {\n  font-family: Georgia, serif;\n  font-size: 44px;\n  text-align: center;\n}', 'У h1 свой шрифт с засечками, размер 44px и выравнивание по центру.'],
      ['h2 {\n  font-weight: normal;\n}', 'Заголовки жирные по умолчанию. normal убирает жирность, bold — наоборот добавляет.'],
      ['p {\n  font-size: 18px;\n  line-height: 1.6;\n}', 'line-height — высота строки. 1.6 = в 1.6 раза больше шрифта: текст «дышит».'],
      ['li {\n  font-style: italic;\n}', 'font-style: italic — курсив.'],
      ['a {\n  font-weight: bold;\n  text-decoration: none;\n}', 'text-decoration: none убирает подчёркивание у ссылки.'],
    ],
  },
  inherit: {
    base: '',
    start: 'Чистая страница. Пишем стили только для одного тега — body.',
    rules: [
      ['body {\n  color: #6f4e37;\n  font-family: Georgia, serif;\n}', 'Писали только для body, а поменялось ВСЁ внутри: h1, p, li. Дети наследуют цвет и шрифт от родителя.'],
      ['/* а ссылка осталась синей! */', 'Ссылка не унаследовала цвет: у a есть свой цвет от браузера. Свой стиль тега сильнее унаследованного.'],
      ['a {\n  color: #b5651d;\n}', 'Чтобы перекрасить ссылку — пишем правило именно для a.'],
      ['h1 {\n  font-family: Arial, sans-serif;\n}', 'Так же работает и наше правило: h1 со своим шрифтом не слушает body.'],
    ],
  },
};

// ───────── Слайды
const slides = [
  { type: 'cover', title: 'Подключение CSS', section: 'Начало', minutes: 1, notes: 'Сегодня страница из прошлого урока получает внешний вид. План на 90 минут: 5 — разминка и «до/после», 40 — теория с живыми демо, 25 — делаем вместе, 15 — сами, 5 — шпаргалка. Всё, что на слайдах, ученики увидят в практике.' },
  { type: 'quiz', label: '02 / РАЗМИНКА', section: 'Разминка', title: 'Вспомним <em>img</em>', lead: 'Прошлый урок. Сначала ответ вслух, потом кнопка.', minutes: 2, lang: 'html', file: 'index.html',
    code: '<h2>Наш кофе</h2>\n<img src="img/coffee.jpg">\n<a href="menu.html">Меню</a>', question: 'Чего не хватает у картинки?', choices: ['alt — описания картинки', 'href — адреса', 'закрывающего тега </img>', 'Ничего, всё верно'], correct: 0,
    explain: 'img — одиночный тег, закрывать не нужно. src — путь к файлу, alt — текст, если картинка не загрузилась (и для незрячих). Адрес href — у ссылки a.', notes: 'Если путаются в src/href — напомните: src = «откуда взять файл», href = «куда перейти». Сегодня href понадобится ещё раз — в теге link.' },
  { type: 'beforeafter', label: '03 / ЗАЧЕМ', section: 'Зачем CSS', title: 'HTML — <em>что</em> на странице. CSS — <em>как</em> выглядит', lead: 'Это одна и та же страница. Отличается только файл style.css. Нажмите переключатель.', minutes: 3, notes: 'Сначала покажите страницу без CSS: «так выглядит ваша домашка с прошлого урока». Потом включите. Скажите: к концу урока каждый сделает такую же, и каждое свойство слева вы сегодня разберёте.' },
  { type: 'tabs', label: '04 / ПОДКЛЮЧИТЬ', section: 'Подключение', title: 'Три способа <em>подключить CSS</em>', lead: 'Все три работают. Но на реальных сайтах — только третий. Переключайте вкладки.', minutes: 4, notes: 'Пройдите все три вкладки по порядку. Главный вопрос группе: «на сайте 20 страниц — где менять цвет заголовков?» Атрибут — на каждом теге, style — на каждой странице, link — в одном файле.' },
  { type: 'theory', label: '05 / LINK', section: 'Подключение', title: 'Тег <em>link</em> — мост к файлу стилей', lead: 'Пишем в head, рядом с title. Один раз — на каждой странице сайта.', minutes: 2, lang: 'html', file: 'index.html',
    code: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>Кофейня</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Кофейня «Утро»</h1>\n</body>\n</html>',
    items: [['rel="stylesheet"', 'Говорит браузеру: «этот файл — таблица стилей». Без rel файл не подключится.'], ['href="style.css"', 'Путь к файлу — как src у картинки. Файл в папке css → href="css/style.css".'], ['Одиночный тег', 'Как img — без закрывающего. Место — внутри head.']], notes: 'Свяжите с уроком 3: путь в href работает так же, как путь у img. VS Code: напишите link и нажмите Tab — Emmet допишет rel и href.' },
  { type: 'anatomy', label: '06 / ПРАВИЛО', section: 'Синтаксис', title: 'Из чего состоит <em>CSS-правило</em>', lead: 'Нажимайте «Следующий шаг» — подсветится каждая часть.', minutes: 3, notes: 'Пусть ученики хором называют части: селектор, свойство, значение. Особо отметьте точку с запятой — это ошибка №1 на практике.' },
  { type: 'quiz', label: '07 / ПРОВЕРКА', section: 'Синтаксис', title: 'Найдите <em>ошибку</em>', lead: 'Заголовок не покраснел. Почему?', minutes: 1, lang: 'css', file: 'style.css',
    code: 'h1 {\n  color red;\n}', question: 'Что не так?', choices: ['Нет двоеточия после color', 'red нужно в кавычках', 'Нужно .h1 с точкой', 'Всё верно'], correct: 0,
    explain: 'Свойство и значение разделяет двоеточие: color: red; Браузер не покажет ошибку — он просто пропустит строку.', notes: '' },
  { type: 'theory', label: '08 / СЕЛЕКТОРЫ', section: 'Синтаксис', title: 'Селектор по <em>тегу</em>', lead: 'Пишем имя тега без < > — и правило применяется ко всем таким тегам на странице.', minutes: 3, lang: 'css', file: 'style.css',
    code: '/* все абзацы страницы */\np {\n  color: gray;\n}\n\n/* одно правило для h1 и h2 */\nh1, h2 {\n  color: navy;\n}\n\n/* все пункты в ul и ol */\nli {\n  color: teal;\n}',
    items: [['По тегу', 'p { … } — красит каждый p на странице. Пишем без угловых скобок.'], ['Через запятую', 'h1, h2 { … } — одно правило на несколько тегов.'], ['Комментарий', '/* … */ — заметка для человека. Браузер её пропускает.']], notes: 'Выбирать отдельный элемент (только этот абзац) научимся через классы — это будет позже. Сегодня хватает тегов.' },
  { type: 'color', label: '09 / ЦВЕТ', section: 'Цвет и фон', title: 'Три способа <em>записать цвет</em>', lead: 'Двигайте ползунки: один и тот же цвет можно записать тремя способами.', minutes: 4, notes: 'Сначала покажите имена (tomato, navy) — проще всего. Потом RGB: «сколько красного, зелёного и синего от 0 до 255». HEX — те же три числа, только короче. В дизайн-макетах почти всегда HEX — его копируют из Figma.' },
  { type: 'live', demo: 'color', label: '10 / ЦВЕТ', section: 'Цвет и фон', title: '<em>color</em> и <em>background-color</em> — по шагам', lead: 'color — цвет текста. background-color — цвет фона. Слева правило, справа — что изменилось.', minutes: 4, notes: 'На каждом шаге спрашивайте до нажатия: «что сейчас поменяется?» Частая путаница: хотят покрасить текст, а пишут background-color.' },
  { type: 'quiz', label: '11 / ПРОВЕРКА', section: 'Цвет и фон', title: 'Куда <em>пропал текст</em>?', lead: 'Текст на странице есть, но его не видно.', minutes: 1, lang: 'css', file: 'style.css',
    code: 'body {\n  background-color: #ffffff;\n}\n\np {\n  color: #ffffff;\n}', question: 'Почему абзац не видно?', choices: ['#ffffff — белый текст на белом фоне', 'Неправильный HEX', 'p не наследует цвет', 'Нужно rgb() вместо HEX'], correct: 0,
    explain: '#ffffff — белый. Белый текст на белом фоне есть, но его не видно. Цвет текста и фона должны контрастировать.', notes: 'Попросите выделить текст мышкой — он «появится». Хороший момент сказать про контраст и читаемость.' },
  { type: 'live', demo: 'font', label: '12 / ШРИФТ', section: 'Шрифт', title: 'Шрифт, размер, <em>начертание</em>', lead: 'Шесть свойств, которые делают текст «дизайнерским».', minutes: 4, notes: 'font-family: всегда с запасным вариантом через запятую. Если у пользователя нет Georgia, браузер возьмёт любой serif. Имена с пробелом — в кавычках: "Times New Roman".' },
  { type: 'live', demo: 'inherit', label: '13 / НАСЛЕДОВАНИЕ', section: 'Наследование', title: 'Дети <em>наследуют</em> от родителя', lead: 'Цвет и шрифт текста переходят от body ко всему, что внутри. Но не всегда.', minutes: 3, notes: 'Вспомните вложенность с урока 2: всё внутри body — его «дети». Поэтому общий шрифт и цвет пишем один раз для body. Исключение — ссылка: у неё свой цвет от браузера.' },
  { type: 'theory', label: '14 / КАСКАД', section: 'Каскад', title: 'Кто <em>победит</em>?', lead: 'Если два правила спорят за одно свойство — побеждает нижнее. Остальные свойства складываются.', minutes: 2, lang: 'css', file: 'style.css',
    code: 'p {\n  color: gray;\n  font-size: 18px;\n}\n\np {\n  color: navy;   /* ниже — побеждает */\n}\n\n/* итог для p:\n   color: navy\n   font-size: 18px */',
    items: [['Ниже — главнее', 'Одинаковый селектор, одно свойство → работает то, что написано позже.'], ['Правила складываются', 'font-size из первого правила никуда не делся.'], ['style="…" сильнее файла', 'Атрибут перебивает style.css — поэтому его и не используем.']], notes: 'Слово «каскад» — это и есть Cascading в CSS (Cascading Style Sheets). Подробно про силу селекторов — когда пройдём классы.' },
  { type: 'quiz', label: '15 / ПРОВЕРКА', section: 'Каскад', title: 'Каким будет <em>абзац</em>?', lead: 'Подумайте про оба правила.', minutes: 1, lang: 'css', file: 'style.css',
    code: 'p {\n  color: red;\n  font-size: 20px;\n}\n\np {\n  color: green;\n}', question: 'Как будет выглядеть p?', choices: ['Красный, 20px', 'Зелёный, 20px', 'Зелёный, обычного размера'], correct: 1,
    explain: 'color спорят — побеждает нижнее: green. font-size никто не перебил — остаётся 20px.', notes: '' },
  { type: 'devtools', label: '16 / DEVTOOLS', section: 'DevTools', title: 'DevTools: <em>откуда этот стиль?</em>', lead: 'F12 → Elements → Styles. Выберите тег слева, отключайте свойства галочками.', minutes: 3, notes: 'Это копия настоящей панели Chrome. Покажите: 1) a — цвет body перечёркнут, потому что у ссылки свой цвет от браузера; 2) снимите галочку — стиль выключится; 3) потом откройте настоящий F12 на любом сайте. Главный инструмент, когда «стиль не работает».' },
  { type: 'playground', label: '17 / ПЕСОЧНИЦА', section: 'Песочница', title: 'Попробуйте <em>сами</em>', lead: 'Меняйте CSS слева — страница справа обновляется сразу. Можно звать учеников к доске.', minutes: 2, notes: 'По желанию, если есть время. Дайте ученику задание: «сделайте ночную тему» — тёмный фон, светлый текст.' },
  { type: 'bugs', label: '18 / ОТЛАДКА', section: 'Ошибки', title: 'Почему <em>не работает</em>?', lead: 'Сначала группа объясняет причину. Потом откройте исправление.', minutes: 4, notes: 'Эти ошибки будут на практике у каждого. Главное правило: CSS не ругается — он молча пропускает. Поэтому смотрим в DevTools.' },
  { type: 'practice', practice: 'joint', label: '19 / ВМЕСТЕ', section: 'Практика', title: 'Вместе: <em>сайт кофейни</em>', lead: 'С нуля по ТЗ: каркас и контент — повторение, потом подключаем CSS и красим шаг за шагом.', minutes: 25, notes: 'Подробный сценарий — teacher/JOINT-GUIDE.md. VS Code слева, браузер справа. После каждого шага: Ctrl+S → F5. Если стиль не применился — сразу открываем DevTools, а не гадаем.' },
  { type: 'practice', practice: 'solo', label: '20 / САМИ', section: 'Практика', title: 'Самостоятельно: <em>любимый фильм</em>', lead: 'Те же шаги, своя страница и тёмная тема. Подглядывать в совместную практику можно.', minutes: 15, notes: 'Не подсказывайте код — спрашивайте: «какой селектор?», «какое свойство меняет цвет текста?». Тёмная тема проверяет понимание color vs background-color.' },
  { type: 'summary', part: 'concepts', label: '21 / ШПАРГАЛКА 1/2', section: 'Итог', title: 'Шпаргалка: <em>главные понятия</em>', lead: 'Весь урок на одном экране. Листать презентацию не нужно — можно скачать или распечатать.', minutes: 3, notes: 'Пусть ученики сфотографируют или скачают. Пройдитесь по каждому блоку одной фразой.' },
  { type: 'summary', part: 'exceptions', label: '22 / ШПАРГАЛКА 2/2', section: 'Итог', title: 'Шпаргалка: <em>исключения и ловушки</em>', lead: 'Именно эти случаи дают ошибки в домашке. Проверьте себя по списку.', minutes: 2, notes: 'Спросите 2–3 пункта: «почему так?» — без подсказки.' },
  { type: 'end', title: 'Готово', section: 'Итог', minutes: 1, notes: 'Домашнее задание: страница-рецепт, CSS в отдельной папке css/. ТЗ — в комментариях файлов.' },
];

const TABS = [
  { name: 'style="…"', title: 'Атрибут style', verdict: 'bad', text: 'Только для одного тега. 10 заголовков — 10 раз писать одно и то же. HTML и оформление перемешаны.',
    files: [['index.html', 'html', '<h1 style="color: tomato;">Кофейня</h1>\n<p>Свежий кофе</p>\n<h1>Меню</h1>']], html: '<h1 style="color: tomato;">Кофейня</h1>\n<p>Свежий кофе</p>\n<h1>Меню</h1>', css: '' },
  { name: '<style>', title: 'Тег style в head', verdict: 'mid', text: 'Работает для всех тегов страницы. Но на каждой странице сайта — своя копия стилей.',
    files: [['index.html', 'html', '<head>\n  <style>\n    h1 { color: tomato; }\n    p { color: gray; }\n  </style>\n</head>\n<body>\n  <h1>Кофейня</h1>\n  <p>Свежий кофе</p>\n  <h1>Меню</h1>\n</body>']], html: '<h1>Кофейня</h1>\n<p>Свежий кофе</p>\n<h1>Меню</h1>', css: 'h1 { color: tomato; }\np { color: gray; }' },
  { name: '<link> + файл', title: 'Отдельный файл style.css', verdict: 'good', text: 'Один файл на весь сайт. Поменяли цвет в нём — поменялся на всех страницах. Так делаем всегда.',
    files: [['index.html', 'html', '<head>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Кофейня</h1>\n  <p>Свежий кофе</p>\n  <h1>Меню</h1>\n</body>'], ['style.css', 'css', 'h1 {\n  color: tomato;\n}\n\np {\n  color: gray;\n}']], html: '<h1>Кофейня</h1>\n<p>Свежий кофе</p>\n<h1>Меню</h1>', css: 'h1 { color: tomato; }\np { color: gray; }' },
];

const ANATOMY = [
  ['sel', 'Селектор', 'КОГО оформляем. Здесь — все заголовки h1.'],
  ['brace', 'Фигурные скобки', 'Блок правила: всё внутри относится к селектору.'],
  ['prop', 'Свойство', 'ЧТО меняем: цвет, размер, шрифт…'],
  ['colon', 'Двоеточие', 'Отделяет свойство от значения.'],
  ['val', 'Значение', 'КАК меняем: tomato, 40px.'],
  ['semi', 'Точка с запятой', 'Конец строки-объявления. Без неё ломается и следующая строка.'],
  ['decl', 'Объявление', 'Свойство + значение. В одном правиле их сколько угодно.'],
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
  { title: 'Нет точки с запятой', lang: 'css', bad: 'h1 {\n  color: navy\n  font-size: 40px;\n}', good: 'h1 {\n  color: navy;\n  font-size: 40px;\n}', why: 'Без ; браузер читает «navy font-size: 40px» как одно значение color — и выкидывает оба свойства.' },
  { title: 'Такого свойства нет', lang: 'css', bad: 'p {\n  font-color: gray;\n  text-color: gray;\n}', good: 'p {\n  color: gray;\n}', why: 'Цвет текста — просто color. Выдуманные свойства браузер молча пропускает (в DevTools — жёлтый треугольник).' },
  { title: 'Пробел перед px', lang: 'css', bad: 'h1 {\n  font-size: 40 px;\n}', good: 'h1 {\n  font-size: 40px;\n}', why: 'Число и единица пишутся слитно: 40px. С пробелом значение неверное — свойство пропускается.' },
  { title: 'Стили не подключились', lang: 'html', bad: '<!-- файл называется style.css -->\n<link rel="stylesheet" href="styles.css">', good: '<link rel="stylesheet" href="style.css">', why: 'Путь и имя в href должны совпадать с файлом буква в букву. Лишняя s — и браузер не найдёт файл.' },
  { title: 'Ссылка осталась синей', lang: 'css', bad: 'body {\n  color: white;\n  background-color: black;\n}\n/* текст белый, а ссылка — синяя */', good: 'body {\n  color: white;\n  background-color: black;\n}\n\na {\n  color: gold;\n}', why: 'У ссылки свой цвет от браузера — он сильнее унаследованного от body. Пишем правило для a.' },
  { title: 'Точка перед тегом', lang: 'css', bad: '.h1 {\n  color: tomato;\n}', good: 'h1 {\n  color: tomato;\n}', why: 'Точка означает класс, а не тег. .h1 ищет элементы с class="h1". Для тега — просто h1.' },
];

const PRACTICE = {
  joint: {
    caption: 'materials/joint · 25 минут', zip: './materials/joint.zip', spec: './materials/view.html?p=joint', title: 'Кофейня «Утро»', files: 'index.html · style.css · img/',
    tasks: [
      ['Каркас', '<!DOCTYPE html> · head · body', 'урок 2'],
      ['Контент', 'h1 · p · img · h2 · ul · ol · a', 'урок 3'],
      ['Подключить CSS', '<link rel="stylesheet">', 'НОВОЕ: link'],
      ['Фон и текст', 'body { background-color; color }', 'НОВОЕ: цвет'],
      ['Шрифт страницы', 'body { font-family; line-height }', 'НОВОЕ: наследование'],
      ['Заголовки', 'h1, h2 { … } · h1 { … }', 'НОВОЕ: группа, каскад'],
      ['Списки и ссылки', 'li { … } · a { … }', 'НОВОЕ: свой цвет у a'],
      ['Проверка', 'F12 → Elements → Styles', 'НОВОЕ: DevTools'],
    ],
  },
  solo: {
    caption: 'materials/solo · 15 минут', zip: './materials/solo.zip', spec: './materials/view.html?p=solo', title: 'Любимый фильм', files: 'index.html · style.css · img/',
    tasks: [
      ['Каркас', '<!DOCTYPE html> · head · body', 'как в кофейне'],
      ['Контент', 'h1 · p · img · h2 · ul · ol · a', 'как в кофейне'],
      ['Подключить CSS', '<link rel="stylesheet">', 'как в кофейне'],
      ['Тёмная тема', 'body { background-color; color }', 'тёмный фон — светлый текст'],
      ['Шрифт', 'body { font-family; line-height }', 'с запасным шрифтом'],
      ['Заголовки', 'h1, h2 { … }', 'через запятую'],
      ['Списки и ссылки', 'li { … } · a { … }', 'ссылка не синяя'],
      ['Бонус', 'rgb(…) · #hex · имя', 'все три формата'],
    ],
  },
};

const SUMMARY = [
  ['Подключение', ['В head: <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>.', 'href — путь к файлу, как src у img: <code>css/style.css</code>.', 'Один файл стилей на весь сайт. <code>style="…"</code> и <code>&lt;style&gt;</code> — не используем.']],
  ['Правило', ['<code>селектор { свойство: значение; }</code>', 'Свойство и значение — через <b>двоеточие</b>, в конце — <b>точка с запятой</b>.', 'Комментарий: <code>/* … */</code>.']],
  ['Селекторы', ['По тегу: <code>p { }</code> — все абзацы страницы.', 'Группа: <code>h1, h2 { }</code> — одно правило на несколько тегов.', 'Имя тега пишем без <code>&lt; &gt;</code> и без точки.']],
  ['Цвет и фон', ['<code>color</code> — цвет текста. <code>background-color</code> — цвет фона.', 'Записи цвета: <code>tomato</code> · <code>#ff6347</code> · <code>rgb(255, 99, 71)</code>.', 'Текст и фон должны контрастировать.']],
  ['Шрифт', ['<code>font-family: Georgia, serif;</code> — всегда с запасным.', '<code>font-size: 18px;</code> · <code>font-weight: bold;</code> · <code>font-style: italic;</code>', '<code>line-height: 1.6;</code> · <code>text-align: center;</code> · <code>text-decoration: none;</code>']],
  ['Наследование и каскад', ['Цвет и шрифт body наследуют все теги внутри.', 'Спор за одно свойство: побеждает <b>нижнее</b> правило. Остальные свойства складываются.', 'Не работает? F12 → Elements → Styles.']],
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

// opts: caption, lang, active: [номера строк], dimFrom: строки после — приглушить
function codeWindow(code, opts = {}) {
  const lang = opts.lang || 'css', active = opts.active || [];
  let inComment = false;
  const paint = (line) => {
    if (lang !== 'css') return hl(line, lang);
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
function head(s) { return '<div class="intro"><span class="tag ' + (s.type === 'practice' ? 'green' : s.type === 'quiz' ? 'cyan' : '') + '">' + (s.label || '04 / CSS') + '</span><h2>' + s.title + '</h2><p>' + s.lead + '</p></div>'; }

// Предпросмотр страницы в «браузере»
function pageDoc(html, css) {
  const base = location.href.replace(/[#?].*$/, '').replace(/[^/]*$/, '');
  return '<!doctype html><html><head><meta charset="utf-8"><base href="' + base + '" target="_blank"><style>html{zoom:.72}</style><style>' + css + '</style></head><body>' + html + '</body></html>';
}
function browser(html, css, caption = 'index.html', id = '') {
  return '<div class="browser"><div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="addr">' + esc(caption) + '</span></div><iframe class="pv"' + (id ? ' id="' + id + '"' : '') + ' title="Предпросмотр страницы" srcdoc="' + esc(pageDoc(html, css)) + '"></iframe></div>';
}

function quiz(s, st) {
  const answered = Number.isInteger(st.answer);
  return '<div class="quiz-grid"><div class="quiz-left"><div class="quiz-question">' + esc(s.question) + '</div><div class="quiz-options">' + s.choices.map((c, i) => '<button class="answer-option ' + (answered ? (i === s.correct ? 'correct' : i === st.answer ? 'wrong' : '') : '') + ' ' + (st.answer === i ? 'selected' : '') + '" data-action="answer" data-value="' + i + '" aria-pressed="' + (st.answer === i) + '"><b style="display:inline-block;width:24px;color:var(--purple)">' + String.fromCharCode(65 + i) + '.</b> ' + esc(c) + '</button>').join('') + '</div>' + (answered ? '<div class="feedback ' + (st.answer === s.correct ? '' : 'warn') + '">' + (st.answer === s.correct ? '✓ Верно. ' : 'Не совсем. ') + esc(s.explain) + '</div><button class="small-btn" data-action="reset-answer">Ответить ещё раз ↺</button>' : '<p class="action-hint">Выберите вариант — появится разбор.</p>') + '</div><div class="quiz-right">' + codeWindow(s.code, { lang: s.lang, caption: s.file }) + '</div></div>';
}

function theoryView(s) {
  return '<div class="pair"><div class="pane left"><div class="pane-heading">КОД</div>' + codeWindow(s.code, { lang: s.lang, caption: s.file }) + '</div><div class="pane right theory-pane">' + s.items.map((x, i) => '<div class="concept"><span>' + String(i + 1).padStart(2, '0') + '</span><div><h3>' + esc(x[0]) + '</h3><p>' + esc(x[1]) + '</p></div></div>').join('') + '</div></div>';
}

function beforeAfter(st) {
  const on = !!st.on;
  return '<div class="pair ba-pair"><div class="pane left"><div class="pane-heading"><span>style.css</span><span class="caps">' + (on ? 'ПОДКЛЮЧЁН' : 'ОТКЛЮЧЁН') + '</span></div>' + codeWindow(FINAL_CSS, { dimFrom: on ? 0 : 0.5 }) + '</div>'
    + '<div class="pane right"><div class="pane-heading"><span>РЕЗУЛЬТАТ</span><span>тот же index.html</span></div>' + browser(PAGE, on ? FINAL_CSS : '')
    + '<div class="ba-switch"><button class="' + (on ? 'secondary' : 'primary') + '" data-action="ba" data-value="0">Только HTML</button><button class="' + (on ? 'primary' : 'secondary') + '" data-action="ba" data-value="1">HTML + CSS</button><span>' + (on ? 'Каждое свойство слева разберём сегодня.' : 'Так выглядит страница с прошлого урока.') + '</span></div></div></div>';
}

function tabsView(st) {
  const i = st.tab || 0, t = TABS[i];
  const verdict = { bad: ['✗', 'Не используем'], mid: ['~', 'Иногда'], good: ['✓', 'Так делаем'] }[t.verdict];
  return '<div class="tabs-row">' + TABS.map((x, k) => '<button class="tab-btn ' + (k === i ? 'active' : '') + '" data-action="tab" data-value="' + k + '"><span>' + (k + 1) + '</span>' + esc(x.name) + '</button>').join('') + '</div>'
    + '<div class="pair"><div class="pane left"><div class="pane-heading"><span>' + esc(t.title.toUpperCase()) + '</span><span>' + t.files.length + (t.files.length > 1 ? ' ФАЙЛА' : ' ФАЙЛ') + '</span></div>' + t.files.map((f) => codeWindow(f[2], { caption: f[0], lang: f[1] })).join('') + '</div>'
    + '<div class="pane right"><div class="pane-heading"><span>РЕЗУЛЬТАТ</span></div>' + browser(t.html, t.css) + '<div class="verdict ' + t.verdict + '"><b>' + verdict[0] + ' ' + verdict[1] + '</b><p>' + esc(t.text) + '</p></div></div></div>';
}

function anatomyView(st) {
  const idx = Math.max(0, Math.min(st.step || 0, ANATOMY.length - 1));
  const part = ANATOMY[idx][0];
  const P = (name, text) => '<span class="ana ' + (name === part ? 'on' : '') + '">' + text + '</span>';
  const decl = (prop, val) => '<span class="ana-decl ' + (part === 'decl' ? 'on' : '') + '">' + P('prop', prop) + P('colon', ':') + ' ' + P('val', val) + P('semi', ';') + '</span>';
  const code = P('sel', 'h1') + ' ' + P('brace', '{') + '\n  ' + decl('color', 'tomato') + '\n  ' + decl('font-size', '40px') + '\n' + P('brace', '}');
  return '<div class="pair"><div class="pane left"><div class="pane-heading"><span>style.css</span><span>' + (idx + 1) + ' / ' + ANATOMY.length + '</span></div><pre class="ana-code">' + code + '</pre>'
    + '<div class="ana-label"><b>' + esc(ANATOMY[idx][1]) + '</b><p>' + esc(ANATOMY[idx][2]) + '</p></div>'
    + '<div class="buttons"><button class="secondary" data-action="prev-step" ' + (idx === 0 ? 'disabled' : '') + '>← Шаг назад</button><button class="primary" data-action="next-step" ' + (idx === ANATOMY.length - 1 ? 'disabled' : '') + '>Следующий шаг →</button><button class="secondary" data-action="reset-step" title="Сначала">↺</button></div></div>'
    + '<div class="pane right"><div class="pane-heading"><span>СЛОВАРЬ</span><span>РЕЗУЛЬТАТ</span></div><div class="ana-dict">' + ANATOMY.map((a, k) => '<button class="ana-term ' + (k === idx ? 'on' : '') + '" data-action="set-step" data-value="' + k + '"><span>' + esc(a[1]) + '</span></button>').join('') + '</div>'
    + browser('<h1>Кофейня «Утро»</h1>\n<p>Свежий кофе каждый день.</p>', 'h1 { color: tomato; font-size: 40px; }') + '</div></div>';
}

function liveView(kind, st) {
  const d = LIVE[kind], total = d.rules.length;
  const idx = Math.max(0, Math.min(st.step || 0, total));
  let code = '', lineNo = 0, active = [], dimFrom = 0;
  d.rules.forEach(([css], k) => {
    const lines = css.split('\n');
    if (k > 0) { code += '\n\n'; lineNo += 1; }
    const from = lineNo + 1;
    code += css; lineNo += lines.length;
    if (k === idx - 1) active = Array.from({ length: lines.length }, (_, j) => from + j);
    if (k === idx - 1) dimFrom = lineNo;
  });
  if (idx === 0) dimFrom = -1;
  const applied = d.base + d.rules.slice(0, idx).map((r) => r[0]).join('\n');
  const label = idx === 0 ? d.start : d.rules[idx - 1][1];
  return '<div class="pair live-pair"><div class="pane left"><div class="pane-heading"><span>style.css</span><span class="caps">' + (idx === 0 ? 'ЕЩЁ НИЧЕГО' : 'ПРАВИЛ: ' + idx) + '</span></div>' + codeWindow(code, { active, dimFrom: idx === 0 ? 0.5 : dimFrom }) + '</div>'
    + '<div class="pane right"><div class="pane-heading"><span>РЕЗУЛЬТАТ</span><span>' + idx + ' / ' + total + '</span></div><div class="mem-step">' + esc(label) + '</div>' + browser(PAGE, applied)
    + '<div class="buttons"><button class="secondary" data-action="prev-step" ' + (idx === 0 ? 'disabled' : '') + '>← Шаг назад</button><button class="primary" data-action="next-step" ' + (idx === total ? 'disabled' : '') + '>Следующий шаг →</button><button class="secondary" data-action="reset-step" title="Сначала">↺</button></div></div></div>';
}
const liveSteps = (s) => (s.type === 'live' ? LIVE[s.demo].rules.length : s.type === 'anatomy' ? ANATOMY.length - 1 : 0);

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
  let styles = '<div class="dt-rule faint"><div class="dt-sel">element.style {</div><div class="dt-end">}</div></div>';
  own.forEach((r) => { styles += '<div class="dt-rule"><div class="dt-sel">' + r.sel + ' {<span class="dt-src">style.css</span></div>' + r.decls.map((d) => decl(d[0], d[1], r.ri, st.off[r.ri + ':' + d[0]])).join('') + '<div class="dt-end">}</div></div>'; });
  if (ua.length) styles += '<div class="dt-rule ua"><div class="dt-sel">' + sel + ' {<span class="dt-src">стили браузера</span></div>' + ua.map((d) => decl(d[0], d[1], undefined, ownProps.has(d[0]))).join('') + '<div class="dt-end">}</div></div>';
  if (sel !== 'body') {
    const body = DEV_RULES[0];
    const inh = body.decls.filter((d) => INHERITED.includes(d[0]));
    styles += '<div class="dt-inh">Унаследовано от <b>body</b></div><div class="dt-rule"><div class="dt-sel">body {<span class="dt-src">style.css</span></div>' + inh.map((d) => decl(d[0], d[1], 0, st.off['0:' + d[0]] || ownProps.has(d[0]) || uaProps.has(d[0]))).join('') + '<div class="dt-end">}</div></div>';
  }
  return '<div class="pair dt-pair"><div class="pane left"><div class="pane-heading"><span>СТРАНИЦА</span><span>выбран: ' + esc(sel) + '</span></div>' + browser(PAGE, devCSS(st, sel)) + '</div>'
    + '<div class="pane right devtools"><div class="dt-tabs"><span class="on">Elements</span><span>Console</span><span>Sources</span></div><div class="dt-body"><div class="dt-tree">'
    + DEV_TREE.map(([t, lvl, label]) => '<button class="dt-node ' + (t === sel ? 'on' : '') + '" style="padding-left:' + (10 + lvl * 16) + 'px" data-action="dt-pick" data-value="' + t + '">' + hlHTML(label) + '</button>').join('')
    + '</div><div class="dt-styles"><div class="dt-subtabs"><span class="on">Styles</span><span>Computed</span></div>' + styles + '</div></div></div></div>';
}

// Песочница
function playgroundView(st) {
  if (st.css === undefined) st.css = PLAY_PRESETS['Кофейня'];
  return '<div class="pair"><div class="pane left"><div class="pane-heading"><span>style.css — можно печатать</span><span class="pg-presets">' + Object.keys(PLAY_PRESETS).map((k) => '<button class="small-btn" data-action="play-preset" data-value="' + esc(k) + '">' + esc(k) + '</button>').join('') + '</span></div><textarea class="pg-text" id="pgText" spellcheck="false" aria-label="CSS-код">' + esc(st.css) + '</textarea></div>'
    + '<div class="pane right"><div class="pane-heading"><span>РЕЗУЛЬТАТ</span><span>обновляется при вводе</span></div>' + browser(PAGE, st.css, 'index.html', 'pgFrame') + '</div></div>';
}

function bugsView(st) {
  st.open = st.open || {};
  const i = st.bug || 0, b = BUGS[i], open = st.open[i];
  const cap = b.lang === 'html' ? 'index.html' : 'style.css';
  return '<div class="bugs2"><div class="bug-list">' + BUGS.map((x, k) => '<button class="bug-tab ' + (k === i ? 'active' : '') + ' ' + (st.open[k] ? 'done' : '') + '" data-action="bug-pick" data-value="' + k + '"><span>' + String(k + 1).padStart(2, '0') + '</span>' + esc(x.title) + '</button>').join('') + '</div>'
    + '<div class="bug-main"><div class="bug-col"><div class="caps bad-cap">✗ С ОШИБКОЙ</div>' + codeWindow(b.bad, { lang: b.lang, caption: cap }) + '</div>'
    + (open ? '<div class="bug-col"><div class="caps good-cap">✓ ИСПРАВЛЕНО</div>' + codeWindow(b.good, { lang: b.lang, caption: cap }) + '<p class="bug-why">' + esc(b.why) + '</p></div>'
      : '<div class="bug-hidden"><p>Почему не работает? Ответьте вслух.</p><button class="primary" data-action="bug" data-value="' + i + '">Показать исправление</button></div>')
    + '</div></div>';
}

function practice(s, st) {
  const p = PRACTICE[s.practice];
  const joint = s.practice === 'joint';
  const remaining = st.remaining ?? s.minutes * 60;
  return '<div class="practice-layout"><div class="task-list"><div class="pane-heading">ШАГ → ЧТО ПИШЕМ → ' + (joint ? 'ПОВТОРЯЕМ / НОВОЕ' : 'ПОДСКАЗКА') + '<span>index.html · style.css</span></div>'
    + p.tasks.map((x, i) => '<div class="task-step pr-row"><i>' + String(i + 1).padStart(2, '0') + '</i><div class="pr-btn">' + esc(x[0]) + '</div><code>' + esc(x[1]) + '</code><div class="pr-ret">→ ' + esc(x[2]) + '</div></div>').join('')
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
  return '<div class="cover-grid"><div class="cover-copy"><div class="overline"><i></i> HTML &amp; CSS <b></b> УРОК 4</div><h1>Один файл.<br><span>Весь стиль сайта.</span></h1><p>Подключаем CSS и даём странице цвет, фон и шрифт — без единой правки в HTML.</p><div class="pills"><span>&lt;link&gt;</span><span>селектор { }</span><span>color</span><span>background-color</span><span>font-family</span><span>каскад</span></div><button class="primary" data-action="next-slide">Начать урок ↗</button></div>'
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
    case 'color': content = head(s) + colorView(st); break;
    case 'devtools': content = head(s) + devtoolsView(st); break;
    case 'playground': content = head(s) + playgroundView(st); break;
    case 'bugs': content = head(s) + bugsView(st); break;
    case 'practice': content = head(s) + practice(s, st); break;
    case 'summary': content = head(s) + summaryView(s); break;
    case 'end': content = finish(); break;
  }
  stage.innerHTML = '<section class="slide active ' + (isNavigation ? '' : 'instant') + ' ' + (s.type === 'cover' ? 'cover' : '') + ' type-' + s.type + '" aria-label="Слайд ' + (current + 1) + ' из ' + slides.length + '">' + (s.type === 'cover' || s.type === 'end' ? content : '<div class="slide-content">' + content + '</div>') + '</section>';
  if (s.type === 'color') paintMixer();
  stage.querySelectorAll('.code-pre').forEach((pre) => { const a = pre.querySelector('.active-line'); if (a) pre.scrollTop = Math.max(0, a.offsetTop - pre.clientHeight / 3); });
  document.getElementById('sectionTitle').textContent = s.section;
  document.getElementById('currentTitle').textContent = removeTags(s.title);
  document.getElementById('slideCounter').textContent = String(current + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
  document.getElementById('progressSection').textContent = s.section.toUpperCase();
  document.getElementById('progressFill').style.width = ((current + 1) / slides.length * 100) + '%';
  document.getElementById('prevBtn').disabled = current === 0;
  document.getElementById('nextBtn').disabled = current === slides.length - 1;
  document.getElementById('nextBtn').querySelector('span').textContent = current === slides.length - 1 ? 'Конец' : 'Дальше';
  document.querySelectorAll('[data-slide]').forEach((b, i) => { b.classList.toggle('active', i === current); b.setAttribute('aria-current', i === current ? 'page' : 'false'); });
  document.getElementById('notesContent').innerHTML = '<h3>' + esc(removeTags(s.title)) + '</h3><p>' + esc(s.notes || '') + '</p><p><b>План на слайд:</b> ' + s.minutes + ' мин.</p>';
}
function fromHash() { const h = Number(location.hash.replace('#', '')); return Number.isInteger(h) && h >= 1 && h <= slides.length ? h - 1 : 0; }
function go(i, push = true) { current = Math.max(0, Math.min(slides.length - 1, i)); if (push && location.hash !== '#' + (current + 1)) history.replaceState(null, '', '#' + (current + 1)); render(true); }
function closeOverlays() { document.getElementById('outlineOverlay').hidden = true; document.getElementById('notesOverlay').hidden = true; }
function toggleOverlay(id) { const el = document.getElementById(id), open = el.hidden; closeOverlays(); el.hidden = !open; if (open) el.querySelector('button')?.focus(); }
function notify(msg) { const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('visible'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => el.classList.remove('visible'), 1900); }
function stepBy(delta) { const st = state(), max = liveSteps(slides[current]); st.step = Math.max(0, Math.min(max, (st.step || 0) + delta)); render(false); }

stage.addEventListener('click', (e) => {
  const node = e.target.closest('[data-action]');
  if (!node) return;
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
  if (action === 'dt-pick') { st.el = v; render(false); return; }
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
    clearTimeout(playTimer);
    playTimer = setTimeout(() => { const f = document.getElementById('pgFrame'); if (f) f.srcdoc = pageDoc(PAGE, st.css); }, 150);
  }
});
stage.addEventListener('change', (e) => {
  const t = e.target;
  if (t.dataset.off) { const st = state(); st.off = st.off || {}; st.off[t.dataset.off] = !t.checked; render(false); }
});
document.getElementById('prevBtn').addEventListener('click', () => go(current - 1));
document.getElementById('nextBtn').addEventListener('click', () => go(current + 1));
document.getElementById('outlineBtn').addEventListener('click', () => toggleOverlay('outlineOverlay'));
document.getElementById('notesBtn').addEventListener('click', () => toggleOverlay('notesOverlay'));
document.getElementById('themeBtn').addEventListener('click', () => { document.body.classList.toggle('dark'); try { localStorage.setItem('css-lab-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); } catch (e) { /* */ } });
document.getElementById('fullscreenBtn').addEventListener('click', () => { if (document.fullscreenElement) document.exitFullscreen?.(); else document.documentElement.requestFullscreen?.(); });
document.querySelectorAll('[data-close]').forEach((n) => n.addEventListener('click', closeOverlays));
document.getElementById('outlineList').innerHTML = slides.map((s, i) => '<button type="button" data-slide="' + i + '"><strong>' + String(i + 1).padStart(2, '0') + '</strong><span>' + esc(removeTags(s.title)) + '</span></button>').join('');
document.getElementById('outlineList').addEventListener('click', (e) => { const n = e.target.closest('[data-slide]'); if (n) { closeOverlays(); go(Number(n.dataset.slide)); } });
window.addEventListener('hashchange', () => { const next = fromHash(); if (next !== current) go(next, false); });
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeOverlays(); return; }
  if (!document.getElementById('outlineOverlay').hidden || !document.getElementById('notesOverlay').hidden) return;
  const editing = e.target && (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || e.target.isContentEditable);
  if (editing) return;
  const s = slides[current];
  if ((s.type === 'live' || s.type === 'anatomy') && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); stepBy(1); return; }
  if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); go(current + 1); return; }
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(current - 1); return; }
  if (e.key === 'Home') { e.preventDefault(); go(0); } else if (e.key === 'End') { e.preventDefault(); go(slides.length - 1); }
  else if (e.key.toLowerCase() === 'g') toggleOverlay('outlineOverlay');
  else if (e.key.toLowerCase() === 'n') toggleOverlay('notesOverlay');
  else if (e.key.toLowerCase() === 't') document.getElementById('themeBtn').click();
  else if (e.key.toLowerCase() === 'f') document.getElementById('fullscreenBtn').click();
});
try { if (localStorage.getItem('css-lab-theme') === 'dark') document.body.classList.add('dark'); } catch (e) { /* */ }
if (!location.hash) history.replaceState(null, '', '#1');
current = fromHash();
render(true);
