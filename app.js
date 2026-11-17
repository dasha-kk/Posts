function makeCard(c1, c2, text) {
  const svg = '<svg xmlns="http://w3.org" width="400" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="' + c1 + '"/><stop offset="100%" stop-color="' + c2 + '"/></linearGradient></defs><rect width="400" height="800" fill="url(#g)"/><text x="50%" y="45%" font-family="sans-serif" font-size="26" font-weight="bold" fill="white" text-anchor="middle">' + text + '</text></svg>';
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function makeAvatar(bg, letter) {
  const svg = '<svg xmlns="http://w3.org" width="80" height="80"><rect width="80" height="80" fill="' + bg + '"/><text x="50%" y="56%" font-family="sans-serif" font-size="36" font-weight="bold" fill="white" text-anchor="middle">' + letter + '</text></svg>';
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const posts = [
// ----------------------------------------Приветствие--------------------------------
  { author: "Сестры Козловы",
    avatar: "photo.jpeg", 
    time: "2 мин назад", 
    text: "«С террористами не ведут переговоры». С токсичными клиентами, агрессивными партнерами и манипуляторами — тоже.\n\n"
      + "Но с ними ведут тактическую коммуникацию\n\n"
      + "Этот канал — ваша база знаний по психологии экстремального влияния. Мы берем техники, созданные для освобождения заложников и деэскалации кризисов, и адаптируем их под бизнес, карьеру и сложные жизненные ситуации.\n\n"
      + "Здесь не будет «воды» и банальных советов из книг по успешному успеху. Только прикладная нейробиология, поведенческий анализ и точные речевые формулировки:\n\n"
      + "✅ Как снизить градус агрессии за 10 секунд.\n"
      + "✅ Как сказать «нет», не провоцируя конфликт.\n"
      + "✅ Как услышать заветное «Всё верно» от самого сложного оппонента.\n\n"
      + "Подписывайтесь, сохраняйте посты в закладки и используйте в реальных диалогах.\n\n"
      + "👇 Напишите в комментариях, с какими сложными ситуациями в общении вы сталкиваетесь чаще всего? Разберем в следующих постах.", 
    likes: 57, 
    notes: [], 
    media: [{ type: "image", url: "photo.png" }] },

// ------------------------------------------1--------------------------------------
  { author: "Сестры Козловы",
    avatar: "photo.jpeg", 
    time: "10 мин назад", 
    text: "«С террористами не ведут переговоры» — суровая правда или опасный миф? 🚫\n\n" + 
        "Официальная доктрина многих государств гласит: «Мы не идем на уступки террористам». Это необходимо, чтобы не поощрять захват заложников как инструмент шантажа. Но означает ли это, что с ними не разговаривают?\n" + 
        "В профессиональной среде кризисных переговоров есть четкое разделение:\n" +  
        "❌ Политические уступки (выплаты, освобождение лидеров, изменение законов) — табу.\n" +  
        " ✅ Тактическая коммуникация — обязательна.\n" + 
        "Переговорщик не торгуется о территориях. Его цель — выиграть время, снизить эмоциональный накал, собрать разведданные и, в идеале, привести к мирной капитуляции. Общение с преступником — это не диалог равных, это инструмент психологического влияния и управления поведением.\n" + 
        "Главное правило кризисных переговоров: «Время — наш главный союзник». Чем дольше длится контакт, тем выше шансы на бескровное разрешение ситуации.\n\n" + 
        "А как вы считаете, где проходит грань между «тактическим общением» и «легитимизацией» преступника? Делитесь в комментариях 👇\n" +
        "#кризисныйменеджмент #переговоры #психологияпереговоров #безопасность #профайлинг", 
    likes: 270, 
    notes: ["Разница в публичности и цели. Тактика — это закрытый разговор ради спасения людей. Легитимизация — это рукопожатия на камеру и признание права голоса за тем, кто нарушил все законы."], 
    media: [{ type: "image", url: "post_1.jpg" },] },

// ------------------------------------------2--------------------------------------
  { author: "Сестры Козловы", 
    avatar: "photo.jpeg", 
    time: "42 мин назад", 
    text: "Что в голове у террориста? Психология экстремальной ситуации 🧠\n\n" +
    "Многие представляют террориста как фанатика, которому нечего терять. На практике кризисные переговорщики имеют дело с людьми, находящимися в состоянии острого стресса, паранойи или когнитивных искажений.\n\n"
    + "Вот 3 психологических состояния, с которыми работает переговорщик:\n"
    + "1️⃣ Иллюзия всемогущества. Захватчик верит, что контролирует ситуацию. Задача переговорщика — мягко разрушить эту иллюзию, показывая реальность (например, отсутствие связи с внешним миром), но не делая этого напрямую, чтобы не спровоцировать агрессию.\n"
    + "2️⃣ Страх и паника. Даже идеологически мотивированные преступники боятся смерти или тюрьмы. Переговорщик ищет «якорь» — то, что связывает террориста с человечностью (семья, религия, личные обиды).\n"
    + "3️⃣ Эффект толпы. Если захватчиков несколько, в группе всегда есть лидер, исполнители и сомневающиеся. Тактика «разделяй и властвуй» работает и здесь: обращение к конкретному человеку по имени снижает групповую сплоченность.\n\n"
    + "Эмпатия в переговорах — это не сочувствие. Это тактическое понимание мотивов оппонента, чтобы найти рычаг воздействия.\n"
    + "Сохраняйте пост, чтобы не потерять! 📌\n\n"
    + "#психология #кризисныепереговоры #поведенческийанализ #стресс",
    likes: 538,
    notes: [], 
    media: [{ type: "image", url: "post_2.jpg"}] },

// ------------------------------------------3--------------------------------------
  { author: "Сестры Козловы", 
    avatar: "photo.jpeg", 
    time: "2 часа назад", 
    text: "3 тактики переговорщиков, которые работают даже с фанатиками 🗣\n\n"
        + "Как заставить человека, готового на крайние меры, начать вас слушать? Кризисные переговорщики (например, из школы ФБР или Скотланд-Ярда) используют техники, которые снижают уровень кортизола и включают рациональное мышление.\n\n"
        + "🔹 Техника «Отражение» (Mirroring) Повторение последних 1-3 слов оппонента с вопросительной интонацией. Террорист: «Никто не выйдет отсюда живым, если вы не дадите нам вертолет!» Переговорщик: «Живым?» Это заставляет оппонента пересказывать, объяснять и, главное, чувствовать, что его слышат.\n\n"
        + "🔹 Маркирование эмоций Называние чувств оппонента без оценки. «Кажется, вы чувствуете, что вас предали и загнали в угол». Когда мозг слышит название своей эмоции, активность миндалевидного тела (центра страха и агрессии) снижается.\n\n"
        + "🔹 Иллюзия контроля Террористу жизненно важно чувствовать, что он у руля. Переговорщик дает ему выбор, где оба варианта выгодны спецназу/жертвам. «Вы хотите, чтобы мы передали воду сейчас или через 10 минут, когда мы проверим её на безопасность?»\n\n"
        + "Эти техники работают не только при захвате заложников, но и в жестких бизнес-спорах. Пробовали применять что-то из этого?\n\n"
        + "#техникипереговоров #КрисВосс #управлениеконфликтами #бизнеспсихология #коммуникация", 
    likes: 642, 
    notes: [], 
    media: [{ type: "image", url: "post_3.png"}]},
    

// ------------------------------------------4--------------------------------------
  { author: "Сестры Козловы", 
    avatar: "photo.jpeg", 
    time: "5 часов назад", 
    text: "Как заставить человека в состоянии острого стресса начать вас слушать? Не уговорами и не ультиматумами. А с помощью маркировки эмоций.\n\n"
        + "🚫 Золотое правило: никогда не говорите «Я вас понимаю». В напряженной ситуации это звучит как фальшь и мгновенно вызывает всплеск гнева.\n\n"
        + "Вместо этого назовите эмоцию оппонента, используя нейтральные, наблюдательные формулировки:\n"
        + "🔹 «Похоже, вы чувствуете, что вас загнали в угол». \n"
        + "🔹 «Создается впечатление, что вы не доверяете нашим гарантиям».\n"
        + "🔹 «Кажется, для вас особенно важно, чтобы о вашей ситуации узнали».\n\n"
        + "🎯 Главная цель: услышать фразу «Всё верно». \n"
        + "Не путайте с «Вы правы» (которое часто говорят, чтобы просто отвязаться). Когда оппонент говорит «Всё верно», это значит, что вы предельно точно описали его картину мира.\n\n"
        + "В этот момент активность миндалевидного тела (центра страха) в его мозге снижается, и включается рациональное мышление. Только после этого можно переходить к обсуждению условий. 🧩\n\n"
        + "📌 Сохраняйте пост, чтобы не потерять эту технику для жестких бизнес-переговоров!\n\n"
        + "#эмоциональныйинтеллект #маркировкаэмоций #психология #стрессоустойчивость #переговоры", 
    likes: 709,
    notes: [], 
    media: [{ type: "image", url: "post_4.png" },]
    },

// ------------------------------------------5--------------------------------------
    { author: "Сестры Козловы", 
    avatar: "photo.jpeg", 
    time: "Вчера", 
    text: "«Дайте нам 10 миллионов и вертолет, или мы начнем действовать». Классический тупик.\n\n"
        + "Прямой отказ («Это невозможно») провоцирует эскалацию. Уступка невозможна по определению. Что делать? 🤷‍♂️\n\n"
        + "Профессиональные переговорщики используют калиброванные вопросы начинающиеся с «Как?» или «Что?».\n\n"
        + "Вместо того чтобы говорить «нет», переговорщик задает вопрос: 👉 «И как именно я должен это сделать?»\n\n"
        + "Этот вопрос делает три вещи одновременно: \n"
        + "1️⃣ Вы не говорите «нет» напрямую, избегая триггера агрессии. \n"
        + "2️⃣ Вы элегантно перекладываете бремя решения проблемы на самого инициатора требования. \n"
        + "3️⃣ Вы заставляете его столкнуться с реальностью ваших ограничений и начать искать альтернативы вместе с вами.\n\n"
        + "История знает случаи, когда этот вопрос заставлял захватчиков снижать требования или соглашаться на промежуточные шаги (например, сначала передать еду в обмен на освобождение одного заложника). 🤝\n\n"
        + "Это не манипуляция. Это приглашение к совместному решению проблемы.\n\n"
        + "💬 Сталкивались с невыполнимыми требованиями в работе? Как выворачивались?\n\n"
        + "#калиброванныевопросы #решениепроблем #бизнес #стратегия #лидерство", 
    likes: 981, 
    notes: [], 
    media: [{ type: "image", url:  "post_5.jpeg"}] }
];

const feedEl = document.getElementById("feed");

function renderPosts() {
  feedEl.innerHTML = "";
  posts.forEach(function (post, i) {
    const postEl = document.createElement("article");
    postEl.className = "post";
    let slidesHtml = "";
    if (post.media.length === 0) {
      slidesHtml = '<div class="carousel-slide"><div class="text-only-slide"><p style="font-size:18px;font-weight:600;">«' + post.text + '»</p></div></div>';
    } else {
      post.media.forEach(function (item) {
        if (item.type === "image") slidesHtml += '<div class="carousel-slide"><img src="' + item.url + '"></div>';
        else if (item.type === "video") slidesHtml += '<div class="carousel-slide"><video src="' + item.url + '" controls playsinline loop></video></div>';
        else if (item.type === "audio") slidesHtml += '<div class="carousel-slide"><div class="audio-slide"><div style="font-size:60px">🎵</div><h3>Аудио</h3><audio src="' + item.url + '" controls></audio></div></div>';
      });
    }
    let dotsHtml = "", arrowsHtml = "";
    if (post.media.length > 1) {
      let dots = "";
      post.media.forEach(function (_, idx) { dots += '<span class="dot ' + (idx === 0 ? "active" : "") + '"></span>'; });
      dotsHtml = '<div class="slide-dots" id="dots-' + i + '">' + dots + '</div>';
      arrowsHtml = '<button class="nav-arrow left" onclick="scrollCarousel(' + i + ', -1)">‹</button><button class="nav-arrow right" onclick="scrollCarousel(' + i + ', 1)">›</button>';
    }
    const moreBtn = post.text.length > 65 ? '<button class="more-btn" onclick="toggleText(' + i + ', this)">... ещё</button>' : '';
    let notesHtml = "";
    post.notes.forEach(function (n) { notesHtml += '<div class="note-item">💬 ' + n + '</div>'; });

    postEl.innerHTML = dotsHtml + arrowsHtml +
      '<div class="carousel-track" id="track-' + i + '" onscroll="updateDots(' + i + ')">' + slidesHtml + '</div>' +
      '<div class="post-overlay" id="overlay-' + i + '">' +
        '<div class="post-header"><img class="avatar" src="' + post.avatar + '"><div class="user-info"><h4>' + post.author + '</h4><span>' + post.time + '</span></div></div>' +
        '<div class="post-text-wrap"><p class="post-text" id="text-' + i + '">' + post.text + '</p>' + moreBtn + '</div>' +
        '<div class="notes-list" id="notes-' + i + '">' + notesHtml + '</div>' +
        '<div class="post-actions">' +
          '<button class="action-btn" onclick="toggleLike(this, ' + i + ')">❤️ <span>' + post.likes + '</span></button>' +
          '<form class="note-form" onsubmit="addNote(event, ' + i + ')">' +
            '<input class="note-input" id="input-' + i + '" placeholder="Написать текст..." />' +
            '<button class="note-send" type="submit">➤</button>' +
          '</form>' +
        '</div>' +
      '</div>';
    feedEl.appendChild(postEl);
  });
}

// function toggleText(i, btn) {
//   const txt = document.getElementById("text-" + i);
//   const ov = document.getElementById("overlay-" + i);
//   const isOpen = txt.classList.toggle("open");
//   ov.classList.toggle("expanded", isOpen);
//   btn.textContent = isOpen ? "свернуть" : "... ещё";
// }
function toggleText(i, btn) {
  const txt = document.getElementById("text-" + i);
  const ov = document.getElementById("overlay-" + i);
  const isOpen = txt.classList.toggle("open");
  ov.classList.toggle("expanded", isOpen);
  btn.textContent = isOpen ? "свернуть" : "... ещё";

  const postEl = ov.parentElement;
  postEl.querySelectorAll(".nav-arrow").forEach(function (arrow) {
    arrow.style.display = isOpen ? "none" : "block";
  });
}

function addNote(e, i) {
  e.preventDefault();
  const inp = document.getElementById("input-" + i);
  const val = inp.value.trim();
  if (!val) return;
  posts[i].notes.push(val);
  const list = document.getElementById("notes-" + i);
  list.innerHTML += '<div class="note-item">💬 ' + val + '</div>';
  inp.value = "";
}

function scrollCarousel(i, dir) {
  const t = document.getElementById("track-" + i);
  t.scrollBy({ left: dir * t.clientWidth, behavior: "smooth" });
}

function updateDots(i) {
  const t = document.getElementById("track-" + i);
  const d = document.getElementById("dots-" + i);
  if (!d) return;
  const active = Math.round(t.scrollLeft / t.clientWidth);
  d.querySelectorAll(".dot").forEach(function (dot, idx) { dot.classList.toggle("active", idx === active); });
}

function toggleLike(btn, i) {
  const s = btn.querySelector("span");
  btn.classList.toggle("liked");
  posts[i].likes += btn.classList.contains("liked") ? 1 : -1;
  s.textContent = posts[i].likes;
}

function openModal() { document.getElementById("postModal").classList.add("active"); }
function closeModal() { document.getElementById("postModal").classList.remove("active"); }

function addNewPost() {
  const author = document.getElementById("authorInput").value.trim() || "Гость";
  const text = document.getElementById("textInput").value.trim();
  const files = Array.from(document.getElementById("fileInput").files);
  if (!text && files.length === 0) return alert("Добавьте текст или файл!");
  const mediaItems = files.map(function (f) {
    let type = f.type.startsWith("video/") ? "video" : f.type.startsWith("audio/") ? "audio" : "image";
    return { type: type, url: URL.createObjectURL(f) };
  });
  posts.unshift({ author: author, avatar: makeAvatar("#6366f1", author[0].toUpperCase()), time: "Только что", text: text, likes: 0, notes: [], media: mediaItems });
  document.getElementById("textInput").value = "";
  document.getElementById("fileInput").value = "";
  closeModal();
  renderPosts();
  feedEl.scrollTo({ top: 0, behavior: "smooth" });
}

renderPosts();
