const dictionary = [
  { spanish: 'sol', aymara: 'willka', category: 'Naturaleza', image: '☀️' },
  { spanish: 'luna', aymara: 'phaxsi', category: 'Naturaleza', image: '🌙' },
  { spanish: 'agua', aymara: 'uma', category: 'Naturaleza', image: '💧' },
  { spanish: 'tierra', aymara: 'uraqi', category: 'Naturaleza', image: '🌎' },
  { spanish: 'flor', aymara: 'panqara', category: 'Naturaleza', image: '🌼' },
  { spanish: 'árbol', aymara: 'quqa', category: 'Naturaleza', image: '🌳' },
  { spanish: 'mamá', aymara: 'tayka', category: 'Familia', image: '👩' },
  { spanish: 'papá', aymara: 'awki', category: 'Familia', image: '👨' },
  { spanish: 'niño', aymara: 'yuqalla', category: 'Familia', image: '🧒' },
  { spanish: 'niña', aymara: 'imilla', category: 'Familia', image: '👧' },
  { spanish: 'abuela', aymara: 'awicha', category: 'Familia', image: '👵' },
  { spanish: 'amigo', aymara: 'masi', category: 'Familia', image: '🤝' },
  { spanish: 'libro', aymara: 'panka', category: 'Escuela', image: '📖' },
  { spanish: 'escuela', aymara: 'yatiqaña uta', category: 'Escuela', image: '🏫' },
  { spanish: 'maestro', aymara: 'yatichiri', category: 'Escuela', image: '🧑‍🏫' },
  { spanish: 'lápiz', aymara: 'qillqaña', category: 'Escuela', image: '✏️' },
  { spanish: 'cuaderno', aymara: 'laphi panka', category: 'Escuela', image: '📓' },
  { spanish: 'jugar', aymara: 'anataña', category: 'Acciones', image: '⚽' },
  { spanish: 'hola', aymara: 'kamisaraki', category: 'Saludos y expresiones', image: '👋' },
  { spanish: 'gracias', aymara: 'yuspajara', category: 'Saludos y expresiones', image: '🙏' },
  { spanish: 'buenos días', aymara: 'suma uru', category: 'Saludos y expresiones', image: '🌅' },
  { spanish: 'corazón', aymara: 'chuymani', category: 'Cuerpo y salud', image: '❤️' },
  { spanish: 'casa', aymara: 'uta', category: 'Hogar', image: '🏠' },
  { spanish: 'comida', aymara: 'manq’a', category: 'Alimentos', image: '🍲' }
];

