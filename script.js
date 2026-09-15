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
  { spanish: 'hola', aymara: 'kamisaki', category: 'Saludos y expresiones', image: '👋' },
  { spanish: 'gracias', aymara: 'yuspajara', category: 'Saludos y expresiones', image: '🙏' },
  { spanish: 'buenos días', aymara: 'suma uru', category: 'Saludos y expresiones', image: '🌅' },
  { spanish: 'corazón', aymara: 'chuyma', category: 'Cuerpo y salud', image: '❤️' },
  { spanish: 'casa', aymara: 'uta', category: 'Hogar', image: '🏠' },
  { spanish: 'comida', aymara: 'manq’a', category: 'Alimentos', image: '🍲' }
];

const extraDictionary = [
  { spanish: 'a veces', aymara: 'yaqhip kuti' },
  { spanish: 'abajo', aymara: 'aynacha' },
  { spanish: 'abeja', aymara: 'wayrunqu' },
  { spanish: 'abrir', aymara: 'jist’araña' },
  { spanish: 'abuelo', aymara: 'achachi' },
  { spanish: 'adiós', aymara: 'jikisiñkama' },
  { spanish: 'agua caliente', aymara: 'junt’u uma' },
  { spanish: 'agua dulce', aymara: 'misk’i uma' },
  { spanish: 'agua fría', aymara: 'thaya uma' },
  { spanish: 'ahora', aymara: 'jichha' },
  { spanish: 'aire', aymara: 'sama' },
  { spanish: 'ají', aymara: 'wayk’a' },
  { spanish: 'alegría', aymara: 'kusiña' },
  { spanish: 'algunos', aymara: 'yaqhipa' },
  { spanish: 'allí', aymara: 'ukankiwa' },
  { spanish: 'alpaca', aymara: 'allpaka' },
  { spanish: 'alto', aymara: 'sayt’u' },
  { spanish: 'amar', aymara: 'munasiña' },
  { spanish: 'amargo', aymara: 'k’ama' },
  { spanish: 'amarillo', aymara: 'q’illu' },
  { spanish: 'ancho', aymara: 'pata' },
  { spanish: 'animal', aymara: 'uywa' },
  { spanish: 'animal doméstico', aymara: 'uta uywa' },
  { spanish: 'animal salvaje', aymara: 'qarqa uywa' },
  { spanish: 'antes', aymara: 'nayraqata' },
  { spanish: 'año', aymara: 'mara' },
  { spanish: 'aprender', aymara: 'yatiqaña' },
  { spanish: 'aquí', aymara: 'akankiwa' },
  { spanish: 'araña', aymara: 'kusi kusi' },
  { spanish: 'árbol grande', aymara: 'jach’a quqa' },
  { spanish: 'arcoíris', aymara: 'kurmi' },
  { spanish: 'arena', aymara: 'ch’alla' },
  { spanish: 'arriba', aymara: 'alaxa' },
  { spanish: 'arriba de', aymara: 'patxaru' },
  { spanish: 'arroz', aymara: 'arusa' },
  { spanish: 'auto', aymara: 'anuqara' },
  { spanish: 'avión', aymara: 'phawiri' },
  { spanish: 'ayer', aymara: 'masüru' },
  { spanish: 'ayuda', aymara: 'yanapa' },
  { spanish: 'ayudar', aymara: 'yanapaña' },
  { spanish: 'azúcar', aymara: 'asuka' },
  { spanish: 'azul', aymara: 'larama' },
  { spanish: 'bailar', aymara: 'thuquña' },
  { spanish: 'bajar', aymara: 'saraqaña' },
  { spanish: 'bajo', aymara: 'pisi' },
  { spanish: 'baño', aymara: 'jariña uta' },
  { spanish: 'barco', aymara: 'jach’a wampu' },
  { spanish: 'barro', aymara: 'ñiq’i' },
  { spanish: 'bebé', aymara: 'wawa' },
  { spanish: 'beber', aymara: 'umantaña' },
  { spanish: 'bebida', aymara: 'umaña' },
  { spanish: 'bicicleta', aymara: 'pä ruedani' },
  { spanish: 'bien', aymara: 'suma' },
  { spanish: 'blanco', aymara: 'janq’u' },
  { spanish: 'boca', aymara: 'laka' },
  { spanish: 'bolsa', aymara: 'wayaqa' },
  { spanish: 'bonito', aymara: 'k’acha' },
  { spanish: 'borrador', aymara: 'pichaña' },
  { spanish: 'bosque', aymara: 'quqa quqa' },
  { spanish: 'brazo', aymara: 'ampara' },
  { spanish: 'buen amigo', aymara: 'suma masi' },
  { spanish: 'buen provecho', aymara: 'suma manq’asiñani' },
  { spanish: 'buen trabajo', aymara: 'suma irnaqawi' },
  { spanish: 'buena persona', aymara: 'suma jaqi' },
  { spanish: 'buenas noches', aymara: 'suma aruma' },
  { spanish: 'bufanda', aymara: 'kunka p’ita' },
  { spanish: 'burro', aymara: 'asnu' },
  { spanish: 'bus', aymara: 'jach’a apnaqiri' },
  { spanish: 'buscar', aymara: 'thaqaña' },
  { spanish: 'caballo', aymara: 'kawallu' },
  { spanish: 'cabeza', aymara: 'p’iqi' },
  { spanish: 'caer', aymara: 'liwisiña' },
  { spanish: 'caliente', aymara: 'junt’u' },
  { spanish: 'calle', aymara: 'thakhi' },
  { spanish: 'cama', aymara: 'ikiña' },
  { spanish: 'cambio', aymara: 'mayjt’awi' },
  { spanish: 'caminar', aymara: 'saraña' },
  { spanish: 'camino', aymara: 'thakhi' },
  { spanish: 'camisa', aymara: 'kamisa' },
  { spanish: 'campo', aymara: 'pampa' },
  { spanish: 'canción', aymara: 'q’uchu' },
  { spanish: 'cansado', aymara: 'qarita' },
  { spanish: 'cantar', aymara: 'q’uchuña' },
  { spanish: 'cara', aymara: 'ajanu' },
  { spanish: 'carne', aymara: 'aycha' },
  { spanish: 'cebada', aymara: 'sewada' },
  { spanish: 'cebolla', aymara: 'siwulla' },
  { spanish: 'ceniza', aymara: 'phichha' },
  { spanish: 'centro', aymara: 'taypi' },
  { spanish: 'cerca', aymara: 'jak’a' },
  { spanish: 'cerrar', aymara: 'jist’antaña' },
  { spanish: 'cerro', aymara: 'qullu' },
  { spanish: 'chancho', aymara: 'khuchhi' },
  { spanish: 'choclo', aymara: 'chhuxllu' },
  { spanish: 'cielo', aymara: 'alaxpacha' },
  { spanish: 'cinco', aymara: 'phisqa' },
  { spanish: 'círculo', aymara: 'muyu' },
  { spanish: 'ciudad', aymara: 'marka' },
  { spanish: 'clase', aymara: 'yatiqawi' },
  { spanish: 'cocina', aymara: 'phayaña uta' },
  { spanish: 'cocinar', aymara: 'phayaña' },
  { spanish: 'cola', aymara: 'chupa' },
  { spanish: 'color', aymara: 'sami' },
  { spanish: 'colorido', aymara: 'saminchata' },
  { spanish: 'comer', aymara: 'manq’aña' },
  { spanish: 'cómo', aymara: 'kunjamsa' },
  { spanish: 'computadora', aymara: 'chhijllawi' },
  { spanish: 'comunidad', aymara: 'ayllu' },
  { spanish: 'con', aymara: 'ampi' },
  { spanish: 'cóndor', aymara: 'kunturi' },
  { spanish: 'conejo', aymara: 'wank’u' },
  { spanish: 'correr', aymara: 't’ijtaña' },
  { spanish: 'corto', aymara: 'jisk’a' },
  { spanish: 'cuándo', aymara: 'kunapacha' },
  { spanish: 'cuarto', aymara: 'uta' },
  { spanish: 'cuatro', aymara: 'pusi' },
  { spanish: 'cuchara', aymara: 'wislla' },
  { spanish: 'cuchillo', aymara: 'kuchillu' },
  { spanish: 'cuello', aymara: 'kunka' },
  { spanish: 'cuerno', aymara: 'wankha' },
  { spanish: 'cuerpo', aymara: 'janchi' },
  { spanish: 'cultura', aymara: 'sarnaqawi' },
  { spanish: 'danza', aymara: 'thuqu' },
  { spanish: 'dar', aymara: 'churaña' },
  { spanish: 'debajo de', aymara: 'aynacharu' },
  { spanish: 'dedo', aymara: 'luk’ana' },
  { spanish: 'delante', aymara: 'nayra' },
  { spanish: 'delgado', aymara: 'ñañu' },
  { spanish: 'dentro', aymara: 'manqha' },
  { spanish: 'derecha', aymara: 'kupïri' },
  { spanish: 'descanso', aymara: 'samañawi' },
  { spanish: 'desierto', aymara: 'waq’a pampa' },
  { spanish: 'despertar', aymara: 'sartaña' },
  { spanish: 'después', aymara: 'qhiparu' },
  { spanish: 'detrás', aymara: 'qhipa' },
  { spanish: 'día', aymara: 'uru' },
  { spanish: 'día soleado', aymara: 'willka uru' },
  { spanish: 'dibujar', aymara: 'samichaña' },
  { spanish: 'diente', aymara: 'laka ch’akha' },
  { spanish: 'diez', aymara: 'tunka' },
  { spanish: 'diferente', aymara: 'mayja' },
  { spanish: 'difícil', aymara: 'ch’ama' },
  { spanish: 'dinero', aymara: 'qullqi' },
  { spanish: 'dolor', aymara: 'ususiña' },
  { spanish: 'dónde', aymara: 'kawkhansa' },
  { spanish: 'dormir', aymara: 'ikiña' },
  { spanish: 'dos', aymara: 'paya' },
  { spanish: 'dulce', aymara: 'misk’i' },
  { spanish: 'edad', aymara: 'maranaka' },
  { spanish: 'él', aymara: 'jupa' },
  { spanish: 'ellos', aymara: 'jupanaka' },
  { spanish: 'encontrar', aymara: 'jikxataña' },
  { spanish: 'enfermo', aymara: 'usuta' },
  { spanish: 'enojado', aymara: 'phiñasita' },
  { spanish: 'enseñar', aymara: 'yatichaña' },
  { spanish: 'entender', aymara: 'amuyaña' },
  { spanish: 'entrar', aymara: 'mantantaña' },
  { spanish: 'equipaje', aymara: 'q’ipi' },
  { spanish: 'escribir', aymara: 'qillqaña' },
  { spanish: 'escucha', aymara: 'ist’am' },
  { spanish: 'escuchar', aymara: 'ist’aña' },
  { spanish: 'espalda', aymara: 'qhipa' },
  { spanish: 'esperanza', aymara: 'suyt’awi' },
  { spanish: 'esperar', aymara: 'suyt’aña' },
  { spanish: 'esposa', aymara: 'chachawarmi' },
  { spanish: 'esposo', aymara: 'chachawarmi' },
  { spanish: 'estrella', aymara: 'wara wara' },
  { spanish: 'estudiar', aymara: 'yatiqaña' },
  { spanish: 'fácil', aymara: 'phisna' },
  { spanish: 'falda', aymara: 'pullira' },
  { spanish: 'familia', aymara: 'wila masi' },
  { spanish: 'farmacia', aymara: 'qullañ uta' },
  { spanish: 'feliz', aymara: 'kusi' },
  { spanish: 'feo', aymara: 'jan wali uñnaqa' },
  { spanish: 'fiesta', aymara: 'phunchawi' },
  { spanish: 'final', aymara: 'tukuyawi' },
  { spanish: 'flor blanca', aymara: 'janq’u panqara' },
  { spanish: 'flor roja', aymara: 'wila panqara' },
  { spanish: 'forma', aymara: 'uñta' },
  { spanish: 'foto', aymara: 'uñacht’awi' },
  { spanish: 'frase', aymara: 'aru tama' },
  { spanish: 'frazada', aymara: 'ikiña p’ita' },
  { spanish: 'frío', aymara: 'thaya' },
  { spanish: 'fruto', aymara: 'achuja' },
  { spanish: 'fuego', aymara: 'nina' },
  { spanish: 'fuera', aymara: 'anqa' },
  { spanish: 'fuerza', aymara: 'ch’ama' },
  { spanish: 'gallina', aymara: 'wallpa' },
  { spanish: 'ganar', aymara: 'atipjaña' },
  { spanish: 'gato', aymara: 'phisi', image: 'imagenes/gato.jpeg' },
  { spanish: 'gente', aymara: 'jaqinaka' },
  { spanish: 'grande', aymara: 'jach’a' },
  { spanish: 'granizo', aymara: 'chhijchhi' },
  { spanish: 'granja', aymara: 'uywa uta' },
  { spanish: 'grupo', aymara: 'tama' },
  { spanish: 'guante', aymara: 'ampara p’ita' },
  { spanish: 'gusano', aymara: 'laq’u' },
  { spanish: 'haba', aymara: 'jawasa' },
  { spanish: 'hablar', aymara: 'arsuña' },
  { spanish: 'hasta luego', aymara: 'jikisiñkama' },
  { spanish: 'hasta mañana', aymara: 'qharürkama' },
  { spanish: 'hermana', aymara: 'kullaka' },
  { spanish: 'hermano', aymara: 'jilata' },
  { spanish: 'hija', aymara: 'phucha' },
  { spanish: 'hijo', aymara: 'yuqa' },
  { spanish: 'hoja', aymara: 'laphi' },
  { spanish: 'hormiga', aymara: 'sik’imira' },
  { spanish: 'hospital', aymara: 'qullañ uta' },
  { spanish: 'hoy', aymara: 'jichhüru' },
  { spanish: 'hueso', aymara: 'ch’akha' },
  { spanish: 'huevo', aymara: 'k’awna' },
  { spanish: 'humo', aymara: 'q’illim' },
  { spanish: 'iglesia', aymara: 'iglisya' },
  { spanish: 'igual', aymara: 'kikpa' },
  { spanish: 'invierno', aymara: 'juyphi' },
  { spanish: 'isla', aymara: 'wat’a' },
  { spanish: 'izquierda', aymara: 'ch’iqäri' },
  { spanish: 'jardín', aymara: 'jardín' },
  { spanish: 'joven', aymara: 'wayna' },
  { spanish: 'juego', aymara: 'anatawi' },
  { spanish: 'lado', aymara: 'tuqi' },
  { spanish: 'lago', aymara: 'quta' },
  { spanish: 'laguna', aymara: 'quta' },
  { spanish: 'lana', aymara: 't’arwa' },
  { spanish: 'largo', aymara: 'jach’a' },
  { spanish: 'lavar', aymara: 'jariña' },
  { spanish: 'leche', aymara: 'ñuxñu uma' },
  { spanish: 'lechuga', aymara: 'lechuga' },
  { spanish: 'leer', aymara: 'ullaña' },
  { spanish: 'lejos', aymara: 'jaya' },
  { spanish: 'lengua', aymara: 'aru' },
  { spanish: 'lengua', aymara: 'laxra' },
  { spanish: 'lento', aymara: 'k’achata' },
  { spanish: 'letra', aymara: 'qillqa' },
  { spanish: 'levantarse', aymara: 'saytaña' },
  { spanish: 'limón', aymara: 'limuna' },
  { spanish: 'limpio', aymara: 'q’uma' },
  { spanish: 'línea', aymara: 'sara' },
  { spanish: 'llama', aymara: 'qarwa' },
  { spanish: 'llanto', aymara: 'jacha' },
  { spanish: 'llave', aymara: 'llawi' },
  { spanish: 'lleno', aymara: 'phuqata' },
  { spanish: 'llevar', aymara: 'apayaña' },
  { spanish: 'llorar', aymara: 'jachaña' },
  { spanish: 'lluvia', aymara: 'jallu' },
  { spanish: 'lugar', aymara: 'chiqa' },
  { spanish: 'luna llena', aymara: 'phuqata phaxsi' },
  { spanish: 'luna nueva', aymara: 'machaq phaxsi' },
  { spanish: 'luz', aymara: 'qhana' },
  { spanish: 'madre tierra', aymara: 'Pachamama' },
  { spanish: 'maíz', aymara: 'tunqu' },
  { spanish: 'mal', aymara: 'jan wali' },
  { spanish: 'mano', aymara: 'ampara' },
  { spanish: 'manzana', aymara: 'mansana' },
  { spanish: 'mañana', aymara: 'qharüru' },
  { spanish: 'mar', aymara: 'quta' },
  { spanish: 'mariposa', aymara: 'pillpintu' },
  { spanish: 'medicina', aymara: 'qullanaka' },
  { spanish: 'médico', aymara: 'qulliri' },
  { spanish: 'mentira', aymara: 'k’ari' },
  { spanish: 'mercado', aymara: 'qhathu' },
  { spanish: 'mes', aymara: 'phaxsi' },
  { spanish: 'mesa', aymara: 'misa' },
  { spanish: 'mi casa', aymara: 'utajaxa' },
  { spanish: 'mi familia', aymara: 'wila masijaxa' },
  { spanish: 'mi mamá', aymara: 'taykajaxa' },
  { spanish: 'mi papá', aymara: 'awkijaxa' },
  { spanish: 'miedo', aymara: 'axsaraña' },
  { spanish: 'miel', aymara: 'misk’i' },
  { spanish: 'mira esto', aymara: 'aka uñjam' },
  { spanish: 'mirar', aymara: 'uñjaña' },
  { spanish: 'mochila', aymara: 'q’ipi' },
  { spanish: 'mojado', aymara: 'umañata' },
  { spanish: 'montaña', aymara: 'qullu' },
  { spanish: 'montaña sagrada', aymara: 'achachila' },
  { spanish: 'mosca', aymara: 'ch’uspi' },
  { spanish: 'mosquito', aymara: 'chhichhillankha' },
  { spanish: 'mucho', aymara: 'walja' },
  { spanish: 'muerte', aymara: 'jiwaña' },
  { spanish: 'mundo', aymara: 'akapacha' },
  { spanish: 'música', aymara: 'jaylli' },
  { spanish: 'muy bien', aymara: 'wali suma' },
  { spanish: 'nadar', aymara: 'tuyuña' },
  { spanish: 'naranja', aymara: 'laranja' },
  { spanish: 'nariz', aymara: 'jinq’u' },
  { spanish: 'negro', aymara: 'ch’iyara' },
  { spanish: 'nieve', aymara: 'khunu' },
  { spanish: 'no', aymara: 'janiwa' },
  { spanish: 'noche', aymara: 'aruma' },
  { spanish: 'noche oscura', aymara: 'ch’amaka aruma' },
  { spanish: 'nombre', aymara: 'suti' },
  { spanish: 'nosotros', aymara: 'jiwasa' },
  { spanish: 'nube', aymara: 'qinaya' },
  { spanish: 'nueve', aymara: 'llätunka' },
  { spanish: 'nuevo', aymara: 'machaqa' },
  { spanish: 'número', aymara: 'jakhu' },
  { spanish: 'nunca', aymara: 'janiwipuni' },
  { spanish: 'o', aymara: 'jan ukaxa' },
  { spanish: 'oca', aymara: 'apilla' },
  { spanish: 'ocho', aymara: 'kimsaqallqu' },
  { spanish: 'ojo', aymara: 'nayra' },
  { spanish: 'olla', aymara: 'phukhu' },
  { spanish: 'olvidar', aymara: 'armasiña' },
  { spanish: 'oreja', aymara: 'jinchu' },
  { spanish: 'origen', aymara: 'qalltawi' },
  { spanish: 'oso', aymara: 'ukumari' },
  { spanish: 'otoño', aymara: 'awti pacha' },
  { spanish: 'oveja', aymara: 'iwija' },
  { spanish: 'país', aymara: 'suyu' },
  { spanish: 'pájaro', aymara: 'jamach’i' },
  { spanish: 'palabra', aymara: 'aru' },
  { spanish: 'pan', aymara: 't’ant’a' },
  { spanish: 'pantalón', aymara: 'pantaluna' },
  { spanish: 'papa', aymara: 'ch’uqi' },
  { spanish: 'papel', aymara: 'laphi' },
  { spanish: 'parecido', aymara: 'kikpa' },
  { spanish: 'pared', aymara: 'pirqa' },
  { spanish: 'pareja', aymara: 'panichasi' },
  { spanish: 'parte', aymara: 't’aqa' },
  { spanish: 'patio', aymara: 'pampa' },
  { spanish: 'pato', aymara: 'patu' },
  { spanish: 'paz', aymara: 'sumankaña' },
  { spanish: 'pelota', aymara: 'piluta' },
  { spanish: 'pensar', aymara: 'amuyuña' },
  { spanish: 'pequeño', aymara: 'jisk’a' },
  { spanish: 'perder', aymara: 'atipayasiña' },
  { spanish: 'perdón', aymara: 'pampachawi' },
  { spanish: 'pero', aymara: 'ukampisa' },
  { spanish: 'perro', aymara: 'anu' },
  { spanish: 'persona', aymara: 'jaqi' },
  { spanish: 'pescado', aymara: 'challwa' },
  { spanish: 'pez', aymara: 'challwa' },
  { spanish: 'pie', aymara: 'kay(u)' },
  { spanish: 'piedra', aymara: 'qala' },
  { spanish: 'piel', aymara: 'qara' },
  { spanish: 'pierna', aymara: 'chara' },
  { spanish: 'piso', aymara: 'pata' },
  { spanish: 'pizarra', aymara: 'qillqaña panka' },
  { spanish: 'plátano', aymara: 'paqaya' },
  { spanish: 'plato', aymara: 'p’uyu' },
  { spanish: 'playa', aymara: 'quta laka' },
  { spanish: 'plaza', aymara: 'pampa' },
  { spanish: 'pluma', aymara: 'phuyu' },
  { spanish: 'poco', aymara: 'juk’a' },
  { spanish: 'por favor', aymara: 'mira' },
  { spanish: 'por qué', aymara: 'kunatsa' },
  { spanish: 'porque', aymara: 'ukhamawa' },
  { spanish: 'pregunta', aymara: 'jiskt’a' },
  { spanish: 'preguntar', aymara: 'jiskt’aña' },
  { spanish: 'prima', aymara: 'kullakanaka' },
  { spanish: 'primavera', aymara: 'lapaka' },
  { spanish: 'primero', aymara: 'nayrïri' },
  { spanish: 'primo', aymara: 'kullakanaka' },
  { spanish: 'principio', aymara: 'qallta' },
  { spanish: 'pueblo', aymara: 'ayllu' },
  { spanish: 'puente', aymara: 'chaka' },
  { spanish: 'puerta', aymara: 'punku' },
  { spanish: 'puma', aymara: 'puma' },
  { spanish: 'punto', aymara: 'ch’iku' },
  { spanish: 'qué', aymara: 'kuna' },
  { spanish: 'querer', aymara: 'munaña' },
  { spanish: 'queso', aymara: 'kisu' },
  { spanish: 'quién', aymara: 'khiti' },
  { spanish: 'quinua', aymara: 'jupha' },
  { spanish: 'raíz', aymara: 'saphi' },
  { spanish: 'rama', aymara: 'k’allma' },
  { spanish: 'rana', aymara: 'k’ayra' },
  { spanish: 'rápido', aymara: 'jank’aki' },
  { spanish: 'ratón', aymara: 'achaku' },
  { spanish: 'rayo', aymara: 'lliphi' },
  { spanish: 'recibir', aymara: 'katuqaña' },
  { spanish: 'recordar', aymara: 'amtasiña' },
  { spanish: 'recreo', aymara: 'samakawi' },
  { spanish: 'regalo', aymara: 'churäwi' },
  { spanish: 'regla', aymara: 'tupu' },
  { spanish: 'reír', aymara: 'laruña' },
  { spanish: 'reloj', aymara: 'pacha uñjiri' },
  { spanish: 'repetir', aymara: 'kutxataña' },
  { spanish: 'respeto', aymara: 'yäqawi' },
  { spanish: 'respirar', aymara: 'samaña' },
  { spanish: 'responder', aymara: 'qhanañchaña' },
  { spanish: 'respuesta', aymara: 'qhanañchawi' },
  { spanish: 'reunión', aymara: 'tantachawi' },
  { spanish: 'río', aymara: 'jawira' },
  { spanish: 'risa', aymara: 'laru' },
  { spanish: 'rodilla', aymara: 'qunquri' },
  { spanish: 'rojo', aymara: 'wila' },
  { spanish: 'ropa', aymara: 'isinaka' },
  { spanish: 'rueda', aymara: 'muyu' },
  { spanish: 'saber', aymara: 'yatiña' },
  { spanish: 'sal', aymara: 'jayu' },
  { spanish: 'salado', aymara: 'jayuni' },
  { spanish: 'salir', aymara: 'mistuña' },
  { spanish: 'saltar', aymara: 'thuqtaña' },
  { spanish: 'salud', aymara: 'k’umaraña' },
  { spanish: 'saludo', aymara: 'aruskipawi' },
  { spanish: 'sangre', aymara: 'wila' },
  { spanish: 'sano', aymara: 'k’umara' },
  { spanish: 'seco', aymara: 'waña' },
  { spanish: 'seis', aymara: 'suxta' },
  { spanish: 'selva', aymara: 'yungas' },
  { spanish: 'semana', aymara: 'simana' },
  { spanish: 'semilla', aymara: 'jatha' },
  { spanish: 'sentarse', aymara: 'qunt’asiña' },
  { spanish: 'señor', aymara: 'tata' },
  { spanish: 'señora', aymara: 'mama' },
  { spanish: 'serpiente', aymara: 'asiru' },
  { spanish: 'sí', aymara: 'jisa' },
  { spanish: 'siempre', aymara: 'sapüru' },
  { spanish: 'siete', aymara: 'paqallqu' },
  { spanish: 'silencio', aymara: 'amuki' },
  { spanish: 'silencio por favor', aymara: 'amukimaya' },
  { spanish: 'silla', aymara: 'tiyana' },
  { spanish: 'sin', aymara: 'jani' },
  { spanish: 'sol sagrado', aymara: 'willka' },
  { spanish: 'sombra', aymara: 'ch’iwi' },
  { spanish: 'sombrero', aymara: 'ch’ullu' },
  { spanish: 'sonido', aymara: 'ist’awi' },
  { spanish: 'sopa', aymara: 'kaltu' },
  { spanish: 'subir', aymara: 'makhataña' },
  { spanish: 'sucio', aymara: 'q’añu' },
  { spanish: 'sueño', aymara: 'samka' },
  { spanish: 'suerte', aymara: 'küsisiña' },
  { spanish: 'también', aymara: 'ukhamaraki' },
  { spanish: 'tarde', aymara: 'jayp’u' },
  { spanish: 'tarea', aymara: 'irnaqawi' },
  { spanish: 'te quiero', aymara: 'munasma' },
  { spanish: 'techo', aymara: 'uta p’uyu' },
  { spanish: 'tejido', aymara: 'sawu' },
  { spanish: 'teléfono', aymara: 'jawsañäwi' },
  { spanish: 'tía', aymara: 'ipa' },
  { spanish: 'tiempo', aymara: 'pacha' },
  { spanish: 'tienda', aymara: 'aljiri uta' },
  { spanish: 'tierra fértil', aymara: 'suma uraqi' },
  { spanish: 'tijera', aymara: 'khuchhuña' },
  { spanish: 'tío', aymara: 'ipa' },
  { spanish: 'todos', aymara: 'taqpacha' },
  { spanish: 'tomar', aymara: 'katuña' },
  { spanish: 'trabajar', aymara: 'irnaqaña' },
  { spanish: 'trabajo', aymara: 'irnaqawi' },
  { spanish: 'tradición', aymara: 'sarnaqawi' },
  { spanish: 'traer', aymara: 'apaña' },
  { spanish: 'tren', aymara: 'chhuxu' },
  { spanish: 'tres', aymara: 'kimsa' },
  { spanish: 'trigo', aymara: 'tiriwu' },
  { spanish: 'triste', aymara: 'llakita' },
  { spanish: 'tristeza', aymara: 'llaki' },
  { spanish: 'trueno', aymara: 'q’ixu q’ixu' },
  { spanish: 'tú', aymara: 'juma' },
  { spanish: 'último', aymara: 'qhipïri' },
  { spanish: 'uno', aymara: 'maya' },
  { spanish: 'uva', aymara: 'uwasa' },
  { spanish: 'vaca', aymara: 'waka' },
  { spanish: 'vacío', aymara: 'ch’usa' },
  { spanish: 'valle', aymara: 'qhirwa' },
  { spanish: 'vamos', aymara: 'sarañani' },
  { spanish: 'vaso', aymara: 'qiru' },
  { spanish: 'vecino', aymara: 'jak’achiri' },
  { spanish: 'ven', aymara: 'jutam' },
  { spanish: 'ventana', aymara: 't’uqu' },
  { spanish: 'ver', aymara: 'uñjaña' },
  { spanish: 'verano', aymara: 'jallu pacha' },
  { spanish: 'verdad', aymara: 'chiqa' },
  { spanish: 'verde', aymara: 'ch’uxña' },
  { spanish: 'viaje', aymara: 'saraña' },
  { spanish: 'vida', aymara: 'jakaña' },
  { spanish: 'viejo', aymara: 'awki' },
  { spanish: 'viento', aymara: 'wayra' },
  { spanish: 'volar', aymara: 'phawaña' },
  { spanish: 'voz', aymara: 'arsu' },
  { spanish: 'y', aymara: 'ukata' },
  { spanish: 'yo', aymara: 'naya' },
  { spanish: 'zanahoria', aymara: 'zanawuriya' },
  { spanish: 'zapato', aymara: 'wiskhu' },
  { spanish: 'zorro', aymara: 'atuq' },
];

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

