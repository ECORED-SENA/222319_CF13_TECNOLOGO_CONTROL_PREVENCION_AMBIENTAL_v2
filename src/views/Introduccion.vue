<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') Aquí comienza el estudio del componente formativo #[span.color-acento-contenido #[b “Gestionar integralmente el manejo de residuos según normativa vigente”.]] Como primer paso en este recorrido, observe con atención el video que se muestra enseguida. Muchos éxitos en esta experiencia:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/i28zdRiZ7cU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Vide. Gestionar integralmente el manejo de residuos según normativa vigente.
    p.mb-5(data-aos='fade-right') Para adentrarse más y mejor en el estudio de este componente, considere sus respuestas a los anteriores interrogantes planteados en el video introductorio. A la vez, se le recomienda observar los videos que se proponen a continuación: 
    .row.justify-content-center.mb-2
      .col-lg-10 
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/intro/icon.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-10.mb-3.mb-sm-0
                  h4.mb-1 Inadecuada disposición de residuos sólidos
                  p.text-small Lo invitamos a consultar el siguiente video donde se exponen las acciones que la autoridad ambiental  ha venido tomando ante la inadecuada disposición de residuos sólidos en una vivienda de la zona urbana del municipio.
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=P9nY_4VIusE" target="_blank" type="application/pdf")
                    span Ver video 
                    i.fas.fa-video
    .row.justify-content-center.mb-5
      .col-lg-10 
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/intro/icon.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-10.mb-3.mb-sm-0
                  h4.mb-1 Alerta sanitaria y ambiental en rellenos sanitarios del país
                  p.text-small Lo invitamos a consultar el siguiente video del noticiero del Senado de Colombia donde se expone la crisis sanitaria y ambiental presente en los rellenos sanitarios del país durante el año 2017.
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=k8BouGzKtqA" target="_blank" type="application/pdf")
                    span Ver video 
                    i.fas.fa-video
    .row.justify-content-center.mb-5.align-items-center
      .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-10
        p Para la elaboración de este componente, se abordaron varios autores conocidos en #[b manejo de residuos según normativa vigente], de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de #[b prevención y control ambiental.]
        
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
