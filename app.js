/* ============================================================
   TuMatch · Onboarding CORREDOR FREELANCE 2026 · v2
   9 módulos · 5 preguntas por módulo (banco 20 por módulo)
   Prueba Final: 20 preguntas de un banco de 80 · 16/20 aprueba (80%)
   Bloqueos: 3 errores en módulo = 5 min. Reprobar final = 5 min.
   Alternativas con posición aleatorizada en cada render.
   La prueba final NO muestra respuestas incorrectas.
   ============================================================ */

const WHATSAPP_NUMBER = "56934107448";
const WHATSAPP_BASE = "https://wa.me/56934107448";

// Sin mensajes livianos: el feedback por error es estrictamente técnico.
// El único mensaje con tono constructivo aparece al activarse el bloqueo.

/* ============================================================
   BANCO DE PREGUNTAS POR MÓDULO (20 por módulo · 180 totales)
   Alternativas balanceadas: longitudes similares,
   distractoras plausibles, índice correcto distribuido.
   Formato: { q, opts, correct, why, whyNot[] }
   ============================================================ */
const quizBank = {
1: [
  { q:"La mentalidad esperada del Corredor Freelance Asociado TuMatch es:", opts:["Ejecutar con compromiso profesional sostenido en el tiempo","Compatibilizarlo con un trabajo dependiente principal","Probar el modelo y evaluar a los seis meses","Esperar leads asignados antes de salir a captar"], correct:0, why:"El programa es una ruta profesional con dedicación real; sin compromiso sostenido el embudo no produce cierres.", whyNot:["","Sin foco no hay continuidad para construir cartera ni autoridad de marca","Operar en modo prueba apaga los embudos y diluye la curva de aprendizaje","La activación parte por la red propia, no por leads asignados"] },
  { q:"¿Qué describe mejor a TuMatch Inmobiliario como empresa?", opts:["Constructora especializada en proyectos en blanco","Empresa que forma corredores expertos por tipo de cliente","Plataforma de subasta online de propiedades","Estudio jurídico enfocado en contratos inmobiliarios"], correct:1, why:"TuMatch profesionaliza al corredor con academia, CRM y soporte para que represente correctamente cada tipo de cliente.", whyNot:["No desarrolla obra; comercializa con corredores asociados","","No opera bajo modelo de subastas en línea","Cuenta con respaldo legal pero ese no es su giro principal"] },
  { q:"Las ventas de viviendas nuevas en RM durante 2025 muestran:", opts:["Caída interanual cercana al 10%","Estabilidad sin variaciones relevantes","Recuperación interanual cercana al 10%","Alza explosiva por sobre el 40% interanual"], correct:2, why:"La CChC reporta una recuperación cercana al 10% interanual desde la base contraída de 2023-2024.", whyNot:["La tendencia 2025 es alcista, no contractiva","Hay variaciones medibles tanto en volumen como en stock disponible","","Sobreestima el rebote real del segmento"] },
  { q:"El ticket típico de un Comprador Primera Vivienda en RM se ubica entre:", opts:["UF 800 a UF 1.500 cerrado","UF 6.000 a UF 8.000 cerrado","UF 12.000 a UF 15.000 cerrado","UF 2.800 a UF 3.500 cerrado"], correct:3, why:"Es el rango de referencia del segmento primera vivienda en la Región Metropolitana.", whyNot:["Queda bajo el ticket real de mercado","Corresponde a segmento medio-alto, no primera vivienda","Corresponde a segmento premium, fuera del perfil",""] },
  { q:"Un Freelance Asociado, trabajando con Team Leader, alcanza una comisión de:", opts:["Hasta 60% por lado del negocio","Hasta 30% por lado del negocio","Hasta 20% por lado del negocio","Hasta 95% por lado del negocio"], correct:0, why:"Tope oficial 2026 para Freelance Asociado bajo TL: hasta 60% por lado.", whyNot:["","Corresponde al tope del Captador","Corresponde al tope del Referidor","No existe ese tramo dentro del modelo de comisiones"] },
  { q:"Para promover de Freelance Asociado a Freelance Autónomo se requiere:", opts:["Pagar una cuota mensual de membresía","Cerrar al menos un negocio como Asociado","Aprobar un segundo curso pagado de academia","Acumular seis meses de antigüedad mínima"], correct:1, why:"El gatillo oficial es el primer cierre formal: con eso el Asociado se convierte en Autónomo.", whyNot:["TuMatch no cobra cuota a sus corredores activos","","La academia no exige cursos pagados para escalar de nivel","La promoción no se mide por antigüedad sino por cierre"] },
  { q:"La comisión del Team Leader sobre cada negocio de su equipo es:", opts:["Un porcentaje fijo anual sobre el total","20% sobre cada lado cerrado por su corredor","7,5% sobre cada lado cerrado por su corredor","Un sueldo institucional pagado por TuMatch"], correct:2, why:"El Team Leader recibe 7,5% por cada negocio cerrado por un corredor de su equipo.", whyNot:["El esquema es por negocio cerrado, no por meta anual","Es muy superior al porcentaje real definido en la tabla 2026","","No existe sueldo: el TL se remunera vía comisión"] },
  { q:"Al aprobar la certificación, el primer paso operativo es:", opts:["Empezar a captar antes de la firma del contrato","Esperar la próxima temporada alta del mercado","Rendir una prueba presencial complementaria","Activar WhatsApp oficial, firmar contrato y conocer al TL"], correct:3, why:"Secuencia oficial: certificado → contacto WhatsApp → firma del contrato → reunión con Team Leader.", whyNot:["Sin contrato firmado el corredor no tiene derecho a comisión","TuMatch no programa esperas estacionales para activar al corredor","La prueba final del onboarding sustituye cualquier evaluación adicional",""] },
  { q:"El rol del corredor de propiedades se define como:", opts:["Asesor profesional que representa los intereses de una o ambas partes","Ejecutor de fotografía y publicación de avisos","Inversor que compra y revende propiedades por cuenta propia","Auxiliar legal que firma escrituras ante notario"], correct:0, why:"El corredor representa los intereses de una o ambas partes desde la detección de la oportunidad hasta la postventa.", whyNot:["","Es solo una pieza operativa del rol, no su definición","No requiere ser dueño ni capitalista del activo","No tiene rol notarial; acompaña la firma sin ser parte de ella"] },
  { q:"El modelo matchmaking de TuMatch consiste en:", opts:["Subastar propiedades en línea entre múltiples corredores","Calzar al cliente con el corredor experto en su tipo de cliente","Asignar tarifas distintas según el perfil del cliente","Concertar citas afectivas entre clientes y propietarios"], correct:1, why:"La promesa es asignar al corredor especializado en el tipo de cliente que se acerca a TuMatch.", whyNot:["TuMatch no opera bajo formato de subastas","","Las comisiones no varían según perfil; siguen el estándar de mercado","El término matchmaking aplica al calce comercial, no a una agenda social"] },
  { q:"El nivel de entrada en la ruta TuMatch para alguien sin experiencia es:", opts:["Team Leader con equipo asignado de inmediato","Freelance Autónomo con capacidad operativa total","Referidor que deriva contactos calificados","Captador certificado con stock propio asignado"], correct:2, why:"El Referidor solo deriva contactos a corredores activos y cobra un porcentaje sin operar la cartera.", whyNot:["Liderar equipos exige primero recorrer la carrera como corredor activo","Requiere haber cerrado un primer negocio como Asociado","","La certificación de Captador es un onboarding distinto al del Freelance"] },
  { q:"La principal ventaja de operar bajo la marca TuMatch frente a hacerlo en solitario es:", opts:["Acceso a stock garantizado y exclusivo de propiedades","Anticipo de comisiones antes de la firma de la escritura","Cobro de renta fija mensual independiente de los cierres","Soporte tecnológico, jurídico y de marketing centralizado"], correct:3, why:"El corredor concentra tiempo en captar y cerrar mientras la empresa entrega CRM, portales, contratos y respaldo legal.", whyNot:["No se garantiza stock; cada corredor capta su propia cartera","No hay anticipos; la comisión se factura tras la firma de la escritura","El modelo es 100% comisión: no existe renta fija mensual",""] },
  { q:"Cuando un Freelance Asociado opera con un Team Leader, la mayor parte de la comisión queda para:", opts:["El propio corredor que ejecutó el negocio","El Team Leader que supervisa el caso","TuMatch como marca y plataforma","El área jurídica que valida los contratos"], correct:0, why:"El corredor que ejecuta recibe el grueso del lado; TL y empresa toman porcentajes menores definidos en la tabla 2026.", whyNot:["","El TL recibe 7,5%, no la mayor parte de la comisión","La empresa toma una fracción menor del total","Jurídico no participa de la distribución de comisiones"] },
  { q:"La diferencia clave entre Captador y Freelance Asociado es que el Captador:", opts:["Trabaja exclusivamente en operaciones de arriendo cortas","Capta propiedades y deriva el cierre a un freelance","Opera sin contrato formal vigente con la marca","Capta sin derecho a porcentaje sobre el negocio cerrado"], correct:1, why:"El Captador se especializa en captar propiedades con acuerdo firmado y deriva la operación para que un Freelance la cierre.", whyNot:["Capta cualquier tipología, no solo operaciones de arriendo","","Tiene onboarding propio y firma contrato formal con la marca","Recibe un porcentaje sobre cada captación que termina en cierre"] },
  { q:"En el modelo TuMatch, los gastos de portales y marketing institucional son asumidos por:", opts:["El cliente vendedor antes de captar la propiedad","El propio corredor de su bolsillo cada mes","TuMatch dentro de su soporte oficial al corredor","La inmobiliaria que origina cada lead"], correct:2, why:"La empresa entrega el stack de portales y publicaciones institucionales; el corredor solo aporta su gestión comercial.", whyNot:["No se cobra al cliente como condición previa para captar","El corredor no financia el stack institucional de portales","","Las inmobiliarias no son la fuente regular de leads del modelo"] },
  { q:"La promesa de TuMatch hacia el corredor que se certifica se centra en:", opts:["Asignación de cartera de clientes desde el primer día","Sueldo base de mercado durante los primeros meses","Bono de bienvenida en UF al firmar el contrato","Carrera profesional escalable con cinco niveles claros"], correct:3, why:"La empresa ofrece una ruta clara: Referidor, Captador, Freelance Asociado, Autónomo y Team Leader.", whyNot:["El corredor activa su propia red; no se reparte cartera asignada","No existe sueldo base en el modelo de corredor freelance","No hay bonos en UF como mecanismo de bienvenida",""] },
  { q:"Una característica relevante del mercado RM 2025-2026 para el corredor es:", opts:["Stock acumulado que exige diferenciación comercial","Mercado sin oferta nueva publicada en portales","Solo operan inmobiliarias en blanco con corredor propio","Stock contraído y oferta nueva muy limitada"], correct:0, why:"Hay stock disponible; el corredor debe diferenciarse con asesoría, datos y filtros sólidos para destacar.", whyNot:["","Hay nuevos proyectos publicados en RM continuamente","El segundo mercado pesa fuerte y opera vía corredores","Lo opuesto al diagnóstico real del mercado"] },
  { q:"Para activar la primera comisión como Freelance Asociado se necesita haber:", opts:["Captado al menos cinco propiedades en cartera","Firmado el contrato y conocido al Team Leader","Esperado seis meses tras la certificación","Aprobado un curso adicional pagado por la academia"], correct:1, why:"El gatillo operativo es contrato firmado y reunión con TL; sin eso el embudo comercial no se activa.", whyNot:["No existe cuota mínima de captación para empezar a operar","","El modelo no contempla periodo de espera tras certificarse","La academia no condiciona el inicio a cursos adicionales pagados"] },
  { q:"El compromiso operativo mínimo que TuMatch espera del Freelance Asociado es:", opts:["Pago mensual de membresía para mantener el acceso","Cobertura presencial en una única comuna asignada","Conexión diaria al CRM y reunión semanal con su TL","Disponibilidad exclusiva durante los fines de semana"], correct:2, why:"Se mide actividad en CRM y ritmo de reunión con TL; sin trazabilidad no hay seguimiento del avance comercial.", whyNot:["El modelo no contempla cuotas de membresía mensuales","El corredor define su zona de trabajo en conjunto con su TL","","No se exige exclusividad de fines de semana en la operación"] },
  { q:"En el modelo TuMatch 2026, el rol de Sales Leader:", opts:["Es el nivel máximo de la carrera del corredor","Reemplazó al Team Leader en la nueva estructura","Está reservado para corredores con cinco años de experiencia","Fue descontinuado y ya no figura en el modelo"], correct:3, why:"En 2026 el modelo se simplificó: la ruta llega hasta Team Leader y el Sales Leader fue descontinuado.", whyNot:["El nivel máximo de la carrera actual es Team Leader","TL y Sales Leader fueron figuras distintas; no hubo reemplazo directo","No existe esa antigüedad como criterio formal del modelo",""] },
],
2: [
  { q:"La pregunta que mejor detecta a un Comprador Primera Vivienda es:", opts:["¿Es tu primera propiedad a tu nombre?","¿Tienes pareja que decida contigo?","¿Cuál es tu presupuesto total disponible?","¿En qué sector te interesa vivir ahora?"], correct:0, why:"Confirma directamente si es primera vivienda y habilita conversación sobre subsidios y dividendo.", whyNot:["","Es relevante para la convocatoria, no para clasificar el tipo","Aporta contexto, pero no clasifica el tipo de cliente","El sector preferido no determina el tipo de cliente"] },
  { q:"El gatillo de cierre del Inversionista es principalmente:", opts:["Cercanía a colegios de buen rendimiento","Rentabilidad neta y plusvalía proyectada","Conexión con transporte público de superficie","Precio mínimo por metro cuadrado del sector"], correct:1, why:"Decide por números: cap rate neto y plusvalía proyectada del activo.", whyNot:["No es un driver decisional para este perfil","","Es un dato de demanda, secundario para inversión","Lo evalúa en función del retorno, no en términos absolutos"] },
  { q:"El miedo principal del Cliente Vendedor es:", opts:["Pagar una comisión alta al corredor del caso","No aparecer destacado en los portales del stack","Vender bajo precio o con un corredor inactivo","Atender muchas visitas durante todo el proceso"], correct:2, why:"Son los dos miedos gemelos del perfil vendedor: subprecio y falta de gestión visible.", whyNot:["Es preocupación, pero no el miedo central del perfil","Es operativa, no decisional para el vendedor","","Forma parte del proceso, no es un miedo decisional"] },
  { q:"La vida útil típica de un lead de arriendo del lado arrendatario es:", opts:["Entre 24 y 48 horas","Aproximadamente 3 meses","Entre 15 y 30 días","Aproximadamente 7 días"], correct:3, why:"Ventana operativa antes de que el arrendatario tome otra alternativa; la urgencia define el cierre.", whyNot:["Subestima la ventana operativa real del segmento","Queda fuera del ciclo real de decisión del arriendo","Sobreestima la ventana; el lead ya se enfría a esa altura",""] },
  { q:"¿Cuál de estos perfiles toma la decisión de compra con mayor velocidad?", opts:["Inversionista experimentado y racional","Cliente Vendedor con propiedad publicada","Comprador Primera Vivienda con familia","Arrendador con varias propiedades activas"], correct:0, why:"Si los números cierran, el inversionista decide en pocos días.", whyNot:["","Su velocidad varía según urgencia personal","Su proceso típico va de uno a cuatro meses","La velocidad depende del tipo de operación, no del stock"] },
  { q:"Las tres preguntas clave para calificar al cliente en dos minutos son:", opts:["Nombre completo, RUT y dirección particular exacta","Qué busca, si tiene otra propiedad y plazo de decisión","Sector deseado, metros cuadrados y presupuesto inicial","Banco con el que opera, renta líquida y profesión"], correct:1, why:"Con esas tres respuestas se clasifica al 95% de los clientes en pocos minutos.", whyNot:["Son datos sensibles fuera de lugar para una calificación inicial","","Son detalle de búsqueda, no clasificación del perfil","Son datos financieros que corresponden a una etapa posterior"] },
  { q:"Un lead que pregunta de entrada por cap rate y cash flow probablemente es:", opts:["Comprador Primera Vivienda informado","Arrendatario urgente con presupuesto","Inversionista con criterio financiero","Vendedor con expectativas elevadas"], correct:2, why:"El vocabulario técnico (cap rate, cash flow) es propio del perfil inversionista.", whyNot:["No utiliza ese vocabulario en su búsqueda habitual","No le interesa la rentabilidad de la propiedad que arrienda","","No es lenguaje habitual del cliente vendedor"] },
  { q:"¿Cuál es el error clásico del corredor nuevo al recibir leads?", opts:["Adaptar el lenguaje al tipo de cliente detectado","Agendar siempre reunión presencial antes de calificar","Hacer pocas preguntas durante la calificación inicial","Tratar a todos los clientes con el mismo guion"], correct:3, why:"Adaptarse al tipo de cliente es lo que separa al profesional del amateur.", whyNot:["Es la práctica correcta, no el error","Aumentar presenciales no es el problema central de gestión","Es un error distinto al central; se resuelve con script",""] },
  { q:"La velocidad del proceso del Cliente Vendedor es:", opts:["Variable según la urgencia real del propietario","Siempre rápida si el precio es competitivo","Siempre lenta debido a los trámites notariales","Igual a la del arrendatario en el segmento"], correct:0, why:"Depende de la motivación detrás: urgencia económica, mudanza, herencia o cambio de etapa.", whyNot:["","Sobregeneraliza el comportamiento del segmento","Sobregeneraliza el ritmo del proceso de venta","Es muy distinta; el arriendo se mueve en pocos días"] },
  { q:"El miedo del arrendatario al momento de calificar es:", opts:["Que le suban el canon al renovar","Ser rechazado por renta o documentación","No conocer en detalle el barrio elegido","No encontrar estacionamiento en el edificio"], correct:1, why:"El miedo central del perfil es no acreditar ingresos o documentación frente al arrendador.", whyNot:["Es preocupación posterior a la firma, no al postular","","Es un detalle operativo y no decisional al calificar","Es un detalle, no el miedo decisional principal"] },
  { q:"El motor de decisión del Comprador Primera Vivienda es principalmente:", opts:["La rentabilidad esperada del activo a 10 años","El cap rate neto del barrio elegido","La emoción del hogar y la proyección familiar","El plazo de absorción del edificio publicado"], correct:2, why:"Es una decisión profundamente emocional; busca echar raíces y proyectar familia en el inmueble.", whyNot:["Es lógica de inversionista, no de primera vivienda","Es indicador de inversión y no aplica al perfil","","Es dato del vendedor, no del comprador final"] },
  { q:"El gatillo de cierre del Cliente Vendedor se activa cuando el corredor:", opts:["Le asegura un comprador exclusivo en la primera semana","Le anticipa parte de su comisión antes del cierre","Le ofrece bajar la comisión a la mitad para acelerar","Demuestra visitas calificadas y entrega reportes claros"], correct:3, why:"El vendedor compra confianza: visitas filtradas, reportes y feedback son la prueba de gestión activa.", whyNot:["El corredor profesional no garantiza compradores específicos","No existe esa figura dentro del modelo TuMatch","Competir por precio destruye margen y profesionalismo",""] },
  { q:"El motor de decisión del Inversionista es:", opts:["Números: cap rate, flujo y plusvalía estimada","Diseño y arquitectura de las áreas comunes","Recomendación de un amigo o familiar","Cercanía afectiva al barrio donde vive"], correct:0, why:"Decide racionalmente con base en retorno esperado y proyección del activo en el tiempo.", whyNot:["","Aporta confort visual, pero no decide la compra","Puede pesar como referencia, pero no es el motor del cierre","No es un driver decisional para este perfil"] },
  { q:"¿Qué perfil tiene mayor riesgo operativo de caerse durante el proceso?", opts:["Inversionista con criterio definido","Comprador Primera Vivienda con familia","Vendedor con urgencia económica real","Arrendatario con documentos al día"], correct:1, why:"Es el perfil con más decisores, más dudas y mayor exposición emocional al crédito hipotecario.", whyNot:["Es perfil rápido y racional, con menor riesgo","","La urgencia tiende a acelerar el cierre, no a romperlo","La documentación completa reduce el riesgo del lado arrendatario"] },
  { q:"¿Qué tipología de cliente muestra el ciclo de venta más largo?", opts:["Arriendo dependiente con documentos al día","Inversionista experimentado con criterio","Comprador Primera Vivienda con familia","Cliente Vendedor con urgencia económica"], correct:2, why:"Combina crédito hipotecario, decisión familiar y carga emocional: 1 a 4 meses típico.", whyNot:["Es el ciclo más corto del set, cercano a una semana","Decide en pocos días si los números calzan","","La urgencia acorta el ciclo, no lo extiende"] },
  { q:"Si el cliente afirma 'busco un departamento que se pague solo con el arriendo', su perfil es:", opts:["Comprador Primera Vivienda informado","Vendedor con urgencia inmediata","Arrendatario con presupuesto acotado","Inversionista enfocado en cash flow"], correct:3, why:"Es lenguaje típico del inversionista: cash flow positivo y autosostenibilidad del activo.", whyNot:["No utiliza esa lógica de retorno como driver","No describe a alguien que vende su propiedad","Busca arrendar, no comprar para arrendar",""] },
  { q:"La pregunta que mejor detecta a un Cliente Vendedor es:", opts:["¿Estás vendiendo una propiedad propia o de un familiar?","¿En qué comuna te interesa arrendar ahora?","¿Cuánto pie tienes ahorrado para comprar?","¿Cuál es tu renta líquida actualizada del año?"], correct:0, why:"Confirma directamente que es el dueño o representante de quien vende la propiedad.", whyNot:["","Aplica al arrendatario, no al vendedor","Aplica al comprador, no al vendedor","Aplica al comprador o arrendatario, no al vendedor"] },
  { q:"La razón principal para calificar al cliente en los primeros minutos es:", opts:["Conseguir el RUT del cliente lo antes posible","Asignar el script y plan de gestión correcto","Determinar el monto de comisión a cobrar al cierre","Filtrar al cliente según su renta líquida total"], correct:1, why:"Saber el tipo te permite usar lenguaje, herramientas y tiempos correctos desde el primer minuto.", whyNot:["No es el objetivo de la calificación inicial del cliente","","La comisión no varía según el tipo de cliente atendido","La renta corresponde al arriendo, no a la calificación general"] },
  { q:"¿Qué cliente prioriza la velocidad por sobre la profundidad del análisis?", opts:["Comprador Primera Vivienda con familia","Inversionista de portafolio diversificado","Arrendatario con plazo de mudanza","Vendedor sin urgencia económica"], correct:2, why:"Necesita resolver dónde vivir en pocos días; la rapidez del corredor define el cierre.", whyNot:["Toma su tiempo y analiza con su núcleo familiar","Analiza retorno y comparables antes de mover el capital","","Si no hay urgencia, su ciclo de venta se extiende"] },
  { q:"¿Cómo se identifica rápidamente a un cliente del tipo Arrendador?", opts:["Pide visita para vivir en la propiedad","Solicita información sobre subsidios MINVU","Pregunta por simulador hipotecario y subsidios","Tiene una propiedad y quiere arrendarla"], correct:3, why:"Es un dueño que pone en arriendo; la conversación gira en torno a inquilino, canon y filtrado.", whyNot:["Eso describe al arrendatario, no al arrendador","Los subsidios son del comprador, no del arrendador","Eso describe al comprador con financiamiento",""] },
],
3: [
  { q:"Al abrir conversación con tu círculo caliente, lo recomendable es:", opts:["Presentar tu nuevo rol y abrir una pregunta","Enviar de inmediato un catálogo masivo","Pedir datos financieros para precalificar","Ofrecer un descuento por referir contactos"], correct:0, why:"Presentarte y abrir con una pregunta activa la red sin presión y respeta la relación previa.", whyNot:["","Es transaccional y enfría la relación de confianza","Pedir datos sensibles al inicio es invasivo y rompe la conversación","No existen descuentos; la red activa por confianza, no por incentivo"] },
  { q:"Con un contacto tibio (conocido lejano), el primer paso correcto es:", opts:["Hacer un pitch directo del servicio","Reconectar sin agenda comercial explícita","Enviar un folleto comercial por WhatsApp","Pedir reunión presencial inmediata"], correct:1, why:"Respetar la relación previa antes de vender preserva la confianza y abre la puerta a la conversación comercial.", whyNot:["Sabotea la relación al saltar el reencuentro humano","","Es masivo, impersonal y reduce la conversión","Salta etapas necesarias del reencuentro previo"] },
  { q:"Frente a un lead frío de portal, la acción crítica es:", opts:["Esperar 24 horas para mostrar criterio","Enviar diez propiedades sin filtro previo","Responder en minutos con valor inicial","Pedir cédula y renta antes de cualquier conversación"], correct:2, why:"El lead frío convierte con velocidad y un script claro: el primero en aportar valor toma la conversación.", whyNot:["El lead se enfría y migra a otro corredor","Diluye el foco y agota al cliente sin diagnóstico","","Pedir datos sensibles antes de tiempo rompe la confianza"] },
  { q:"Una conversación productiva con un cliente debe cerrar siempre con:", opts:["Una promesa genérica de 'te aviso después'","Una solicitud de otra referencia inmediata","Un envío masivo de información complementaria","Una fecha y hora concretas para el siguiente paso"], correct:3, why:"Regla de oro: toda conversación termina con un próximo paso agendado y trazable.", whyNot:["Mata el seguimiento y diluye la energía construida","Salta el cierre de la conversación actual","Diluye la conversación sin avanzar el embudo",""] },
  { q:"En el primer contacto con un cliente NO debes:", opts:["Hablar de comisiones sin que pregunten","Presentarte con tu rol y empresa","Preguntar con quién toma la decisión","Definir un próximo paso concreto"], correct:0, why:"Hablar de dinero sin que el cliente lo pregunte enfría la conversación y desplaza el foco del valor.", whyNot:["","Es la apertura correcta del primer contacto","Es calificación útil para anticipar decisores","Es el cierre recomendado de la conversación"] },
  { q:"La forma correcta de calificar al lead en los primeros cinco minutos es:", opts:["Interrogatorio con más de veinte preguntas","Una secuencia de preguntas abiertas clave","Solicitar de entrada una ficha de datos completa","Agendar una visita antes de hacer preguntas"], correct:1, why:"Las preguntas abiertas revelan intención, plazo y capacidad sin invadir al cliente.", whyNot:["Es invasivo y rompe la confianza inicial","","Transacciona sin diagnóstico previo del perfil","Agendar sin diagnóstico desperdicia la visita"] },
  { q:"Un mensaje profesional de WhatsApp en primer contacto debe ser:", opts:["Un audio largo con explicación detallada","Un flyer publicitario con precios y logos","Un texto breve con una sola pregunta","Un mensaje masivo igual para todos los leads"], correct:2, why:"Un texto breve con una pregunta única mejora la tasa de respuesta y demuestra criterio.", whyNot:["Es invasivo y poco eficiente al inicio del contacto","Es impersonal y publicitario; baja la conversión","","Los mensajes masivos queman contactos y reducen la tasa"] },
  { q:"Saber si el cliente decidirá solo o con familia es importante porque:", opts:["Permite agilizar el trámite bancario del crédito hipotecario","Sirve para revisar el historial crediticio antes de la primera visita","Ayuda a calcular el porcentaje de comisión que se cobrará al cierre","Permite anticipar quiénes deben estar en las próximas reuniones"], correct:3, why:"Convocas desde el inicio a todos los decisores: evitas reuniones sin las personas que tienen voz en la decisión.", whyNot:["El trámite bancario no depende de la composición familiar","El historial crediticio no se solicita al inicio de la prospección","La comisión no varía por la cantidad de decisores involucrados",""] },
  { q:"El horario de respuesta esperado dentro de la jornada laboral es:", opts:["Hasta 30 minutos como meta operativa","Hasta 24 horas a más tardar","Solo entre las 10:00 y las 12:00","Cuando el corredor tenga tiempo libre"], correct:0, why:"La velocidad percibida es factor decisivo en la elección de corredor por parte del cliente.", whyNot:["","Es demasiado lento para los estándares actuales","Es una franja muy restringida y poco profesional","No proyecta una imagen profesional ni confiable"] },
  { q:"Cuando un contacto dice 'solo estoy mirando' al inicio, lo correcto es:", opts:["Cerrar la conversación de inmediato","Ofrecer orientar sin presión y aportar valor","Insistir con agendar una visita esa semana","Enviar una oferta agresiva con descuento"], correct:1, why:"Ofrecer valor sin presión mantiene la puerta abierta y construye la relación a futuro.", whyNot:["Pierdes una oportunidad que aún puede madurar","","Daña la relación y rompe la confianza inicial","Es contraproducente cuando el cliente declara baja intención"] },
  { q:"Para registrar la conversación en el CRM tras el primer contacto, debes anotar al menos:", opts:["Solo el número de teléfono del contacto","La marca del teléfono y la edad del cliente","Tipo de cliente, plazo y próximo paso agendado","Solo si quiere o no hacer una visita pronto"], correct:2, why:"Esa terna permite retomar la conversación sin perder contexto, sin importar cuándo vuelvas a abrirla.", whyNot:["Es insuficiente para retomar la conversación con contexto","Son datos irrelevantes para la calificación comercial","","Pierde matices del diagnóstico inicial del cliente"] },
  { q:"En el primer contacto, antes de hacer cualquier pregunta financiera, debes:", opts:["Pedir liquidaciones de sueldo del último trimestre","Cotizar el crédito hipotecario sin más antecedentes","Solicitar RUT y autorización para revisar Dicom","Construir confianza y entender la motivación real"], correct:3, why:"Sin confianza ni motivación clara, los datos sensibles se sienten invasivos y bajan la conversión.", whyNot:["Acelera el rechazo del cliente y pierde el lead","Sin perfil completo, cualquier cotización resulta ciega","Quema la confianza al iniciar con datos sensibles",""] },
  { q:"La cantidad de propiedades que conviene proponer al cliente en el primer envío es:", opts:["Tres opciones bien filtradas y comparables","Solo una opción altamente acertada","Diez opciones para que el cliente elija","Todo el catálogo disponible en portales"], correct:0, why:"Tres opciones permiten comparar sin saturar y demuestran criterio profesional del corredor.", whyNot:["","Una sola opción no permite contraste ni decisión","Diluye el foco y agota la atención del cliente","Indica falta de filtro y baja autoridad técnica"] },
  { q:"Frente a un lead que pide precio por WhatsApp sin abrir conversación, lo correcto es:", opts:["Ignorarlo hasta que llame por teléfono","Responder breve e invitar a una conversación calificadora","Enviar el precio directamente sin pregunta previa","Bloquear al contacto por bajo nivel de intención"], correct:1, why:"Convertir el contacto en conversación permite calificarlo y diferenciarte del corredor que solo manda precio.", whyNot:["Pierde un lead potencialmente caliente y abierto","","Pierdes calificación, contexto y oportunidad","Es una reacción desproporcionada y poco profesional"] },
  { q:"Si el lead frío responde tarde en la noche, la acción adecuada es:", opts:["Llamar de inmediato sin importar la hora","Ignorar el mensaje para no parecer urgente","Responder por escrito en horario apropiado y proponer hora","Enviar mensaje masivo del día siguiente"], correct:2, why:"Mantienes profesionalismo y respetas horarios sin perder velocidad ni el hilo de la conversación.", whyNot:["Invade la privacidad del cliente y genera rechazo","Pierdes el lead caliente que ya está activo","","Pierdes la individualidad y el calor del lead recibido"] },
  { q:"Un dato siempre útil de obtener en el primer contacto es:", opts:["El número de cuenta bancaria del cliente","El nombre completo del cónyuge","La dirección exacta de su casa actual","El plazo o ventana de decisión del cliente"], correct:3, why:"El plazo define el ritmo de gestión, la frecuencia de seguimiento y la prioridad en el embudo.", whyNot:["Es un dato sensible y sin uso al inicio","No corresponde calificar al cónyuge en frío","Es información innecesaria para iniciar la gestión",""] },
  { q:"Una conducta a evitar siempre durante la prospección es:", opts:["Prometer rentabilidades o precios sin respaldo","Llamar dentro del horario laboral del cliente","Pedir reunión presencial cuando aplica","Tomar notas detalladas en el CRM"], correct:0, why:"Comprometer cifras sin sustento expone al corredor y a la marca legal y comercialmente.", whyNot:["","Es una práctica adecuada y profesional","Es práctica adecuada cuando corresponde al perfil","Es una buena práctica obligatoria del corredor"] },
  { q:"Para mantener viva la relación con un contacto que aún no compra, lo recomendado es:", opts:["Llamar todos los días para insistir en la oferta","Aportar valor periódico sobre mercado y oportunidades","Solo escribir cuando tú busques cerrar un negocio","Dejar de contactarlo hasta que él te escriba"], correct:1, why:"El nurturing transforma contactos tibios en oportunidades futuras sin saturarlos con presión comercial.", whyNot:["El acoso destruye la relación y la confianza","","Genera desconfianza: solo apareces cuando vendes","Pierde el contacto y los referidos futuros del nodo"] },
  { q:"¿Por qué es crítico responder rápido a un lead de portal?", opts:["Porque obliga al corredor a cobrar más comisión","Porque la plataforma penaliza la demora con costo","Porque el lead ya está contactando a otros corredores","Porque después no sirve hacer seguimiento al cliente"], correct:2, why:"Los portales distribuyen el lead a varios corredores; el primero que aporta valor real toma la conversación.", whyNot:["No tiene relación con la comisión cobrada","Las plataformas no penalizan económicamente la demora","","Sí sirve hacer seguimiento, pero llegas tarde al primer turno"] },
  { q:"En la primera conversación, la pregunta que mejor revela motivación real es:", opts:["¿Cuánto pie tienes ahorrado actualmente?","¿En qué comuna vives en este momento?","¿Cuánto ganas mensualmente como liquido?","¿Por qué estás buscando ahora una propiedad?"], correct:3, why:"La motivación (mudanza, familia, inversión, urgencia) define todo el plan de gestión del corredor.", whyNot:["Es un dato sensible y prematuro al primer contacto","Es contexto operativo, no motivación de fondo","Es un dato sensible que no revela motivación",""] },
],
4: [
  { q:"¿Cuáles son las 7 etapas maestras de una operación inmobiliaria?", opts:["Prospección, reunión, estrategia, acuerdo, ejecución, cierre, postventa","Marketing, leads, calificación, propuesta, negociación, firma, comisión","Contacto, captación, estimación, oferta, escritura, entrega, fidelización","Llamada, visita, oferta, contrato, firma, entrega, postventa"], correct:0, why:"Marco oficial común a toda tipología: prospección → reunión → estrategia → acuerdo → ejecución → cierre → postventa.", whyNot:["","Son hitos comerciales del embudo, no las etapas operativas oficiales","Es un flujo específico de venta, no aplica a las cuatro tipologías","Mezcla canales y acciones puntuales: omite diagnóstico y estrategia"] },
  { q:"La orden de visita se firma en la etapa de:", opts:["Prospección inicial del cliente","Acuerdo, antes de la primera visita","Cierre del contrato definitivo","Después de presentada la oferta"], correct:1, why:"Protege el trabajo del corredor ante multicorretaje y deja trazabilidad del cliente atendido.", whyNot:["Es prematuro: aún no hay diagnóstico para mostrar","","Pierde su efecto protector si se firma al final","Es muy tarde: la visita ya generó el match comercial"] },
  { q:"El documento que gatilla la comisión del corredor con el vendedor es:", opts:["Foto profesional del set fotográfico","Anuncio publicado en portales del stack","Acuerdo de captación firmado y registrado","Orden de visita con el comprador"], correct:2, why:"El acuerdo de captación formaliza el rol del corredor y habilita el cobro de la comisión por venta.", whyNot:["Es insumo de marketing, no documento legal","Publicar la propiedad no formaliza la comisión por venta","","Es para la representación del comprador o arrendatario"] },
  { q:"La duración típica de un acuerdo con exclusividad es:", opts:["Una semana en cualquier tipo de operación","Dos años fijos por contrato cerrado","Indefinida hasta que ocurra el cierre","1 mes para arriendo y 5 meses para venta"], correct:3, why:"Plazo razonable según tipo: 1 mes para arriendo y 5 meses para venta, dada la mayor inversión en marketing.", whyNot:["Es insuficiente para comercializar adecuadamente la propiedad","Es abusivo para el cliente y para el corredor","No corresponde a la figura ni al estándar de mercado",""] },
  { q:"La oferta y aceptación de oferta en una compraventa formaliza:", opts:["El acuerdo comprador-vendedor previo a escritura","Solo el precio y la fecha de la escritura pública","Únicamente los datos bancarios del comprador final","La tasación municipal oficial obligatoria del bien"], correct:0, why:"Es el compromiso formal entre las partes antes de firmar la escritura pública.", whyNot:["","Es incompleto: el instrumento es más amplio que precio y fecha","Esa información no se incluye en el documento formal","No corresponde al alcance real del instrumento"] },
  { q:"El tiempo típico de una operación de arriendo de punta a punta es:", opts:["De 1 a 4 meses","De 1 a 3 semanas","De 3 a 12 meses","Más de un año cerrado"], correct:1, why:"El arrendatario decide en aproximadamente 7 días y la documentación toma unos pocos más.", whyNot:["Corresponde al ciclo de primera vivienda con crédito","","Corresponde al ciclo típico de venta","Queda fuera del rango real del segmento"] },
  { q:"Cuando una negociación se estanca durante la operación, lo recomendable es:", opts:["Abandonar el caso y archivar el cliente","Bajar directamente el precio publicado","Activar al Team Leader para destrabar","Cambiar la propiedad ofertada al cliente"], correct:2, why:"El TL tiene interés directo en que cierres y aporta visión y autoridad para destrabar la negociación.", whyNot:["Pierdes el caso y la inversión hecha en él","Es un atajo que daña margen y profesionalismo","","No ataca la raíz real del estancamiento"] },
  { q:"Sin documentos firmados y registrados en cada hito de la operación:", opts:["La operación sigue avanzando sin riesgos","Se paga la mitad de la comisión por buena fe","El cliente pierde su dinero invertido","La comisión queda expuesta y puede no pagarse"], correct:3, why:"Regla de trazabilidad: sin firma formal en cada hito, no hay derecho seguro a comisión.", whyNot:["No es así: hay riesgo legal y comercial relevante","No existe esa figura dentro del modelo TuMatch","No corresponde como consecuencia para el cliente",""] },
  { q:"La reserva no reembolsable en arriendo cumple la función de:", opts:["Compensar el retracto del arrendatario","Cubrir el pie de una compra futura","Reemplazar la comisión completa del corredor","Garantizar daños futuros del inmueble"], correct:0, why:"Se paga $100.000, imputable a comisión, que queda como retención si el arrendatario se baja.", whyNot:["","Es otro tipo de operación distinto al arriendo","No reemplaza la comisión total del corredor","Es un concepto distinto cubierto por el mes de garantía"] },
  { q:"La etapa de postventa de una operación sirve principalmente para:", opts:["Renegociar la comisión ya pactada","Conseguir referidos y recurrencia futura","Acelerar la firma de la escritura","Revisar fallos del producto recibido"], correct:1, why:"Un cliente satisfecho deriva 1-2 nuevos negocios en promedio en los meses siguientes.", whyNot:["No se renegocia la comisión una vez cobrada","","La escritura ya ocurrió en la etapa de cierre","No corresponde al rol del corredor en inmuebles usados"] },
  { q:"En la operación de venta, la facturación y pago de la comisión al corredor ocurre:", opts:["Al firmar la oferta y aceptación de oferta","Antes de la firma de la escritura pública","Posterior a la firma de la escritura pública","Al publicar la propiedad en portales del stack"], correct:2, why:"La comisión se factura y se paga una vez que la escritura está firmada y registrada.", whyNot:["Es un compromiso, pero todavía no es el cierre formal","Sin escritura no existe derecho consolidado a cobrar","","La publicación es solo difusión, no cierre"] },
  { q:"¿Qué documento se firma entre comprador y vendedor antes de la escritura pública?", opts:["Acuerdo de captación entre las partes","Orden de visita del comprador","Acta de entrega de la propiedad","Oferta y aceptación de oferta"], correct:3, why:"Es el instrumento que formaliza el acuerdo entre las partes y antecede a la escritura pública.", whyNot:["Es entre vendedor y corredor, no entre las partes","Es un documento del corredor para multicorretaje","Se firma al final, en el momento de la entrega",""] },
  { q:"En arriendo, el documento que regula la relación entre arrendador y arrendatario es:", opts:["Contrato de arriendo firmado entre las partes","Oferta y aceptación de oferta del bien","Escritura pública del inmueble arrendado","Acta de entrega como documento principal"], correct:0, why:"Es el instrumento legal específico que regula derechos y deberes de ambas partes durante el arriendo.", whyNot:["","Aplica a compraventa, no a la operación de arriendo","Aplica a compraventa, no al arriendo","Es complementaria y no regula la relación contractual"] },
  { q:"La reserva firmada por $100.000 entre arrendatario y corredor cumple la función de:", opts:["Anticipo de la garantía mensual al arrendador","Bloqueo de la propiedad y compromiso del arrendatario","Pago de la comisión que cobra el arrendador","Costo del estudio jurídico de la operación"], correct:1, why:"Bloquea la propiedad y compromete al arrendatario; si se baja, queda como comisión del corredor.", whyNot:["No es la garantía mensual ni el primer mes","","No corresponde a la comisión del arrendador","No financia gastos jurídicos de la operación"] },
  { q:"El acta de entrega tiene como función principal:", opts:["Definir el precio del arriendo o de venta","Reemplazar el contrato firmado entre las partes","Dejar registro escrito del estado físico al recibir","Pagar la comisión final al corredor del caso"], correct:2, why:"Documenta el estado físico al momento de entregar; protege a ambas partes ante reclamos posteriores.", whyNot:["El precio se define mucho antes de la entrega","Es un documento complementario, no reemplaza al contrato","","No corresponde al pago de comisión"] },
  { q:"¿En qué etapa del proceso se desarrolla la estrategia comercial específica del cliente?", opts:["Prospección inicial del cliente","Reunión de levantamiento del cliente","Cierre formal de la operación","Estrategia, tras la reunión y diagnóstico"], correct:3, why:"Después de la reunión y diagnóstico, el corredor define plan, target y precio antes de firmar acuerdo.", whyNot:["Aún no existe información suficiente para diseñar","Se levanta información, pero todavía no se diseña la estrategia","Se ejecuta lo definido antes; no se diseña en cierre",""] },
  { q:"¿Cuál es el principio operativo que protege la comisión en toda operación?", opts:["Trazabilidad documental de cada hito","Volumen alto de leads en el embudo","Velocidad de respuesta inmediata","Negociación verbal de comisiones"], correct:0, why:"Sin documento firmado y registrado en cada hito, la comisión queda expuesta a disputas y caídas.", whyNot:["","Aporta volumen pero no protege legalmente la comisión","La velocidad sin papeles no protege el cobro","Lo verbal no genera derecho legal exigible"] },
  { q:"¿Cuándo es recomendable activar al Team Leader durante una operación?", opts:["Solo en el momento del cierre formal","Cuando hay objeciones complejas o estancamiento","Diariamente y de forma automática","Solo si el cliente lo solicita expresamente"], correct:1, why:"El TL aporta visión y autoridad para destrabar; tiene incentivo directo en que tu negocio cierre.", whyNot:["Es demasiado tarde para destrabar el caso","","Saturas al TL sin necesidad operativa real","No es atribución del cliente activar al TL"] },
  { q:"En la etapa de cierre de una operación de venta, el hito formal es:", opts:["Visita programada con el comprador","Publicación de la propiedad en portales","Firma de la escritura pública ante notario","Reunión de seguimiento con el cliente"], correct:2, why:"La escritura pública formaliza la transferencia y habilita el cobro de la comisión.", whyNot:["Es propio de etapas previas al cierre","Es difusión comercial, no cierre formal","","Es seguimiento operativo, no el hito de cierre"] },
  { q:"En arriendo, el plazo del acuerdo de captación con exclusividad es:", opts:["Indefinido hasta el primer arrendatario","Cinco meses calendario desde la firma","Un año fijo de exclusividad","Un mes calendario desde la firma"], correct:3, why:"Un mes es el plazo razonable para arriendo dado el ciclo corto del segmento (~7 días el lead).", whyNot:["Es contrario a la figura de exclusividad acotada","Aplica a venta, no a la operación de arriendo","Es excesivo en operaciones de arriendo",""] },
],
5: [
  { q:"El proceso típico de un Comprador Primera Vivienda con crédito suele durar:", opts:["De 1 a 4 meses calendario","Una sola semana de gestión","Aproximadamente un año","Más de dos años de proceso"], correct:0, why:"Ventana típica del segmento: decisión emocional sumada a gestión del crédito hipotecario.", whyNot:["","Es irreal para el segmento con crédito hipotecario","Es demasiado largo para el ciclo estándar","Es un plazo extremadamente fuera de rango"] },
  { q:"El miedo central del Comprador Primera Vivienda es:", opts:["Los vecinos del edificio elegido","Endeudarse mal con el dividendo","La logística de la mudanza familiar","Los detalles de la pintura del piso"], correct:1, why:"Asume un compromiso financiero grande por primera vez; el dividendo concentra el miedo del perfil.", whyNot:["Es preocupación menor frente al peso del crédito","","Es operativo y no decisional al momento del cierre","Es un detalle estético y no central"] },
  { q:"La decisión de compra del primera vivienda es mayormente:", opts:["Fría y exclusivamente racional","Guiada solo por el precio al m²","Emocional con influencia familiar","Tomada al azar del día disponible"], correct:2, why:"Carga emocional alta y decisión grupal con núcleo familiar y pareja.", whyNot:["No calza con la naturaleza emocional del perfil","Es un criterio muy técnico, ajeno al perfil","","No describe ningún proceso de decisión real"] },
  { q:"La objeción del dividendo se responde mejor con:", opts:["Ofrecerle un descuento sobre la propiedad","Cambiarlo a otra propiedad de menor valor","Minimizar el miedo del cliente con ejemplos","Simulador hipotecario y comparación con su arriendo"], correct:3, why:"Los datos disuelven el miedo abstracto; comparar dividendo con su arriendo actual ayuda al cierre.", whyNot:["No existe descuento aplicable directamente al dividendo","Evade el punto en lugar de resolverlo con datos","Invalida la emoción del cliente y rompe la relación",""] },
  { q:"Los subsidios MINVU principales para primera vivienda son:", opts:["DS1 y DS49 según tramo de ahorro","DFL2 como beneficio tributario","Leasing habitacional bancario","Subsidio rural exclusivo del MINAGRI"], correct:0, why:"DS1 y DS49 son los instrumentos del MINVU para el segmento primera vivienda según tramo y ahorro previo.", whyNot:["","Es un beneficio tributario, no un subsidio MINVU","Es un producto bancario, no un subsidio","Corresponde a otro segmento ajeno a primera vivienda"] },
  { q:"Si el cliente dice 'voy a esperar a que bajen los precios', la respuesta correcta es:", opts:["Aceptar y cerrar el caso por imposible","Mostrar datos históricos de precios del sector","Insistir sin entregar contexto adicional","Subir tu comisión para compensar la espera"], correct:1, why:"Los datos locales históricos desarman la postura especulativa con evidencia objetiva.", whyNot:["Pierdes al cliente sin entregar valor profesional","","Daña la relación y empuja al cliente a otro corredor","No tiene relación con la objeción ni la resuelve"] },
  { q:"La meta principal del primer contacto con un Primera Vivienda es:", opts:["Cerrar la venta el mismo día del contacto","Mostrar al menos diez propiedades disponibles","Entender búsqueda, crédito y presupuesto","Pedir cédula y renta líquida del cliente"], correct:2, why:"Diagnóstico antes de stock: sin entender al cliente, las propiedades sugeridas no calzan con su realidad.", whyNot:["Es prematuro en el ciclo del segmento","Dispara stock sin filtro y agota al cliente","","Pedir datos sensibles muy pronto rompe la confianza"] },
  { q:"La herramienta técnica central al asesorar a un Primera Vivienda es:", opts:["Análisis de cap rate del barrio","Catálogo institucional de propiedades","Informe de Análisis de Estimación de Precio","Simulador hipotecario con escenarios"], correct:3, why:"El simulador proyecta dividendo real, pie y CAE para evaluar la viabilidad financiera del cliente.", whyNot:["Corresponde al perfil inversionista","No constituye un análisis financiero del cliente","Corresponde al cliente vendedor en captación",""] },
  { q:"Si la pareja o familia no está convencida con la decisión, el corredor debe:", opts:["Convocar una reunión conjunta con todos","Presionar solo al cliente principal","Enviar un folleto comercial por correo","Cambiar la propiedad ofertada al cliente"], correct:0, why:"Una decisión grupal necesita un proceso grupal con todos los decisores presentes.", whyNot:["","Saboteas al influenciador y rompes el cierre","Pierdes momentum y no resuelves la objeción real","No resuelve la objeción de fondo del grupo familiar"] },
  { q:"Tras una reunión con un Primera Vivienda, en tu registro debes:", opts:["No hacer nada hasta que el cliente vuelva","Anotar la conversación y agendar próximo paso","Solo guardar el teléfono del cliente","Enviar un flyer masivo a la base completa"], correct:1, why:"Un proceso largo exige trazabilidad detallada del contexto para retomar sin perder hilos.", whyNot:["El lead se enfría y migra a otro corredor","","Pierdes historial útil del diagnóstico levantado","No corresponde con la profundidad del perfil"] },
  { q:"Frente a la objeción 'mi pie es insuficiente', el manejo correcto es:", opts:["Decirle que vuelva en un año más","Ofrecerle prestar parte del pie del cliente","Revisar subsidios DS1, DS49 y co-deudores","Recomendar aumentar la deuda al máximo posible"], correct:2, why:"Subsidios y co-deudor son alternativas reales que pueden cerrar el gap del pie del cliente.", whyNot:["Pierdes al cliente sin agotar las opciones técnicas","No corresponde al rol ni a la responsabilidad del corredor","","Compromete la viabilidad financiera y el perfil de riesgo"] },
  { q:"El CAE de un crédito hipotecario representa:", opts:["El interés nominal anual cobrado por el banco","El monto total del subsidio MINVU recibido","La cuota fija mensual que paga el cliente","El costo total del crédito incluidos todos los gastos"], correct:3, why:"Permite comparar créditos entre bancos en igual base; integra tasa, comisiones y seguros asociados.", whyNot:["Es solo la tasa nominal, no el costo total proyectado","No tiene relación directa con el subsidio entregado","Es una cuota mensual, no el costo total del crédito",""] },
  { q:"Para evaluar la viabilidad financiera del cliente conviene partir por:", opts:["Calcular dividendo proyectado vs renta líquida","Mostrarle propiedades disponibles en cartera","Pedirle Dicom y boletín comercial","Cerrar una visita inmediata sin más datos"], correct:0, why:"Saber si el dividendo cabe en la capacidad de pago define todo el plan del proceso comercial.", whyNot:["","Sin viabilidad clara, el catálogo no aporta valor","Son datos sensibles que no corresponden al inicio","Acelera sin diagnóstico previo y baja la conversión"] },
  { q:"El subsidio DS49 está orientado a:", opts:["Inversionistas con tres o más propiedades en cartera","Vivienda sin crédito para sectores vulnerables","Compraventa de oficinas comerciales medianas en RM","Personas extranjeras sin RUT chileno definitivo"], correct:1, why:"DS49 es subsidio MINVU para familias vulnerables; no requiere crédito hipotecario complementario.", whyNot:["No aplica al perfil inversionista del segmento","","Aplica a vivienda, no a oficinas comerciales medianas","Existen requisitos específicos de residencia y RUT chileno"] },
  { q:"Frente a 'arrendar es mejor que comprar', la respuesta profesional es:", opts:["Aceptar que tiene razón y cerrar el caso","Ofrecer un descuento aplicado al dividendo mensual","Comparar dividendo proyectado vs arriendo a 10 años","Cambiar de tipología comercial automáticamente"], correct:2, why:"Datos cuantitativos comparan ambos escenarios y entregan visión objetiva al cliente.", whyNot:["Pierdes el lead sin entregar valor profesional","No tienes manejo directo sobre el dividendo bancario","","Evade el análisis técnico real que pide el cliente"] },
  { q:"Para un comprador independiente, el banco suele exigir como respaldo de ingresos:", opts:["Solo liquidaciones de sueldo del último año","Una factura única emitida en el mes","Una carta de respaldo de un familiar","F22 del SII de los últimos dos periodos y cartolas"], correct:3, why:"El SII es la fuente oficial de ingresos del independiente; las cartolas confirman estabilidad de flujo.", whyNot:["Aplica al dependiente, no al independiente","Es insuficiente para acreditar ingresos estables","No constituye respaldo formal ante el banco",""] },
  { q:"Frente a 'voy a esperar opinión familiar', la acción correcta es:", opts:["Proponer una reunión conjunta con la familia","Cerrar el caso por imposibilidad de avanzar","Llamar todos los días hasta que el cliente decida","Bajar el precio para acelerar la decisión"], correct:0, why:"Si la decisión es grupal, el proceso debe ser grupal: convoca a todos los decisores en una sola reunión.", whyNot:["","Cierras prematuramente una oportunidad real","El acoso desgasta la relación y la confianza","No tienes manejo directo sobre el precio publicado"] },
  { q:"El primer escenario que conviene mostrar al cliente con simulador hipotecario es:", opts:["El de mayor dividendo posible para el cliente","El que ajusta el dividendo a 25-30% de su renta líquida","El de menor pie posible aunque suba la tasa","Uno con tasas de hace cinco años atrás"], correct:1, why:"Es el ratio saludable para no comprometer el flujo y mantener la operación sostenible en el tiempo.", whyNot:["Compromete la capacidad de pago del cliente a futuro","","Sin pie suficiente las tasas suben y se desordena el plan","Datos desactualizados engañan al cliente y rompen la confianza"] },
  { q:"¿Por qué conviene mostrar la diferencia entre dividendo y arriendo equivalente?", opts:["Para subir la comisión cobrada al cliente","Para que pague más pie al firmar el crédito","Para que vea inversión patrimonial vs gasto","Para evitar que el cliente use otro simulador"], correct:2, why:"Convertir el dividendo en inversión patrimonial es la pieza emocional y racional clave del cierre.", whyNot:["No tiene relación con la comisión del corredor","No es un objetivo legítimo del corredor","","El simulador es la herramienta principal del corredor"] },
  { q:"Si el cliente Primera Vivienda tiene perfil independiente, lo primero que debes confirmar es:", opts:["Su preferencia por una comuna específica","Si arrienda actualmente o vive en familia","Su gusto en arquitectura del edificio elegido","Si tributa con boletas o facturas y tramo SII"], correct:3, why:"Tributación y tramo SII determinan qué documentos puede entregar y cómo evaluará el banco el caso.", whyNot:["Es relevante para la búsqueda, no para la viabilidad","Es contexto operativo, no requisito bancario","No define la viabilidad financiera del crédito",""] },
],
6: [
  { q:"La fórmula del cap rate bruto anual es:", opts:["(arriendo anual / valor de la propiedad) × 100","(arriendo mensual / valor de la propiedad)","(valor de la propiedad / arriendo anual) × 100","(pie pagado / valor total) × 100"], correct:0, why:"Es la definición estándar del indicador: arriendo anual sobre valor del activo, expresado en porcentaje.", whyNot:["","Le falta el factor doce y la base anual del cálculo","Está invertida; no corresponde a la fórmula del cap rate","Es ratio de financiamiento, no de rentabilidad del activo"] },
  { q:"El cap rate bruto residencial RM 2025 oscila en el rango:", opts:["1 a 2% anual sobre valor","4,8 a 7,2% anual sobre valor","10 a 15% anual sobre valor","Cercano al 25% anual sobre valor"], correct:1, why:"Rango oficial del mercado RM 2025 según data del segmento residencial.", whyNot:["Subestima ampliamente el rango real residencial","","Es irreal en residencial RM, propio de otros activos","Está completamente fuera del rango del segmento"] },
  { q:"El cap rate neto efectivo en renta residencial Santiago ronda:", opts:["1 a 2% anual sobre valor","6 a 8% anual sobre valor","3 a 4,5% anual sobre valor","Sobre el 15% anual sobre valor"], correct:2, why:"El neto efectivo se calcula descontando contribuciones, impuesto a la renta, vacancia y gastos operativos del bruto.", whyNot:["Queda bajo el estándar residencial RM","Es nivel de cap rate bruto, no neto","","Es un rango imposible en residencial RM"] },
  { q:"El Inversionista decide rápido cuando:", opts:["La propiedad tiene una buena vista al cerro","El barrio es residencial clásico tradicional","Hay pocos competidores buscando esa propiedad","Los números cierran su meta de retorno"], correct:3, why:"Su decisión es 100% racional y vinculada al retorno proyectado del activo.", whyNot:["Es secundario para el perfil del inversionista","Puede no aplicar como criterio de inversión","Influye en el cierre, pero no es el driver decisional",""] },
  { q:"¿Qué segmento domina las transacciones residenciales en RM 2025?", opts:["Departamentos de 1 a 2 dormitorios","Casas de cuatro dormitorios y suites","Parcelas de agrado periféricas","Locales comerciales en sectores prime"], correct:0, why:"El segmento dominante en RM 2025 es el de departamentos de 1-2D, con cerca del 77% de transacciones.", whyNot:["","Es un segmento minoritario en RM","Es un vertical diferente al residencial urbano","Corresponde a un vertical comercial, no residencial"] },
  { q:"Ante la objeción 'voy a esperar, está caro', la respuesta correcta es:", opts:["Aceptar y esperar con el cliente","Mostrar el costo real de esperar","Bajar el precio publicado por él","Buscar otro barrio más económico"], correct:1, why:"El costo de esperar es medible: flujo no percibido y plusvalía no realizada en el periodo.", whyNot:["Pierdes la operación y el tiempo invertido","","No manejas el precio publicado del activo","Evade el punto sin abordar la objeción real"] },
  { q:"La comparación con fondos mutuos se neutraliza con:", opts:["Decir que los fondos son riesgosos","Mencionar el bajo retorno histórico","Tangibilidad, flujo y apalancamiento","Regalar un análisis financiero gratis"], correct:2, why:"Tangibilidad, apalancamiento bancario y flujo de arriendo son diferenciales estructurales del inmobiliario.", whyNot:["Es un argumento poco profesional y débil","Es una afirmación débil y sin contexto","","No resuelve la objeción del cliente"] },
  { q:"Si un Inversionista no cierra en dos semanas, la acción correcta es:", opts:["Sacarlo del embudo y olvidar el caso","Ofrecer un descuento sobre la marcha","Llamarlo varias veces durante el día","Auditar qué falló y aprender del caso"], correct:3, why:"Aprender del caso mejora la tasa de cierre futura y refina el filtro inicial del corredor.", whyNot:["Se pierde el aprendizaje del caso revisado","No eres dueño del precio para ofrecer descuentos","Es invasivo y contraproducente con el cliente",""] },
  { q:"La plusvalía de un activo se suele proyectar a:", opts:["Entre 5 y 10 años desde compra","Un año desde la compra","Solo dos semanas desde compra","Plazo indefinido sin métrica"], correct:0, why:"Horizonte estándar del inversor inmobiliario para evaluar plusvalía proyectada.", whyNot:["","Es un plazo demasiado corto para esta métrica","Está completamente fuera del marco de análisis","No tiene utilidad analítica como referencia"] },
  { q:"Un arriendo de $1.000.000 mensuales en una propiedad de $200M da un cap rate bruto de:", opts:["3% anual sobre valor","6% anual sobre valor","12% anual sobre valor","0,5% anual sobre valor"], correct:1, why:"(1.000.000 × 12) / 200.000.000 × 100 = 6%.", whyNot:["Es cálculo erróneo a la baja","","Es el doble del valor correcto","Es error por omitir el factor doce"] },
  { q:"En la herramienta CRM 'Análisis de Rentabilidad Inmobiliaria', el indicador NOI representa:", opts:["El arriendo bruto anual sin descuentos","El cash flow después de pagar el dividendo","El ingreso operativo neto antes de la deuda","La plusvalía proyectada a 10 años"], correct:2, why:"NOI es ingreso operativo neto: arriendo menos vacancia, contribuciones y gastos operativos, antes del crédito.", whyNot:["Es el bruto, no el NOI del activo","Es Cash Flow, no NOI del activo","","Es otro indicador del análisis de rentabilidad"] },
  { q:"El Cash on Cash mide la rentabilidad anual sobre:", opts:["El valor total del inmueble adquirido","El arriendo bruto anual del activo","La deuda hipotecaria del crédito","El capital propio invertido (pie + gastos)"], correct:3, why:"Es el retorno anual del flujo neto sobre el capital propio efectivamente invertido (pie y gastos).", whyNot:["Eso describe el cap rate bruto del activo","Eso describe el bruto, no el Cash on Cash","La deuda no es capital propio invertido",""] },
  { q:"El Payback de una inversión inmobiliaria mide:", opts:["Los años en que el flujo recupera el capital","El plazo del crédito hipotecario contratado","La tasa de plusvalía anual del activo","El plazo de absorción del edificio nuevo"], correct:0, why:"Es el tiempo de recupero del capital propio vía flujos netos del activo en el tiempo.", whyNot:["","Es plazo bancario, no de la inversión","Es otra métrica distinta del análisis","Mide otra cosa fuera del foco de retorno"] },
  { q:"La objeción 'me preocupa la vacancia' se neutraliza con:", opts:["Negar de plano que exista vacancia","Datos reales de vacancia y ratio de cobertura","Bajar el precio del arriendo a publicar","Ofrecer una garantía de la inmobiliaria"], correct:1, why:"Datos del barrio, ubicación y tipología muestran vacancia real y formas de mitigarla con cobertura.", whyNot:["Negar destruye la confianza del cliente","","Perjudica el retorno proyectado del inversionista","No corresponde al modelo TuMatch ni al rol del corredor"] },
  { q:"Frente a 'no conozco la zona', la mejor respuesta es:", opts:["Recomendar otra zona más genérica para el cliente","Sugerir comprar a ciegas si confía en el corredor","Reporte con cap rate, demanda y vacancia","Cambiar el tema de conversación con el cliente"], correct:2, why:"El corredor profesional aporta data del barrio: cap rate, demanda y comparables relevantes.", whyNot:["No resuelve la duda real planteada por el cliente","Es práctica imprudente y poco profesional para el corredor","","Pierde la oportunidad y baja la autoridad técnica del corredor"] },
  { q:"La objeción 'las tasas hipotecarias están altas' se aborda mostrando:", opts:["Solo la tasa nominal del momento","Que conviene endeudarse al máximo posible","Que las tasas siempre bajan con el tiempo","Costo total proyectado y opción de refinanciar"], correct:3, why:"Una mirada de largo plazo y la estrategia de refinanciamiento equilibran el escenario actual de tasas.", whyNot:["Es una visión parcial que no aporta cierre","Es una recomendación financieramente irresponsable","Es una promesa que no controlas como corredor",""] },
  { q:"Frente a 'el inmueble es ilíquido', el manejo correcto es:", opts:["Reconocer la liquidez menor y compensar con flujo","Negar el problema de liquidez del activo","Ofrecer recompra del inmueble a cinco años","Bajar la comisión cobrada al cliente"], correct:0, why:"El corredor reconoce el límite y muestra los diferenciales estructurales del inmobiliario frente al financiero.", whyNot:["","Pierde credibilidad ante el cliente experimentado","No es facultad del corredor ofrecer recompra","No resuelve la objeción de liquidez planteada"] },
  { q:"La proyección a 10 años en la herramienta de rentabilidad sirve para:", opts:["Calcular el dividendo del primer mes","Mostrar acumulación de flujos, plusvalía y patrimonio","Determinar el precio de venta a futuro","Definir las comisiones del corredor del caso"], correct:1, why:"Combina ingresos, plusvalía y amortización para mostrar el patrimonio que se construye en el horizonte.", whyNot:["Eso lo entrega el simulador para el primer escenario","","No determina el precio futuro de venta","No tiene relación con las comisiones del corredor"] },
  { q:"Si el Inversionista compara con un fondo mutuo, el argumento técnico más fuerte es:", opts:["El inmueble nunca pierde su valor","El inmueble paga dividendos más altos que el fondo","Activo tangible, apalancable y con flujo periódico","El fondo cobra una comisión muy alta al cliente"], correct:2, why:"Tangibilidad, apalancamiento bancario y flujo de arriendo son diferenciales que el fondo mutuo no entrega.", whyNot:["Es una promesa falsa que destruye credibilidad","Confunde dividendo de acción con flujo de arriendo","","Es un argumento débil y sin sustento documentado"] },
  { q:"Si la propiedad cuesta $300M, pie 20% y arriendo $1.500.000 al mes, el cap rate bruto aproximado es:", opts:["3% anual sobre valor","12% anual sobre valor","9% anual sobre valor","6% anual sobre valor"], correct:3, why:"(1.500.000 × 12) / 300.000.000 × 100 = 6%.", whyNot:["Subestima el cálculo del cap rate","Es el doble del valor correcto del cap rate","Es un cálculo equivocado del rendimiento",""] },
],
7: [
  { q:"El embudo de captación TuMatch contempla:", opts:["7 etapas operativas","3 etapas operativas","10 etapas operativas","No está formalmente definido"], correct:0, why:"Etapas oficiales: contacto, reunión, estimación de precio, acuerdo, captada, publicada, vendida.", whyNot:["","Faltan etapas relevantes del proceso completo","Sobreestima la cantidad real de etapas","Está oficialmente definido en el modelo"] },
  { q:"La etapa PREVIA a 'Acuerdo' dentro del embudo de captación es:", opts:["Contacto inicial con el dueño","Estimación de Precio con AEP","Publicada en portales del stack","Vendida y escriturada formalmente"], correct:1, why:"Orden oficial: contacto → reunión → estimación de precio → acuerdo.", whyNot:["Está demasiado al inicio del embudo","","Es una etapa posterior al acuerdo firmado","Es la etapa final del embudo de captación"] },
  { q:"El Análisis de Estimación de Precio (AEP) con comparables debe hacerse:", opts:["Durante la reunión a ojo y sin datos","Nunca, porque el dueño define el precio","Antes de la reunión, con datos preparados","Solo si el cliente lo solicita por escrito"], correct:2, why:"Llegas con datos defendibles, ahorras horas de discusión y proyectas autoridad técnica frente al dueño.", whyNot:["Es poco profesional y baja la autoridad del corredor","Es mala práctica y desordena el proceso","","Es obligatorio en captación, no opcional"] },
  { q:"La comisión estándar de venta en Chile se estructura como:", opts:["1% total al vendedor sin IVA","Un monto fijo por operación cerrada","10% al vendedor sobre el cierre","2% + IVA a cada parte de la operación"], correct:3, why:"Cada parte paga 2% + IVA al corredor que la representa; si el corredor representa a ambas, recibe ambos tramos.", whyNot:["Está bajo el estándar y sin IVA no procede","El mercado cobra proporcional al valor, no fijo","Sobreestima la comisión de mercado",""] },
  { q:"La absorción del stock sobre UF 4.000 en Santiago se ubica cerca de:", opts:["15 meses promedio","3 meses promedio","60 meses promedio","Más de 100 meses promedio"], correct:0, why:"Dato de referencia CChC 2024 para el segmento sobre UF 4.000.", whyNot:["","Es muy optimista para el ticket de ese segmento","Sobreestima significativamente el plazo real","Está fuera de cualquier rango realista de mercado"] },
  { q:"Ante 'mi casa vale más de lo que dices', la acción correcta es:", opts:["Darle la razón y subir el precio","Mostrar comparables vendidos del sector","Subir el precio para evitar conflicto","Abandonar el caso silenciosamente"], correct:1, why:"Los comparables reales y vendidos disuelven el valor emocional con datos objetivos del mercado.", whyNot:["Lo dejas sin vender y quemas el activo","","Quema la propiedad fuera de mercado","Pierdes la oportunidad sin entregar valor"] },
  { q:"Un acuerdo sin exclusividad permite:", opts:["Nada relevante para el corredor","Solo un corredor activo en el caso","Multicorretaje con reglas específicas","Que el dueño publique solo por su cuenta"], correct:2, why:"Es una opción válida para propietarios renuentes a la exclusividad, con reglas claras de comisión y atribución.", whyNot:["Sí es una figura válida y usada en el mercado","Contradice la figura misma del acuerdo abierto","","Sigue habiendo corredor representando al dueño"] },
  { q:"El derecho a comisión por acuerdo de captación se gatilla con:", opts:["Una promesa verbal del dueño","Una llamada telefónica grabada","Un correo electrónico de confirmación","Documento firmado y registrado"], correct:3, why:"Sin formalización escrita y registrada no hay derecho cierto a la comisión por captación.", whyNot:["No tiene valor probatorio formal","No sustituye a la firma formal del acuerdo","Es un canal informal sin fuerza jurídica",""] },
  { q:"Los portales oficiales del stack TuMatch son:", opts:["Portal Inmobiliario, MercadoLibre, Proppit, Enlace, Yapo y TuMatch","Solo MercadoLibre y Yapo entre los portales principales","Solo Portal Inmobiliario para todos los avisos del corredor","Cualquier portal que el corredor decida usar libremente"], correct:0, why:"Cobertura oficial TuMatch con republicación automática desde una sola carga del corredor.", whyNot:["","Es incompleto: faltan los portales del stack oficial","Un solo portal limita el alcance comercial del aviso","El stack oficial es parte del soporte de marca al corredor"] },
  { q:"Al cierre formal de un caso de venta, el corredor debe:", opts:["No hacer nada hasta el siguiente caso","Registrar comisión y documentos en CRM","Comprometer una baja de precio futura","Archivar la carpeta y olvidar el caso"], correct:1, why:"Sin registro completo, no hay trazabilidad de la comisión ni del cumplimiento del acuerdo.", whyNot:["Pierdes la comisión y la auditabilidad del caso","","No corresponde como compromiso del corredor","Sin registro estructurado no hay orden ni postventa"] },
  { q:"La diferencia entre exclusividad y cartera abierta es que en exclusividad:", opts:["Solo el dueño puede publicar la propiedad","Cualquier corredor puede vender con varias comisiones","Un único corredor representa la propiedad","No se firma ningún documento entre las partes"], correct:2, why:"En exclusividad, un solo corredor representa la propiedad y se compromete con inversión en marketing y reportes.", whyNot:["Es lo contrario a la figura de exclusividad","Eso describe la cartera abierta, no la exclusividad","","Sí se firma un acuerdo formal entre las partes"] },
  { q:"En el embudo de captación, la etapa 'Captada' significa que:", opts:["La propiedad ya fue vendida formalmente","La propiedad fue tasada pero sin firma del acuerdo","El cliente solo entregó datos de contacto","Se firmó acuerdo y la propiedad está lista para publicar"], correct:3, why:"'Captada' es el hito posterior al acuerdo firmado y previo a salir publicada en portales del stack.", whyNot:["Eso describe la etapa 'Vendida' del embudo","Eso describe la etapa de Estimación de Precio","Eso describe la etapa de Contacto inicial",""] },
  { q:"El reporte mensual al cliente vendedor debe incluir:", opts:["Visitas, feedback, datos de portales y recomendaciones","Solo el número total de visitas realizadas del mes","Solo recomendaciones generales del corredor del caso","Solo fotos actualizadas de la propiedad publicada"], correct:0, why:"Un reporte completo demuestra gestión activa, justifica la exclusividad y evita la objeción de inactividad.", whyNot:["","Es insuficiente como evidencia de gestión activa real","Sin datos no hay gestión demostrable ante el cliente","Eso es publicación, no reporte de gestión mensual"] },
  { q:"Si el dueño insiste en un precio sobrevaluado tras el AEP con comparables, lo correcto es:", opts:["Captar a cualquier precio para no perder el caso","Aceptar solo si entiende que se ajustará por mercado","Subir tu comisión para compensar el riesgo asumido","Publicar bajo precio y avisarle después al dueño"], correct:1, why:"Captar fuera de mercado quema la propiedad y al corredor; el acuerdo debe explicitar el ajuste planificado.", whyNot:["Lleva al fracaso del caso y desgasta la relación","","No tienes manejo unilateral sobre la comisión","Compromete confianza, legalidad y reputación profesional"] },
  { q:"La objeción 'mi vecino vendió más caro hace dos años' se desarma con:", opts:["Aceptarla y subir el precio publicado","Cambiar de barrio para alejar la comparación","Comparables actuales del sector y absorción real","Bajar la comisión cobrada al doble"], correct:2, why:"El mercado cambia: comparables actuales y plazos reales de venta son la evidencia objetiva relevante.", whyNot:["Te aleja del precio real de mercado","Evade la objeción y rompe la conversación","","No tiene relación con el problema planteado"] },
  { q:"En el AEP con comparables, los criterios principales son:", opts:["Solo los metros cuadrados construidos","Color de fachada y cantidad de pisos","Solo el precio publicado del vecino","Sector, m², antigüedad, orientación y estado"], correct:3, why:"Múltiples variables permiten un AEP defendible, profesional y resistente a objeciones del dueño.", whyNot:["Es una variable insuficiente por sí sola","Son variables sin peso real en el valor del activo","El precio publicado no es precio cerrado",""] },
  { q:"El plazo típico del acuerdo de captación con exclusividad para venta es:", opts:["Cinco meses calendario completos","Un mes calendario completo","Dos años fijos con prórroga","Indefinido hasta el primer cierre"], correct:0, why:"Cinco meses es el plazo razonable para comercializar venta dado el ciclo del segmento y la inversión en marketing.", whyNot:["","Es insuficiente para vender bien una propiedad","Es un plazo abusivo para el cliente y el corredor","Es contrario a la figura formal de exclusividad acotada"] },
  { q:"Si tras 60 días publicada no hay visitas, la acción correcta del corredor es:", opts:["Esperar a que el cliente reclame por sí mismo","Reunirse con el dueño y proponer ajuste de precio o estrategia","Bajar el precio publicado sin avisar al dueño","Abandonar el caso silenciosamente y seguir"], correct:1, why:"Reportar y proponer ajustes mantiene la confianza del dueño y la captación viva en el mercado.", whyNot:["Es pasivo y daña la relación con el dueño","","Pierde la confianza del cliente y compromete la marca","Daña la reputación profesional y comercial del corredor"] },
  { q:"El plan de marketing típico para una venta debe contemplar al menos:", opts:["Una única foto y publicación simple","Solo redes sociales personales del corredor","Set fotográfico, ficha, multicanal y redes","Cartel impreso instalado en la fachada"], correct:2, why:"Combinar visual profesional, ficha técnica y multicanal multiplica las visitas calificadas al activo.", whyNot:["Es insuficiente para captar al comprador correcto","Es insuficiente como canal único de difusión","","Refuerza la difusión, pero no es el plan completo"] },
  { q:"En el embudo de captación, la etapa 'Publicada' implica que:", opts:["Solo se entregaron las llaves al corredor","Ya se realizó la primera visita con interesado","Se firmó la escritura pública del activo","La propiedad ya está visible en portales del stack"], correct:3, why:"'Publicada' significa que las fichas y fotos están en portales y los leads pueden empezar a llegar.", whyNot:["La entrega de llaves es operativa, no etapa","Las visitas ocurren después de estar publicada","La firma de la escritura es la etapa 'Vendida'",""] },
],
8: [
  { q:"La vida útil del lead de arriendo del lado arrendatario es aproximadamente:", opts:["Siete días corridos máximo","Un mes calendario completo","Un día solamente","Aproximadamente seis meses"], correct:0, why:"Ventana crítica antes de que el arrendatario decida otra alternativa; cada día sin gestión cuenta.", whyNot:["","Es demasiado tiempo para la urgencia del segmento","Es demasiado corto frente al ciclo real","Está fuera de la escala real del lead"] },
  { q:"La comisión de arriendo 2026 se cobra:", opts:["Solo al arrendatario al firmar","50% + IVA a cada parte por separado","10% a ambos en una sola boleta","Un mes completo cobrado al dueño"], correct:1, why:"Se cobra 50% + IVA a cada parte por separado, equivalente al primer mes de canon.", whyNot:["Perderías el lado arrendador del cobro","","No es la estructura oficial de comisión","No corresponde al modelo oficial de cobro"] },
  { q:"La reserva no reembolsable que paga el arrendatario al corredor es:", opts:["$10.000 fijos al cierre","Un mes completo de canon","$100.000 imputables a comisión","Un sueldo mínimo del arrendatario"], correct:2, why:"Monto oficial $100.000 imputable a comisión; queda como retención si el arrendatario se baja.", whyNot:["Es muy bajo para funcionar como compromiso real","No es la política oficial del modelo","","No aplica esa figura dentro del modelo"] },
  { q:"El ratio arriendo/ingreso líquido sugerido al postular es:", opts:["10 a 20% del ingreso líquido","Sin tope formal establecido","50 a 60% del ingreso líquido","30 a 35% del ingreso líquido"], correct:3, why:"Es el techo saludable del perfil arrendatario para que el canon sea sostenible en el tiempo.", whyNot:["Es irrealmente bajo y poco competitivo","Sin ratio no hay criterio profesional de filtro","Es financieramente arriesgado para el arrendatario",""] },
  { q:"Los documentos mínimos del arrendatario dependiente son:", opts:["Cédula, liquidaciones, AFP y referencias","Solo cédula de identidad vigente del cliente","Solo número de teléfono y correo personal","Un correo con foto del cliente y su pareja"], correct:0, why:"Es la carpeta básica del perfil estrella ★ para validar ingresos y estabilidad ante el arrendador.", whyNot:["","Es insuficiente para acreditar perfil real ante el arrendador","No acredita ingresos, AFP ni estabilidad laboral","No constituye evidencia válida de ingresos del cliente"] },
  { q:"El protocolo de canal único en arriendo establece que:", opts:["Las partes se contactan por WhatsApp directo","Las partes no se contactan; todo pasa por el corredor","Solo el arrendador puede escribir al corredor","El corredor envía los números entre las partes"], correct:1, why:"Centralizar la comunicación protege la comisión, controla la información y garantiza trazabilidad del proceso.", whyNot:["Es contrario al protocolo: expone la comisión y el cierre","","Ambas partes deben coordinarse a través del corredor","Es exactamente lo que el protocolo busca evitar"] },
  { q:"La estrella ★ del arrendatario en el sistema indica:", opts:["Que pagó la cuota mensual al corredor","Que tiene aval familiar firmado y vigente","Documentos completos y validados","Que es amigo personal directo del corredor"], correct:2, why:"Marcador de calidad documental; el ★ accede a propiedades premium y mejor postulación.", whyNot:["No existe cuota mensual del cliente al corredor","El aval es un complemento operativo, no la estrella","","No tiene relación con el filtro profesional documental"] },
  { q:"Si el arrendatario no responde en 48 horas, lo correcto es:", opts:["Esperar al menos una semana más","Llamar cada dos horas hasta lograrlo","Ofrecer una rebaja de canon","Marcarlo como perdido y seguir"], correct:3, why:"La urgencia del segmento dicta que 48h sin respuesta significa que el arrendatario tomó otra opción.", whyNot:["Pierdes tiempo útil de cierre con otro arrendatario","Es invasivo, ineficaz y daña la relación","No eres el dueño y el canon no se rebaja unilateralmente",""] },
  { q:"Si el arrendatario es independiente, aporta como respaldo de ingreso:", opts:["F22 SII y cartolas bancarias del periodo","Liquidaciones de sueldo del último año","Una carta firmada por su madre","Su currículum vitae laboral actualizado"], correct:0, why:"F22 y movimientos bancarios reemplazan liquidaciones para acreditar ingresos del independiente.", whyNot:["","No tiene liquidaciones; es trabajador independiente","No sirve como respaldo formal de ingresos","No acredita ingresos reales del arrendatario"] },
  { q:"Ante 'prefiero hacerlo solo' del arrendador, la respuesta correcta es:", opts:["Aceptar y cerrar el caso sin más argumentos","Explicar el valor del filtro previo de postulantes","Ofrecer una rebaja de comisión al cliente","Publicar igual sin la autorización del dueño actual"], correct:1, why:"El diferencial del corredor está en filtrar perfil, documentación e ingresos antes de exponer al arrendador.", whyNot:["Pierdes el caso y no agregas valor profesional","","Compite por precio en lugar de competir por servicio","Rompe la relación y compromete responsabilidad legal"] },
  { q:"La velocidad de decisión de un arrendador, comparada con el arrendatario, es:", opts:["Más rápida que la del arrendatario","Idéntica a la del arrendatario","Más lenta: típicamente 15 días","No tiene plazo definido"], correct:2, why:"El arrendador toma su tiempo en evaluar postulantes; ~15 días frente a ~7 del arrendatario.", whyNot:["Es lo opuesto al benchmark del segmento","Son ciclos distintos por el rol que cumple cada parte","","Existe un benchmark operativo claro y medible"] },
  { q:"La objeción 'la comisión es muy cara' del arrendador se neutraliza con:", opts:["Bajar la comisión automáticamente sin discutir","Aceptar trabajar el caso sin acuerdo formal firmado","Ofrecer fotos profesionales gratis del inmueble","Mostrar valor: filtrado, contrato, gestión y stack"], correct:3, why:"El corredor demuestra todo lo que entrega antes de discutir precio: profesionalismo y trazabilidad.", whyNot:["Compite por precio sin sustentar el valor profesional","Compromete el derecho a comisión y la trazabilidad legal","Es un regalo aislado que no resuelve la objeción real",""] },
  { q:"Cuando un arrendatario se niega a firmar la reserva por $100.000, lo correcto es:", opts:["Suspender el avance: sin reserva no hay compromiso","Publicar igual la propiedad de inmediato","Bajar el monto de la reserva a la mitad","Pedirle la reserva al arrendador del inmueble"], correct:0, why:"Sin reserva el arrendatario no está comprometido y la propiedad queda sin bloquear formalmente.", whyNot:["","Pierdes tiempo y exposición frente al arrendador","No tienes facultad para modificar el monto","No corresponde al lado del arrendador del proceso"] },
  { q:"El documento principal del arrendatario para validar ingresos dependientes es:", opts:["Solo cédula de identidad vigente del cliente","Liquidaciones de sueldo de los últimos tres meses","Boleta única emitida durante el mes en curso","Carta laboral firmada por el jefe directo del cliente"], correct:1, why:"Las liquidaciones acreditan ingreso y estabilidad laboral; son la base del filtro del arrendador.", whyNot:["No prueba ingresos ni estabilidad laboral del cliente","","Es insuficiente para evaluar el perfil del arrendatario","Es complementario, no probatorio del ingreso real"] },
  { q:"La objeción 'tu departamento es muy caro' del arrendatario se neutraliza con:", opts:["Aceptar la objeción y bajar el canon publicado","Cambiar la propiedad a otra del catálogo disponible","Comparar con propiedades similares y diferenciales","Pedirle un mes adicional de garantía al cliente"], correct:2, why:"Comparables del barrio justifican el canon publicado y validan la decisión del arrendatario.", whyNot:["No tienes manejo unilateral sobre el precio publicado","Pierdes momentum y la oportunidad ya construida","","No corresponde al planteamiento real del cliente"] },
  { q:"Si un arrendatario solicita visitar la propiedad sin agendar formalmente, lo correcto es:", opts:["Llevarlo de inmediato sin preguntas","Permitir solo una visita virtual remota","Negarle la visita por falta de agenda","Agendar formalmente y pedir documentos básicos antes"], correct:3, why:"Filtrar antes de visitar protege al arrendador y mejora la conversión efectiva del corredor.", whyNot:["Quemas tiempo y arriesgas la propiedad","Limita injustificadamente el filtro del cliente","Pierdes una oportunidad real de cierre",""] },
  { q:"La objeción 'voy a esperar mejor canon' del arrendatario se aborda con:", opts:["Mostrar la velocidad del mercado y el riesgo de perder","Bajar el canon sin avisar al arrendador","Esperar pacientemente que regrese el cliente","Llamar al arrendador para presionar la baja"], correct:0, why:"En arriendo el lead vive ~7 días; demorar significa perder la propiedad ante otro postulante.", whyNot:["","No tienes manejo unilateral sobre el canon","La pasividad pierde la operación construida","Quema la relación con el lado arrendador"] },
  { q:"La objeción 'no quiero exclusividad' del arrendador se aborda explicando que:", opts:["TuMatch nunca opera sin la exclusividad firmada","Permite invertir en marketing y reporte único","No hay ninguna diferencia de servicio en la práctica real","La exclusividad es obligatoria por ley vigente en Chile"], correct:1, why:"La exclusividad da garantías al corredor para invertir esfuerzo serio: marketing, stack y reportes.", whyNot:["TuMatch admite cartera abierta cuando corresponde al caso","","Sí hay diferencia: invertir en marketing requiere garantía","No es obligación legal contratar con exclusividad en Chile"] },
  { q:"Si el arrendador objeta 'tengo dudas sobre el inquilino', la acción adecuada es:", opts:["Forzar la firma del contrato igual sin discutir","Bajar la garantía mensual para acelerar el cierre","Mostrar carpeta de filtrado y documentos","Renunciar al caso por desconfianza inicial del cliente"], correct:2, why:"La carpeta de filtrado entrega evidencia objetiva que tranquiliza al arrendador y respalda la postulación.", whyNot:["Daña la confianza y compromete la reputación del corredor","Compromete al arrendador frente a un eventual problema","","Pierdes el caso sin entregar valor profesional al cliente"] },
  { q:"Si el arrendatario es estudiante sin ingresos propios, la solución estándar es:", opts:["Rechazar el caso por incumplimiento de filtro","Cobrar una comisión adicional por el caso","Aumentar la garantía mensual al doble","Solicitar aval de un familiar con ingresos demostrables"], correct:3, why:"El aval familiar respaldado documentalmente hace viable la postulación del estudiante ante el arrendador.", whyNot:["Pierdes una operación viable con aval correcto","No corresponde al modelo TuMatch ni al estándar","No siempre el arrendador acepta y desordena el filtro",""] },
],
9: [
  { q:"Los círculos de red en TuMatch se clasifican en:", opts:["Caliente, tibio y frío","Rojo, amarillo y verde","Tipo A, tipo B y tipo C","Alto, medio y bajo nivel"], correct:0, why:"Es la taxonomía oficial de TuMatch para segmentar la red propia del corredor.", whyNot:["","Es otro marco conceptual ajeno al modelo","Es genérico y no corresponde al modelo","Es genérico y no corresponde a la taxonomía oficial"] },
  { q:"El círculo CALIENTE agrupa principalmente a:", opts:["Desconocidos provenientes de portales","Familia y amigos íntimos del corredor","Contactos indirectos por terceros","Leads pagados desde campañas online"], correct:1, why:"El caliente concentra la máxima confianza preexistente: familia y amigos cercanos del corredor.", whyNot:["Eso describe al círculo frío","","Eso describe al círculo tibio","Eso describe al círculo frío con segmentación pagada"] },
  { q:"La conversión típica esperada del círculo caliente es cercana a:", opts:["1 de cada 100 contactos","1 de cada 40 contactos","1 de cada 3 contactos","1 de cada 10 contactos"], correct:2, why:"La alta confianza preexistente hace que aproximadamente 1 de cada 3 conversaciones genere oportunidad.", whyNot:["Es irrealmente baja para un círculo caliente","Es la cifra propia del círculo frío","","Es la cifra propia del círculo tibio"] },
  { q:"Con el círculo TIBIO, el paso inicial correcto es:", opts:["Pitch directo del servicio comercial","Publicidad masiva pagada al segmento","Ignorarlo hasta que el contacto escriba","Reconectar sin agenda comercial explícita"], correct:3, why:"Respetar la relación previa abre la puerta a la conversación comercial sin presión inicial.", whyNot:["Sabotea la confianza preexistente del nodo","Es inefectivo y caro para este círculo","Pierdes todo el potencial del círculo tibio",""] },
  { q:"Con el círculo FRÍO funciona mejor:", opts:["Velocidad, script y volumen sostenido","Un único mensaje muy potente","Paciencia sin seguimiento sistemático","Solo descuentos agresivos al cierre"], correct:0, why:"El volumen compensa la baja tasa de conversión del frío; la velocidad y el script convierten al primer turno.", whyNot:["","Es irreal: el frío exige iteración constante","Sin seguimiento no se gatilla ninguna oportunidad","No corresponde al modelo de conversión por volumen"] },
  { q:"El embudo de 30 contactos típicamente produce:", opts:["Cero negocios cerrados","1 a 2 negocios cerrados","30 negocios cerrados","Más de 10 negocios cerrados"], correct:1, why:"Benchmark TuMatch: 30 contactos → 10 conversaciones → 4 citas → 1-2 cierres efectivos.", whyNot:["Subestima el resultado de la metodología","","Es irreal: ninguna red convierte al 100%","Está fuera del rango realista del benchmark"] },
  { q:"La primera acción al activar tu red es:", opts:["Publicidad pagada al instante en redes","Spam masivo a toda la base disponible","Contacto 1 a 1 al círculo caliente","Solo esperar referidos espontáneos"], correct:2, why:"El círculo caliente tiene el ROI más alto con menos esfuerzo y velocidad de cierre.", whyNot:["Es caro y no calza con la etapa inicial","Quema la lista y reduce conversión a cero","","Es pasivo y no genera el primer movimiento"] },
  { q:"La alianza más crítica para avanzar operaciones de Primera Vivienda es:", opts:["Inmobiliarias con stock en verde","Productoras audiovisuales del rubro","Estudios jurídicos especializados","Ejecutivos bancarios e hipotecarios"], correct:3, why:"El cuello de botella del segmento es la cotización y aprobación del crédito; el ejecutivo bancario acelera todo.", whyNot:["Es útil, pero no resuelve la viabilidad financiera","Apoya la difusión, no el financiamiento del cliente","Es relevante al cierre, no para habilitar la compra",""] },
  { q:"El contacto oficial TuMatch tras aprobar la certificación es:", opts:["WhatsApp +56 9 3410 7448 institucional","El email del corredor dueño del caso","Mensajes por Facebook Messenger","Carta enviada por correo postal físico"], correct:0, why:"Es el canal oficial único de soporte humano de TuMatch para todo trámite del corredor.", whyNot:["","No es el canal oficial único de la marca","No es un canal oficial autorizado","No es un canal oficial autorizado por TuMatch"] },
  { q:"Tras aprobar la certificación, el flujo oficial del corredor es:", opts:["Cobrar comisión de inmediato sin más pasos","Certificado, WhatsApp, contrato y TL","Esperar al menos seis meses adicionales calendario","Rendir una prueba presencial complementaria extra"], correct:1, why:"Es la secuencia oficial de activación del corredor recién certificado dentro del modelo TuMatch.", whyNot:["Sin contrato firmado no hay cobro de comisión legal","","No existen esperas dentro del modelo oficial vigente","La prueba final del onboarding sustituye toda evaluación adicional"] },
  { q:"En el embudo 30 contactos → 10 conversaciones → 4 reuniones → 1-2 cierres, la mayor caída ocurre entre:", opts:["Reuniones y cierres","Conversaciones y reuniones","Contactos y conversaciones","Cierres y postventa"], correct:2, why:"De 30 contactos solo 10 generan conversación: ahí se filtran motivación y oportunidad real.", whyNot:["La tasa de cierre por reunión es alta en este modelo","La caída existe, pero no es la mayor del embudo","","No es parte del embudo comercial estándar"] },
  { q:"La alianza con un ejecutivo bancario aporta principalmente:", opts:["Comisiones extra pagadas al corredor por derivar","Permisos municipales acelerados para el cliente","Acceso a stock exclusivo de propiedades nuevas","Velocidad y certeza en la cotización del crédito"], correct:3, why:"El cuello de botella en primera vivienda es el crédito; el ejecutivo bancario destraba la viabilidad financiera.", whyNot:["Ningún banco paga comisión al corredor por derivar al cliente","Eso lo gestiona el municipio, no el banco al cliente","No corresponde al rol del banco entregar stock al corredor",""] },
  { q:"En el plan de los primeros 30 días, la acción central recomendada es:", opts:["Activar tu red caliente y tibia con contacto 1 a 1","Esperar leads asignados desde el CRM","Pagar publicidad en redes desde el día uno","Captar diez propiedades en exclusividad"], correct:0, why:"La red propia es la fuente de ROI más alto y rápido al inicio del onboarding como Asociado.", whyNot:["","Es pasivo y lento al inicio del proceso","Es caro y mal calibrado para una etapa inicial","Es una meta poco realista para el primer mes"] },
  { q:"La conversión típica esperada del círculo TIBIO es:", opts:["1 de cada 3 contactos","1 de cada 10 contactos","1 de cada 100 contactos","Cero conversión efectiva"], correct:1, why:"Confianza media: requiere reactivación previa antes de generar oportunidad comercial real.", whyNot:["Es la tasa propia del círculo caliente","","Es la tasa propia del círculo frío","Subestima drásticamente al círculo tibio"] },
  { q:"Una buena alianza con un asesor financiero independiente aporta:", opts:["Stock de propiedades en blanco entregadas directamente","Comisiones extra pagadas por bancos al corredor","Recomendación calificada a clientes inversionistas","Acceso a portales privados ocultos del mercado"], correct:2, why:"El asesor financiero recomienda al corredor a clientes inversionistas que confían en su criterio.", whyNot:["No es función propia del asesor financiero","No hay comisiones cruzadas con bancos por derivar al cliente","","Los portales son parte del soporte oficial TuMatch al corredor"] },
  { q:"En la primera reunión con tu Team Leader, lo que conviene preparar es:", opts:["Un contrato laboral con cláusulas propias","Estados financieros personales del corredor","Una propuesta de comisiones diferenciadas","Mapa de tu red caliente, tibia y fría con cantidades"], correct:3, why:"El TL trabaja contigo en activar la red; necesita ver el universo disponible para priorizar acciones.", whyNot:["El contrato lo entrega TuMatch ya estructurado","No corresponde al ámbito de la primera reunión","Las comisiones no se negocian con el TL",""] },
  { q:"El contacto oficial único de TuMatch para soporte, ventas y dudas es:", opts:["WhatsApp institucional +56 9 3410 7448","Email directo del Team Leader","Teléfono fijo de la oficina central","Formulario de contacto en redes sociales"], correct:0, why:"Es el número único oficial de TuMatch para todo soporte humano y consulta de la red.", whyNot:["","No es el canal oficial único de la marca","No es el canal oficial principal","No es un canal oficial único reconocido"] },
  { q:"Si en 30 días no logras cerrar tu primer negocio, la acción correcta es:", opts:["Renunciar al modelo y dejar TuMatch sin más","Auditar el embudo con el TL: contactos y citas","Cambiar de tipología comercial automáticamente","Reducir tu meta y esperar más tiempo pasivo"], correct:1, why:"Diagnosticar el embudo identifica dónde están las fugas y cómo corregirlas con tu Team Leader.", whyNot:["Es una decisión desproporcionada al diagnóstico inicial","","Cambiar sin diagnosticar no resuelve el problema real","Es pasivo y no aborda la causa raíz del bloqueo"] },
  { q:"La razón principal por la que la red caliente convierte mejor que la fría es:", opts:["Porque tienen mayor capacidad de pago promedio","Porque buscan sistemáticamente precios más bajos","Confianza preexistente que reduce la fricción","Porque son más fáciles de visitar presencialmente"], correct:2, why:"La confianza acorta el ciclo, baja las objeciones y multiplica la generación de referidos.", whyNot:["No es por capacidad de pago, es por la confianza previa","No es por precio, es por la relación previa con el corredor","","La logística no explica la diferencia real de conversión"] },
  { q:"Cuando recibes un referido de un cliente satisfecho, la acción correcta es:", opts:["Esperar a que el referido te escriba primero al corredor","Pagar al cliente referidor de inmediato en efectivo","Derivar al referido directo a otro corredor del equipo","Agradecer, contactar en menos de 24h y reportar"], correct:3, why:"Reaccionar rápido y reportar al referidor mantiene activa la fuente y refuerza la red para futuros casos.", whyNot:["Pierdes el referido por inacción del corredor del caso","No corresponde al modelo TuMatch ni al estándar profesional","Pierdes la operación y debilitas la fuente del referido a futuro",""] },
],
};