const wordConcepts = {
  sol: 'Estrella que ilumina y calienta la Tierra durante el día.',
  luna: 'Cuerpo celeste que vemos brillar por la noche.',
  agua: 'Líquido indispensable para la vida y la naturaleza.',
  tierra: 'Suelo donde crecen las plantas y vivimos.',
  flor: 'Parte colorida de una planta que puede formar frutos.',
  árbol: 'Planta grande con tronco, ramas y hojas.',
  mamá: 'Mujer que cuida y acompaña a sus hijos.',
  papá: 'Hombre que cuida y acompaña a sus hijos.',
  niño: 'Persona de corta edad que está creciendo.',
  niña: 'Persona de corta edad que está creciendo.',
  abuela: 'Madre de uno de nuestros padres.',
  amigo: 'Persona con quien compartimos confianza y cariño.',
  libro: 'Conjunto de páginas que guarda historias o conocimientos.',
  escuela: 'Lugar donde las personas aprenden y conviven.',
  maestro: 'Persona que guía a otros en su aprendizaje.',
  lápiz: 'Instrumento que sirve para escribir o dibujar.',
  cuaderno: 'Conjunto de hojas para escribir tareas y apuntes.',
  jugar: 'Realizar una actividad por diversión o entretenimiento.',
  hola: 'Saludo usado al encontrarse con alguien.',
  gracias: 'Expresión para reconocer un favor o una atención.',
  'buenos días': 'Saludo que se usa durante las primeras horas del día.',
  corazón: 'Órgano que impulsa la sangre por todo el cuerpo.',
  casa: 'Lugar donde una persona o familia vive.',
  comida: 'Alimento preparado para nutrirnos.',
  estrella: 'Astro que emite su propia luz en el cielo.',
  cielo: 'Espacio que parece rodear la Tierra sobre nosotros.',
  nube: 'Conjunto visible de gotas de agua suspendidas en el aire.',
  lluvia: 'Agua que cae de las nubes hacia la tierra.',
  nieve: 'Precipitación de pequeños cristales de hielo.',
  viento: 'Movimiento del aire que podemos sentir.',
  río: 'Corriente natural de agua que fluye hacia otro lugar.',
  montaña: 'Elevación grande y natural del terreno.',
  fuego: 'Luz y calor producidos por una combustión.',
  aire: 'Mezcla de gases que respiramos y rodea la Tierra.',
  día: 'Tiempo en que hay luz del sol.',
  noche: 'Tiempo en que una parte de la Tierra queda sin luz solar.',
  maíz: 'Planta de cereal cuyos granos sirven de alimento.',
  papa: 'Tubérculo comestible que crece bajo la tierra.',
  quinua: 'Semilla andina nutritiva usada como alimento.',
  animal: 'Ser vivo que puede alimentarse y moverse por sí mismo.',
  perro: 'Animal doméstico conocido por su lealtad y compañía.',
  gato: 'Animal doméstico ágil que suele cazar pequeños animales.',
  caballo: 'Animal fuerte que puede transportar personas.',
  vaca: 'Animal de granja que produce leche.',
  oveja: 'Animal cubierto de lana que vive en el campo.',
  llama: 'Camélido andino usado para transportar y obtener lana.',
  pájaro: 'Animal con plumas, alas y pico.',
  cóndor: 'Ave andina de gran tamaño que vuela sobre las montañas.',
  mariposa: 'Insecto con alas coloridas que nace de una oruga.',
  abeja: 'Insecto que produce miel y ayuda a polinizar flores.',
  familia: 'Grupo de personas unidas por parentesco o cariño.',
  hermano: 'Hijo de los mismos padres que otra persona.',
  hermana: 'Hija de los mismos padres que otra persona.',
  bebé: 'Persona en su primera etapa de vida.',
  persona: 'Ser humano considerado de manera individual.',
  pan: 'Alimento horneado hecho principalmente con harina.',
  leche: 'Bebida nutritiva producida por algunos mamíferos.',
  huevo: 'Alimento protegido por una cáscara y producido por aves.',
  sal: 'Sustancia usada para sazonar los alimentos.',
  miel: 'Sustancia dulce que producen las abejas.',
  cuchara: 'Utensilio usado para recoger alimentos líquidos o pequeños.',
  mesa: 'Mueble con una superficie para apoyar objetos o comer.',
  silla: 'Mueble diseñado para sentarse.',
  puerta: 'Elemento que permite entrar y salir de un espacio.',
  ventana: 'Abertura que deja pasar luz y aire a una habitación.',
  cama: 'Mueble preparado para dormir o descansar.',
  ciudad: 'Lugar poblado con muchas viviendas, calles y servicios.',
  mercado: 'Lugar donde se compran y venden productos.',
  hospital: 'Edificio donde se atiende a personas enfermas.',
  avión: 'Vehículo que vuela y transporta personas o carga.',
  bicicleta: 'Vehículo de dos ruedas que se mueve con pedales.',
  saludo: 'Palabra o gesto que muestra reconocimiento al encontrarse.',
  adiós: 'Expresión que se usa al despedirse.',
  feliz: 'Estado de ánimo de quien siente alegría y bienestar.',
  triste: 'Estado de ánimo causado por pena o falta de alegría.',
  grande: 'Cualidad de algo que tiene un tamaño considerable.',
  pequeño: 'Cualidad de algo que tiene poco tamaño.',
  rojo: 'Color parecido al de la sangre o una manzana madura.',
  amarillo: 'Color parecido al del sol o el oro.',
  verde: 'Color común en las hojas y la vegetación.',
  azul: 'Color parecido al cielo despejado.',
  uno: 'Número que representa una sola unidad.',
  dos: 'Número que representa un par de unidades.',
  diez: 'Número formado por diez unidades.',
  aquí: 'Indica el lugar cercano donde está quien habla.',
  allí: 'Indica un lugar distinto o más alejado.',
  caminar: 'Avanzar moviendo los pies paso a paso.',
  correr: 'Desplazarse rápidamente usando las piernas.',
  dormir: 'Descansar mientras el cuerpo y la mente se recuperan.',
  comer: 'Ingerir alimentos para obtener energía y nutrientes.',
  beber: 'Tomar un líquido por la boca.',
  estudiar: 'Dedicar tiempo a comprender y aprender algo.',
  leer: 'Interpretar letras y palabras para comprender un texto.',
  escribir: 'Representar ideas mediante letras o signos.',
  cantar: 'Producir con la voz sonidos organizados y melodiosos.',
  escuchar: 'Prestar atención a los sonidos.',
  aprender: 'Adquirir conocimientos o habilidades nuevas.',
  enseñar: 'Ayudar a otra persona a aprender.',
  palabra: 'Unidad de lenguaje que expresa una idea o significado.',
  pregunta: 'Frase que busca obtener información.',
  respuesta: 'Información que se da para resolver una pregunta.',
  cuerpo: 'Conjunto de partes físicas de una persona o animal.',
  cabeza: 'Parte del cuerpo que contiene el cerebro y los sentidos.',
  ojo: 'Órgano que permite ver el mundo.',
  mano: 'Parte del cuerpo usada para tocar, tomar y trabajar.',
  pie: 'Parte inferior de la pierna que permite caminar.',
  sangre: 'Líquido que circula por el cuerpo y transporta sustancias.',
  medicina: 'Sustancia o tratamiento que ayuda a recuperar la salud.',
  médico: 'Profesional que previene, diagnostica y trata enfermedades.',
  paz: 'Situación de tranquilidad y ausencia de conflictos.',
  verdad: 'Aquello que coincide con los hechos reales.',
  mentira: 'Afirmación que no corresponde con la realidad.',
  ayuda: 'Apoyo que se ofrece para resolver una dificultad.',
  alegría: 'Emoción agradable de entusiasmo y felicidad.',
  respeto: 'Reconocimiento del valor y los derechos de los demás.',
  comunidad: 'Grupo de personas que comparte un lugar o una identidad.',
  cultura: 'Conjunto de costumbres, conocimientos y expresiones de un pueblo.',
  danza: 'Movimiento del cuerpo organizado al ritmo de la música.',
  tejido: 'Tela o pieza elaborada entrelazando hilos.'
};

