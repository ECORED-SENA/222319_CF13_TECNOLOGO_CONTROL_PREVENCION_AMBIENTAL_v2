<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Riesgos en aprovechamiento y tratamiento de residuos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/4/1.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p El personal que labora en las empresas de aprovechamiento y tratamiento de residuos está propenso a varios riesgos, por ende, es importante el uso de elementos de protección personal y seguridad y salud en los ambientes de trabajo.
    .titulo-sexto.color-secundario(data-aos='fade-right')
      h5 Tabla 3
      br
      span.fst-italic Riesgos en la labor
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .tabla-a
          table
            caption Nota. Adaptado de P+L (2017) Análisis de riesgo de la seguridad e higiene ocupacional durante el manejo de residuos sólidos y reciclaje de plástico de polietileno. p.66-68.
            thead(style="background-color: #bfdb77; border-top: 0 ")
              tr
                th RIESGOS
                th OBSERVACIONES
            tbody
              tr
                td FÍSICO RUIDO
                td Ruido de equipos y maquinaria en general en la planta de reciclaje, como es el caso de romper el vidrio, triturar algún material.
                  br
                  |Se requiere de protección acústica.
              tr(style="background-color: #f6f6f6 ")
                td BIOLÓGICO
                td Mordedura de algún animal, como los roedores, porque, en algunos casos, el almacenamiento de materiales, como envases, llega con residuos que atraen estos vectores.
                  br
                  |Se requiere manejo de plagas en el lugar y estar vacunado contra la hepatitis B.
              tr
                td DE SEGURIDAD MECÁNICO
                td Aplastamiento o corte de alguna extremidad, como las manos, con herramientas o maquinaria. Protección, demarcación de áreas, uso de casco, nivel de apilado requerido según norma, amarras de la mercancía, sensores de movimiento en la maquinaria, capacitación al personal de la labor, guantes de carnaza, overol y no uso de joyas o accesorios que puedan crear atrapamientos en la maquinaria.
              tr
                td FÍSICO ILUMINACIÓN
                td Por exceso al aire libre o por defecto. Si es por exceso, uso de monogafas con filtro solar; y si es por defecto, mejor iluminación del lugar.
              tr
                td FÍSICO VIBRACIÓN
                td La vibración de la maquinaria. El operario tiene que entrar en contacto físico con la máquina, razón por la cual sufre mayor exposición a vibración en cuerpo total. Uso de elementos que mitiguen la vibración.
              tr
                td BIOMECÁNICO MOVIMIENTO REPETITIVO
                td Movimientos repetitivos en las actividades requieren pausas activas.
              tr
                td BIOMECÁNICO SOBREESFUERZO
                td Manejo manual de cargas pesadas, uso de postura adecuada y control de peso
              tr
                td SEGURIDAD LOCATIVA
                td Caída de objetos , caída a nivel de piso, uso de casco y botas.
              tr
                td QUÍMICOS
                td Inhalación o contacto con la piel de sustancias químicas que se encuentren en los materiales. Se requiere de mascarilla de gases y guantes resistentes a químicos.
                
                
                

</template>

<script>
export default {
  name: 'Tema4',
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