/* ============================================================
   BANCO FINAL · 80 preguntas rotativas
   Distribución: 8+10+8+8+10+10+10+10+6 = 80
   Se toman 20 al azar por rendición · 16/20 aprueba (80%)
   La prueba final NO muestra respuestas incorrectas.
   ============================================================ */
const finalBank = [
  /* --- Módulo 1 (8) --- */
  { q:"La certificación como Freelance Asociado se obtiene al:", opts:["Aprobar esta prueba con 80% y firmar contrato","Pagar una suscripción anual a la marca","Ser referido por un corredor activo","Asistir a un seminario mensual presencial"], correct:0, why:"Es la ruta oficial de ingreso al modelo TuMatch.", whyNot:["","TuMatch no cobra suscripciones a sus corredores","Aprobar el onboarding es el gatillo, no la referencia","La asistencia a seminarios no certifica al corredor"] },
  { q:"TuMatch Inmobiliario se describe oficialmente como:", opts:["Constructora nacional con stock propio","Empresa que forma corredores expertos por tipo de cliente","Banco con división inmobiliaria interna","Estudio jurídico inmobiliario corporativo"], correct:1, why:"Es la definición oficial del sitio y la academia.", whyNot:["No desarrolla obra; comercializa con corredores asociados","","No es banco ni opera créditos hipotecarios","Cuenta con respaldo legal pero ese no es su giro principal"] },
  { q:"Las ventas de viviendas nuevas en RM durante 2025 muestran:", opts:["Caída cercana al 10% interanual","Alza explosiva sobre el 40% interanual","Recuperación cercana al 10% interanual","Mercado completamente sin cambios"], correct:2, why:"Rebote interanual desde la base baja 2023-2024 según CChC.", whyNot:["La tendencia 2025 es alcista, no contractiva","Sobreestima ampliamente el rebote real","","Hay variaciones medibles en volumen y stock"] },
  { q:"El ticket típico de Primera Vivienda en RM ronda:", opts:["UF 800 a UF 1.500 cerrado","UF 12.000 a UF 15.000 cerrado","UF 6.000 a UF 8.000 cerrado","UF 2.800 a UF 3.500 cerrado"], correct:3, why:"Rango de referencia del segmento primera vivienda RM.", whyNot:["Queda bajo el ticket real de mercado","Corresponde a segmento premium","Corresponde a segmento medio-alto",""] },
  { q:"El Freelance Asociado, con TL, alcanza una comisión de:", opts:["Hasta 60% por lado del negocio","Hasta 30% por lado del negocio","Hasta 20% por lado del negocio","Hasta 95% por lado del negocio"], correct:0, why:"Tope oficial 2026 con TL asignado al corredor.", whyNot:["","Es el tope del Captador","Es el tope del Referidor","No existe ese tramo en el modelo"] },
  { q:"Para promover a Freelance Autónomo se requiere:", opts:["Pagar una cuota mensual a la marca","Cerrar al menos un primer negocio","Acumular dos años de antigüedad","Aprobar un segundo curso pagado"], correct:1, why:"Gatillo operativo: el primer cierre como Asociado promueve al corredor a Autónomo.", whyNot:["TuMatch no cobra cuotas a sus corredores","","La promoción no se mide por antigüedad","La academia no exige cursos pagados para escalar"] },
  { q:"El Team Leader percibe sobre cada negocio cerrado por su equipo:", opts:["25% por cada negocio cerrado","Un bono trimestral por meta de equipo","7,5% por cada negocio cerrado","Un sueldo base institucional"], correct:2, why:"Estructura oficial 2026 del modelo de comisiones.", whyNot:["Sobreestima el porcentaje real definido","No es un bono periódico definido por equipo","","No existe sueldo base; el TL se remunera por comisión"] },
  { q:"Al aprobar el onboarding, el paso operativo inmediato es:", opts:["Captar antes de la firma del contrato","Rendir una prueba presencial complementaria","Esperar hasta enero del año siguiente","Firmar contrato y conocer al Team Leader"], correct:3, why:"Secuencia oficial de activación del corredor certificado.", whyNot:["Sin contrato firmado no hay derecho a comisión","La prueba final sustituye toda evaluación adicional","TuMatch no programa esperas estacionales",""] },
  /* --- Módulo 2 (10) --- */
  { q:"La pregunta clave para detectar Comprador Primera Vivienda es:", opts:["¿Es tu primera propiedad a tu nombre?","¿Qué presupuesto manejas hoy?","¿Tienes pareja que decida contigo?","¿En qué sector buscas vivir ahora?"], correct:0, why:"Confirma directamente el perfil de primera vivienda.", whyNot:["","Aporta contexto, pero no clasifica el tipo","Es relevante para convocar, no para clasificar","El sector deseado no determina el tipo"] },
  { q:"El gatillo de cierre del Inversionista es:", opts:["Cercanía a colegios de buen nivel","Rentabilidad y plusvalía proyectada","Conexión con transporte público cercano","Precio por metro cuadrado del sector"], correct:1, why:"Decide por números y proyección del activo.", whyNot:["No es un driver del perfil inversionista","","Es secundario frente al retorno","Lo evalúa en función del retorno, no en absoluto"] },
  { q:"El miedo principal del Cliente Vendedor es:", opts:["Pagar comisión al corredor","Atender muchas visitas en su casa","Vender bajo precio o sin gestión activa","No aparecer destacado en portales"], correct:2, why:"Son los dos miedos gemelos del perfil vendedor.", whyNot:["Es preocupación, pero no el miedo central","Es operativa, no decisional","","Es operativo, no decisional"] },
  { q:"La vida útil del lead de arriendo es:", opts:["30 días de validez","6 meses de validez","1 día de validez","7 días de validez"], correct:3, why:"Ventana crítica del lead arrendatario.", whyNot:["Es demasiado tiempo para la urgencia real","Está fuera de la escala real del lead","Es demasiado corto frente al ciclo del segmento",""] },
  { q:"¿Cuál cliente decide más rápido si los números cierran?", opts:["Inversionista experimentado","Comprador Primera Vivienda","Cliente Vendedor sin urgencia","Arrendador con varias propiedades"], correct:0, why:"El inversionista resuelve en pocos días si calzan los retornos.", whyNot:["","Su proceso típico es de 1 a 4 meses","Su velocidad depende de la urgencia personal","La velocidad depende del tipo de operación"] },
  { q:"Las 3 preguntas para calificar al cliente en 2 minutos son:", opts:["Nombre, RUT y dirección particular","Qué busca, si tiene otra propiedad y plazo","Banco con el que opera, renta y profesión","Sector, m² deseados y presupuesto"], correct:1, why:"Clasifican al 95% de los clientes en pocos minutos.", whyNot:["Son datos sensibles fuera de lugar al inicio","","Son datos financieros para etapa posterior","Son detalle de búsqueda, no clasificación"] },
  { q:"Si el cliente pregunta por cap rate, probablemente es:", opts:["Comprador Primera Vivienda","Arrendatario con presupuesto acotado","Inversionista con criterio financiero","Vendedor con expectativas elevadas"], correct:2, why:"Vocabulario técnico propio del perfil inversionista.", whyNot:["No usa ese vocabulario habitualmente","No le interesa la rentabilidad de lo que arrienda","","No es lenguaje habitual del cliente vendedor"] },
  { q:"El error clásico del corredor nuevo es:", opts:["Adaptar el lenguaje al cliente atendido","Agendar siempre reunión presencial","Hacer pocas preguntas durante la calificación","Tratar a todos los clientes con el mismo guion"], correct:3, why:"No adaptarse al perfil rompe la calificación efectiva.", whyNot:["Es la práctica correcta, no el error","No es el problema central de gestión inicial","Es un error distinto al central del corredor nuevo",""] },
  { q:"La velocidad del Cliente Vendedor es:", opts:["Variable según urgencia real del propietario","Siempre rápida sin importar el contexto","Siempre lenta por trámites notariales","Igual a la del arrendatario en general"], correct:0, why:"Depende de la motivación detrás de la venta.", whyNot:["","Sobregeneraliza el comportamiento","Sobregeneraliza el ritmo de la operación","Es muy distinta del ciclo del arriendo"] },
  { q:"El miedo del arrendatario al calificar es:", opts:["Que le suban el canon en la renovación","Ser rechazado por documentos o renta","No conocer en detalle el barrio","No encontrar estacionamiento en el edificio"], correct:1, why:"Miedo central del perfil arrendatario.", whyNot:["Es preocupación posterior a la firma","","Es operativo y no decisional al postular","Es detalle, no miedo decisional"] },
  /* --- Módulo 3 (8) --- */
  { q:"Al abrir conversación con tu círculo caliente, lo mejor es:", opts:["Enviar un catálogo masivo directo","Pedir datos financieros para precalificar","Presentar tu nuevo rol y abrir una pregunta","Ofrecer un descuento por referir"], correct:2, why:"Activa la red sin presión y respeta la relación previa.", whyNot:["Es transaccional y enfría la relación","Pedir datos sensibles al inicio es invasivo","","No existen descuentos por referido en el modelo"] },
  { q:"Con un contacto tibio el primer paso correcto es:", opts:["Pitch directo del servicio comercial","Pedir reunión presencial de inmediato","Enviar un folleto comercial por WhatsApp","Reconectar sin agenda comercial explícita"], correct:3, why:"Respetar la relación previa abre la conversación.", whyNot:["Sabotea la relación y la confianza","Salta etapas necesarias del reencuentro","Es masivo, impersonal y baja la conversión",""] },
  { q:"Frente a un lead frío de portal debes:", opts:["Responder en minutos con valor inicial","Esperar 24 horas para mostrar criterio","Mandar diez propiedades sin filtro","Pedir cédula y renta de inmediato"], correct:0, why:"La velocidad es crítica para tomar el lead.", whyNot:["","El lead se enfría y migra a otro corredor","Diluye el foco y agota al cliente","Pedir datos sensibles antes de tiempo rompe la confianza"] },
  { q:"Toda conversación productiva debe cerrar con:", opts:["Un 'te aviso' genérico al cliente","Una fecha y hora concreta para el siguiente paso","Un envío masivo de información complementaria","Una solicitud de otra referencia inmediata"], correct:1, why:"Regla de oro del cierre de la conversación.", whyNot:["Mata el seguimiento y el momentum","","Diluye la conversación sin avanzar","Salta el cierre de la conversación actual"] },
  { q:"En el primer contacto con un cliente NO debes:", opts:["Presentarte con tu rol y empresa","Preguntar quién toma la decisión","Hablar de comisiones sin que pregunten","Definir un próximo paso concreto"], correct:2, why:"Hablar de dinero sin que el cliente lo pregunte enfría.", whyNot:["Es la apertura correcta del primer contacto","Es calificación útil y necesaria","","Es el cierre recomendado de la conversación"] },
  { q:"Calificar al lead en 5 minutos se hace con:", opts:["Un interrogatorio extenso de datos","Citar antes de hacer cualquier pregunta","Una ficha de datos completa de inicio","Preguntas abiertas clave y dirigidas"], correct:3, why:"Las preguntas abiertas revelan intención sin invadir.", whyNot:["Es invasivo y rompe la confianza inicial","Avanza sin diagnóstico del cliente","Transacciona sin diagnóstico previo",""] },
  { q:"Un WhatsApp profesional en primer contacto debe ser:", opts:["Un texto breve con una sola pregunta","Un audio largo explicativo del servicio","Un flyer publicitario con precios y logos","Un mensaje masivo igual para todos"], correct:0, why:"Mejora la tasa de respuesta y demuestra criterio.", whyNot:["","Es invasivo al inicio del contacto","Es impersonal y publicitario","Los masivos queman contactos"] },
  { q:"El tiempo máximo de respuesta esperado es:", opts:["Hasta 24 horas como máximo","Hasta 30 minutos en jornada laboral","Solo entre 10:00 y 12:00 del día","Cuando el corredor tenga tiempo libre"], correct:1, why:"La velocidad percibida es decisiva en la elección de corredor.", whyNot:["Es demasiado lento para los estándares actuales","","Es una franja muy restringida","No proyecta una imagen profesional"] },
  /* --- Módulo 4 (8) --- */
  { q:"Las 7 etapas maestras de una operación son:", opts:["Llamada, visita, oferta, contrato, firma, entrega, postventa","Contacto, captación, estimación, oferta, escritura, entrega, fidelización","Prospección, reunión, estrategia, acuerdo, ejecución, cierre, postventa","Marketing, leads, calificación, propuesta, negociación, firma, comisión"], correct:2, why:"Marco oficial común a las cuatro tipologías de cliente.", whyNot:["Mezcla canales y acciones puntuales","Es flujo específico de venta, no aplica al marco general","","Son hitos comerciales, no etapas operativas"] },
  { q:"La orden de visita se firma en la etapa de:", opts:["Prospección inicial del cliente","Después de presentada la oferta","Cierre formal del contrato","Acuerdo, antes de mostrar la propiedad"], correct:3, why:"Protege el trabajo del corredor en multicorretaje.", whyNot:["Es prematura: no hay diagnóstico","Es muy tarde: la visita ya generó el match","Pierde su efecto protector si se firma al final",""] },
  { q:"El documento que gatilla tu comisión con el vendedor es:", opts:["Acuerdo de captación firmado y registrado","Orden de visita firmada con el comprador","Anuncio publicado en portales del stack","Foto profesional del set fotográfico"], correct:0, why:"Formaliza el rol del corredor y habilita la comisión.", whyNot:["","Es para representar al comprador, no al vendedor","Publicar no formaliza la comisión por venta","Es insumo de marketing, no documento legal"] },
  { q:"La duración típica de exclusividad es:", opts:["Una semana en cualquier tipo de operación","1 mes para arriendo y 5 meses para venta","Dos años fijos por contrato firmado","Indefinida hasta el cierre del caso"], correct:1, why:"Plazo razonable según tipo de operación.", whyNot:["Es insuficiente para comercializar","","Es abusivo para el cliente y el corredor","No corresponde a la figura formal"] },
  { q:"La oferta y aceptación de oferta formaliza:", opts:["Solo el precio y la fecha de escritura pública","Solo los datos bancarios del comprador final","El acuerdo comprador-vendedor previo a escritura","La tasación municipal oficial obligatoria del bien"], correct:2, why:"Es el compromiso formal entre las partes antes de la escritura.", whyNot:["Es incompleto: el instrumento es más amplio que precio y fecha","Esa información no se incluye en el documento formal","","No corresponde al alcance real del instrumento"] },
  { q:"Si la negociación se estanca, lo correcto es:", opts:["Abandonar el caso y archivar el cliente","Cambiar la oferta presentada al cliente","Bajar directamente el precio publicado","Activar al Team Leader para destrabar"], correct:3, why:"El TL aporta visión y tiene incentivo directo en cerrar.", whyNot:["Pierdes el caso y la inversión hecha","No ataca la raíz real del estancamiento","Es atajo que daña margen y profesionalismo",""] },
  { q:"Sin documentos firmados y registrados:", opts:["La comisión no se paga al corredor","La operación sigue avanzando sin riesgos","El cliente pierde su dinero invertido","Se paga la mitad de la comisión"], correct:0, why:"Regla de trazabilidad: sin firma formal no hay derecho cierto.", whyNot:["","No es así: hay riesgo legal y comercial relevante","No corresponde como consecuencia para el cliente","No existe esa figura en el modelo"] },
  { q:"La postventa sirve principalmente para:", opts:["Renegociar la comisión ya pactada","Conseguir referidos y recurrencia futura","Acelerar la firma de la escritura","Revisar fallos del producto recibido"], correct:1, why:"Cliente satisfecho deriva 1-2 nuevos negocios en promedio.", whyNot:["No se renegocia la comisión cobrada","","La escritura ya ocurrió en el cierre","No corresponde al rol del corredor en usado"] },
  /* --- Módulo 5 (10) --- */
  { q:"El proceso típico de Primera Vivienda dura:", opts:["Una sola semana de gestión","Aproximadamente 12 meses","De 1 a 4 meses calendario","Cerca de 24 meses"], correct:2, why:"Ventana del segmento con crédito hipotecario.", whyNot:["Es irreal para el segmento","Es demasiado largo para el ciclo estándar","","Está fuera de rango razonable"] },
  { q:"El miedo principal del Primera Vivienda es:", opts:["Los vecinos del edificio elegido","La pintura de las áreas comunes","La logística de la mudanza familiar","Endeudarse mal con el dividendo"], correct:3, why:"Compromiso financiero grande por primera vez.", whyNot:["Es preocupación menor frente al crédito","Es detalle estético, no central","Es operativo y no decisional",""] },
  { q:"La decisión del Primera Vivienda es:", opts:["Emocional con influencia familiar","Fría y exclusivamente racional","Guiada por el precio al m² únicamente","Tomada al azar del día disponible"], correct:0, why:"Carga emocional alta y decisión grupal.", whyNot:["","No calza con el perfil emocional","Muy técnico para el perfil","No describe ningún proceso de decisión real"] },
  { q:"La objeción del dividendo se maneja con:", opts:["Ofrecer un descuento aplicable sobre el dividendo","Simulador hipotecario y comparar con arriendo","Minimizar el miedo expresado por el cliente","Cambiarlo a otra propiedad de menor valor"], correct:1, why:"Datos disuelven el miedo abstracto del cliente.", whyNot:["No existe descuento aplicable al dividendo bancario","","Invalida la emoción del cliente y rompe la relación","Evade el punto sin resolver con datos reales"] },
  { q:"Los subsidios MINVU principales para Primera Vivienda son:", opts:["Leasing habitacional bancario sin pie","DFL2 como beneficio tributario al cliente","DS1 y DS49 según tramo de ahorro","Subsidio rural exclusivo del MINAGRI"], correct:2, why:"Instrumentos MINVU del segmento primera vivienda.", whyNot:["Es producto bancario, no es subsidio MINVU","Es un beneficio tributario, no un subsidio","","Corresponde a otro segmento ajeno al perfil"] },
  { q:"Si el cliente dice 'esperaré que bajen los precios':", opts:["Aceptar y cerrar el caso por imposible","Subir tu comisión para compensar","Insistir sin entregar contexto adicional","Mostrar datos históricos del sector"], correct:3, why:"Datos locales desarman la postura especulativa.", whyNot:["Pierdes al cliente sin entregar valor","No tiene relación con la objeción","Daña la relación y empuja a otro corredor",""] },
  { q:"El primer objetivo con un Primera Vivienda es:", opts:["Entender búsqueda, crédito y presupuesto","Cerrar la venta el mismo día","Mostrar al menos diez propiedades","Pedir cédula y renta de inmediato"], correct:0, why:"Diagnóstico antes de stock para cualquier acción.", whyNot:["","Es prematuro en el ciclo del segmento","Dispara stock sin filtro","Pedir datos sensibles muy pronto rompe la confianza"] },
  { q:"La herramienta clave en reunión con Primera Vivienda es:", opts:["Análisis de Rentabilidad Inmobiliaria","Simulador hipotecario con escenarios","Informe de Análisis de Estimación de Precio","Catálogo institucional de propiedades"], correct:1, why:"Proyecta dividendo real y evalúa viabilidad.", whyNot:["Corresponde al perfil inversionista","","Corresponde al cliente vendedor en captación","No es análisis financiero del cliente"] },
  { q:"Si la pareja o familia no está convencida:", opts:["Presionar solo al cliente principal","Enviar folleto comercial por correo","Reunión conjunta con todos los decisores","Cambiar la propiedad ofertada al cliente"], correct:2, why:"Decisión grupal exige proceso grupal.", whyNot:["Saboteas al influenciador y rompes el cierre","Pierdes momentum sin resolver la objeción","","No resuelve la objeción de fondo"] },
  { q:"Tras una reunión Primera Vivienda debes:", opts:["No hacer nada hasta que el cliente vuelva","Enviar un flyer masivo a la base","Solo guardar el teléfono del cliente","Anotar la conversación y agendar próximo paso"], correct:3, why:"Proceso largo exige trazabilidad detallada.", whyNot:["El lead se enfría rápidamente","No corresponde con la profundidad del perfil","Pierdes historial útil del diagnóstico",""] },
  /* --- Módulo 6 (10) --- */
  { q:"La fórmula del cap rate bruto anual es:", opts:["(arriendo anual / valor de la propiedad) × 100","(arriendo mensual / valor de la propiedad)","(valor de la propiedad / arriendo anual) × 100","(pie pagado / valor total) × 100"], correct:0, why:"Definición estándar del indicador.", whyNot:["","Le falta el factor doce y la base anual","Está invertida; no es la fórmula del cap rate","Es ratio de financiamiento, no rentabilidad"] },
  { q:"El cap rate bruto residencial RM 2025 oscila en:", opts:["1 a 2% anual sobre valor","4,8 a 7,2% anual sobre valor","10 a 15% anual sobre valor","Cercano al 25% anual sobre valor"], correct:1, why:"Rango oficial del segmento residencial RM.", whyNot:["Subestima ampliamente el rango residencial","","Es irreal en residencial RM","Está completamente fuera del rango"] },
  { q:"El cap rate neto efectivo en Santiago ronda:", opts:["1 a 2% anual sobre valor","6 a 8% anual sobre valor","3 a 4,5% anual sobre valor","Sobre el 15% anual sobre valor"], correct:2, why:"Tras impuestos, contribuciones, vacancia y gastos.", whyNot:["Queda bajo el estándar residencial RM","Es nivel de cap rate bruto, no neto","","Es rango imposible en residencial RM"] },
  { q:"El Inversionista decide rápido cuando:", opts:["La propiedad tiene buena vista al cerro","El barrio es residencial clásico","Hay pocos competidores buscando el activo","Los números cierran su meta de retorno"], correct:3, why:"Decisión 100% racional vinculada al retorno.", whyNot:["Es secundario para este perfil","Puede no aplicar como criterio decisional","Influye, pero no decide la compra",""] },
  { q:"El segmento dominante en RM 2025 es:", opts:["Departamentos de 1 a 2 dormitorios","Casas de cuatro dormitorios","Parcelas de agrado periféricas","Locales comerciales en sectores prime"], correct:0, why:"77% de transacciones residenciales del periodo.", whyNot:["","Es minoritario en RM","Es vertical distinto al residencial urbano","Es vertical comercial, no residencial"] },
  { q:"Ante 'está caro, esperaré', la respuesta correcta es:", opts:["Aceptar y esperar con el cliente","Mostrar el costo real de esperar","Bajar el precio publicado por él","Buscar otro barrio más económico"], correct:1, why:"El costo de esperar es medible y argumentable.", whyNot:["Pierdes la operación y el tiempo invertido","","No manejas el precio publicado","Evade el punto sin abordar la objeción"] },
  { q:"La comparación con fondos mutuos se neutraliza con:", opts:["Decir que los fondos son riesgosos","Mencionar bajo retorno histórico de fondos","Tangibilidad, flujo y apalancamiento","Regalar un análisis financiero gratis"], correct:2, why:"Diferenciales estructurales del inmobiliario.", whyNot:["Argumento poco profesional y débil","Afirmación débil sin contexto técnico","","No resuelve la objeción del cliente"] },
  { q:"Si el Inversionista no cierra en 2 semanas:", opts:["Sacarlo del embudo y olvidarlo","Ofrecer un descuento sobre la marcha","Llamar varias veces durante el día","Auditar qué falló y aprender del caso"], correct:3, why:"Aprender del caso mejora cierres futuros.", whyNot:["Se pierde el aprendizaje del caso","No eres dueño del precio","Es invasivo y contraproducente",""] },
  { q:"La plusvalía se proyecta a:", opts:["Entre 5 y 10 años desde la compra","Un año desde la compra","Solo dos semanas desde la compra","Plazo indefinido sin métrica"], correct:0, why:"Horizonte estándar del inversor inmobiliario.", whyNot:["","Es plazo demasiado corto para la métrica","Está completamente fuera del marco de análisis","Sin utilidad analítica como referencia"] },
  { q:"Arriendo $1M en propiedad de $200M da cap rate de:", opts:["3% anual sobre valor","6% anual sobre valor","12% anual sobre valor","0,5% anual sobre valor"], correct:1, why:"(1.000.000 × 12) / 200.000.000 × 100 = 6%.", whyNot:["Es cálculo erróneo a la baja","","Es el doble del valor correcto","Es error por omitir el factor doce"] },
  /* --- Módulo 7 (10) --- */
  { q:"El embudo de captación TuMatch contempla:", opts:["3 etapas operativas","10 etapas operativas","7 etapas operativas","No está formalmente definido"], correct:2, why:"Etapas oficiales del embudo de captación.", whyNot:["Faltan etapas relevantes del proceso","Sobreestima la cantidad real de etapas","","Está oficialmente definido en el modelo"] },
  { q:"La etapa PREVIA a 'Acuerdo' es:", opts:["Contacto inicial con el dueño","Vendida y escriturada formalmente","Publicada en portales del stack","Estimación de Precio con AEP"], correct:3, why:"Orden oficial del embudo: estimación antecede al acuerdo.", whyNot:["Está demasiado al inicio del embudo","Es la etapa final del embudo","Es etapa posterior al acuerdo firmado",""] },
  { q:"El AEP con comparables se hace:", opts:["Antes de la reunión, con datos preparados","Durante la reunión a ojo y sin datos","Nunca, porque el dueño define el precio","Solo si el cliente lo solicita por escrito"], correct:0, why:"Llegas con datos defendibles y autoridad técnica.", whyNot:["","Es poco profesional y baja autoridad","Es mala práctica y desordena el proceso","Es obligatorio en captación, no opcional"] },
  { q:"La comisión estándar de venta en Chile es:", opts:["1% total al vendedor sin IVA","2% + IVA a cada parte de la operación","10% al vendedor sobre el cierre","Un monto fijo por operación cerrada"], correct:1, why:"Estándar de mercado por cada parte representada.", whyNot:["Está bajo el estándar y sin IVA","","Sobreestima la comisión de mercado","El mercado cobra proporcional al valor"] },
  { q:"La absorción +UF 4.000 en Santiago es cerca de:", opts:["3 meses promedio","60 meses promedio","15 meses promedio","Más de 100 meses promedio"], correct:2, why:"Dato de referencia CChC 2024.", whyNot:["Es demasiado optimista para el ticket","Sobreestima significativamente el plazo","","Está fuera de cualquier rango realista"] },
  { q:"Ante 'vale más de lo que dices':", opts:["Darle la razón y subir el precio","Abandonar el caso silenciosamente","Subir el precio para evitar conflicto","Mostrar comparables vendidos del sector"], correct:3, why:"Comparables reales disuelven el valor emocional.", whyNot:["Lo dejas sin vender y quemas el activo","Pierdes la oportunidad sin entregar valor","Quemas la propiedad fuera de mercado",""] },
  { q:"Un acuerdo sin exclusividad permite:", opts:["Multicorretaje con reglas específicas","Nada relevante para el corredor","Solo un corredor activo en el caso","Que el dueño publique solo por su cuenta"], correct:0, why:"Es figura válida para propietarios renuentes a exclusividad.", whyNot:["","Sí es figura válida en el mercado","Contradice la figura del acuerdo abierto","Sigue habiendo corredor representando al dueño"] },
  { q:"El derecho a comisión por captación se gatilla con:", opts:["Una promesa verbal del dueño","Documento firmado y registrado","Un correo electrónico de confirmación","Una llamada telefónica grabada"], correct:1, why:"Sin formalización escrita no hay derecho cierto.", whyNot:["No tiene valor probatorio formal","","Es canal informal sin fuerza jurídica","No sustituye la firma formal del acuerdo"] },
  { q:"Los portales oficiales TuMatch incluyen:", opts:["Solo MercadoLibre y Yapo dentro del stack autorizado","Solo Portal Inmobiliario para los avisos del corredor","Portal Inmobiliario, MercadoLibre, Proppit, Enlace, Yapo y TuMatch","Cualquier portal que elija libremente el corredor"], correct:2, why:"Cobertura oficial del stack multicanal.", whyNot:["Es incompleto: faltan portales del stack oficial","Un solo portal limita el alcance comercial","","El stack es parte del soporte oficial al corredor"] },
  { q:"Al cierre del caso de venta debes:", opts:["No hacer nada hasta el siguiente caso","Archivar y olvidar el caso atendido","Comprometer una baja de precio futura","Registrar comisión y documentos en CRM"], correct:3, why:"Trazabilidad del cierre y la comisión cobrada.", whyNot:["Pierdes la comisión y la auditabilidad","Sin registro estructurado no hay orden ni postventa","No corresponde como compromiso del corredor",""] },
  /* --- Módulo 8 (10) --- */
  { q:"La vida útil del lead arriendo es:", opts:["Siete días corridos máximo","Un mes calendario completo","Un solo día corrido","Aproximadamente seis meses"], correct:0, why:"Urgencia del segmento arrendatario.", whyNot:["","Es demasiado tiempo para la urgencia","Es demasiado corto frente al ciclo real","Está fuera de la escala real del lead"] },
  { q:"La comisión arriendo 2026 se cobra:", opts:["Solo al arrendatario al cierre","50% + IVA a cada parte por separado","10% a ambos en una sola boleta","Un mes completo cobrado al dueño"], correct:1, why:"Ambas partes con boleta o factura por separado.", whyNot:["Perderías el lado arrendador del cobro","","No es la estructura oficial","No es el modelo oficial de cobro"] },
  { q:"La reserva no reembolsable del arrendatario es:", opts:["$10.000 fijos al cierre","Un mes completo de canon","$100.000 imputables a comisión","Un sueldo mínimo del cliente"], correct:2, why:"Monto oficial imputable a comisión.", whyNot:["Es muy bajo para funcionar como compromiso","No es la política oficial del modelo","","No aplica esa figura en el modelo"] },
  { q:"El ratio arriendo/ingreso sugerido es:", opts:["10 a 20% del ingreso líquido","Sin tope formal establecido","50 a 60% del ingreso líquido","30 a 35% del ingreso líquido"], correct:3, why:"Techo saludable del perfil arrendatario.", whyNot:["Es irrealmente bajo y poco competitivo","Sin ratio no hay criterio profesional","Es financieramente arriesgado",""] },
  { q:"Los documentos del arrendatario dependiente son:", opts:["Cédula, liquidaciones, AFP y referencias","Solo cédula de identidad vigente del cliente","Solo número de teléfono y correo personal","Un correo con foto del cliente y su pareja"], correct:0, why:"Carpeta básica del perfil estrella ★.", whyNot:["","Es insuficiente para acreditar el perfil real","No acredita ingresos, AFP ni estabilidad laboral","No constituye evidencia válida de los ingresos"] },
  { q:"El protocolo de canal único en arriendo significa:", opts:["Las partes se contactan por WhatsApp directo","Las partes no se contactan; todo pasa por el corredor","Las llamadas se hacen solo en altavoz","El corredor comparte los números entre partes"], correct:1, why:"Toda coordinación pasa por el corredor; las partes no se contactan entre sí.", whyNot:["Es contrario al protocolo de canal único","","No corresponde al protocolo descrito","Es exactamente lo que el protocolo busca evitar"] },
  { q:"La estrella ★ del arrendatario indica:", opts:["Que pagó la cuota del corredor","Que tiene aval familiar firmado","Documentos completos y validados","Que es amigo personal del corredor"], correct:2, why:"Marcador de calidad documental.", whyNot:["No existe esa cuota dentro del modelo","El aval es complemento, no la estrella","","No tiene relación con el filtro profesional"] },
  { q:"Si el arrendatario no responde en 48 horas:", opts:["Esperar al menos una semana más","Llamar cada dos horas hasta lograrlo","Ofrecer una rebaja de canon","Marcarlo como perdido y seguir"], correct:3, why:"Urgencia del segmento dicta el corte.", whyNot:["Pierdes tiempo útil de cierre","Es invasivo, ineficaz y daña la relación","No eres el dueño del canon",""] },
  { q:"El arrendatario independiente aporta como ingreso:", opts:["F22 SII y cartolas bancarias del periodo","Liquidaciones de sueldo del último año","Una carta firmada por su madre","Su currículum vitae laboral actualizado"], correct:0, why:"Reemplazan liquidaciones para el independiente.", whyNot:["","No tiene liquidaciones; es independiente","No sirve como respaldo formal","No acredita ingresos reales"] },
  { q:"Ante 'prefiero hacerlo solo' del arrendador:", opts:["Aceptar y cerrar el caso sin más argumentos","Explicar el valor del filtro previo de postulantes","Ofrecer una rebaja de comisión al cliente","Publicar igual sin la autorización del dueño actual"], correct:1, why:"El diferencial del corredor es filtrar perfil, ingresos y documentos.", whyNot:["Pierdes el caso sin agregar valor profesional","","Compite por precio en lugar de competir por servicio","Rompe la relación y compromete responsabilidad legal"] },
  /* --- Módulo 9 (6) --- */
  { q:"Los círculos de red se clasifican en:", opts:["Tipo A, tipo B y tipo C","Rojo, amarillo y verde","Caliente, tibio y frío","Alto, medio y bajo nivel"], correct:2, why:"Taxonomía oficial TuMatch.", whyNot:["Es genérico y no corresponde al modelo","Es otro marco conceptual ajeno al modelo","","Es genérico y no corresponde a la taxonomía"] },
  { q:"El círculo CALIENTE contiene principalmente:", opts:["Desconocidos provenientes de portales","Leads pagados desde campañas online","Contactos indirectos por terceros","Familia y amigos íntimos del corredor"], correct:3, why:"Máxima confianza preexistente.", whyNot:["Eso describe el círculo frío","Eso describe el círculo frío con segmentación pagada","Eso describe el círculo tibio",""] },
  { q:"El embudo de 30 contactos típicamente produce:", opts:["1 a 2 negocios cerrados","Cero negocios cerrados","30 negocios cerrados","Más de 15 negocios cerrados"], correct:0, why:"Benchmark oficial del embudo TuMatch.", whyNot:["","Subestima el resultado de la metodología","Es irreal: ninguna red convierte al 100%","Está fuera del rango realista"] },
  { q:"La primera acción al activar tu red es:", opts:["Spam masivo a toda la base","Contacto 1 a 1 al círculo caliente","Publicidad pagada al instante","Solo esperar referidos espontáneos"], correct:1, why:"ROI inicial más alto con menos esfuerzo.", whyNot:["Quema la lista y reduce conversión","","Es caro y mal calibrado al inicio","Es pasivo y no genera el primer movimiento"] },
  { q:"El contacto oficial tras aprobar es:", opts:["El email del corredor dueño del caso","Mensajes por Facebook Messenger","WhatsApp +56 9 3410 7448","Carta enviada por correo postal"], correct:2, why:"Canal oficial único de soporte humano.", whyNot:["No es el canal oficial de la marca","No es un canal oficial autorizado","","No es un canal oficial autorizado"] },
  { q:"El flujo oficial tras aprobar es:", opts:["Cobrar comisión de inmediato sin más pasos","Rendir una prueba presencial complementaria extra","Esperar al menos seis meses adicionales calendario","Certificado, WhatsApp, contrato y reunión TL"], correct:3, why:"Secuencia oficial de activación del corredor certificado.", whyNot:["Sin contrato firmado no hay cobro de comisión","La prueba final sustituye toda evaluación adicional","No existen esperas dentro del modelo oficial vigente",""] },
];