const conceptTemplates = {
  Naturaleza: 'Elemento natural relacionado con el entorno y la vida.',
  Animales: 'Ser vivo que forma parte de la diversidad animal.',
  Familia: 'Persona o vínculo que forma parte de las relaciones familiares.',
  Alimentos: 'Producto que puede formar parte de la alimentación.',
  Hogar: 'Objeto o espacio que forma parte de la vida en casa.',
  'Lugares y transporte': 'Lugar, vehículo o elemento relacionado con los desplazamientos.',
  'Saludos y expresiones': 'Expresión que sirve para comunicarnos con otras personas.',
  'Cualidades y colores': 'Palabra que describe una característica, estado o apariencia.',
  Números: 'Palabra que representa una cantidad o una posición.',
  Ubicación: 'Palabra que señala un lugar, una dirección o una relación espacial.',
  Acciones: 'Acción que puede realizar una persona en su vida diaria.',
  Escuela: 'Elemento que participa en el aprendizaje y la vida escolar.',
  'Cuerpo y salud': 'Elemento relacionado con el cuerpo, el bienestar o su cuidado.',
  Cultura: 'Expresión o idea que representa la vida de una comunidad.',
  Otros: 'Palabra usada para nombrar una idea, objeto o situación.'
};

function getConcept(spanish, category) {
  return wordConcepts[spanish] || `${spanish.charAt(0).toUpperCase()}${spanish.slice(1)}: ${conceptTemplates[category] || conceptTemplates.Otros}`;
}

