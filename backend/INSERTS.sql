INSERT INTO provincia(id_provincia, nombre)
VALUES(1, 'Entre Rios'),(2, 'Misiones'),(3, 'Corrientes'),(4, 'Buenos Aires'),(5, 'Santa fe'),(6, 'San Luis'),
(7, 'Cordoba'),(8, 'Catamarca'),(9, 'San Juan'),
(10, 'Jujuy'),(11, 'Salta'),(12,'Chubut'),
(13, 'Tucuman'),(14, 'Neuquen'),(15, 'Santa Cruz');

INSERT INTO ciudad(cod_postal, nombre, id_provincia)
VALUES(3260,'Concepcion del Uruguay',1), (2854, "Larroque", 1), (3261,'Posadas',2),(3262,'Corrientes', 3),
(3263,'Caba',4),(3264,'Rosario',5),(3265,'Merlo',6),
(3266,'Rio Tercero',7),(3267,'San Fernardo del valle de catamarcar',8),(3268,'San Juan',9),
(3269,'Tilcara',10),(3270,'Salta',11),(3271,'Rawson',12),
(3272,'San Miguel de Tucuman',13),(3273,'Neuquen',14),(3274,'Rio Gallegos',15);

INSERT INTO autor(id_autor, nombre)
VALUES(43267890,'Carlos Maire'),(43267891,'Carlos Miguel'),(43267892,'Florencia Sanchez'),
(43267893,'Miriam Sanchez'),(43267894,'Ester Lujan'),(43267895,'Jorge Sanchez'),
(43267896,'Esteban Wilson'),(43267897,'Maike Sanchez'),(43267898,'Jimmy Sanchez');


INSERT INTO editorial(id_editorial, nombre)
VALUES (1, 'Morango'),(2, 'Dinarl'),(3, 'Carto'),(4, 'Luke'),(5, 'Nest'),(6, 'Niron'),(7, 'Rayos');



INSERT INTO genero(id_genero, nombre, url_imagen)
VALUES (1, 'Fantasia', 'https://cdn.pixabay.com/photo/2016/04/04/20/34/treehouse-1308108_960_720.jpg'),
        (2, 'Ciencia ficcion', 'https://cdn.pixabay.com/photo/2018/03/13/15/57/steampunk-3222894_960_720.jpg'),
        (3, 'Ficcion', 'https://cdn.pixabay.com/photo/2016/09/18/08/45/science-fiction-1677542_960_720.jpg'),
        (4, 'Comedia','https://cdn.pixabay.com/photo/2017/02/24/07/45/woman-2094172_960_720.jpg'),
        (5, 'Suspenso', 'https://cdn.pixabay.com/photo/2019/09/22/16/50/tunnel-4496526_960_720.jpg');




