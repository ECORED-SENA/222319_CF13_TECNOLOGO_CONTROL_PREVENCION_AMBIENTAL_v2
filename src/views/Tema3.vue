<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Aprovechamiento y tratamiento residuos peligrosos
    .row.justify-content-center
      .col-lg-8.mb-lg-0.mb-3
        .cajon-b.color-acento-contenido.p-3.mb-5
          p.mb-0 De acuerdo con el informe nacional de generación y manejo de residuos o desechos peligrosos Colombia 2014-2015 del Instituto de hidrología, meteorología y estudios ambientales (IDEAM) (2016), el aprovechamiento de los residuos peligrosos se entiende como toda actividad orientada a recuperar el valor remanente o el poder calorífico de los materiales que componen el residuo.
      .col-lg-4.col-6: img.d-lg-block.d-none(src='@/assets/curso/temas/3/1.png', alt='')
    div(style="background-color: #dee9f0").p-4.mb-5
      .row.justify-content-center.mb-5
        .col-lg-1.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/3/2.svg', alt='')
        .col-lg-11
          p Las recomendaciones dadas por el Área Metropolitana del Valle de Aburrá (2011), en la guía para la gestión de residuos peligrosos, manifiestan que, para seleccionar el tipo de aprovechamiento adecuado, se debe realizar un estudio previo a cada residuo, teniendo en cuenta características químicas como la familia, el estado de la materia, la cantidad, la frecuencia de generación, el transporte del material, el valor del servicio, entre otros aspectos. De este modo, se puede tomar la decisión de si el residuo es susceptible de aprovechamiento o si definitivamente ya no tiene uso y ha llegado al fin de su ciclo de vida, momento en el cual deberá gestionarse su disposición final.
            br
            br
            |#[b Existen diferentes técnicas de aprovechamiento para los residuos peligrosos y se clasifican de acuerdo al principio de desactivación de la peligrosidad.]
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Tratamientos físicos
    p.mb-5(data-aos='fade-right') Consisten, principalmente, en la eliminación del contenido de agua del residuo sólido peligroso, con el fin de que esta no se filtre al suelo. Entre las diferentes técnicas, se encuentran:
    .bg-1.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-6: img(src='@/assets/curso/temas/3/3.png', alt='')
        .col-lg-8
          ul.lista-ul--color
            li
              i.fas.fa-check(style="color: #feb12e")
              |  #[b Sedimentación:] se asientan los sólidos por acción de la gravedad para separarlos del líquido.

            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Centrifugación:] se utiliza el movimiento circular para generar fuerza centrífuga que permite la remoción del agua.

            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Autoclave:] esta técnica, además de la evaporación del agua mediante calor y presión, esteriliza los residuos, minimizando su riesgo biológico.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Absorción:] es la adhesión de sustancias contaminantes gaseosas sobre superficies líquidas para que se disuelvan.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Tratamientos químicos
    .bg-2.p-4.mb-5
      p El principio de este tipo de tratamiento es la adición de un componente químico para la eliminación de la característica de peligrosidad del residuo. Entre las técnicas principales, se encuentran:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          ul.lista-ul--color
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Oxidación y reducción química:] adición de componentes ricos en oxígeno para la transformación de componentes peligrosos.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Neutralización:] adición de sustancias ácidas o básicas, de acuerdo con las características de peligrosidad para la neutralización del pH.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Precipitación:] uso de componentes químicos para la solidificación y posterior sedimentación de componentes peligrosos.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Decloración:] eliminación química del cloro en los residuos.

            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Hidrólisis:] ruptura de componentes peligrosos en soluciones acuosas, basándose en la adición de agua.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Electrólisis:] ruptura de componentes peligrosos a partir de descargas eléctricas.
        .col-lg-4.col-6: img(src='@/assets/curso/temas/3/4.png', alt='')
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Tratamientos fisicoquímicos
    .bg-1.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-6: img(src='@/assets/curso/temas/3/5.png', alt='')
        .col-lg-8
          p Este tipo de métodos emplea tanto sustancias químicas como procesos físicos para poder eliminar las características de peligrosidad en los residuos. Entre algunos métodos, se encuentran:
          ul.lista-ul--color
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Extracción de solventes:] por el principio de polaridad, algunas sustancias que tienen características de peligrosidad se pueden migrar a fases acuosas o grasosas, para ser separadas posteriormente por decantación.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Floculación y coagulación:] se agregan sustancias químicas con el fin de eliminar las cargas electrostáticas que tienen algunos componentes peligrosos; de este modo, se forman flocs que luego de una sedimentación se retiran de las fases acuosas.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Stripping:] a través de corrientes de gas, se separan componentes de peligrosidad con características volátiles.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Lixiviación:] se permite la separación de componentes líquidos solubles en su parte sólida.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Ozonólisis:] fraccionamiento de moléculas peligrosas mediante el uso de ozono.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Tratamientos biológicos
    .bg-2.p-4.mb-5
      p En este tipo de tratamientos, se utilizan diferentes microorganismos, hongos, plantas y otros seres vivos en función de la reducción de peligrosidad de los residuos, para su posterior uso. Algunas de las técnicas más comunes son:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          ul.lista-ul--color
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Lodos activados:] se realiza la biodegradación de especies orgánicas con lodo bioactivado en fase acuosa. 
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Biológico giratorio:] un filtro rico en material bacteriano se pone en contacto con los residuos para eliminar las especies químicas orgánicas acuosas.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Lagunas aireadas:] en este tratamiento, se eliminan los componentes químicos peligrosos por oxidación en las cavidades profundas de la laguna.

            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Digestión anaerobia:] degradación de componentes a través de acción de microorganismos en ausencia de oxígeno.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Bioremediación:] eliminación de componentes peligrosos a través de mezclas de microorganismos y enzimas.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Landfarming:] los materiales contaminados son esparcidos en una superficie o en el suelo y, a través de métodos biológicos, se eliminan los contaminantes peligrosos de los residuos.
            li
              i.fas.fa-check(style="color: #feb12e")
              | #[b Fitorremediación:] a través de algunas especies vegetales, se extraen contaminantes inorgánicos de los suelos para acumularlos en el tejido vegetal.
        .col-lg-4.col-6: img(src='@/assets/curso/temas/3/6.png', alt='')
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5 Técnicas de solidificación y encapsulamiento
    p.mb-5(data-aos='fade-right') Con este tipo de técnicas, se busca acumular, de forma inorgánica, los componentes de peligrosidad de los residuos. Entre las técnicas más utilizadas, se encuentran:
    .row.justify-content-center.mb-5
      .col-lg-6.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/3/7.png', alt='')
      .col-lg-6 
        AcordionA.mb-5.acordion-icon(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            div(titulo="Solidificación")
              p A partir de los residuos tratados, se forma una masa monolítica, incrementando su dureza y disminuyendo la compresibilidad y permeabilidad.
            div(titulo="Estabilización")
              p A través de esta técnica, se busca reducir el área superficial de los RESPEL, para reducir la transferencia de masa y la solubilidad de los contaminantes.
            div(titulo="Fijación inorgánica")
              p Los residuos sólidos peligrosos se mezclan con materiales como el cemento o la cal.
            div(titulo="Encapsulamiento")
              p Los residuos sólidos peligrosos se insertan en capas de asfalto, polietileno, o vidrio.
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.6 Técnicas térmicas
    div(style="background-color: #f3f9ff")
      .row.justify-content-center.mb-5
        .col-lg-8
          .p-4
            p Las técnicas térmicas buscan la desintegración de los componentes peligrosos de los residuos sólidos a partir del incremento de temperatura; las más utilizadas en la industria son:
            ul.lista-ul--color
              li
                i.fas.fa-check(style="color: #f9b033")
                | #[b Incineración:] combustión con oxígeno, donde se oxidan los componentes peligrosos del residuo sólido. 

              li
                i.fas.fa-check(style="color: #f9b033")
                | #[b Coprocesamiento en horno cementero:] se utiliza la misma unidad de producción de Clinker para la combustión de residuos.
              li
                i.fas.fa-check(style="color: #f9b033")
                |  #[b Pirólisis:] descomposición térmica en ausencia de oxígeno.
              li
                i.fas.fa-check(style="color: #f9b033")
                | #[b Gasificación:] combustión incompleta en ausencia de oxígeno.
              li
                i.fas.fa-check(style="color: #f9b033")
                | #[b Arco de plasma:] volatilización y combustión del residuo por el contacto con gas energizado.
              li
                i.fas.fa-check(style="color: #f9b033")
                | #[b Oxidación en sal fundida:] oxidación sin llama, a temperaturas entre 1500 y 2000°C, donde los residuos están en contacto con sales alcalinas fundidas.
        .col-lg-4.col-8: img(src='@/assets/curso/temas/3/8.png', alt='')














</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