function getExtraCategory(spanish) {
  return phraseCategories.get(spanish) || categoryLookup.get(spanish) || 'Otros';
}

dictionary.push(...extraDictionary.slice(0, 300).map((entry, index) => ({
  ...entry,
  category: getExtraCategory(entry.spanish),
  image: entry.image || ['📘', '🌟', '🧩'][index % 3]
})));

dictionary.forEach((word) => {
  word.concept = getConcept(word.spanish, word.category);
});

const state = {
  category: 'Todos',
  direction: 'es-ay',
  history: JSON.parse(localStorage.getItem('arunaka-history') || '[]'),
  favorites: JSON.parse(localStorage.getItem('arunaka-favorites') || '[]')
};
const $ = (selector) => document.querySelector(selector);

function saveState() {
  localStorage.setItem('arunaka-history', JSON.stringify(state.history));
  localStorage.setItem('arunaka-favorites', JSON.stringify(state.favorites));
}

function normalizeWord(value) {
  return value.trim().toLocaleLowerCase('es').replace(/[’‘`]/g, "'").replace(/\s+/g, ' ');
}

function findWord(value, direction = state.direction) {
  const normalized = normalizeWord(value);
  const sourceKey = direction === 'es-ay' ? 'spanish' : 'aymara';
  const exactMatch = dictionary.find((item) => normalizeWord(item[sourceKey]) === normalized);
  if (exactMatch) return exactMatch;
  return dictionary
    .filter((item) => normalized.includes(normalizeWord(item[sourceKey])))
    .sort((first, second) => normalizeWord(second[sourceKey]).length - normalizeWord(first[sourceKey]).length)[0];
}

function renderWordImage(image, className = '') {
  const isImagePath = typeof image === 'string' && /\.(avif|gif|jpe?g|png|webp)(\?.*)?$/i.test(image);
  return isImagePath
    ? `<img class="${className}" src="${image}" alt="" loading="lazy">`
    : image;
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
  document.querySelectorAll('[data-tab-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.tabPanel !== tabName;
  });
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.tab === tabName);
  });
  $('.main-nav').classList.remove('open');
}

function renderDictionary() {
  const query = $('#dictionary-search').value.trim().toLocaleLowerCase('es');
  const words = dictionary.filter((word) => (
    (state.category === 'Todos' || word.category === state.category)
    && (!query || word.spanish.includes(query) || word.aymara.toLocaleLowerCase('es').includes(query))
  ));

  $('#dictionary-grid').innerHTML = words.map((word) => {
    const favorite = state.favorites.some((item) => item.spanish === word.spanish);

    return `<article class="word-card">
      <button class="favorite-button ${favorite ? 'is-favorite' : ''}" data-favorite="${word.spanish}" type="button" aria-label="${favorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}">♥</button>
      <button class="word-image" data-translate="${word.spanish}" type="button" aria-label="Traducir ${word.spanish}">${renderWordImage(word.image, 'word-image-file')}</button>
      <h3>${word.aymara}</h3>
      <p>${word.spanish}</p>
      <small class="word-concept"><strong>Concepto:</strong> ${word.concept}</small>
    </article>`;
  }).join('');
  $('#empty-dictionary').hidden = words.length > 0;
}

function renderHistory() {
  $('#history-list').innerHTML = state.history.map((word) => `
    <div class="history-row">
      <div class="history-word">
        <span class="history-icon">${renderWordImage(word.image, 'history-image')}</span>
        <span><strong>${word.spanish}</strong><small>${word.aymara}</small></span>
      </div>
      <button class="row-heart ${state.favorites.some((item) => item.spanish === word.spanish) ? 'is-favorite' : ''}" data-favorite="${word.spanish}" type="button" aria-label="Guardar ${word.spanish} en favoritos">♥</button>
    </div>`
  ).join('');
  $('#empty-history').hidden = state.history.length > 0;
  $('#favorites-list').innerHTML = state.favorites.map((word) => `
    <div class="favorite-row">
      <div class="favorite-word">
        <span><strong>${word.aymara}</strong><small>${word.spanish}</small></span>
      </div>
      <button class="row-heart is-favorite" data-favorite="${word.spanish}" type="button" aria-label="Quitar ${word.spanish} de favoritos">♥</button>
    </div>`
  ).join('');
  $('#empty-favorites').hidden = state.favorites.length > 0;
}

function toggleFavorite(spanish) {
  const word = dictionary.find((item) => item.spanish === spanish);
  if (!word) return;

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