const extraDictionary = `estrella|wara wara; cielo|alaxpacha; nube|qinaya; lluvia|jallu; nieve|khunu; granizo|chhijchhi; viento|wayra; rayo|lliphi; trueno|q’ixu q’ixu; arcoíris|kurmi
mar|quta; río|jawira; lago|quta; laguna|quta; montaña|qullu; cerro|qullu; piedra|qala; arena|ch’alla; barro|ñiq’i; camino|thakhi
campo|pampa; valle|qhirwa; bosque|quqa quqa; selva|yungas; desierto|waq’a pampa; isla|wat’a; playa|quta laka; fuego|nina; humo|q’illim; ceniza|phichha
aire|sama; luz|qhana; sombra|ch’iwi; día|uru; noche|aruma; mañana|qharüru; tarde|jayp’u; hoy|jichhüru; ayer|masüru
semana|simana; mes|phaxsi; año|mara; primavera|lapaka; verano|juyphi pacha; otoño|awti pacha; invierno|juyphi; semilla|jatha; hoja|laphi; rama|k’allma
raíz|saphi; fruto|achuja; maíz|tunqu; papa|ch’uqi; quinua|jupha; cebada|sewada; trigo|tiriwu; haba|jawasa; oca|apilla; choclo|chhuxllu
lechuga|lechuga; cebolla|siwulla; zanahoria|zanawuriya; ají|wayk’a; manzana|mansana; plátano|paqaya; naranja|laranja; limón|limuna; uva|uwasa; animal|uywa
perro|anu; gato|phisi; caballo|kawallu; vaca|waka; oveja|iwija; llama|qarwa; alpaca|allpaka; burro|asnu; chancho|khuchhi; gallina|phisi
pato|patu; pez|challwa; pájaro|p’iqi; cóndor|kunturi; mariposa|pillpintu; abeja|wayrunqu; hormiga|sik’imira; serpiente|asiru; rana|k’ayra; conejo|wank’u
zorro|atuq; puma|puma; oso|ukumari; ratón|achaku; mosca|ch’uspi; mosquito|chhichhillankha; gusano|laq’u; araña|kusi kusi; pluma|phuyu; lana|t’arwa
piel|qara; hueso|ch’akha; cuerno|wankha; cola|chupa; familia|wila masi; hermano|kullaka; hermana|kullaka; hijo|yuqa; hija|phucha; abuelo|achachi
tío|ipa; tía|ipa; primo|kullakanaka; prima|kullakanaka; esposo|chachawarmi; esposa|chachawarmi; bebé|wawa; joven|wayna; señor|tata; señora|mama
persona|jaqi; gente|jaqinaka; vecino|jak’achiri; pareja|panichasi; bebida|umaña; leche|ñuxñu uma; pan|t’ant’a; arroz|arusa; carne|aycha; pescado|challwa aycha
sopa|kaltu; sal|jayu; azúcar|asuka; miel|misk’i; huevo|k’awna; queso|kisu; cuchara|wislla; plato|p’uyu; vaso|qiru; olla|phukhu
cuchillo|kuchillu; mesa|misa; silla|tiyana; puerta|punku; ventana|t’uqu; pared|pirqa; techo|uta p’uyu; piso|pata; cuarto|uta; cama|ikiña
frazada|ikiña p’ita; ropa|isinaka; camisa|ch’ullu; pantalón|pantaluna; falda|pullira; zapato|wiskhu; sombrero|ch’ullu; guante|ampara p’ita; bufanda|kunka p’ita; bolsa|wayaqa
llave|killa; reloj|pacha uñjiri; dinero|qullqi; mercado|qhathu; tienda|aljiri uta; ciudad|marka; pueblo|ayllu; país|suyu; plaza|pampa; iglesia|iglisya
hospital|qullañ uta; farmacia|qullañ uta; cocina|phayaña uta; baño|jariña uta; jardín|yapu; granja|uywa uta; puente|chaka; calle|k’ullu; avión|phawiri; auto|anuqara
bus|jach’a apnaqiri; bicicleta|pä ruedani; barco|jach’a wampu; tren|chhuxu; rueda|muyu; viaje|saraña; equipaje|q’ipi; saludo|arsu; adiós|jikisiñkama; por favor|mira
perdón|pampachawi; sí|jisa; no|janiwa; bien|suma; mal|jan wali; feliz|kusi; triste|llakita; enojado|phiñasita; cansado|qarita; enfermo|usuta
sano|k’umara; caliente|junt’u; frío|thaya; grande|jach’a; pequeño|jisk’a; largo|jach’a; corto|jisk’a; nuevo|machaqa; viejo|awki; bonito|k’acha
feo|jan wali uñnaqa; fácil|phisna; difícil|ch’ama; rápido|jank’aki; lento|k’achata; lleno|phuqata; vacío|ch’usa; limpio|q’uma; sucio|q’añu; dulce|misk’i
amargo|k’ama; salado|jayuni; seco|waña; mojado|umañata; alto|sayt’u; bajo|pisi; ancho|pata; delgado|ñañu; blanco|janq’u; negro|ch’iyara
rojo|wila; amarillo|q’illu; verde|ch’uxña; azul|larama; uno|maya; dos|paya; tres|kimsa; cuatro|pusi; cinco|phisqa; seis|suxta
siete|paqallqu; ocho|kimsaqallqu; nueve|llätunka; diez|tunka; primero|nayrïri; último|qhipïri; mucho|walja; poco|juk’a; todos|taqpacha; algunos|yaqhipa
yo|naya; tú|juma; él|jupa; nosotros|jiwasa; ellos|jupanaka; qué|kuna; quién|khiti; dónde|kawkhansa; cuándo|kunapacha; cómo|kunjamsa
por qué|kunatsa; porque|ukhamawa; aquí|akankiwa; allí|ukankiwa; cerca|jak’a; lejos|jaya; arriba|alaxa; abajo|aynacha; dentro|manqha; fuera|anqa
delante|nayra; detrás|qhipa; derecha|kupïri; izquierda|ch’iqäri; arriba de|patxaru; debajo de|aynacharu; con|ampi; sin|jani; y|ukata; o|jan ukaxa
pero|ukampisa; también|ukhamaraki; ahora|jichha; después|qhiparu; antes|nayraqata; siempre|sapüru; nunca|janiwipuni; a veces|yaqhip kuti; caminar|saraña; correr|t’ijtaña
saltar|thuqtaña; sentarse|qunt’asiña; levantarse|saytaña; dormir|ikiña; despertar|sartaña; comer|manq’aña; beber|umantaña; cocinar|phayaña; lavar|jariña; trabajar|irnaqaña
estudiar|yatiqaña; leer|ullaña; escribir|qillqaña; dibujar|samichaña; cantar|q’uchuña; bailar|thuquña; reír|laruña; llorar|jachaña; hablar|arsuña; escuchar|ist’aña
mirar|uñjaña; ver|uñjaña; saber|yatiña; pensar|amuyuña; querer|munaña; amar|munasiña; ayudar|yanapaña; dar|churaña; recibir|katuqaña; tomar|apaqaña
llevar|apayaña; traer|apaña; abrir|katuña; cerrar|jist’antaña; entrar|mantantaña; salir|mistuña; subir|makhataña; bajar|saraqaña; caer|liwisiña; volar|phawaña
nadar|tuyuña; jugar|anataña; ganar|atipjaña; perder|atipayasiña; buscar|thaqaña; encontrar|jikxataña; esperar|suyt’aña; recordar|amtasiña; olvidar|armasiña; aprender|yatiqaña
enseñar|yatichaña; preguntar|jiskt’aña; responder|qhanañchaña; repetir|kutxataña; entender|amuyaña; número|jakhu; letra|qillqa; palabra|aru; frase|aru tama; pregunta|jiskt’a
respuesta|qhanañchawi; tarea|irnaqawi; clase|yatiqawi; patio|pampa; recreo|samakawi; mochila|q’ipi; regla|chiqanchaña; borrador|pichaña; tijera|khuchhuña; papel|laphi
pizarra|qillqaña panka; computadora|chhijllawi; teléfono|jawsaña; foto|uñacht’awi; música|jaylli; canción|q’uchu; fiesta|phunchawi; regalo|churäwi; juego|anatawi; pelota|p’iqi
color|sami; forma|uñta; círculo|muyu; línea|sara; punto|ch’iku; sonido|ist’awi; voz|arsu; silencio|amuki; nombre|suti; edad|maranaka
vida|jakaña; muerte|jiwaña; salud|k’umaraña; dolor|ususiña; cuerpo|janchi; cabeza|p’iqi; cara|ajanu; ojo|nayra; oreja|jinchu; nariz|jinq’u
boca|laka; diente|laka ch’akha; lengua|laq’a; cuello|kunka; mano|ampara; dedo|luk’ana; brazo|ampara; pierna|chara; pie|kay(u); rodilla|qunquri
espalda|qhipa; sangre|wila; respirar|samaña; medicina|qullanaka; médico|qulliri; fuerza|ch’ama; paz|sumankaña; suerte|küsisiña; verdad|chiqa; mentira|k’ari
ayuda|yanapa; trabajo|irnaqawi; descanso|samañawi; sueño|samka; risa|laru; llanto|jacha; miedo|axsaraña; alegría|kusiña; tristeza|llaki; esperanza|suyt’awi
respeto|yäqawi; origen|qalltawi; final|tukuyawi; principio|qallta; centro|taypi; lado|tuqi; parte|t’aqa; grupo|tama; parecido|kikpa; diferente|mayja
igual|kikpa; cambio|mayjt’awi; lugar|chiqa; tiempo|pacha; mundo|akapacha; lengua|aru; cultura|sarnaqawi; tradición|sarnaqa; comunidad|ayllu; reunión|tantachawi
danza|thuqu; tejido|sawu; colorido|saminchata; montaña sagrada|achachila; madre tierra|Pachamama; sol sagrado|inti; luna nueva|machaq phaxsi; luna llena|phuqata phaxsi; tierra fértil|suma uraqi; agua dulce|misk’i uma
agua fría|thaya uma; agua caliente|junt’u uma; flor roja|wila panqara; flor blanca|janq’u panqara; árbol grande|jach’a quqa; animal doméstico|uta uywa; animal salvaje|qarqa uywa; día soleado|willka uru; noche oscura|ch’amaka aruma; buen amigo|suma masi
buena persona|suma jaqi; mi casa|utajaxa; mi familia|wila masijaxa; mi mamá|taykajaxa; mi papá|awkijaxa; buen trabajo|suma irnaqawi; buen provecho|suma manq’asiñani; buenas noches|suma aruma; hasta mañana|qharürkama
te quiero|munasma; ven|jutam; vamos|sarañani; mira esto|aka uñjam; escucha|ist’am; silencio por favor|amukimaya; muy bien|wali suma; hasta luego|jikisiñkama`;

