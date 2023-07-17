<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Economía circular
    p.mb-5(data-aos='fade-right') La economía circular es una estrategia innovadora de diseño, producción y creación de valor, que beneficia a las empresas, la sociedad y el medio ambiente, reemplazando el esquema clásico de producción de la “economía lineal”. En la “economía lineal”, se extraen recursos, se producen bienes, se consumen y al final se desechan. 
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La economía circular, en cambio, busca optimizar el uso de insumos, incrementar la vida útil de los productos y, al final, por medio de la recirculación de materiales, no desperdiciar nada y reutilizarlo todo. Con esto, las empresas mitigan sus impactos ambientales, optimizan sus costos, generan nuevos ingresos e incrementan su rentabilidad.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 2
      br
      span.fst-italic Economía lineal vs economía circular
    img(src='@/assets/curso/temas/5/1.svg', alt='Imagen que muestra dos esquemas de funcionamiento de la economía productiva, así: Economía lineal, que vincula acciones como adquirir recursos, producir con esos recursos y desechar basura. En contraposición está la Economía circular, que recircula, renueva y regenera tanto recursos como productos alcanzados en la producción.').mb-3
    figcaption.d-inline-block.mb-5 Nota. KE-LAB (2018). Qué es la economía circular
    p.mb-5(data-aos='fade-right') A continuación, profundice en algunos aspectos del orden operativo que refuerzan los principios de la economía circular:
    .row.justify-content-center.mb-5
      .col-lg-10
        div(style="background-color: #f6f6f6 ").p-4
          SlyderF.mb-5.slyder-100(columnas="col-lg-6 col-xl-4")
            .bg-white.p-4.h-100(style='border-bottom: 5px solid #feb12e')
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/temas/5/icon.svg' alt='AvatarTop')
              h5.text-center Rechazar
              p.text-center Aquello que no necesitamos.
            .bg-white.p-4.h-100(style='border-bottom: 5px solid #feb12e')
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/temas/5/icon.svg' alt='AvatarTop')
              h5.text-center Reducir
              p.text-center Nuestro consumo.
            .bg-white.p-4.h-100(style='border-bottom: 5px solid #feb12e')
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/temas/5/icon.svg' alt='AvatarTop')
              h5.text-center Reutilizar o reusar
              p.text-center Productos en buen estado desechados por otro consumidor.
            .bg-white.p-4.h-100(style='border-bottom: 5px solid #feb12e')
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/temas/5/icon.svg' alt='AvatarTop')
              h5.text-center Reparar
              p.text-center Para alargar la vida de un producto.
            .bg-white.p-4.h-100(style='border-bottom: 5px solid #feb12e')
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/temas/5/icon.svg' alt='AvatarTop')
              h5.text-center Restaurar
              p.text-center Un producto antiguo para modernizarlo.
            .bg-white.p-4.h-100(style='border-bottom: 5px solid #feb12e') 
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/temas/5/icon.svg' alt='AvatarTop')
              h5.text-center Remanufacturar
              p.text-center O reconstruir manualmente o con medios mecánicos aquello que necesitamos.
            .bg-white.p-4.h-100(style='border-bottom: 5px solid #feb12e')
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/temas/5/icon.svg' alt='AvatarTop')
              h5.text-center Rediseñar
              p.text-center Con criterios de sostenibilidad.
            .bg-white.p-4.h-100(style='border-bottom: 5px solid #feb12e')
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/temas/5/icon.svg' alt='AvatarTop')
              h5.text-center Reciclar
              p.text-center La materia prima para crear nuevos productos.
            .bg-white.p-4.h-100(style='border-bottom: 5px solid #feb12e')
              .row.justify-content-center.mb-3
                .col-5
                  img(src='@/assets/curso/temas/5/icon.svg' alt='AvatarTop')
              h5.text-center Recuperar
              p.text-center Materiales con la incineración para generar energía.

</template>

<script>
export default {
  name: 'Tema5',
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

<style lang="sass">
.cajon.color-primario
  background-color: #f4fbf9
  &:before
    background-color: #d3ede5
</style>