INSERT INTO books(isbn, url_imagen, nombre, precio, stock, descripcion, fecha_ingreso, descuento, id_editoral)
VALUES  ('123', 'https://m.media-amazon.com/images/I/91NW7CBaVwL.jpg', 'Harry Potter y la piedra filosofal', 6500.00,  6, 'Sumérgete en esta magnífica edición especial de Harry Potter y la piedra filosofal, obra del prestigioso estudio MinaLima, responsable del diseño gráfico de las películas de la saga «Harry Potter» y de Animales fantásticos. <br/> En esta edición especial de Harry Potter y la piedra filosofal, el texto completo e íntegro de la obra original de J.K. Rowling va acompañado por hermosas ilustraciones a todo color en casi todas las páginas, un diseño excelente y varias sorpresas interactivas de ingeniería en papel, obra del célebre estudio MinaLima. Una nueva forma de descubrir la carta de admisión de Harry a Hogwarts, la entrada mágica al callejón Diagon, el suntuoso festín en el Gran Salón de Hogwarts...', '24/12/2022', 10.00, 1),
        ('124','https://m.media-amazon.com/images/I/81k9yx9N5+L.jpg','Harry Potter y el prisionero de Azkaban (Harry Potter 3)', 5399.00, 3, 'Por la cicatriz que lleva en la frente, sabemos que Harry Potter no es un niño como los demás, sino el héroe que venció a lord Voldemort, el más temible y maligno mago de todos los tiempos y culpable de la muerte de los padres de Harry. Desde entonces, Harry no tiene más remedio que vivir con sus pesados tíos y su insoportable primo Dudley, todos ellos muggles, o sea, personas no magas, que desprecian a su sobrino debido a sus poderes.','24/12/2022', 2.00, 1),
        ('125','https://m.media-amazon.com/images/I/91RFD8825LL.jpg','Juego de Tronos Canción de Hielo y Fuego',8150.00, 2, 'En el legendario mundo de los Siete Reinos, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones y la más mortal de las batallas... Juego de tronos es el primer volumen de Canción de hielo y fuego, la monumental saga de fantasía épica del escritor George R. R. Martin que ha vendido más de 20 millones de ejemplares en todo el mundo.De la saga que inspiró la filmación de la aclamada serie televisiva de HBO: Game of Thrones.En el legendario mundo de los Siete Reinos, donde el verano puede durar décadas y el invierno toda una vida, y donde rastros de una magia inmemorial surgen en los rincones más sombríos, la tierra del norte, Invernalia, está resguardada por un colosal muro de hielo que detiene a fuerzas oscuras y sobrenaturales. En este majestuoso escenario, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones: la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder, la lujuria y el incesto, todo ello para ganar la más mortal de las batallas: el trono de hierro, una poderosa trampa que atrapará a los personajes... y al lector.','24/12/2022', 30.00, 1),
        ('126','https://m.media-amazon.com/images/I/71NtjKt82VL.jpg','Esperando al diluvio: 1591 (Áncora & Delfín)',2599.00, 6,'Entre los años 1968 y 1969, el asesino al que la prensa bautizaría como John Biblia mató a tres mujeres en Glasgow. Nunca fue identificado y el caso todavía sigue abierto hoy en día. En esta novela, a principios de los años ochenta, el investigador de policía escocés Noah Scott Sherrington logra llegar hasta John Biblia, pero un fallo en su corazón en el último momento le impide arrestarlo. A pesar de su frágil estado de salud, y contra los consejos médicos y la negativa de sus superiores para que continúe con la persecución del asesino en serie, Noah sigue una corazonada que lo llevará hasta el Bilbao de 1983. Justo unos días antes de que un verdadero diluvio arrase la ciudad.', '24/12/2022', 40.00, 1),
        ('127', 'https://m.media-amazon.com/images/P/B00CP8ZNUC.01._SCLZZZZZZZ_SX500_.jpg', 'La larga marcha', 3100.00, 49, 'Una inquietante novela futurista donde la realidad supera a la fantasía más terrorífica. El escenario: una sociedad ultraconservadora que ha llevado al paroxismo sus rasgos más perversos, dominada por un estado policial. El acontecimiento: la más extraordinaria competición deportiva, una agotadora marcha a pie donde un resbalón puede ser el último. Los competidores: cien adolescentes elegidos por sorteo decididos a pasar sobre los cadáveres de sus compañeros para llegar a la meta. El premio: fama y fortuna para el ganador, es decir, para el único superviviente... Solo uno será el triunfador. Los 99 restantes morirán.', '24/12/2022', 10.00, 4),
        ('128', 'https://m.media-amazon.com/images/I/51fW55S01fL._SX324_BO1,204,203,200_.jpg', 'Fuego y Sangre', 4300.00, 49 ,'La historia de los Targaryen cobra vida en esta obra magistral en la se que inspira la serie de HBO La Casa del Dragón, la precuela de Juego de Tronos. Siglos antes de que tuvieran lugar los acontecimientos que se relatan en «Canción de hielo y fuego», la casa Targaryen, la única dinastía de señores dragón que sobrevivió a la Maldición de Valyria, se asentó en la isla de Rocadragón. Aquí tenemos el primero de los dos volúmenes en el que el autor de Juego de tronos nos cuenta, con todo lujo de detalles, la historia de tan fascinante familia: empezando por Aegon I Targaryen, creador del icónico Trono de Hierro, y seguido por el resto de las generaciones de Targaryens que lucharon con fiereza por conservar el poder, y el trono, hasta la llegada de la guerra civil que casi acaba con ellos.', '24/12/2022', 10.00, 1),
        ('129', 'https://m.media-amazon.com/images/I/51aOjXZ-PCL._SX325_BO1,204,203,200_.jpg', 'Juramentada', 3150.00, 42, 'La humanidad se enfrenta a una nueva Desolación con el regreso de los Portadores del Vacío, un enemigo tan grande en número como en sed de venganza. La victoria fugaz de los ejércitos alezi de Dalinar Kholin ha tenido consecuencias: el enemigo parshendi ha convocado la violenta tormenta eterna, que arrasa el mundo y hace que los hasta ahora pacíficos parshmenios descubran con horror que llevan un milenio esclavizados por los humanos. Al mismo tiempo, en una desesperada huida para alertar a su familia de la amenaza, Kaladin se pregunta si la repentina ira de los parshmenios está justificada.', '15/03/2023',14.00, 3),
        ('130', 'https://m.media-amazon.com/images/I/71Pj9HPkCFL.jpg', 'Esperando al diluvio: 1591', 4497.00, 32, '«Después de todo lo que ha pasado con la trilogía Reina Roja, sólo había una forma de dar las gracias a mis lectores: intentar escribir una novela todavía mejor.» Juan Gómez-Jurado. Esta es la historia de tres mujeres que lo han perdido todo. Incluso el miedo. Por eso son tan peligrosas. Esta es la historia de una venganza imposible, sin ninguna posibilidad de éxito. Esta es la historia de tres mujeres que se atreven a hacer lo que los demás sólo nos atrevemos a imaginar. Algo muy poderoso está a punto de ocurrir. Y nada volverá a ser igual. SIEMPRE GANAN LOS MISMOS. ES HORA DE CAMBIAR LAS REGLAS.', '15/03/2023', 15.00, 2),
        ('131', 'https://m.media-amazon.com/images/I/6167QOx5VuL.jpg', 'La bilogía del glaciar', 4999.00, 50, 'Esta bilogía incluye las novelas policiales Los crímenes del glaciar y El coleccionista de flechas (ganadora del Premio Literario Amazon Storyteller). Acompaña a la criminalista Laura Badía a resolver crímenes en una de las regiones más remotas del mundo. No te olvides el abrigo, porque hace mucho frío.','15/03/2023' ,6.00, 1),
        ('132', 'https://m.media-amazon.com/images/I/81DjOU3MIvL.jpg', 'El Señor de los Anillos 1', 8999.00, 47, 'En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal.','15/03/2023', 18.00, 2),
        ('133', 'https://m.media-amazon.com/images/I/719yqLXOmyL.jpg', 'Roma soy yo', 7299.00, 45, 'Roma, año 77 a.C. El cruel senador Dolabela va a ser juzgado por corrupción, pero ha contratado a los mejores abogados, ha comprado al jurado y, además, es conocido por usar la violencia contra todos los que se enfrentan a él. Nadie se atreve a ser el fiscal, hasta que de pronto, contra todo pronóstico, un joven patricio de tan solo veintitrés años acepta llevar la acusación, defender al pueblo de Roma y desafiar el poder de las élites. El nombre del desconocido abogado es Cayo Julio César.', '15/03/2023',17.00, 6),
        ('134', 'https://m.media-amazon.com/images/I/51A65jIVuvL._SX315_BO1,204,203,200_.jpg', 'Un reino de carne y fuego', 2500.00, 49, 'Todo lo que ha creído Poppy es mentira, incluido el hombre del que se estaba enamorando. Rodeada de pronto por gente que la ve como un símbolo de un reino monstruoso, apenas sabe quién es sin el velo de la Doncella. Pero lo que sí sabe es que nada es tan peligroso para ella como él. El Señor Oscuro. El príncipe de Atlantia. A Casteel Da`Neer se lo conoce por muchos nombres y muchas caras. Sus mentiras son tan seductoras como sus manos. Sus verdades, tan sensuales como su mordisco. Poppy sabe que no debe confiar en él. Y Casteel la necesita viva para lograr sus objetivos. Pero él también es la única vía para que ella consiga lo que quiere: encontrar a su hermano Ian. El malestar crece en Atlantia mientras esperan el regreso de su príncipe. Los rumores de guerra se están extendiendo, y Poppy está en el centro de todo ello. El rey quiere utilizarla para enviar un mensaje. Los Descendentes quieren verla muerta. Los wolven se están volviendo más impredecibles. Hay secretos oscuros en juego, secretos llenos de los pecados manchados de sangre de dos reinos que harían cualquier cosa por mantener la verdad oculta.', '15/03/2023',13.00, 7),
        ('135', 'https://m.media-amazon.com/images/I/A1vcxOPBt7L.jpg', 'El bosque de la memoria', 2500.00, 50, 'Un thriller atmosférico e inquietante sobre la parte más oscura del alma humana. En el día más importante de su aún breve vida, Elissa es secuestrada. Horas después, despierta en un lugar que no conoce, atada a un poste metálico. Mientras su raptor la apabulla con extrañas preguntas, la situación de la niña parece complicarse... hasta que Elijah, de diez años, la encuentra. Elijah sabe que debería contar lo que ha visto, pero su instinto le advierte de que, si lo hace, perderá todo lo que tiene. Al fin y al cabo, Elissa no es la primera niña a la que descubre en el Bosque de la Memoria. Elissa sabe que debe actuar. Solamente convenciendo a Elijah para que la ayude tendrá alguna oportunidad de sobrevivir. Pero intentar manipularlo es peligroso, pues es mucho más listo de lo que parece. Empieza entones un juego mortal de engaño y traición llevará al límite a todos quienes entren en él. Perder es impensable. Y para ganar hay que actuar de forma implacable.', '15/03/2023',10.00, 5),
        ('136', 'https://m.media-amazon.com/images/I/7116adcs+HL.jpg', 'EL SUTIL ARTE', 1250.00, 26, 'En esta guía de autoayuda, el bestseller internacional que está definiendo a toda una generación, el bloguero superestrella Mark Manson nos demuestra que la clave para ser personas más seguras y felices es manejar de mejor forma la adversidad. ¡A la mierda con la positividad! Durante los últimos años, Mark Manson -en su popular blog- se ha afanado en corregir nuestras delirantes expectativas sobre nosotros mismos y el mundo. Ahora nos ofrece su toda su intrépida sabiduría en este libro pionero. Manson nos recuerda que los seres humanos somos falibles y limitados: no todos podemos ser extraordinarios: hay ganadores y perdedores en la sociedad, y esto no siempre es justo o es tu culpa. Manson nos aconseja que reconozcamos nuestras limitaciones y las aceptemos. Esto es, según él, el verdadero origen del empoderamiento. Una vez que abrazamos nuestros temores, faltas e incertidumbres, una vez que dejamos de huir y evadir y empezamos a confrontar las verdades dolorosas, podemos comenzar a encontrar el valor, la perseverancia, la honestidad, la responsabilidad, la curiosidad y el perdón que buscamos. Manson nos ofrece un momento de urgente sinceridad, ese cuando alguien te sujeta por los hombros y te mira a los ojos para tener una charla honesta, pero llena de historias entretenidas y de humor profano, despiadado. Este manifiesto es una refrescante bofetada en nuestra cara, para que podamos empezar a llevar vidas más satisfechas y con los pies en la tierra.', '15/03/2023',20.00, 2),
        ('137', 'https://m.media-amazon.com/images/I/4138Sh9vD9L._SX323_BO1,204,203,200_.jpg', 'Choque de Reyes', 4800.00, 44, '“Ahora hay más reyes en el reino que ratas en un castillo”, afirma uno de los personajes de Choque de reyes. Después de la sospechosa muerte de Robert Baratheon, el monarca de los Siete Reinos, su hijo Joffrey ha sido impuesto por la fuerza, aunque “quienes realmente gobiernan son su madre, un eunuco y un enano”, como dice la voz del pueblo. Cuatro nobles se proclaman, a la vez, reyes legítimos, y las tierras de Poniente se estremecen entre guerras y traiciones. Y todo este horror se encuentra presidido por la más ominosa de las señales: un inmenso cometa color sangre suspendido en el cielo.', '15/03/2023',3.00, 1),
        ('138', 'https://m.media-amazon.com/images/I/51hCOUu+PML._SX398_BO1,204,203,200_.jpg', 'De sangre y cenizas', 2500.00, 25, 'Elegida desde su nacimiento para dar comienzo a una nueva era, la vida de Poppy nunca le ha pertenecido. La vida de la Doncella es solitaria. Jamás la tocarán. Jamás la mirarán. Jamás le hablarán. Jamás sentirá placer. Mientras espera el día de su Ascensión, preferiría estar con los guardias luchando contra el mal que se llevó a su familia que preparándose para que los dioses la encuentren lo bastante digna. Pero la elección nunca ha sido suya. El futuro del reino entero recae sobre los hombros de Poppy, algo que ni siquiera está demasiado segura de querer para ella. Porque la Doncella tiene corazón. Y alma. Y deseo. Y cuando Hawke, un guardia de ojos dorados que ha jurado garantizar su Ascensión, entra en su vida, el destino y el deber se entremezclan con el deseo y la necesidad. Él incita su ira, hace que se cuestione todo aquello en lo que cree y la tienta con lo prohibido. Abandonado por los dioses y temido por los mortales, un reino caído está resurgiendo, decidido a recuperar lo que cree que es suyo mediante la violencia y la venganza. Y a medida que la sombra de los malditos se acerca, la línea entre lo prohibido y lo correcto se difumina. Poppy no solo está a punto de perder el corazón y ser considerada indigna por los dioses, sino que también está a punto de perder la vida cuando los ensangrentados hilos que mantienen unido su mundo empiezan a deshilacharse.','15/03/2023' ,13.00, 5)


INSERT INTO direccion (nombre, direccion, "infoAdicional",telefono, id_user, cod_postal, dni)
VALUES ('Thomas Salduende', 'Mario Lound 268', 'casa 7', 3446476809, 1, 2854, '44152717');


INSERT INTO autor_book(isbn, id_autor)
VALUES 
        ('123', 43267890),
        ('124', 43267890),
        ('125', 43267891),
        ('126', 43267892),
        ('127', 43267897),
        ('128', 43267897),
        ('129', 43267897),
        ('130', 43267897),
        ('131', 43267896),
        ('132', 43267896),
        ('133', 43267897),
        ('134', 43267898),
        ('135', 43267898),
        ('136', 43267896),
        ('137', 43267896),
        ('138', 43267898)
      

INSERT INTO public.genero_book(isbn, id_genero)
VALUES
        ('123', 2),
        ('124', 2),
        ('125', 1),
        ('126', 5),
        ('127', 4),
        ('128', 3),
        ('129', 4),
        ('130', 3),
        ('131', 5),
        ('132', 1),
        ('133', 2),
        ('134', 1),
        ('135', 2),
        ('136', 4),
        ('137', 2),
        ('138', 5)