const categoryWords = {
  Naturaleza: 'estrella cielo nube lluvia nieve granizo viento rayo trueno arcoíris mar río lago laguna montaña cerro piedra arena barro campo valle bosque selva desierto isla playa fuego humo ceniza aire luz sombra día noche mañana tarde hoy ayer semana mes año primavera verano otoño invierno semilla hoja rama raíz fruto maíz papa quinua cebada trigo haba oca choclo lechuga cebolla zanahoria ají manzana plátano naranja limón uva pluma lana piel hueso cuerno cola',
  Animales: 'animal perro gato caballo vaca oveja llama alpaca burro chancho gallina pato pez pájaro cóndor mariposa abeja hormiga serpiente rana conejo zorro puma oso ratón mosca mosquito gusano araña',
  Familia: 'familia hermano hermana hijo hija abuelo tío tía primo prima esposo esposa bebé joven señor señora persona gente vecino pareja',
  Alimentos: 'bebida leche pan arroz carne pescado sopa sal azúcar miel huevo queso',
  Hogar: 'cuchara plato vaso olla cuchillo mesa silla puerta ventana pared techo piso cuarto cama frazada ropa camisa pantalón falda zapato sombrero guante bufanda bolsa llave reloj',
  'Lugares y transporte': 'dinero mercado tienda ciudad pueblo país plaza iglesia hospital farmacia cocina baño jardín granja puente calle avión auto bus bicicleta barco tren rueda viaje equipaje',
  'Saludos y expresiones': 'saludo adiós por favor perdón sí no bien mal hola gracias buenos días',
  'Cualidades y colores': 'feliz triste enojado cansado enfermo sano caliente frío grande pequeño largo corto nuevo viejo bonito feo fácil difícil rápido lento lleno vacío limpio sucio dulce amargo salado seco mojado alto bajo ancho delgado blanco negro rojo amarillo verde azul mucho poco',
  Números: 'uno dos tres cuatro cinco seis siete ocho nueve diez primero último',
  Ubicación: 'todos algunos yo tú él nosotros ellos qué quién dónde cuándo cómo por qué porque aquí allí cerca lejos arriba abajo dentro fuera delante detrás derecha izquierda arriba de debajo de con sin y o pero también ahora después antes siempre nunca a veces',
  Acciones: 'caminar correr saltar sentarse levantarse dormir despertar comer beber cocinar lavar trabajar estudiar leer escribir dibujar cantar bailar reír llorar hablar escuchar mirar ver saber pensar querer amar ayudar dar recibir tomar llevar traer abrir cerrar entrar salir subir bajar caer volar nadar jugar ganar perder buscar encontrar esperar recordar olvidar aprender enseñar preguntar responder repetir entender',
  Escuela: 'número letra palabra frase pregunta respuesta tarea clase patio recreo mochila regla borrador tijera papel pizarra computadora',
  'Cuerpo y salud': 'vida muerte salud dolor cuerpo cabeza cara ojo oreja nariz boca diente lengua cuello mano dedo brazo pierna pie rodilla espalda sangre respirar medicina médico fuerza paz suerte',
  Cultura: 'teléfono foto música canción fiesta regalo juego pelota color forma círculo línea punto sonido voz silencio nombre edad vida muerte paz suerte verdad mentira ayuda descanso sueño risa llanto miedo alegría tristeza esperanza respeto origen final principio centro lado parte grupo parecido diferente igual cambio lugar tiempo mundo lengua cultura tradición comunidad reunión danza tejido colorido'
};
const categoryLookup = new Map(Object.entries(categoryWords).flatMap(([category, words]) => words.split(' ').map((word) => [word, category])));
const phraseCategories = new Map([
  ['arcoíris', 'Naturaleza'], ['buen amigo', 'Familia'], ['buena persona', 'Familia'], ['mi casa', 'Familia'], ['mi familia', 'Familia'], ['mi mamá', 'Familia'], ['mi papá', 'Familia'],
  ['animal doméstico', 'Naturaleza'], ['animal salvaje', 'Naturaleza'], ['día soleado', 'Naturaleza'], ['noche oscura', 'Naturaleza'], ['montaña sagrada', 'Naturaleza'], ['madre tierra', 'Naturaleza'], ['sol sagrado', 'Naturaleza'], ['luna nueva', 'Naturaleza'], ['luna llena', 'Naturaleza'], ['tierra fértil', 'Naturaleza'], ['agua dulce', 'Naturaleza'], ['agua fría', 'Naturaleza'], ['agua caliente', 'Naturaleza'], ['flor roja', 'Naturaleza'], ['flor blanca', 'Naturaleza'], ['árbol grande', 'Naturaleza'],
  ['buen trabajo', 'Saludos y expresiones'], ['buen provecho', 'Saludos y expresiones'], ['buenas noches', 'Saludos y expresiones'], ['hasta mañana', 'Saludos y expresiones'], ['te quiero', 'Saludos y expresiones'], ['ven', 'Saludos y expresiones'], ['vamos', 'Saludos y expresiones'], ['mira esto', 'Saludos y expresiones'], ['escucha', 'Saludos y expresiones'], ['silencio por favor', 'Saludos y expresiones'], ['muy bien', 'Saludos y expresiones'], ['hasta luego', 'Saludos y expresiones'],
  ['pueblo aymara', 'Cultura'], ['música andina', 'Cultura'], ['fiesta patronal', 'Cultura']
]);