/* ============================================================
   APP CORE
   ============================================================ */
const App = (() => {
  const TOTAL_MODULES = 9;
  const STORAGE_KEY = 'tumatch_taller_freelance_onboarding_v3';
  const QUESTIONS_PER_MODULE = 5;
  const FINAL_QUESTIONS = 20;
  const FINAL_PASS_CORRECT = 16; // 80%
  const MAX_WRONGS = 3;
  const LOCK_MINUTES = 5;
  const FINAL_LOCK_MINUTES = 5;

  const MODULE_NAMES = [
    'Inicio',
    'Bienvenida · TuMatch y mentalidad freelance',
    'Los 4 tipos de cliente · identificar en 2 min',
    'Prospección y primer contacto',
    'Proceso de una operación · de punta a punta',
    'Tipo 1 · Comprador Primera Vivienda',
    'Tipo 2 · Inversionista',
    'Tipo 3 · Cliente Vendedor',
    'Tipo 4 · Operación Arriendo',
    'Tu red · 30 contactos y carrera',
    'Prueba Final · 20/80 (80% aprueba)'
  ];

  const state = {
    current: 0,
    unlocked: 1,
    completedModules: [],
    finalPassed: false,
    locks: {},
    wrongCount: {},
    finalLockUntil: 0,
    finalAttempts: 0,
    finalBest: 0,
    quizProgress: {},
    lastUpdated: 0
  };

  let isAdminMode = false;

  function load() {
    try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) Object.assign(state, JSON.parse(raw)); } catch(e) {}
    if (!state.quizProgress) state.quizProgress = {};
  }
  function save() {
    try { state.lastUpdated = Date.now(); localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
  }
  function shuffle(arr) {
    const a = [...arr];
    for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }
  function pickQuestions(pool, n) { return shuffle(pool).slice(0, n).map(shuffleOpts); }
  function shuffleOpts(q) {
    const ixs = shuffle(q.opts.map((_, i) => i));
    const newOpts = ixs.map(i => q.opts[i]);
    const newWhyNot = q.whyNot ? ixs.map(i => q.whyNot[i] || '') : null;
    const newCorrect = ixs.indexOf(q.correct);
    return Object.assign({}, q, { opts: newOpts, correct: newCorrect, whyNot: newWhyNot, __origCorrect: q.correct });
  }
  // randomMiss eliminado: sin mensajes livianos en los errores.

  function show(moduleId) {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    const el = document.getElementById(moduleId);
    if (el) { el.classList.add('active'); window.scrollTo({top:0, behavior:'smooth'}); }
  }

  function effectiveUnlocked() {
    return isAdminMode ? TOTAL_MODULES + 2 : state.unlocked;
  }

  function goToModule(n) {
    if (n === 0) { show('mod-0'); state.current = 0; save(); renderNav(); updateProgress(); return; }
    if (n >= 1 && n <= TOTAL_MODULES) {
      if (n > effectiveUnlocked()) { showLockedWarning(n); return; }
      state.current = n; show('mod-' + n); mountModule(n);
      save(); renderNav(); updateProgress(); return;
    }
    if (n === TOTAL_MODULES + 1) {
      if (!isAdminMode && state.unlocked <= TOTAL_MODULES) { showLockedWarning(n); return; }
      state.current = n; show('mod-final'); mountFinalTest();
      save(); renderNav(); updateProgress(); return;
    }
    if (n === TOTAL_MODULES + 2) {
      state.current = n; show('mod-done'); mountConclusion();
      save(); renderNav(); updateProgress();
    }
  }

  function showLockedWarning(n) {
    alert('Módulo bloqueado 🔒\n\nDebes completar los módulos anteriores para desbloquear "' + MODULE_NAMES[n] + '".');
  }
  function startModule(n) { goToModule(n); }

  function restart() {
    if (!confirm('¿Seguro que quieres reiniciar la certificación desde cero? Perderás todo el progreso guardado.')) return;
    state.current = 0; state.unlocked = 1; state.completedModules = [];
    state.finalPassed = false; state.locks = {}; state.wrongCount = {};
    state.finalLockUntil = 0; state.finalAttempts = 0; state.finalBest = 0;
    state.quizProgress = {};
    save(); goToModule(0);
  }

  function renderNav() {
    const nav = document.getElementById('modnavInner');
    if (!nav) return;
    const items = [
      {n:0, label:'Inicio'},
      ...Array.from({length:TOTAL_MODULES}, (_,i)=>({n:i+1, label:'M'+(i+1)})),
      {n:TOTAL_MODULES+1, label:'Prueba Final'},
    ];
    const unlocked = effectiveUnlocked();
    nav.innerHTML = items.map(it => {
      let cls = 'modnav-btn';
      if (state.current === it.n) cls += ' active';
      if (it.n >= 1 && it.n <= TOTAL_MODULES) {
        if (state.completedModules.includes(it.n)) cls += ' done';
        else if (it.n > unlocked) cls += ' locked';
      }
      if (it.n === TOTAL_MODULES+1 && unlocked <= TOTAL_MODULES) cls += ' locked';
      if (it.n === TOTAL_MODULES+1 && state.finalPassed) cls += ' done';
      return '<button class="' + cls + '" onclick="App.goToModule(' + it.n + ')"><span class="mod-n">' +
        (it.n===0?'':it.n===TOTAL_MODULES+1?'★':('0'+it.n).slice(-2)) + '</span>' + it.label + '</button>';
    }).join('');
  }

  function updateProgress() {
    // 10% por cada módulo completado (9 módulos = 90%) + 10% por prueba final aprobada = 100%
    const moduleProgress = state.completedModules.length * 10;
    const finalProgress = state.finalPassed ? 10 : 0;
    const pct = Math.min(100, moduleProgress + finalProgress);
    const fill = document.getElementById('progressFill');
    const num = document.getElementById('progressNum');
    if (fill) fill.style.width = pct + '%';
    if (num) num.textContent = pct + '%';
  }

  function mountModule(n) { renderQuizGate(n); }

  /* ---------- QUIZ GATE ---------- */
  const quizState = {};

  function persistQuizProgress(moduleN) {
    const qs = quizState[moduleN];
    if (!qs) { if (state.quizProgress) delete state.quizProgress[moduleN]; save(); return; }
    state.quizProgress = state.quizProgress || {};
    state.quizProgress[moduleN] = {
      current: qs.current.map(q => ({
        q: q.q, opts: q.opts, correct: q.correct, why: q.why, whyNot: q.whyNot || null
      })),
      index: qs.index,
      correct: qs.correct,
      wrongs: qs.wrongs
    };
    save();
  }

  function restoreQuizProgress(moduleN) {
    if (!state.quizProgress || !state.quizProgress[moduleN]) return null;
    const saved = state.quizProgress[moduleN];
    if (!saved.current || !saved.current.length) return null;
    return { current: saved.current, index: saved.index || 0, correct: saved.correct || 0, wrongs: saved.wrongs || 0, answered: false };
  }

  function isLocked(moduleN) { const until = state.locks[moduleN]; return until && Date.now() < until; }
  function lockRemainingMs(moduleN) { return Math.max(0, (state.locks[moduleN] || 0) - Date.now()); }

  function renderQuizGate(moduleN) {
    const container = document.getElementById('quiz-' + moduleN);
    if (!container) return;
    if (state.completedModules.includes(moduleN)) { container.innerHTML = renderQuizDoneInlineHTML(moduleN); return; }
    if (isLocked(moduleN)) { renderLockedState(moduleN); return; }
    if (!quizState[moduleN]) {
      const restored = restoreQuizProgress(moduleN);
      if (restored) {
        quizState[moduleN] = restored;
      } else {
        const pool = quizBank[moduleN];
        quizState[moduleN] = { current: pickQuestions(pool, QUESTIONS_PER_MODULE), index: 0, correct: 0, wrongs: 0, answered: false };
        persistQuizProgress(moduleN);
      }
    }
    renderCurrentQuestion(moduleN);
  }

  function renderLockedState(moduleN) {
    const container = document.getElementById('quiz-' + moduleN);
    const remMs = lockRemainingMs(moduleN);
    const remMin = Math.ceil(remMs / 60000);
    container.innerHTML =
      '<div class="quiz-locked">' +
        '<div class="quiz-locked-icon">🔒</div>' +
        '<div class="quiz-locked-title">Bloqueo temporal por respuestas incorrectas</div>' +
        '<div class="quiz-locked-desc">Se han acumulado ' + MAX_WRONGS + ' respuestas incorrectas en este módulo. El sistema aplica una pausa de <strong id="lock-timer-' + moduleN + '">' + remMin + ' min</strong> destinada a reforzar el aprendizaje. Te recomendamos revisar el material del módulo antes de retomar.</div>' +
        '<button class="btn btn-ghost" onclick="App.checkLock(' + moduleN + ')">Verificar disponibilidad</button>' +
      '</div>';
    const id = 'lock-timer-' + moduleN;
    const tick = () => {
      const ms = lockRemainingMs(moduleN);
      const el = document.getElementById(id);
      if (!el) return;
      if (ms <= 0) { renderQuizGate(moduleN); return; }
      const s = Math.ceil(ms / 1000);
      const mm = Math.floor(s / 60);
      const ss = (s % 60).toString().padStart(2,'0');
      el.textContent = mm + ':' + ss;
      setTimeout(tick, 1000);
    };
    setTimeout(tick, 1000);
  }

  function checkLock(moduleN) {
    if (!isLocked(moduleN)) {
      state.wrongCount[moduleN] = 0;
      delete state.locks[moduleN];
      delete quizState[moduleN];
      save(); renderQuizGate(moduleN);
    } else {
      const ms = lockRemainingMs(moduleN);
      const mm = Math.floor(ms/60000);
      const ss = Math.floor((ms%60000)/1000).toString().padStart(2,'0');
      alert('El bloqueo sigue activo. Tiempo restante: ' + mm + ':' + ss + '.');
    }
  }

  function renderCurrentQuestion(moduleN) {
    const container = document.getElementById('quiz-' + moduleN);
    const qs = quizState[moduleN];
    const q = qs.current[qs.index];
    const mn = MODULE_NAMES[moduleN];
    const lifeLeft = Math.max(0, MAX_WRONGS - (state.wrongCount[moduleN] || 0));
    const dots = Array.from({length:QUESTIONS_PER_MODULE}, (_, i) => {
      let c = 'qp-dot'; if (i < qs.index) c += ' done'; else if (i === qs.index) c += ' current';
      return '<div class="' + c + '"></div>';
    }).join('');
    const opts = q.opts.map((opt, i) => (
      '<button class="quiz-opt" onclick="App.answerQuestion(' + moduleN + ', ' + i + ')" data-i="' + i + '">' +
        '<span class="opt-letter">' + String.fromCharCode(65+i) + '</span><span>' + opt + '</span>' +
      '</button>'
    )).join('');

    container.innerHTML =
      '<div class="quiz-gate-head">' +
        '<div class="quiz-icon">🎯</div>' +
        '<div><div class="quiz-title">Quiz: ' + mn + '</div>' +
        '<div class="quiz-sublabel">5 preguntas · desbloquea el siguiente módulo</div></div>' +
      '</div>' +
      '<div class="quiz-sub">Responde correctamente las 5 preguntas para avanzar. <strong>Tras ' + MAX_WRONGS + ' errores acumulados se bloquea ' + LOCK_MINUTES + ' minutos.</strong></div>' +
      '<div class="quiz-progress-wrap">' +
        '<div class="quiz-progress">' + dots + '</div>' +
        '<div class="quiz-progress-label">' + qs.correct + '/' + QUESTIONS_PER_MODULE + ' correctas</div>' +
        '<div class="quiz-life-label">Intentos · ' + lifeLeft + '/' + MAX_WRONGS + '</div>' +
      '</div>' +
      '<div class="quiz-q">' +
        '<div class="quiz-q-label">Pregunta ' + (qs.index + 1) + ' de ' + QUESTIONS_PER_MODULE + '</div>' +
        '<div class="quiz-q-text">' + q.q + '</div>' +
        '<div class="quiz-opts">' + opts + '</div>' +
        '<div class="quiz-feedback" id="feedback-' + moduleN + '"></div>' +
        '<div class="quiz-next" id="next-' + moduleN + '"></div>' +
      '</div>';
  }

  function buildWrongFeedbackHTML(q, optIdx) {
    const otherRows = q.opts.map((opt, i) => {
      if (i === q.correct) return '';
      const wn = (q.whyNot && q.whyNot[i]) ? q.whyNot[i] : '';
      return '<div class="fb-otherwrong"><span class="fb-x">✗</span><strong>' + String.fromCharCode(65+i) + '.</strong> ' + opt + (wn ? ' <em>— ' + wn + '</em>' : '') + '</div>';
    }).join('');
    return (
      '<div class="quiz-feedback-title">✗ Respuesta incorrecta</div>' +
      '<div class="quiz-feedback-body">' +
        '<div class="fb-block fb-block-wrong">' +
          '<div class="fb-label">Tu respuesta:</div>' +
          '<div class="fb-text"><span class="fb-x">✗</span> ' + String.fromCharCode(65+optIdx) + '. ' + q.opts[optIdx] + '</div>' +
        '</div>' +
        '<div class="fb-block fb-block-right">' +
          '<div class="fb-label">Respuesta correcta:</div>' +
          '<div class="fb-text"><span class="fb-check">✓</span> ' + String.fromCharCode(65+q.correct) + '. ' + q.opts[q.correct] + '</div>' +
        '</div>' +
        '<div class="fb-why-label">¿Por qué es la correcta?</div>' +
        '<div class="fb-why">' + q.why + '</div>' +
        (otherRows ? '<div class="fb-why-label">¿Por qué no las otras?</div><div class="fb-others">' + otherRows + '</div>' : '') +
      '</div>'
    );
  }

  function answerQuestion(moduleN, optIdx) {
    const qs = quizState[moduleN];
    if (qs.answered) return;
    const q = qs.current[qs.index];
    const isCorrect = optIdx === q.correct;
    qs.answered = true;

    const container = document.getElementById('quiz-' + moduleN);
    const btns = container.querySelectorAll('.quiz-opt');
    btns.forEach((b, i) => {
      b.classList.add('disabled');
      if (i === q.correct) b.classList.add('correct');
      if (i === optIdx && !isCorrect) b.classList.add('wrong');
    });
    const fb = document.getElementById('feedback-' + moduleN);
    if (isCorrect) {
      qs.correct++; updateProgress();
      fb.className = 'quiz-feedback correct show';
      fb.innerHTML = '<div class="quiz-feedback-title">✓ Respuesta correcta</div><div class="quiz-feedback-body"><div class="fb-why-label">Por qué es la correcta:</div><div class="fb-why">' + q.why + '</div></div>';
      persistQuizProgress(moduleN);
    } else {
      qs.wrongs++;
      state.wrongCount[moduleN] = (state.wrongCount[moduleN] || 0) + 1;
      save();
      fb.className = 'quiz-feedback wrong show';
      fb.innerHTML = buildWrongFeedbackHTML(q, optIdx);
      if (state.wrongCount[moduleN] >= MAX_WRONGS) {
        state.locks[moduleN] = Date.now() + LOCK_MINUTES * 60 * 1000;
        delete quizState[moduleN];
        if (state.quizProgress) delete state.quizProgress[moduleN];
        save();
        setTimeout(() => renderLockedState(moduleN), 2500);
        return;
      }
    }
    const nx = document.getElementById('next-' + moduleN);
    const isLast = qs.index === QUESTIONS_PER_MODULE - 1;
    if (isCorrect) {
      nx.innerHTML = isLast
        ? '<button class="btn btn-success" onclick="App.finishQuiz(' + moduleN + ')">Finalizar quiz →</button>'
        : '<button class="btn btn-primary" onclick="App.nextQuestion(' + moduleN + ')">Siguiente pregunta →</button>';
    } else {
      const pool = quizBank[moduleN];
      const usedQs = new Set(qs.current.map(x => x.q));
      const candidates = pool.filter(p => !usedQs.has(p.q));
      if (candidates.length > 0) {
        const newQ = candidates[Math.floor(Math.random() * candidates.length)];
        qs.current[qs.index] = shuffleOpts(newQ);
      } else {
        qs.current[qs.index] = shuffleOpts(qs.current[qs.index]);
      }
      persistQuizProgress(moduleN);
      nx.innerHTML = '<button class="btn btn-primary" onclick="App.retryQuestion(' + moduleN + ')">Intentar con otra pregunta →</button>';
    }
  }

  function retryQuestion(moduleN) {
    const qs = quizState[moduleN];
    qs.answered = false;
    renderCurrentQuestion(moduleN);
  }

  function nextQuestion(moduleN) {
    const qs = quizState[moduleN];
    qs.index++; qs.answered = false;
    persistQuizProgress(moduleN);
    renderCurrentQuestion(moduleN);
  }

  function finishQuiz(moduleN) {
    if (!state.completedModules.includes(moduleN)) state.completedModules.push(moduleN);
    if (state.unlocked < moduleN + 1) state.unlocked = moduleN + 1;
    delete quizState[moduleN];
    if (state.quizProgress) delete state.quizProgress[moduleN];
    save();
    const container = document.getElementById('quiz-' + moduleN);
    const nextN = moduleN + 1;
    const nextLabel = nextN <= TOTAL_MODULES ? 'Siguiente módulo →' : 'Ir a la prueba final →';
    container.innerHTML =
      '<div class="quiz-done">' +
        '<div class="quiz-done-icon">✓</div>' +
        '<div class="quiz-done-title">Módulo aprobado</div>' +
        '<div class="quiz-done-text">El módulo ha sido aprobado correctamente. El siguiente contenido ya está disponible.</div>' +
        '<button class="btn btn-primary" onclick="App.goToModule(' + nextN + ')">' + nextLabel + '</button>' +
      '</div>';
    renderNav(); updateProgress();
  }

  function renderQuizDoneInlineHTML(moduleN) {
    const nextN = moduleN + 1;
    const nextLabel = nextN <= TOTAL_MODULES ? 'Siguiente módulo →' : 'Ir a la prueba final →';
    return '<div class="quiz-done"><div class="quiz-done-icon">✓</div><div class="quiz-done-title">Ya completaste este módulo</div><div class="quiz-done-text">Puedes revisar el contenido o continuar.</div><button class="btn btn-primary" onclick="App.goToModule(' + nextN + ')">' + nextLabel + '</button></div>';
  }

  /* ---------- PRUEBA FINAL (sin mostrar incorrectas) ---------- */
  const finalState = {};

  function isFinalLocked() { return state.finalLockUntil && Date.now() < state.finalLockUntil; }
  function finalLockRemainingMs() { return Math.max(0, (state.finalLockUntil || 0) - Date.now()); }

  function mountFinalTest() {
    const container = document.getElementById('quiz-final');
    if (!container) return;
    if (state.finalPassed) { container.innerHTML = renderFinalPassedHTML(); return; }
    if (isFinalLocked()) { renderFinalLockedState(); return; }
    finalState.current = pickQuestions(finalBank, FINAL_QUESTIONS);
    finalState.index = 0;
    finalState.answers = [];
    finalState.correctCount = 0;
    finalState.answered = false;
    renderFinalCurrentQuestion();
  }

  function renderFinalLockedState() {
    const container = document.getElementById('quiz-final');
    const remMs = finalLockRemainingMs();
    const remMin = Math.ceil(remMs / 60000);
    const lastScore = state.finalBest;
    container.innerHTML =
      '<div class="quiz-locked">' +
        '<div class="quiz-locked-icon">⏳</div>' +
        '<div class="quiz-locked-title">Prueba final · nuevo intento disponible en ' + remMin + ' min</div>' +
        '<div class="quiz-locked-desc">Último resultado registrado: <strong>' + lastScore + '/' + FINAL_QUESTIONS + '</strong>. La certificación requiere <strong>' + FINAL_PASS_CORRECT + '/' + FINAL_QUESTIONS + '</strong> (80%). El sistema habilitará un nuevo intento en <strong id="final-lock-timer">' + remMin + ' min</strong>. Se recomienda aprovechar este tiempo para revisar el contenido de los módulos.</div>' +
        '<button class="btn btn-ghost" onclick="App.checkFinalLock()">Verificar disponibilidad</button>' +
      '</div>';
    const tick = () => {
      const ms = finalLockRemainingMs();
      const el = document.getElementById('final-lock-timer');
      if (!el) return;
      if (ms <= 0) { mountFinalTest(); return; }
      const s = Math.ceil(ms / 1000);
      const mm = Math.floor(s / 60);
      const ss = (s % 60).toString().padStart(2,'0');
      el.textContent = mm + ':' + ss;
      setTimeout(tick, 1000);
    };
    setTimeout(tick, 1000);
  }

  function checkFinalLock() {
    if (!isFinalLocked()) { state.finalLockUntil = 0; save(); mountFinalTest(); }
    else {
      const ms = finalLockRemainingMs();
      const mm = Math.floor(ms/60000);
      const ss = Math.floor((ms%60000)/1000).toString().padStart(2,'0');
      alert('El bloqueo sigue activo. Tiempo restante: ' + mm + ':' + ss + '.');
    }
  }

  function renderFinalCurrentQuestion() {
    const container = document.getElementById('quiz-final');
    const q = finalState.current[finalState.index];
    const dotsHTML = Array.from({length:FINAL_QUESTIONS}, (_, i) => {
      let c = 'qp-dot';
      if (i < finalState.index) c += ' done';
      else if (i === finalState.index) c += ' current';
      return '<div class="' + c + '"></div>';
    }).join('');
    const opts = q.opts.map((opt, i) => (
      '<button class="quiz-opt" onclick="App.answerFinalQuestion(' + i + ')" data-i="' + i + '">' +
        '<span class="opt-letter">' + String.fromCharCode(65+i) + '</span><span>' + opt + '</span>' +
      '</button>'
    )).join('');

    container.innerHTML =
      '<div class="quiz-gate-head">' +
        '<div class="quiz-icon">⭐</div>' +
        '<div><div class="quiz-title">Prueba Final · Certificación Corredor Freelance</div>' +
        '<div class="quiz-sublabel">20 preguntas · banco rotativo de 80 · aprobación con 16/20 (80%)</div></div>' +
      '</div>' +
      '<div class="quiz-sub">Responde las 20 preguntas seguidas. <strong>No se mostrarán las respuestas incorrectas al final — solo tu puntaje.</strong> Al terminar: si apruebas, descargas tu certificado y coordinas con un agente TuMatch por WhatsApp.</div>' +
      '<div class="quiz-progress-wrap">' +
        '<div class="quiz-progress">' + dotsHTML + '</div>' +
        '<div class="quiz-progress-label">Pregunta ' + (finalState.index+1) + ' de ' + FINAL_QUESTIONS + '</div>' +
      '</div>' +
      '<div class="quiz-q">' +
        '<div class="quiz-q-label">Pregunta ' + (finalState.index + 1) + ' de ' + FINAL_QUESTIONS + '</div>' +
        '<div class="quiz-q-text">' + q.q + '</div>' +
        '<div class="quiz-opts">' + opts + '</div>' +
        '<div class="quiz-next" id="next-final"></div>' +
      '</div>';
  }

  function answerFinalQuestion(optIdx) {
    if (finalState.answered) return;
    const q = finalState.current[finalState.index];
    const isCorrect = optIdx === q.correct;
    finalState.answered = true;
    finalState.answers.push({ selected: optIdx, correct: isCorrect });
    if (isCorrect) finalState.correctCount++;

    const container = document.getElementById('quiz-final');
    const btns = container.querySelectorAll('.quiz-opt');
    btns.forEach(b => b.classList.add('disabled'));
    const chosen = container.querySelector('.quiz-opt[data-i="' + optIdx + '"]');
    if (chosen) chosen.classList.add('chosen');

    const nx = document.getElementById('next-final');
    const isLast = finalState.index === FINAL_QUESTIONS - 1;
    nx.innerHTML = isLast
      ? '<button class="btn btn-success" onclick="App.submitFinalTest()">Finalizar prueba →</button>'
      : '<button class="btn btn-primary" onclick="App.nextFinalQuestion()">Siguiente pregunta →</button>';
  }

  function nextFinalQuestion() {
    finalState.index++; finalState.answered = false;
    renderFinalCurrentQuestion();
  }

  function submitFinalTest() {
    const score = finalState.correctCount;
    state.finalAttempts = (state.finalAttempts || 0) + 1;
    if (score > (state.finalBest || 0)) state.finalBest = score;
    if (score >= FINAL_PASS_CORRECT) {
      state.finalPassed = true;
      state.finalLockUntil = 0;
      save();
      renderFinalPassedResult(score);
    } else {
      state.finalLockUntil = Date.now() + FINAL_LOCK_MINUTES * 60 * 1000;
      save();
      renderFinalFailedResult(score);
    }
    renderNav(); updateProgress();
  }

  function renderFinalPassedResult(score) {
    const container = document.getElementById('quiz-final');
    container.innerHTML =
      '<div class="quiz-done">' +
        '<div class="quiz-done-icon">✓</div>' +
        '<div class="quiz-done-title">Certificación obtenida</div>' +
        '<div class="quiz-done-text">Ha aprobado la prueba final con <strong>' + score + '/' + FINAL_QUESTIONS + '</strong> respuestas correctas (' + Math.round(score/FINAL_QUESTIONS*100) + '%). Ha completado el onboarding como Corredor Freelance Asociado TuMatch.</div>' +
        '<button class="btn btn-primary" onclick="App.goToModule(' + (TOTAL_MODULES+2) + ')">Acceder al certificado y próximos pasos →</button>' +
      '</div>';
  }

  function renderFinalPassedHTML() {
    return '<div class="quiz-done"><div class="quiz-done-icon">✓</div><div class="quiz-done-title">Certificación ya registrada</div><div class="quiz-done-text">La certificación ya ha sido registrada. Puede acceder al certificado y a los próximos pasos.</div><button class="btn btn-primary" onclick="App.goToModule(' + (TOTAL_MODULES+2) + ')">Acceder al certificado →</button></div>';
  }

  function renderFinalFailedResult(score) {
    const container = document.getElementById('quiz-final');
    container.innerHTML =
      '<div class="quiz-done" style="background:linear-gradient(135deg,rgba(232,93,74,.08),rgba(212,160,23,.08));border-color:var(--capt-border)">' +
        '<div class="quiz-done-icon">⏳</div>' +
        '<div class="quiz-done-title">Prueba final no aprobada</div>' +
        '<div class="quiz-done-text">El resultado obtenido fue de <strong>' + score + '/' + FINAL_QUESTIONS + '</strong> (' + Math.round(score/FINAL_QUESTIONS*100) + '%). La certificación requiere <strong>' + FINAL_PASS_CORRECT + '/' + FINAL_QUESTIONS + '</strong> respuestas correctas (80%). El sistema aplica una pausa de <strong>' + FINAL_LOCK_MINUTES + ' minutos</strong> destinada a reforzar el aprendizaje antes de un nuevo intento. Le recomendamos revisar los módulos durante este tiempo. Por protocolo de evaluación, no se detallan las respuestas incorrectas.</div>' +
        '<button class="btn btn-ghost" onclick="App.goToModule(0)">Volver al índice del onboarding</button>' +
      '</div>';
    setTimeout(() => renderFinalLockedState(), 2500);
  }

  /* ---------- CIERRE · CERTIFICADO ---------- */
  function mountConclusion() {
    const container = document.getElementById('done-content');
    if (!container) return;
    if (!state.finalPassed && !isAdminMode) {
      container.innerHTML =
        '<div class="quiz-done"><div class="quiz-done-icon">🔒</div><div class="quiz-done-title">Aún no apruebas la prueba final</div><div class="quiz-done-text">Completa todos los módulos y la prueba final para desbloquear tu certificado.</div><button class="btn btn-primary" onclick="App.goToModule(0)">Volver al inicio</button></div>';
      return;
    }
    const dateStr = new Date().toLocaleDateString('es-CL', {year:'numeric', month:'long', day:'numeric'});
    const score = state.finalBest || 0;
    const pct = Math.round(score/FINAL_QUESTIONS*100);
    const waMsg = encodeURIComponent('Hola, aprobé el Onboarding Corredor Freelance TuMatch con ' + score + '/' + FINAL_QUESTIONS + '. Quiero firmar el contrato y coordinar mi reunión con mi Team Leader.');
    const waUrl = WHATSAPP_BASE + '?text=' + waMsg;

    container.innerHTML =
      '<div class="sec-header" style="text-align:center;margin-bottom:28px">' +
        '<div class="sec-tag" style="margin-left:auto;margin-right:auto"><span class="dot"></span>Certificación oficial 2026</div>' +
        '<h2 class="sec-h2" style="margin-left:auto;margin-right:auto">Certificación obtenida</h2>' +
        '<p class="sec-desc" style="margin-left:auto;margin-right:auto">Ha completado formalmente el onboarding y queda habilitado como Corredor Freelance Asociado TuMatch. Descargue el certificado y coordine el próximo paso por WhatsApp: firma del contrato y reunión con el Team Leader asignado.</p>' +
      '</div>' +
      '<div class="cert-name-box">' +
        '<label class="cert-name-label" for="certNameInput">Nombre completo para el certificado</label>' +
        '<input class="cert-name-input" id="certNameInput" type="text" placeholder="Ej.: María José Pérez Soto" autocomplete="name">' +
        '<div class="cert-name-hint">Se usa sólo al imprimir el certificado PNG. No se envía a ningún servidor.</div>' +
      '</div>' +
      '<div id="cert" class="tm-cert">' +
        '<div class="tm-cert-border">' +
          '<div class="tm-cert-corner tl"></div>' +
          '<div class="tm-cert-corner tr"></div>' +
          '<div class="tm-cert-corner bl"></div>' +
          '<div class="tm-cert-corner br"></div>' +
          '<div class="tm-cert-logo-block">' +
            '<img class="tm-cert-logo-img" src="assets/tumatch_vertical_positivo.png" alt="TuMatch Inmobiliario" crossorigin="anonymous">' +
          '</div>' +
          '<div class="tm-cert-eyebrow">Academia de Corredores · TuMatch Inmobiliario</div>' +
          '<div class="tm-cert-title">Certificado de Corredor Freelance</div>' +
          '<div class="tm-cert-divider"></div>' +
          '<div class="tm-cert-subtitle">Programa Oficial 2026</div>' +
          '<div class="tm-cert-intro">Se certifica a</div>' +
          '<div class="tm-cert-name" id="certToName">Corredor Freelance Certificado</div>' +
          '<div class="tm-cert-body">Como Corredor Freelance certificado TuMatch, habilitado para ejecutar negocios de venta, arriendo y captación, con dominio de las 4 tipologías de cliente, la prospección profesional y el proceso completo de una operación inmobiliaria.</div>' +
          '<div class="tm-cert-footer">' +
            '<div class="tm-cert-date">' +
              '<div class="tm-cert-date-label">Emitido</div>' +
              '<div class="tm-cert-date-val">Santiago · ' + dateStr + '</div>' +
            '</div>' +
            '<div class="tm-cert-final-badge">' +
              '<div class="badge-label">Prueba final</div>' +
              '<div class="badge-score">' + score + '<span class="badge-slash">/</span>' + FINAL_QUESTIONS + '</div>' +
              '<div class="badge-sub">' + TOTAL_MODULES + ' módulos · ' + pct + '%</div>' +
            '</div>' +
            '<div class="tm-cert-sign">' +
              '<div class="tm-cert-stamp">' +
                '<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" class="tm-cert-stamp-svg">' +
                  '<defs><path id="tmStampArcTop" d="M 34,120 A 86,86 0 0 1 206,120" fill="none"/><path id="tmStampArcBottom" d="M 38,120 A 82,82 0 0 0 202,120" fill="none"/></defs>' +
                  '<circle cx="120" cy="120" r="114" fill="none" stroke="#0D1B2A" stroke-width="4"/>' +
                  '<circle cx="120" cy="120" r="108" fill="none" stroke="#D4A017" stroke-width="0.8"/>' +
                  '<circle cx="120" cy="120" r="100" fill="none" stroke="#E85D4A" stroke-width="2.2"/>' +
                  '<circle cx="120" cy="120" r="76" fill="none" stroke="#0D1B2A" stroke-width="1" stroke-dasharray="1 3"/>' +
                  '<text font-family="Cinzel, serif" font-size="12" font-weight="800" letter-spacing="4.5" fill="#0D1B2A"><textPath href="#tmStampArcTop" startOffset="50%" text-anchor="middle">TUMATCH · INMOBILIARIO</textPath></text>' +
                  '<text font-family="Cinzel, serif" font-size="9" font-weight="700" letter-spacing="5" fill="#C94432"><textPath href="#tmStampArcBottom" startOffset="50%" text-anchor="middle">CORREDOR FREELANCE · 2026</textPath></text>' +
                  '<text x="120" y="108" font-family="Cinzel, serif" font-size="12" font-weight="700" letter-spacing="3.5" text-anchor="middle" fill="#0D1B2A">APROBADO</text>' +
                  '<text x="120" y="140" font-family="Cinzel, serif" font-size="26" font-weight="900" letter-spacing="3" text-anchor="middle" fill="#C94432">' + score + '/' + FINAL_QUESTIONS + '</text>' +
                  '<text x="120" y="166" font-family="EB Garamond, serif" font-style="italic" font-weight="600" font-size="12" text-anchor="middle" fill="#0D1B2A">corredor certificado</text>' +
                '</svg>' +
              '</div>' +
              '<div class="tm-cert-sign-line"></div>' +
              '<div class="tm-cert-sign-name">Equipo TuMatch</div>' +
              '<div class="tm-cert-sign-role">Academia de Corredores</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="tm-cert-actions" style="margin-top:28px">' +
        '<button class="btn btn-primary" onclick="App.downloadCert()">Descargar certificado PNG ↓</button>' +
        '<a class="btn btn-success" href="' + waUrl + '" target="_blank" rel="noopener">Contactar por WhatsApp →</a>' +
      '</div>' +
      '<div class="info-box success" style="margin-top:28px">' +
        '<span class="info-icon">🚀</span>' +
        '<div class="info-text"><strong>Siguientes pasos:</strong> al contactarnos por WhatsApp te enviaremos el Contrato de Corredor Asociado para firma digital, activaremos tu perfil y agendaremos la reunión de bienvenida con tu Team Leader asignado por zona.</div>' +
      '</div>' +
      '<div style="text-align:center;margin-top:20px">' +
        '<button class="btn btn-ghost" onclick="App.restart()">Reiniciar certificación</button>' +
      '</div>';

    const nameInput = document.getElementById('certNameInput');
    const certToName = document.getElementById('certToName');
    if (nameInput && certToName) {
      nameInput.addEventListener('input', () => {
        const v = nameInput.value.trim();
        certToName.textContent = v || 'Corredor Freelance Certificado';
      });
    }
  }

  function downloadCert() {
    if (typeof html2canvas === 'undefined') { alert('No se pudo cargar la librería de captura. Verifica tu conexión e intenta de nuevo.'); return; }
    const el = document.getElementById('cert');
    if (!el) return;
    html2canvas(el, { scale:2, backgroundColor:'#FAF8F4', useCORS:true, allowTaint:false, imageTimeout:8000 }).then(canvas => {
      const link = document.createElement('a');
      const nameEl = document.getElementById('certNameInput');
      const raw = nameEl ? nameEl.value.trim() : '';
      const slug = raw ? raw.replace(/\s+/g, '_') : 'Corredor';
      link.download = 'Certificado_TuMatch_Freelance_' + slug + '.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }

  /* ---------- THEME ---------- */
  function bindTheme() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('tumatch_theme', next); } catch(e) {}
      updateLogoForTheme();
    });
    updateLogoForTheme();
  }
  function updateLogoForTheme() {
    const t = document.documentElement.getAttribute('data-theme');
    const isDark = t === 'dark' || (!t && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const src = isDark ? 'assets/tumatch_horizontal_negativo.jpg' : 'assets/tumatch_horizontal_positivo.jpg';
    const hdr = document.getElementById('brandLogoImg');
    const hero = document.getElementById('heroLogoImg');
    if (hdr) hdr.src = src;
    if (hero) hero.src = src;
  }

  /* ---------- RESUME BANNER ---------- */
  function renderResumeBanner() {
    const banner = document.getElementById('resumeBanner');
    const btn = document.getElementById('resumeBannerBtn');
    const text = document.getElementById('resumeBannerText');
    const startBtn = document.getElementById('heroStartBtn');
    if (!banner || !btn) return;
    const hasProgress = state.completedModules.length > 0 || state.finalPassed;
    if (!hasProgress) { banner.style.display = 'none'; return; }
    banner.style.display = 'flex';
    let targetN = 1, label = 'Continuar →';
    if (state.finalPassed) { targetN = TOTAL_MODULES+2; label = 'Ver certificado →'; text.textContent = 'Ya aprobaste la certificación. Revisa tu certificado y próximo paso.'; }
    else if (state.unlocked > TOTAL_MODULES) { targetN = TOTAL_MODULES+1; label = 'Ir a la prueba final →'; text.textContent = 'Completaste los ' + TOTAL_MODULES + ' módulos. Rinde la prueba final cuando estés listo.'; }
    else { targetN = state.unlocked; label = 'Continuar en módulo ' + targetN + ' →'; text.textContent = 'Retoma donde quedaste: "' + MODULE_NAMES[targetN] + '".'; }
    btn.textContent = label;
    btn.onclick = () => App.goToModule(targetN);
    if (startBtn) startBtn.textContent = state.completedModules.length > 0 ? 'Continuar certificación →' : 'Comenzar certificación →';
  }

  /* ---------- HELPERS ---------- */
  function escapeHTML(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  /* ---------- INIT ---------- */
  function detectAdminMode() {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('admin') === '1';
    } catch(e) {}
    return false;
  }

  function activateAdminMode() {
    isAdminMode = true;
    const ribbon = document.getElementById('adminRibbon');
    if (ribbon) ribbon.style.display = 'block';
    document.documentElement.setAttribute('data-admin', '1');
  }

  function parseHashTarget() {
    const h = (window.location.hash || '').replace(/^#/, '').trim();
    if (!h) return null;
    if (h === 'mod-0') return 0;
    if (h === 'mod-final') return TOTAL_MODULES + 1;
    if (h === 'mod-done') return TOTAL_MODULES + 2;
    const m = h.match(/^mod-(\d+)$/);
    if (m) {
      const n = parseInt(m[1], 10);
      if (n >= 1 && n <= TOTAL_MODULES) return n;
    }
    return null;
  }

  function autoResume() {
    const hashTarget = parseHashTarget();
    if (hashTarget !== null) {
      const reachable = isAdminMode
        || hashTarget === 0
        || (hashTarget >= 1 && hashTarget <= TOTAL_MODULES && hashTarget <= state.unlocked)
        || (hashTarget === TOTAL_MODULES + 1 && state.unlocked > TOTAL_MODULES)
        || (hashTarget === TOTAL_MODULES + 2 && state.finalPassed);
      if (reachable) { goToModule(hashTarget); return; }
    }

    const c = state.current;
    if (c >= 1 && c <= TOTAL_MODULES && c <= effectiveUnlocked()) {
      show('mod-' + c); mountModule(c); return;
    }
    if (c === TOTAL_MODULES + 1 && (isAdminMode || state.unlocked > TOTAL_MODULES)) {
      show('mod-final'); mountFinalTest(); return;
    }
    if (c === TOTAL_MODULES + 2 && state.finalPassed) {
      show('mod-done'); mountConclusion(); return;
    }
  }

  function init() {
    load();
    if (detectAdminMode()) activateAdminMode();
    bindTheme();
    renderNav();
    renderResumeBanner();
    updateProgress();
    autoResume();
  }

  return {
    init, goToModule, startModule, restart,
    answerQuestion, nextQuestion, retryQuestion, finishQuiz,
    checkLock,
    answerFinalQuestion, nextFinalQuestion, submitFinalTest, checkFinalLock,
    downloadCert
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
