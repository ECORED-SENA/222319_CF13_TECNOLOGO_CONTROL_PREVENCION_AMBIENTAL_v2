<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Aprovechamiento y tratamiento de los residuos sólidos no peligrosos
    p.mb-5(data-aos='fade-right') El proceso de aprovechamiento de residuos sólidos no peligrosos se genera, principalmente, con papel, cartón, vidrio, metal, plástico.  
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #eef6d7 ").h-100
          p.mb-0  #[b Tal proceso de aprovechamiento se da cuando los materiales sobrantes o descartados de cualquier proceso productivo son restituidos o acondicionados para nuevos servicios] que, además, son favorables al ambiente. Por lo general, el aprovechamiento de los residuos se da mediante la reutilización y el reciclaje.
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/temas/2/1.png', alt='')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Papel y cartón
    .card-tema.p-4.mb-5(style="background-color: #fff9e5")(data-aos="zoom-in")
      img.card-1.d-xl-block.d-none(src='@/assets/curso/temas/2/2.png', alt='')
      .row.justify-content-center.align-items-center
        .col-lg-4.col-6
          img.d-xl-none.d-block(src='@/assets/curso/temas/2/2.png', alt='')
        .col-lg-8
          p.mb-0.p-2 El papel y el cartón son productos que se requieren para comunicación de información, trasmisión de conocimiento y cultura, empacar, transportar, y un sinnúmero de actividades de la vida diaria. En Colombia, el papel es producido a partir de fibras de celulosa obtenidas del bagazo de la caña de azúcar - residuo resultado de un proceso agroindustrial - o de madera proveniente de plantaciones forestales certificadas de pino y eucalipto, que son cosechadas y renovadas con fines comerciales, tal como se hace con otros cultivos agrícolas. Estas dos fuentes de celulosa tienen la gran ventaja de provenir de un recurso renovable, que también es reciclable y biodegradable.
    p.mb-5(data-aos='fade-right') #[b En relación con el reciclaje de papel y cartón, tenga en cuanta algunos aspectos clave, como los que se mencionan enseguida:]
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        AcordionA.mb-5.acordion-icon(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Vida útil y nueva vida").justify-content-center
            .col-md-7.mb-4.mb-md-0
              p El reciclaje prolonga la vida útil de las fibras de celulosa al permitir que productos que ya han cumplido su vida útil se puedan utilizar como materia prima en la elaboración de nuevos papeles o cartones, convirtiéndose en otra fuente importante de abastecimiento de fibra de la industria papelera colombiana. 
            .col-md-5.col-6
              figure
                img.m-auto(src='@/assets/curso/temas/2/3.png', alt='Texto que describa la imagen')
          .row(titulo="Colombia responsable").justify-content-center
            .col-md-7.mb-4.mb-md-0
              p El reciclaje de papel en Colombia inició en los años 40, cuando las empresas productoras de cajas de cartón adecuaron su proceso productivo para incorporar desperdicios de cartón como insumo. La tendencia de recuperación de papel desde ese entonces ha sido creciente, alcanzando en los últimos 5 años un índice de recolección promedio del 47% del papel consumido.
            .col-md-5.col-6
              figure
                img.m-auto(src='@/assets/curso/temas/2/4.png', alt='Texto que describa la imagen')
          .row(titulo="Reducción de necesidades y de consumo").justify-content-center
            .col-md-7.mb-4.mb-md-0
              p Con él, se reducen las necesidades de fibra virgen y, por lo tanto, las de los insumos y materias primas utilizados para producirla. Sin embargo, el reciclaje de las fibras de celulosa no es infinito, ya que en los procesos de repulpeo y refinación las fibras van perdiendo propiedades como longitud y resistencia, por lo que es necesario mezclarlas con fibra virgen para la producción de algunos productos.
            .col-md-5.col-6
              figure.mb-3
                img.m-auto(src='@/assets/curso/temas/2/5.png', alt='Texto que describa la imagen')
          div(titulo="Almacenamiento").justify-content-center
            p.mb-0 El papel debe almacenarse en instalaciones cerradas con el fin de que no se altere su calidad ni adquiera humedad. Cuando el material es recibido en la bodega, se debe medir la humedad con un higrómetro, esta no debe pasar del 10%, ya que cualquier papel o cartón con un porcentaje adicional será descartado.
            a.boton.color-acento-botones.indicador__container(@click="modal1 = true").mb-3
              span Ciclo del papel y cartón
              .indicador--click(v-if="mostrarIndicador")
          .row(titulo="Perjudicial").justify-content-center
            .col-md-7.mb-4.mb-md-0
              p Se consideran elementos perjudiciales para el proceso de reciclaje aquellos no fibrosos que deterioran la calidad del papel y el cartón, y que, además, perjudican el proceso productivo, los equipos y el producto final: trapos, plásticos, cauchos, hule, poliestireno expandido, vidrios, colillas de cigarrillo, residuos de aceites, deshechos de comidas, pinturas no solubles, humedad excesiva cuerdas de todo tipo, alambre, zunchos, metales de todo tipo, cabuyas, piedras, arena, madera, tierra o barro, residuos de cemento, papel alquitrán, de seguridad, químico, moneda, carbón, encerados, celofán, glassine, de fotografía, químico, papeles impregnados de parafina, de negro humo, de grasa, aceite o manteca.
            .col-md-5.col-6
              figure
                img.m-auto(src='@/assets/curso/temas/2/6.png', alt='Texto que describa la imagen')
          .row(titulo="De sumo cuidado").justify-content-center
            .col-md-7.mb-4.mb-md-0
              p Es importantísimo que, en el proceso de reciclaje, los papeles no estén revestidos de plástico o con satinados plásticos, de cera, aluminio, barniz o laca, papeles con resistencia en húmedo o con barnizado resistentes a la humedad, papeles adhesivos con alma de tela o plástico, papeles o cintas con adhesivos no solubles en agua, moños o lomos con cualquier pegante, papeles laminados con aluminio u otros materiales, papeles deteriorados por acción nociva del tiempo, papeles artificiales elaborados a partir de plásticos o polímeros, canastas, bandejas o separadores de empaques para huevos o frutas.
            .col-md-5.col-6
              figure.mb-3
                img.m-auto(src='@/assets/curso/temas/2/7.png', alt='Texto que describa la imagen')
        .tarjeta.p-5(style="background-color: #dee9f0 ")(data-aos="zoom-in")
          .row.justify-content-center.align-items-center.mb-5
            .col-1: img(src='@/assets/curso/temas/atencion.svg', alt='')
            .col-lg-11
              p.mb-0.fw-bold Para profundizar en este punto del contenido, se le invita a consultar cuidadosamente los siguientes recursos. 
          a.anexo.mb-4(:href="obtenerLink('downloads/Anexo_1_Tabla1_CategoriaDeReciclajePapelCarton.pdf')" target="_blank")
            .row.justify-content-around.align-items-center
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg" style="width: 50px")
              .anexo__texto
                p #[b Anexo.] Categoria de reciclaje de papel y cartón 
          a.anexo.mb-4(href="https://www.youtube.com/watch?v=V4cRf5Nas_k" target="_blank" type="application/pdf")
            .row.justify-content-around.align-items-center
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Video.] Cómo se hace el papel reciclado.
          a.anexo.mb-4(href="https://www.youtube.com/watch?v=6kRtsPABg4A" target="_blank" type="application/pdf")
            .row.justify-content-around.align-items-center
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Video.] Proceso de reciclaje de papel.
    ModalA(:abrir-modal.sync="modal1")
      .tarjeta.bg-white.p-1
        .titulo-sexto.color-secundario(data-aos='fade-right')
          h5 Figura 1
          br
          span.fst-italic Ciclo del papel y cartón
        .row.justify-content-center.mb-5
          .col-lg-8
            img(src='@/assets/curso/temas/2/8.svg', alt='')
        figcaption.d-inline-block Nota. ANDI (2017) Calidades de materiales para reciclaje. p.7. 
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Plásticos 
    .cajon-b.color-acento-contenido.p-3.mb-5(data-aos="zoom-in")
      p.mb-0 El plástico es un material sólido sintético, llamado polímero, que puede ser moldeado mediante calor y/o presión y cuyo componente principal es el carbono. Hay una gran variedad de clases de plástico, dependiendo de su composición, y este factor es fundamental cuando se lleva a cabo el reciclaje de plástico. Los plásticos se clasifican en tres grupos, según la disposición de las macromoléculas que los constituyen.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta-avatar
            img(src='@/assets/curso/temas/2/9.png' alt='AvatarTop' style='width: 300px')
            .tarjeta.w-100(style="background-color: #ecf7f4")
              .p-4
                h5.text-center Termoplásticos
                p Es un plástico que, a temperatura ambiente, es plástico o deformable, se convierte en un líquido cuando se calienta y se endurece en un estado vítreo cuando se enfría suficiente.
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-left")
        .tarjeta-avatar
            img(src='@/assets/curso/temas/2/10.png' alt='AvatarTop' style='width: 300px')
            .tarjeta.w-100(style="background-color: #fdf8e4")
              .p-4
                h5.text-center Termoestables
                p Son materiales que, una vez que han sufrido el proceso de calentamiento-fusión y formación-solidificación, se convierten en materiales rígidos que no vuelven a fundirse. 
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta-avatar
            img(src='@/assets/curso/temas/2/11.png' alt='AvatarTop' style='width: 300px')
            .tarjeta.w-100(style="background-color: #fdf8e4")
              .p-4
                h5.text-center Elastómeros
                p Se caracterizan por su gran elasticidad y capacidad de estiramiento y rebote, recuperando su forma original una vez que se retira la fuerza que los deformaba.
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/temas/2/12.svg', alt='')
    h4 Identificación
    p.mb-2(data-aos='fade-right') Por otra parte, se estableció un sistema de clasificación para facilitar la identificación de los plásticos, esto se reconoce al mirar la pieza de plástico: se encuentra el símbolo del reciclaje más un número. De esta manera, se facilita mucho el reciclaje del plástico, al identificar rápidamente y sin errores el tipo de polímero de que se trata.
    div(style="background-color: #d6efff").p-5.mb-3(data-aos="zoom-in")
      p.mb-5(data-aos='fade-right') #[b En relación directa con lo anteriormente dicho, los requisitos que debe cumplir un residuo plástico para ser reciclado son: ]
      .row.justify-content-center.mb-5.align-items-start
        .col-lg-4.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2/13.png', alt='')
        .col-lg-8
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check(style='color: #feb12e')
              p.mb-0 No haber estado en contacto con sustancias tóxicas, como agroquímicos o residuos peligrosos ni con bacterias patógenas.
            li.d-flex
              i.fas.fa-check(style='color: #feb12e')
              p.mb-0 Sus propiedades mecánicas no deben estar deterioradas.
            li.d-flex
              i.fas.fa-check(style='color: #feb12e')
              p.mb-0 Separar los residuos plásticos de acuerdo con su forma: envases, bolsas y pastas.
            li.d-flex
              i.fas.fa-check(style='color: #feb12e')
              p.mb-0 Separar las etiquetas, tapas y eliminar materiales extraños, como ganchos o residuos de comida.
            li.d-flex
              i.fas.fa-check(style='color: #feb12e')
              p.mb-0 Clasificar los materiales según sea el tipo de polímero (1 al 7).
            li.d-flex
              i.fas.fa-check(style='color: #feb12e')
              p.mb-0 Lavar el material, pero no se debe utilizar soda cáustica, detergentes o solventes fuertes; se debe escurrir y secar el material plástico, y controlar la calidad de las resinas recuperadas.
            li.d-flex
              i.fas.fa-check(style='color: #feb12e')
              p.mb-0 Molerlo, según el tipo de polímero (opcional).
            li.d-flex
              i.fas.fa-check(style='color: #feb12e')
              p.mb-0 Almacenar en sitios cubiertos y con poca humedad.
            li.d-flex
              i.fas.fa-check(style='color: #feb12e')
              p.mb-0 Los pegantes se deben retirar del producto recuperado.
            li.d-flex
              i.fas.fa-check(style='color: #feb12e')
              p.mb-0 Se deben evitar materiales o productos impresos.
            li.d-flex
              i.fas.fa-check(style='color: #feb12e')
              p.mb-0 Preferiblemente, no deben tener grasas u otros materiales viscosos.
    figcaption.d-inline-flex.mb-5 ANDI. (2017). Calidades de materiales para reciclaje. p.11. 
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .tarjeta.p-5(style="background-color: #dee9f0 ")
              .row.justify-content-center.align-items-center.mb-5
                .col-1: img(src='@/assets/curso/temas/atencion.svg', alt='')
                .col-lg-11
                  p.mb-0.fw-bold Para profundizar en este punto del contenido, se le invita a consultar cuidadosamente los siguientes recursos. 
              a.anexo.mb-4(:href="obtenerLink('downloads/Anexo_2_Tabla2_TiposPolimeroPlasticos.pdf')" target="_blank")
                .row.justify-content-around.align-items-center
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg" style="width: 50px")
                  .anexo__texto
                    p #[b Anexo.] Tipos de polímeros de plástico 
              a.anexo.mb-4(href="https://www.youtube.com/watch?v=sSgsT7D5fVY" target="_blank" type="application/pdf")
                .row.justify-content-around.align-items-center
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[b Video.] Reciclaje del plástico y proceso de producción.
              a.anexo.mb-4(href="https://www.youtube.com/watch?v=eDD9sO8SkOY" target="_blank" type="application/pdf")
                .row.justify-content-around.align-items-center
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[b Video.] El paso a paso en el reciclaje de una botella PET.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Tetra Pak
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/2/14.png', alt='')
      .col-lg-7(data-aos="fade-left") 
        p El principal objetivo ambiental del Tetra Pak es minimizar los impactos ambientales de sus productos a lo largo de todo su ciclo de vida, haciendo un uso eficiente de recursos en el desarrollo y diseño de los mismos, en sus procesos de manufactura y en sus operaciones.
    .mn(style="background-color: #ecf7f4").p-5.mb-5(data-aos="zoom-in")
      p.mb-5 Conozca algunas generalidades que vale la pena tener en cuenta sobre el Tetra Pak en los procesos de reciclaje y medio ambiente: 
      TabsC.color-acento-contenido.mb-5
        .p-4.p-md-5(titulo="Materias primas renovables" style="background-color: #d3ede5 ")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-md-0
                .tarjeta.bg-white.p-4.rounded-0
                  p El Tetra Pak busca que sus envases provengan en un 100% de materias primas renovables, para lo cual trabaja de la mano con los proveedores de pulpa (donde el objetivo es que todos tengan certificación FSCTM), de aluminio y plástico. Igualmente, todas las acciones de diseño de nuevos envases y sistemas de llenado buscan que estos sean más eficientes, reciclables y con mayor porcentaje de materiales; todas las plantas a nivel mundial están certificadas con la norma ISO 14001, enfocándose en programas de reducción, minimización, mitigación y compensación de impactos ambientales en el proceso productivo.
              .col-lg-4.col-8: img(src='@/assets/curso/temas/2/15.png', alt='')
        .p-4.p-md-5(titulo="En cuanto a reciclaje" style="background-color: #d3ede5 ")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-md-0
                .tarjeta.bg-white.p-4.rounded-0
                  p Tetra Pak® está invirtiendo en la colocación de equipos en la industria papelera y de aglomerados, para que estas industrias aprovechen los envases de Tetra Pak posconsumo y posindustria como materia prima. De esta forma, estas empresas fabrican papel, cajas corrugadas, cartón gris, tubos de cartón, muebles, láminas aglomeradas y tejas. En Colombia, existen tres plantas de reciclaje de pulpa de papel, que incluyen el reciclaje de los envases de Tetra Pak, ubicadas en las ciudades de Bogotá, Cali y Medellín (planta integrada). Por otro lado, existen dos plantas que aprovechan los residuos de polietileno y aluminio provenientes del despulpado de los envases de Tetra Pak, una en Bogotá y una en Medellín.
              .col-lg-4.col-8: img(src='@/assets/curso/temas/2/16.png', alt='')
        .p-4.p-md-5(titulo="Pasos claves" style="background-color: #d3ede5 ")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-md-0
                .tarjeta.bg-white.p-4.rounded-0
                  p Es importante que las fuentes de material de las bodegas, principalmente las de origen doméstico, comercial e institucional, que consumen los envases de #[b Tetra Pak], realicen tres sencillos pasos antes de desecharlos en el contenedor de residuos reciclables: enjuagar, escurrir y aplanar. Únicamente cuando algún operador o bodega maneje material posindustrial que ha tenido contacto con productos (leches y jugos) en algún cliente industrial (por ejemplo, Colanta, Alpina, Incolacteos, Parmalat, Postobón, etc.), es necesario lavarlo con abundante agua, debido al alto contenido de líquido. No es necesario separar los envases por tipo, esto quiere decir que se pueden mezclar envases de Tetra Pak de leche, jugos y licores sin problema. 
              .col-lg-4.col-8: img(src='@/assets/curso/temas/2/17.png', alt='')
    p.mb-5(data-aos='fade-right') En el siguiente recurso se muestran algunos requerimientos y necesidades del proceso de reciclaje del Tetra Pak. Se recomienda tomar nota atenta de los aspectos más importantes. ¡Adelante!
    .tarjeta.rounded-pill.p-2.d-inline-block.p-2.color-primario.mb-4(data-aos="fade-right")
          h4.text-white.mb-0.mx-4 Reciclaje del Tetra Pak
    .bg-slyde.p-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-md-0
            h4 Máquinas compactadoras
            p Si la bodega cuenta con máquina compactadora, siga las siguientes recomendaciones:
            ul.lista-ul--color
              li.d-flex
                i.fa.fa-check(style="color: #feb12e")
                p.mb-0 Enfardar el material en compactadoras hidráulicas. Si se tiene montacargas, se pueden armar pacas o fardos de máximo 300 kg. Sin embargo, el peso ideal está entre 100 y 150 kg por paca.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Si no se tiene montacargas, se deben armar pacas de máximo 50 kg. Armar la paca únicamente con envases posconsumo de Tetra Pak.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Verificar que el material esté lo más seco posible, sin contenido de producto o agua. Siempre entregar compactado y nunca envolver las pacas en plástico.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 No envolver material posindustrial (material proveniente de rollos vencidos) en las pacas. Si hay material posindustrial, es necesario cortarlo a un tamaño máximo de 50 cm, para evitar problemas en el proceso de reciclaje.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 En el proceso de compactación, colocar cartón a cada lado de la paca para evitar que se desarme fácilmente.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Amarrar la paca con alambre de calibre 12 y no con zuncho, porque se puede romper fácilmente.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Después de armada la paca, fumigue con hipoclorito o cualquier inhibidor de malos olores y vectores
          .col-lg-4.col-8
            figure
              img.m-auto(src='@/assets/curso/temas/2/18.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-md-0
            h4 Almacenamiento de material
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Cuando ya estén armadas las pacas, se debe designar un lugar dentro de la bodega para almacenarlas.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Cuando ya estén armadas las pacas, se debe designar un lugar dentro de la bodega para almacenarlas.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 En el proceso de almacenamiento, puede seguir las siguientes recomendaciones:
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 En el proceso de almacenamiento, puede seguir las siguientes recomendaciones:
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Si no se tiene montacargas, se recomienda apilar en máximo 2 niveles dentro del espacio asignado para almacenar el material.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Cuando no se cuente con compactadora hidráulica, se puede almacenar el material suelto, únicamente teniendo en cuenta que este debe ir en una lona o big bag (globo) separado de otros materiales.
          .col-lg-4.col-8
            figure
              img.m-auto(src='@/assets/curso/temas/2/19.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-md-0
            h4 Entrega a planta de reciclaje
            p  Todas las plantas de reciclaje de envases de Tetra Pak reciben el material compactado o suelto. Para la recolección, tenga en cuenta:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Comunicación previa con la planta de reciclaje. 
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Tener en cuenta los horarios de recepción del material. 
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Hay que tener en cuenta un máximo de un 15% de humedad por cada paca. 
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Comunicarse con la planta para tener en cuenta los documentos requeridos para el trámite de pagos.
          .col-lg-4.col-8
            figure
              img.m-auto(src='@/assets/curso/temas/2/20.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-md-0
            h4 Requisitos de un residuo  Tetra Pak para ser reciclado
            p 
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 No mezclar con otros envases de sólo plástico y aluminio, como los doypack o cajas plegadizas.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0.mb-0 Cualquier otro residuo diferente a los envases de Tetra Pak.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 No mezclar con material posindustrial proveniente de rollos vencidos.
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 Para que este material sea aceptado, los rollos deben ser cortados a un tamaño máximo de 50 cm X 50 cm antes de ser compactados y entregados a planta.
          .col-lg-4.col-8
            figure
              img.m-auto(src='@/assets/curso/temas/2/21.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-md-0
            h4 Envases con fibra blanc
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check(style="color: #feb12e")
                p.mb-0 La mayor cantidad de envases que se encuentran en el mercado colombiano son Tetra Brik Aseptic (ladrillo) de todos los tamaños, los cuales contienen fibra marrón. Se pueden encontrar otro tipo de envases que contienen fibra blanca, pero su participación con respecto a los de fibra marrón es mínima.
          .col-lg-4.col-8
            figure
              img.m-auto(src='@/assets/curso/temas/2/22.png', alt='Texto que describa la imagen')
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Vidrio
    .bloque-derecha(data-aos="zoom-in")
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/2/23.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En Colombia, el mercado del reciclaje de vidrio inició en 1978, desde entonces la reinserción de este material a la cadena productiva ha disminuido el ingreso del mismo a rellenos sanitarios en el país. El vidrio es un material producto de la mezcla de algunos recursos naturales no tóxicos, como la arena, la caliza, la soda y el feldespato. Estos materiales permiten que su ciclo de vida sea perfecto. En el reciclaje está el comienzo y el final de cada envase de vidrio.
    div(style="background-color: #f3f9ff ").p-5.mb-3(data-aos="zoom-in")
      p Sobre el vidrio en los procesos de reciclaje, ten presente:
      TabsA.color-acento-contenido.mb-5
        .tarjeta.tarjeta-azulc.p-4(titulo="Sostenibilidad")
          p El vidrio es un producto que cumple con el marco de la sostenibilidad ambiental, porque puede ser reciclado varias veces, debido a que su calidad, pureza y transparencia lo permite, minimizando los impactos ambientales negativos en los rellenos sanitarios; además, genera beneficios sociales, porque se generan ingresos directos e indirectos, y es económicamente viable, porque los materiales se regresan al ciclo productivo y no se utiliza tanta materia prima.
          img(src='@/assets/curso/temas/2/24.png', alt='')
        .tarjeta.tarjeta-azulc.p-4(titulo="Luego del consumo inicial")
          p Además de esto, el vidrio posconsumo se convierte en el componente más importante en la fabricación de nuevas botellas, lo que permite un ahorro significativo de energía: 1 kg de vidrio reciclado ahorra la energía equivalente a 25 minutos de un computador encendido y cada tonelada de vidrio reciclado evita el consumo de 1.2 toneladas de materia prima virgen y previene la emisión de más de media tonelada de gases de efecto invernadero. El término casco se utiliza a nivel industrial para denominar al vidrio posconsumo.
          img(src='@/assets/curso/temas/2/25.png', alt='')
        .tarjeta.tarjeta-azulc.p-4(titulo="Cadena del vidrio")
          p Esta es la cadena básica del vidrio
          img(src='@/assets/curso/temas/2/26.svg', alt='')
          figcaption Nota. ANDI (2017). Calidades de materiales para reciclaje. p.20
        .tarjeta.tarjeta-azulc.p-4(titulo="Requisitos para su reciclaje")
          p La calidad del material que se encuentra discriminado para la compra es: material sucio y material limpio. Para que el proveedor pueda garantizar la calidad del material, es necesario contar con una preparación previa, la cual se describe a continuación:
          ol.lista-ol--cuadro
            li
              .lista-ol--cuadro__vineta(style="background-color: #feb12e")
                span(style="color:#243943").fw-bold A
              | Separar: se trata de clasificar por colores blanco, ámbar, verde, y, a su vez, clasificarlos por limpio y sucio. Quitar tapas, anillos y demás elementos ajenos al material, catalogados como contaminantes del vidrio.
            li
              .lista-ol--cuadro__vineta(style="background-color: #feb12e")
                span(style="color:#243943").fw-bold B
              | Quebrar: esta es una recomendación al proveedor, más no es una condición para la venta del material, es decir que el vidrio puede entregarse completo; sin embargo, se recomienda al proveedor efectuar la rotura, puesto que disminuye volumen en el transporte.

            li
              .lista-ol--cuadro__vineta(style="background-color: #feb12e")
                span(style="color:#243943").fw-bold C
              | Almacenar: durante el almacenamiento, no mezclar las calidades de limpio y sucio, ni los diferentes tipos de colores. 
    p.mb-5(data-aos='fade-right') #[b Analice la siguiente tabla en la que se presentan los tipos de vidrio:]
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1
      br
      span.fst-italic Tipos de vidrio
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tabla-a.color-acento-botones.mb-5
          table
            caption Nota. ANDI (2017). Calidades de materiales para reciclaje. p.23
            thead(style="border-top: 0")
              tr
                th(colspan='3' style="background-color: #badc6d") VIDRIO POSCONSUMO COMERCIALIZABLE 
            tbody.text-center
              tr(style="background-color: #e2eacd ").fw-bold
                td TIPO DE VIDRIO POSCONSUMO COMERCIALIZABLE
                td DESCRIPCIÓN
                td CONTAMINANTES DEL PROCESO
              tr
                td Vidrio envase ámba
                td Se compra completo o roto. No debe mezclarse con otros colores ni con vidrio plano. El vidrio de refractarias o cafeteras no es reciclable, por tanto, no debe mezclarse con ningún tipo de vidrio posconsumo para venta.
                td(rowspan="5") Material ferroso (magnético): puntillas, tapas, clavos, varillas, limadura de hierro, alambre o cualquier elemento magnético. 
                  br
                  br
                  |Material no ferroso (no magnético): principalmente el aluminio, en cualquier presentación, cobre, zinc, estaño, plomo. 
                  br
                  br
                  |Vidrios especiales: espejos, vidrio laminado (automóviles), bombillos, fardas, tubos fluorescentes, vidrio de ampolletas. 
                  br
                  br
                  |Material inorgánico: piedras de cualquier tipo, gravilla, arena, cemento, concreto, cerámica, vidrio refractario o de refractarias. 
                  br
                  br
                  |Materiales orgánicos: trapos, papel, cartón, madera, plástico (bolsas, pitillos), caucho, tierra, jeringas.
              tr(style="background-color: #f6f6f6") 
                td Vidrio envase verde
                td Se compra completo o roto. No debe mezclarse con otros colores ni con vidrio plano.
              tr 
                td Vidrio envase transparente (blanco)
                td Se compra completo o roto. No debe mezclarse con otros colores ni con vidrio plano.
              tr(style="background-color: #f6f6f6") 
                td Vidrio plano transparente
                td Se compra completo o roto. No debe mezclarse con otros colores ni con envases. El espejo no es reciclable, por tanto, no debe mezclarse con ningún tipo de vidrio posconsumo para venta.
              tr 
                td Vidrio plano bronce
                td Se compra completo o roto. No debe mezclarse con otros colores ni con envases. El espejo no es reciclable, por tanto, no debe mezclarse con ningún tipo de vidrio posconsumo para venta.
    p Para profundizar en factores alusivos al vidrio y sus procesos de reciclaje, observe con atención los videos que se le proponen a continuación:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .tarjeta.p-5(style="background-color: #dee9f0 ")
              .row.justify-content-center.align-items-center.mb-5
                .col-1: img(src='@/assets/curso/temas/atencion.svg', alt='')
                .col-lg-11
                  p.mb-0.fw-bold Para profundizar en este punto del contenido, se le invita a consultar cuidadosamente los siguientes recursos. 
              a.anexo.mb-4(href="https://www.youtube.com/watch?v=QnvrGBHh2XE" target="_blank" type="application/pdf")
                .row.justify-content-around.align-items-center
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[b Video.] Te invitamos a conocer cómo funciona la plata de reciclaje de vidrio.
              a.anexo.mb-4(href="https://www.youtube.com/watch?v=rGAKfGJqheg" target="_blank" type="application/pdf")
                .row.justify-content-around.align-items-center
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[b Video.] Así se recicla el vidrio.
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.5  Metal
    .card-tema.p-4.mb-5(style="background-color: #d3ede5")(data-aos="zoom-in")
      img.card-1.d-xl-block.d-none(src='@/assets/curso/temas/2/27.png', alt='' style="width: 185px; left: 10%")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8
          img.d-xl-none.d-block(src='@/assets/curso/temas/2/27.png', alt='' style="width: 185px").m-auto
        .col-lg-8
          p.mb-0.p-2 El acero y la chatarra ferrosa son infinitamente reutilizables en la naturaleza, aunque se tienen unas mermas en su procesamiento. La producción de acero a partir del reciclaje de chatarra ferrosa es amigable y sostenible con el medio ambiente, porque disminuye el consumo de recursos naturales no renovables. El acero producido a partir del reciclaje y fundición de chatarra ferrosa queda en condición de acero nuevo cumpliendo con todas las características físico-mecánicas exigidas en las normas nacionales e internacionales para la fabricación de acero.
    .pt-lg-5.pt-0   
      p #[b La mayoría de siderúrgicas colombianas son semiintegradas, lo que implica que su materia prima es la chatarra ferrosa.] La chatarra ferrosa se puede procesar, manipular, preparar y fundir, siempre y cuando no presente un riesgo para la salud de las personas, el medio ambiente o riesgo para los bienes e instalaciones.
    .row.justify-content-center.mb-5
      .col-lg-8
        img(src='@/assets/curso/temas/2/28.svg', alt='').mb-3
        figcaption Nota. ANDI (2017). Calidades de materiales para reciclaje. p.27
    p.mb-5 #[b Conozca, en el siguiente recurso, los requisitos que exige el proceso de reciclaje del metal.s]
    .tarjeta.rounded-pill.p-3.d-inline-block.p-2.color-primario.mb-4
          h4.text-white.mb-0.mx-4 Reciclaje del metal
    p Requisitos que debe cumplir un residuo de metal para ser reciclado
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #dee9f0 " )
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .d-flex.justify-content-center
                .tarjeta.rounded-pill.p-3.d-inline-block.p-2.bg-white.mb-4
                  h4.mb-0  Primer Grupo
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Recipientes cerrados y presurizados –Cilindros con válvulas, sistemas de refrigeración sin purgar.

                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Residuos peligrosos (sólidos, líquidos y plasma).
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Canecas de pintura con residuo superior al 10 %.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Pilas y baterías.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Cofres o cajas fuertes rellenos de concreto.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Filtros de aceite contaminados con aceite. Productos electrónicos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/2/29.png')})`}")
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #dee9f0 " )
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .d-flex.justify-content-center
                div.rounded-pill.p-3.d-inline-block.bg-white.mb-4
                  h4.mb-0 Segundo Grupo
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Metales pesados (plomo, cadmio, etc.).
                  br  
                  |Amortiguadores sellados y similares.

                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Transformadores y capacitores con askarel.

                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Dispositivos con contenido de mercurio.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Materiales con radiactividad.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Acero inoxidable.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Rotores de motores eléctricos y que contengan cobre.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Cemento, tierra, concreto, ladrillos y otros similares.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Chatarra con elementos químicos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/2/30.png')})`}")
      .col-lg-4
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #dee9f0 " )
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .d-flex.justify-content-center
                div.rounded-pill.d-inline-block.p-3.bg-white.mb-4
                  h4.mb-0 Tercer Grupo
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Piezas y partes con asbesto.

                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Chatarra con gomas, cauchos, asfalto y otros polímeros.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Calamina, cascarilla y otros derivados de oxidaciones e impurezas y degradaciones del acero.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Residuales de los procesos de corte y soldadura.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Cuerpos moledores de la industria cementera y cerámica, con alto contenido de cromo y manganeso.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Aleaciones de aceros de alta resistencia, como brocas con tungsteno, cromo-vanadio.
                li.d-flex
                  i.fas.fa-check(style="color: #feb12e")
                  p.mb-0 Otros considerados peligrosos o no aptos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/2/31.png')})`}")

    p.mb-5(data-aos='fade-right') Hay que mencionar, además, que existen condiciones preestablecidas, bajo las cuales serán, o no, aceptados algunos materiales. #[b Se podrá recibir chatarra derivada de los siguientes orígenes o condiciones, si cumplen los requisitos descritos a continuación:]
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        AcordionA.mb-5.acordion-icon(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            div(titulo="Material ferroviario, rieles y tapas de alcantarilla:")
              p El proveedor siempre debe certificar su origen legal y el comprador responsable informará al patio su envío.
            div(titulo="Tanques de almacenamiento de combustible:")
              p Se reciben mediante la presentación de un certificado de desgasificación y tener dos aberturas de un mínimo de 200 x 200 mm.
            div(titulo="Material de guerra, bélico, morteros, balas y similares:")
              p Se recibe mediante la presentación de declaración escrita de organismo militar competente informando que la chatarra se encuentra completamente desactivada y no presenta peligro, pudiendo ser manejada, cizallada, prensada o fundida.
            div(titulo="Tubería petrolera de cañoneo:")
              p La tubería petrolera de cañoneo debe venir sin los estopines y sin el ducto interior donde vienen las cargas explosivas.
      .col-lg-6(data-aos="fade-left"): img.d-lg-block.d-none(src='@/assets/curso/temas/2/32.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right"): img.d-lg-block.d-none(src='@/assets/curso/temas/2/33.png', alt='')
      .col-lg-6(data-aos="fade-left")
        AcordionA.mb-5.acordion-icon(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            div(titulo="Cilindros de gases:")
              p Sólo serán aceptados si estuviesen despresurizados y sin válvulas.
            div(titulo="Canecas posconsumo agroquímico:")
              p Sólo serán aceptadas si presentan certificado de triple lavado, entregado por la empresa, firmado por químico o agroquímico, siempre que presenten símbolos de “peligro”, “riesgo de envenenamiento” y otros similares.
            div(titulo="Material con riesgo biológico:")
              p Para material derivado de residuos biológicos u hospitalarios, como jeringas, instrumentación, etc, se debe tener certificado que ya fueron tratados y el riesgo fue eliminado para proceder con la fundición
            div(titulo="Material que requiere operación específica:")
              p Materiales de difícil descargue, extradimensionados o cuyo peso sea superior a 4 toneladas deberán ser comunicados con anticipación, para coordinar, o no, su recepción.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .tarjeta.p-5(style="background-color: #dee9f0 ")
          .row.justify-content-center.align-items-center.mb-5
            .col-1: img(src='@/assets/curso/temas/atencion.svg', alt='')
            .col-lg-11
              p.mb-0.fw-bold Para profundizar en este punto del contenido, se le invita a consultar cuidadosamente los siguientes recursos. 
          a.anexo.mb-4(:href="obtenerLink('downloads/Anexo_3_Tabla5_TiposDeMetales.pdf')" target="_blank")
            .row.justify-content-around.align-items-center
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg" style="width: 50px")
              .anexo__texto
                p #[b Anexo.] Tipos de metales. 
          a.anexo.mb-4(href="https://www.youtube.com/watch?v=YFuh7cIvmyE" target="_blank" type="application/pdf")
            .row.justify-content-around.align-items-center
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Video.] Reciclaje de metales.
    Separador 
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.6 Residuos de construcción y demolición (RCD)
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2/34.svg', alt='')
          .col-lg-10 
            p Los sobrantes de las actividades de demolición, excavación, construcción y/o reparaciones de las obras civiles, o de otras actividades conexas, complementarias o análogas, son conocidos como los RCD. Los residuos de construcción y demolición son materiales con un alto potencial de ser reciclados, debido a la composición de sus materiales. En aquellos lugares donde no se realizan separaciones de RCD, se desaprovechan materias primas, que, con un adecuado tratamiento, podrían ser recicladas o reutilizadas.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0  Por otro lado, el no aprovechamiento de estos residuos causa problemáticas ambientales, como la inadecuada disposición, la reducción de la vida útil de rellenos sanitarios y sitios de disposición final de RCD, e impactos negativos, como el cambio paisajístico, la contaminación de fuentes hídricas, la generación de material particulado, la compactación y cambio de uso de los suelos, la colmatación de los sistemas de captación de aguas lluvia, entre otros.
      .col-lg-4: img(src='@/assets/curso/temas/2/35.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="zoom-in")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/2/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-9.mb-3.mb-sm-0
                  h4 Clasificación de los RCD
                  p.text-small Lo invitamos a profundizar en la temática relacionada con la clasificación de los residuos de construcción y demolición para las etapas constructivas.
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_4_Tabla6_ClasificaciónRCD.pdf')" target="_blank")
                    span Descargar 
                    i.fas.fa-file 
    p.mb-5(data-aos='fade-right') Habría que decir también que los diferentes residuos que se originan en la construcción y demolición de obras pueden ser aprovechados y otros no, por lo que sólo pueden ser llevados a un sitio de disposición final. A continuación, se muestran las alternativas de uso:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 7
      br
      span.fst-italic Alternativas de gestión de uso de los residuos
    .row.justify-content-center.mb-3
      .col-lg-10(data-aos="zoom-in")
        .tabla-a.color-acento-botones.mb-5
          table
            caption Nota. Alcaldía Mayor de Bogotá (2014). Guía para la elaboración del Plan de Gestión Integral de Residuos de Construcción y Demolición (RCD) en obra. p,28
            thead(style="border-top: 0")
            tbody.text-center
              tr(style="background-color: #e2eacd ").fw-bold
                td RESIDUO
                td ALTERNATIVA DE USO
              tr
                td CONCRETOS
                td
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reutilizar como masa para rellenos
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reutilizar como suelos en carreteras
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclar como grava suelta
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclar para producción de morteros y cemento
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclar como granulado
              tr
                td CERÁMICOS
                td
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclar como adoquín
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclar como fachadas
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclar para acabados
              tr
                td ASFALTO
                td
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reutilizar como masa para rellenos
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclar como asfalto
              tr
                td METALES
                td
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reutilizar para aplicación en otros productos
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclar como aleación
              tr
                td MADERA
                td
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reutilizar para casetones, vallados y linderos
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclar para tableros y aglomerados
              tr
                td VIDRIO
                td
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclaje para vidrio
              tr
                td PÉTREOS
                td
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reutilizar como áridos finos y gruesos
              tr
                td PLÁSTICOS
                td
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclar como plásticos
              tr
                td TEJAS, BLOQUES, ENTRE OTROS
                td
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reciclar como base para nuevos productos
              tr
                td TIERRA DE EXCAVACIÓN
                td
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reutilizar como relleno y recuperación de salud
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Estabilización de suelos
              tr
                td ELEMENTOS ARQUITECTÓNICOS
                td
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-check(style="color: #fdaf3e")
                      p.mb-0 Reutilizar como nuevos productos
    p.mb-5(data-aos='fade-right') Visualice estos dos videos para ampliar su saber respecto del reciclaje de desechos de construcción:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .tarjeta.p-5(style="background-color: #dee9f0 ")
          .row.justify-content-center.align-items-center.mb-5
            .col-1: img(src='@/assets/curso/temas/atencion.svg', alt='')
            .col-lg-11
              p.mb-0.fw-bold Para profundizar en este punto del contenido, se le invita a consultar cuidadosamente los siguientes recursos. 
          a.anexo.mb-4(href="https://www.youtube.com/watch?v=V4cRf5Nas_k" target="_blank" type="application/pdf")
            .row.justify-content-around.align-items-center
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Video.] ¿Cómo se hace el reciclaje de desechos de construcción y llantas?
          a.anexo.mb-4(href="https://www.youtube.com/watch?v=Y0wYrrdN48Q" target="_blank" type="application/pdf")
            .row.justify-content-around.align-items-center
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Video.] Proceso de reciclaje de papel.
    Separador
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.7 Residuos aparatos eléctricos, electrónicos y de telecomunicaciones (RAEE)
    .bloque-derecha.mb-5(data-aos="zoom-in")
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/2/35.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Los RAEE son residuos de manejo diferenciado y se prohíbe su disposición final en rellenos sanitarios.] Deben ser recolectados y gestionados por los productores y se prioriza su aprovechamiento mediante empresas gestoras que cuenten con licencia ambiental para ello. Es decir, la normativa busca incentivar el aprovechamiento de los residuos de aparatos eléctricos y electrónicos desde una perspectiva económica y social, y promover la participación e integración de todos los actores involucrados en la elaboración de las estrategias, planes y proyectos que desarrollen la gestión integral de los RAEE, entre otros aspectos.
    .bg-2.p-5.mb-5(data-aos="zoom-in")
      .tarjeta.rounded-pill.p-3.d-inline-block.p-2.color-primario.mb-4
          h4.text-white.mb-0.mx-4 Categorías de los RAEE
      .row.justify-content-center.mb-5
        .col-lg-3.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2/36.png', alt='')
        .col-lg-9 
          p Los grandes y pequeños electrodomésticos abarcan la línea blanca, mientras los equipos de informática y telecomunicaciones conforman la línea gris; y los aparatos electrónicos de consumo hacen parte de la línea marrón.
    .bg-1.p-5.mb-5(data-aos="zoom-in")
      .tarjeta.rounded-pill.p-3.d-inline-block.p-2.color-primario.mb-4
          h4.text-white.mb-0.mx-4 Categorías alternas
      .row.justify-content-center.mb-5
        .col-lg-3.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2/37.png', alt='')
        .col-lg-9 
          p Las demás categorías corresponden a los otros tipos de aparatos eléctricos y electrónicos que pueden ser usados tanto en el hogar como en las empresas, el comercio o en las instituciones, como los aparatos de alumbrado, las herramientas eléctricas y electrónicas (con excepción de las herramientas industriales fijas de gran envergadura), los juguetes o equipos deportivos y de ocio, los aparatos médicos (con excepción de todos los productos implantados e infectados), los instrumentos de vigilancia y control y las máquinas expendedoras de productos y dinero.
    .bg-2.p-5.mb-5(data-aos="zoom-in")
      .tarjeta.rounded-pill.p-3.d-inline-block.p-2.color-primario.mb-4
          h4.text-white.mb-0.mx-4 Sustancias peligrosas
      .row.justify-content-center.mb-5
        .col-lg-3.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2/38.png', alt='')
        .col-lg-9 
          p Asimismo, se han identificado las sustancias peligrosas que más comúnmente están presentes en los RAEE. Hay que tener en cuenta que los RAEE pueden o no ser peligrosos; si el RAEE es no peligroso, se debe considerar si es especial o reciclable o no aprovechable; y si es peligroso, la forma de saberlo es teniendo en cuenta su composición, como en la tabla siguiente.
    .bg-1.p-5.mb-5(data-aos="zoom-in")
      .tarjeta.rounded-pill.p-3.d-inline-block.p-2.color-primario.mb-4
          h4.text-white.mb-0.mx-4 Según la ley
      .row.justify-content-center.mb-5
        .col-lg-3.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2/39.png', alt='')
        .col-lg-9 
          p La Ley 1672 de 2013 le da el carácter de manejo diferenciado a los RAEE, prohíbe su disposición final en los rellenos sanitarios y los restringe a rellenos de seguridad, para que sean retomados por los productores de aparatos eléctricos y electrónicos, mediante sistemas de recolección y de gestión ambientalmente segura. Así, se busca que el consumidor devuelva los RAEE sin ningún costo.
          figcaption Minambiente (2017). Política Nacional integral de residuos de aparatos electrónicos p.25.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .tarjeta.p-5(style="background-color: #dee9f0 ")
              .row.justify-content-center.align-items-center.mb-5
                .col-1: img(src='@/assets/curso/temas/atencion.svg', alt='')
                .col-lg-11
                  p.mb-0.fw-bold Para profundizar en este punto del contenido, se le invita a consultar cuidadosamente los siguientes recursos. 
              a.anexo.mb-4(:href="obtenerLink('downloads/Anexo_5_Tabla10_SustanciasPeligrosasRAEE.pdf')" target="_blank")
                .row.justify-content-around.align-items-center
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg" style="width: 50px")
                  .anexo__texto
                    p #[b Anexo.] Sustancias peligrosas R.A.E.E
              a.anexo.mb-4(href="https://www.youtube.com/watch?v=5upwOp_73yw" target="_blank" type="application/pdf")
                .row.justify-content-around.align-items-center
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[b Video.] Planta de reciclado de R.A.E.E
              a.anexo.mb-4(href="https://www.youtube.com/watch?v=PwJgk1uAzxA" target="_blank" type="application/pdf")
                .row.justify-content-around.align-items-center
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[b Video.] El reciclaje de materiales electrónicos
    
    Separador
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.8 Residuos orgánicos
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/2/40.png', alt='')
      .col-lg-6(data-aos="fade-left")
        div(style="background-color: #f3f9ff ").p-4.h-100
          p.mb-0 #[b La mayor cantidad de residuos sólidos que se generan son orgánicos, por lo que esto representa una problemática por resolver.] De acuerdo con la GTC 53-7 (2006), existen diferentes estrategias alternativas de tratamiento de residuos orgánicos no peligrosos, las cuales consisten principalmente en la aplicación de procesos biológicos y/o bioquímicos, termoquímicos, físicos y/o fisicoquímicos.
    .row.justify-content-center.mb-3
      .col-lg-10(data-aos="zoom-in")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/2/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-10.mb-3.mb-sm-0
                  h4 Métodos de aprovechamiento de residuos orgánicos no peligrosos
                  p Lo invitamos a profundizar en los aspectos teóricos y conceptuales relativos al manejo y administración de residuos sólidos orgánicos no peligrosos
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=PwJgk1uAzxA" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file



















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.cajon-b:before
  width: 20%
  height: 100%
.tarjeta-azulc
  background-color: #deefff
</style>