function getExtraCategory(spanish) {
  return phraseCategories.get(spanish) || categoryLookup.get(spanish) || 'Otros';
}

dictionary.push(...extraDictionary.split(';').slice(0, 300).map((entry, index) => {
  const [spanish, aymara] = entry.trim().split('|');
  return { spanish, aymara, category: getExtraCategory(spanish), image: ['📘', '🌟', '🧩'][index % 3] };
}));

const state = { category: 'Todos', direction: 'es-ay', history: JSON.parse(localStorage.getItem('arunaka-history') || '[]'), favorites: JSON.parse(localStorage.getItem('arunaka-favorites') || '[]') };
const $ = (selector) => document.querySelector(selector);

function saveState() {
  localStorage.setItem('arunaka-history', JSON.stringify(state.history));
  localStorage.setItem('arunaka-favorites', JSON.stringify(state.favorites));
}

function findWord(value, direction = state.direction) {
  const normalized = value.trim().toLocaleLowerCase('es');
  const sourceKey = direction === 'es-ay' ? 'spanish' : 'aymara';
  return dictionary.find((item) => item[sourceKey].toLocaleLowerCase('es') === normalized) || dictionary.find((item) => normalized.includes(item[sourceKey].toLocaleLowerCase('es')));
}

function addToHistory(word) {
  state.history = [word, ...state.history.filter((item) => item.spanish !== word.spanish)].slice(0, 8);
  saveState();
  renderHistory();
}

function translate() {
  const input = $('#spanish-input').value;
  const match = findWord(input);
  if (!match) {
    $('#aymara-output').textContent = '¡Inténtalo otra vez!';
    $('#translation-note').textContent = 'Aún estamos aprendiendo esa palabra. Prueba una sugerencia del diccionario.';
    $('#translation-feedback').textContent = 'Palabra no encontrada';
    return;
  }
  const result = state.direction === 'es-ay' ? match.aymara : match.spanish;
  const sourceLanguage = state.direction === 'es-ay' ? 'español' : 'aymara';
  const targetLanguage = state.direction === 'es-ay' ? 'aymara' : 'español';
  $('#aymara-output').textContent = result;
  $('#translation-note').textContent = `Así se dice “${input.trim()}” en ${targetLanguage}.`;
  $('#translation-feedback').textContent = '¡Muy bien! La búsqueda se guardó en tu historial.';
  addToHistory(match);
}

function updateTranslatorLabels() {
  const spanishToAymara = state.direction === 'es-ay';
  $('#translator-title').textContent = spanishToAymara ? 'Traductor español - aymara' : 'Traductor aymara - español';
  $('#input-language-label').firstChild.textContent = `Escribe en ${spanishToAymara ? 'español' : 'aymara'}`;
  $('#output-language-label').firstChild.textContent = `Resultado en ${spanishToAymara ? 'aymara' : 'español'}`;
  $('#spanish-input').placeholder = spanishToAymara ? 'Ejemplo: buenos días' : 'Ejemplo: suma uru';
  $('#input-hint').textContent = spanishToAymara ? 'Prueba con: sol, agua, mamá...' : 'Prueba con: willka, uma, tayka...';
  $('#aymara-output').textContent = spanishToAymara ? 'suma uru' : 'buenos días';
  $('#translation-note').textContent = spanishToAymara ? '¡Hola! Así se dice “buenos días”.' : '¡Hola! Así se dice “suma uru”.';
  $('#switch-languages').setAttribute('aria-label', `Cambiar a ${spanishToAymara ? 'aymara a español' : 'español a aymara'}`);
}

function showTab(tabName) {
  document.querySelectorAll('[data-tab-panel]').forEach((panel) => { panel.hidden = panel.dataset.tabPanel !== tabName; });
  document.querySelectorAll('.nav-link').forEach((link) => link.classList.toggle('active', link.dataset.tab === tabName));
  $('.main-nav').classList.remove('open');
}

function renderDictionary() {
  const query = $('#dictionary-search').value.trim().toLocaleLowerCase('es');
  const words = dictionary.filter((word) => (state.category === 'Todos' || word.category === state.category) && (!query || word.spanish.includes(query) || word.aymara.toLocaleLowerCase('es').includes(query)));
  $('#dictionary-grid').innerHTML = words.map((word) => { const favorite = state.favorites.some((item) => item.spanish === word.spanish); return `<article class="word-card"><button class="favorite-button ${favorite ? 'is-favorite' : ''}" data-favorite="${word.spanish}" type="button" aria-label="${favorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}">♥</button><button class="word-image" data-translate="${word.spanish}" type="button" aria-label="Traducir ${word.spanish}">${word.image}</button><h3>${word.aymara}</h3><p>${word.spanish}</p></article>`; }).join('');
  $('#empty-dictionary').hidden = words.length > 0;
}

function renderHistory() {
  $('#history-list').innerHTML = state.history.map((word) => `<div class="history-row"><div class="history-word"><span class="history-icon">${word.image}</span><span><strong>${word.spanish}</strong><small>${word.aymara}</small></span></div><button class="row-heart ${state.favorites.some((item) => item.spanish === word.spanish) ? 'is-favorite' : ''}" data-favorite="${word.spanish}" type="button" aria-label="Guardar ${word.spanish} en favoritos">♥</button></div>`).join('');
  $('#empty-history').hidden = state.history.length > 0;
  $('#favorites-list').innerHTML = state.favorites.map((word) => `<div class="favorite-row"><div class="favorite-word"><span><strong>${word.aymara}</strong><small>${word.spanish}</small></span></div><button class="row-heart is-favorite" data-favorite="${word.spanish}" type="button" aria-label="Quitar ${word.spanish} de favoritos">♥</button></div>`).join('');
  $('#empty-favorites').hidden = state.favorites.length > 0;
}

function toggleFavorite(spanish) {
  const word = dictionary.find((item) => item.spanish === spanish); if (!word) return;
  const exists = state.favorites.some((item) => item.spanish === spanish);
  state.favorites = exists ? state.favorites.filter((item) => item.spanish !== spanish) : [word, ...state.favorites];
  saveState(); renderDictionary(); renderHistory();
}

document.addEventListener('click', (event) => {
  const favoriteButton = event.target.closest('[data-favorite]'); if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
  const translateButton = event.target.closest('[data-translate]'); if (translateButton) { showTab('inicio'); $('#spanish-input').value = translateButton.dataset.translate; translate(); document.querySelector('#traductor').scrollIntoView({ behavior: 'smooth' }); }
});
$('#translate-button').addEventListener('click', translate);
$('#switch-languages').addEventListener('click', () => { state.direction = state.direction === 'es-ay' ? 'ay-es' : 'es-ay'; $('#spanish-input').value = ''; updateTranslatorLabels(); });
$('#spanish-input').addEventListener('keydown', (event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); translate(); } });
$('#dictionary-search').addEventListener('input', renderDictionary);
document.querySelectorAll('.category-tab').forEach((button) => button.addEventListener('click', () => { state.category = button.dataset.category; document.querySelectorAll('.category-tab').forEach((tab) => tab.classList.toggle('active', tab === button)); renderDictionary(); }));
$('#clear-history').addEventListener('click', () => { state.history = []; saveState(); renderHistory(); });
$('#speak-button').addEventListener('click', () => { if ('speechSynthesis' in window) window.speechSynthesis.speak(new SpeechSynthesisUtterance($('#aymara-output').textContent)); });
const menuToggle = $('.menu-toggle'); menuToggle.addEventListener('click', () => { const open = $('.main-nav').classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', (event) => { event.preventDefault(); showTab(link.dataset.tab); history.replaceState(null, '', `#${link.dataset.tab}`); }));
$('.primary-button').addEventListener('click', () => showTab('inicio'));
$('#current-year').textContent = new Date().getFullYear();
const initialTab = ['diccionario', 'historial'].includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : 'inicio';
showTab(initialTab); updateTranslatorLabels(); renderDictionary(); renderHistory();
