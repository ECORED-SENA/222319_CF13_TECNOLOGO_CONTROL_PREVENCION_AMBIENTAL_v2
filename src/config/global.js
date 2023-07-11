export default {
  global: {
    componenteFormativo:
      'Gestionar integralmente el manejo de residuos según normativa vigente',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves del control operacional en los sistemas de tratamiento para los diferentes tipos de residuos. Así mismo, afianzará al aprendiz en lo relacionado con tipos de materiales, diferentes tecnologías y metodologías de reciclaje, tratamiento y/o disposición de residuos, necesarias para identificar la mejor alternativa de gestión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    // imagenesDecorativasBanner: [
    //   {
    //     clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-2'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //   },
    // ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos generales ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Aprovechamiento y tratamiento de los residuos sólidos no peligrosos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Papel y cartón',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plásticos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tetra Pak',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Vidrio',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Metal',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Residuos de construcción y demolición (RCD)',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo:
              'Residuos aparatos eléctricos, electrónicos y de telecomunicaciones (RAEE)',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Residuos orgánicos',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aprovechamiento y tratamiento residuos peligrosos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tratamientos físicos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tratamientos químicos ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tratamientos fisicoquímicos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Tratamientos biológicos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Técnicas de solidificación y encapsulamiento',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Técnicas térmicas',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Riesgos en aprovechamiento y tratamiento de residuos ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Economía circular ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción ',
      referencia:
        'Sonsón Televisión Oficial. (2018). <em>Inadecuada disposición de residuos sólidos</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=P9nY_4VIusE',
    },
    {
      tema: 'Introducción ',
      referencia:
        'Senado Colombia. (2017). <em>Alerta sanitaria y ambiental en rellenos sanitarios del país.</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=k8BouGzKtqA ',
    },
    {
      tema: 'Papel y cartón ',
      referencia:
        'Osorio, E. (2018). <em>Cómo se hace el papel reciclado</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=V4cRf5Nas_k ',
    },
    {
      tema: 'Papel y cartón ',
      referencia:
        'KimberlyClarkPeru. (2011). <em>Proceso del reciclaje de papel</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6kRtsPABg4A ',
    },
    {
      tema: 'Plásticos ',
      referencia:
        'Fomentar aprovechamiento de residuos sólidos. (2017). <em> Reciclaje del plástico y proceso de producción</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sSgsT7D5fVY ',
    },
    {
      tema: 'Plásticos ',
      referencia:
        'The Coca-Cola Co. (2018). <em>El paso a paso en el reciclaje de una botella pet</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eDD9sO8SkOY ',
    },
    {
      tema: 'Tetra Pak ',
      referencia:
        'Luis Carlo P. (2014). <em>Tetrapak. Separación del aluminio y el plástico. Problema resuelto</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bXOyzkA0a4U ',
    },
    {
      tema: 'Vidrio ',
      referencia:
        'Socyaoficial. (2015). <em>Te invitamos a conocer cómo funciona la Planta de Reciclaje de Vidrio</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QnvrGBHh2XE ',
    },
    {
      tema: 'Vidrio ',
      referencia: 'Telemadrid. (2011). <em>Así se recicla el vidrio</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rGAKfGJqheg ',
    },
    {
      tema: 'Metal ',
      referencia: 'Tecmany Domotica. (2013). <em>Reciclaje de metales</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YFuh7cIvmyE ',
    },
    {
      tema: ' Residuos de construcción y demolición ',
      referencia:
        'Unoreciclaje. (2017). <em>Planta reciclaje para residuos de madera, RCD y RSI</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kmY7FGBXzEU ',
    },
    {
      tema: 'Residuos de construcción y demolición ',
      referencia:
        'Noticias Caracol. (2019). <em>¿Cómo se hace el reciclaje de desechos de construcción y llantas?</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Y0wYrrdN48Q ',
    },
    {
      tema:
        'Residuos Aparatos eléctricos, electrónicos y de telecomunicaciones ',
      referencia:
        'Unoreciclaje. (2015). <em>Planta de reciclado de R.A.E.E</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5upwOp_73yw ',
    },
    {
      tema:
        'Residuos Aparatos eléctricos, electrónicos y de telecomunicaciones ',
      referencia:
        'Twenergy. (2015). <em>El reciclaje de materiales electrónicos</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PwJgk1uAzxA ',
    },
    {
      tema: 'Residuos orgánicos ',
      referencia:
        'TvAgro. (2018). <em>Cómo las plantas de compostaje hacen abonos orgánicos-TvAgro por Juan Gonzalo Angel</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1mlNYly0KXw ',
    },
    {
      tema: 'Residuos orgánicos ',
      referencia:
        'Cableplus Televisión Guarne. (2015). <em>Planta de tratamiento de residuos orgánicos- E.S.P Guarne 2015</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dTq4EmmeJoc ',
    },
    {
      tema: 'Economía circular ',
      referencia:
        'COTEC. (2017). <em>Economía circular: descubre lo que es antes de que reviente el planeta</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Lc4-2cVKxp0&feature=youtu.b',
    },
    {
      tema: 'Conceptos generales ',
      referencia:
        'ICONTEC. (2006). <em>Gestión Ambiental residuos sólidos – Guía para el aprovechamiento de los residuos orgánicos no peligrosos</em>  (GTC 53-7).  ',
      tipo: 'Guia',
      link: 'http://biblioteca.sena.edu.co/ ',
    },
    {
      tema: 'Papel y cartón ',
      referencia:
        'ICONTEC. (2003). <em>Gestión Ambiental residuos sólidos – Guía para el reciclaje de papel y cartón</em> (GTC 53-4). ',
      tipo: 'Guia',
      link: 'http://biblioteca.sena.edu.co/ ',
    },
    {
      tema: 'Plásticos ',
      referencia:
        'ICONTEC. (2004a). <em>Gestión Ambiental residuos sólidos – Guía para el aprovechamiento de los residuos plásticos</em> (GTC 53-2). ',
      tipo: 'Guia',
      link: 'http://biblioteca.sena.edu.co/ ',
    },
    {
      tema: 'Vidrio ',
      referencia:
        'ICONTEC. (2004b). <em>Gestión Ambiental residuos sólidos – Guía para el aprovechamiento de envases de vidrio</em> (GTC 53-3). ',
      tipo: 'Guia',
      link: 'http://biblioteca.sena.edu.co/ ',
    },
    {
      tema: 'Metal ',
      referencia:
        'ICONTEC (2004c). <em>Gestión Ambiental residuos sólidos – Guía para el aprovechamiento de los residuos metálicos</em> (GTC 53-5). ',
      tipo: 'Guia',
      link: 'http://biblioteca.sena.edu.co/ ',
    },
  ],
  glosario: [
    {
      termino: 'Aprovechamiento y/o valorización ',
      significado:
        'Es el proceso de recuperar el valor remanente o el poder calorífico de los materiales que componen los residuos o desechos peligrosos, por medio de la recuperación, el reciclado o la regeneración. <br> (Ministerio de Ambiente Vivienda y Desarrollo Territorial (2015) Decreto 1076 Artículo 2.2.6.1.1.3. Definiciones) ',
    },
    {
      termino: 'Disposición final ',
      significado:
        'Es el proceso de aislar y confinar los residuos o desechos peligrosos, en especial los no aprovechables, en lugares especialmente seleccionados, diseñados y debidamente autorizados, para evitar la contaminación y los daños o riesgos a la salud humana y al ambiente. <br>(Ministerio de Ambiente Vivienda y Desarrollo Territorial (2015) Decreto 1076 Artículo 2.2.6.1.1.3. Definiciones) ',
    },
    {
      termino: 'Gestión externa de residuos ',
      significado:
        'Son las operaciones realizadas fuera del centro productor; recogida, traslado al centro de tratamiento y eliminación. 4) Recogida y transporte a Plantas de Transferencia o Tratamiento. 5) Tratamiento y eliminación. Desde un punto de vista general los residuos que sufren una mala gestión, ya sea en su recogida, tratamiento o eliminación final, provocan una degradación del Medio Ambiente, por lo que resulta imprescindible un adecuado tratamiento de estos, desde el momento de su generación hasta que son eliminados.  <br>Área de salud de Cáceres (2015) Manual de gestión interna y externa de residuos. p.2 ',
    },
    {
      termino: 'Gestión integral de residuos sólidos. ',
      significado:
        'Es el conjunto de operaciones y disposiciones encaminadas a dar a los residuos producidos el destino más adecuado desde el punto de vista ambiental, de acuerdo con sus características, volumen, procedencia, costos, tratamiento, posibilidades de recuperación, aprovechamiento, comercialización y disposición final. (Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002) Decreto 1713 p.3) ',
    },
    {
      termino: 'Manejo integral de residuos ',
      significado:
        'Es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o la eliminación de los residuos o desechos sólidos. (Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002) Decreto 1713 p.3) ',
    },
    {
      termino: 'Reciclaje ',
      significado:
        'Es el proceso mediante el cual se aprovechan y transforman los residuos sólidos recuperados y se devuelve a los materiales su potencialidad de reincorporación como materia prima para la fabricación de nuevos productos. El reciclaje puede constar de varias etapas: procesos de tecnologías limpias. (Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002) Decreto 1713 p.4) ',
    },
    {
      termino: 'Residuos especiales ',
      significado:
        'Son aquellos residuos que, por su naturaleza, composición, tamaño, volumen y peso, no pueden ser recolectados, manejados, tratados o dispuestos normalmente por la persona prestadora del servicio. Incluyen los residuos producto de las actividades de corte de césped y poda de árboles ubicados en las vías y áreas públicas; aquellos provenientes del barrido y limpieza de vías y áreas públicas; y los residuos provenientes de actividades de construcción y demás obras civiles. <br>(Área Metropolitana del Valle de Aburrá (2016) Manual para el manejo integral de residuos sólidos en el valle de aburrá. p.8) ',
    },
    {
      termino: 'Residuo peligroso ',
      significado:
        'Es aquel que, por sus características infecciosas, tóxicas, explosivas, corrosivas, inflamables, volátiles, combustibles, radiactivas o reactivas, puede causar riesgo a la salud humana o deteriorar la calidad ambiental hasta niveles que causen riesgo a la salud humana. También son residuos peligrosos aquellos que, sin serlo en su forma original, se transforman por procesos naturales en residuos peligrosos. Asimismo, se consideran residuos peligrosos los envases, empaques y embalajes que hayan estado en contacto con ellos. <br>(Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002) Decreto 1713 p.4) ',
    },
    {
      termino: 'Residuo sólido o desecho ',
      significado:
        'Es cualquier objeto, material, sustancia o elemento sólido resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales, de servicios, que el generador abandona, rechaza o entrega y que es susceptible de aprovechamiento o transformación en un nuevo bien, con valor económico o de disposición final. Los residuos sólidos se dividen en aprovechables y no aprovechables. Igualmente, se consideran como residuos sólidos aquellos provenientes del barrido de áreas públicas.  <br>(Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002) Decreto 1713 p.4) ',
    },
    {
      termino: 'Reutilización ',
      significado:
        'Es la prolongación y adecuación de la vida útil de los residuos sólidos recuperados y que, mediante procesos, operaciones o técnicas, devuelven a los materiales su posibilidad de utilización en su función original o en alguna relacionada, sin que para ello requieran procesos adicionales de transformación. (Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002) Decreto 1713 p.4) ',
    },
  ],
  referencias: [
    {
      referencia:
        'Cámara de la Industria de Pulpa, Papel y Cartón. (2017). Calidades de materiales para reciclaje. ANDI. ',
      link:
        'http://www.andi.com.co/Uploads/CARTILLA%20DE%20CALIDADES%20DE%20MATERIALES%20PARA%20RECICLAJE.pdf ',
    },
    {
      referencia:
        'Alcaldía Mayor de Bogotá D. C. (2014). Guía para la elaboración del Plan de Gestión Integral de Residuos de Construcción y Demolición (RCD) en obra.',
      link:
        'https://es.slideshare.net/DanielDelgado2/gua-para-la-elaboracin-del-plan-de-gestin-integral-de-residuos-de-construccin-y-demolicin-rcd-en-obra',
    },
    {
      referencia:
        'ICONTEC. (2003). Gestión Ambiental residuos sólidos – Guía para el reciclaje de papel y cartón (GTC 53-4). ',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2004a). Gestión Ambiental residuos sólidos - Guía para el aprovechamiento de los residuos plásticos (GTC 53-2). ',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2004b). Gestión Ambiental residuos sólidos – Guía para el aprovechamiento de envases de vidrio (GTC 53-3). ',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2004c). Gestión Ambiental residuos sólidos – Guía para el aprovechamiento de los residuos metálicos (GTC 53-5). ',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2006). Gestión Ambiental residuos sólidos – Guía para el aprovechamiento de los residuos orgánicos no peligrosos (GTC 53-7). ',
      link: '',
    },
    {
      referencia: 'KE-LAB (s. f.). ¿Qué es la economía circular? ',
      link:
        'https://kelab.com.co/gestion-de-residuos-solidos/que-es-la-economia-circular/?gclid=CjwKCAjww5r8BRB6EiwArcckC1oy-RfTTre_UHUS08G9xSvIA24jJAwXYOLf76EhQGfrqDfXiNUGKhoChyEQAvD_BwE',
    },
    {
      referencia:
        'Minambiente. (2017). Política Nacional. Gestión Integral de Residuos de Aparatos Eléctricos y Electrónicos.',
      link:
        'http://www.residuoselectronicos.net/wp-content/uploads/2017/07/Pol%C3%ADtica-de-RAEE-31-05-2017-Versi%C3%B3n-Publicaci%C3%B3n.pdf',
    },
    // {
    //   referencia:
    //     'Ministerio de Medio Ambiente. (2004). Manual Básico para hacer Compost. Proyecto Piloto de Compostaje Doméstico.',
    //   link:
    //     'http://www.factoria3.com/documentos/Manual%20basico%20para%20hacer%20Compost.pdf  ',
    // },
    {
      referencia:
        'Ministerio de Medio Ambiente y Medio Rural y Marino. (2009). Manual de compostaje. ',
      link: 'http://www.resol.com.br/cartilhas/manual_de_compostaje.pdf ',
    },
    {
      referencia:
        'Ramos, J. y Baldeón, W. (2017). Análisis de riesgo de la seguridad e higiene ocupacional durante el manejo de residuos sólidos y reciclaje de plástico de polietileno. Producción + Limpia, 12(1), p. 63-71.',
      link:
        'http://www.scielo.org.co/pdf/pml/v12n1/1909-0455-pml-12-01-00063.pdf',
    },
    {
      referencia: 'Vermican. (2012). Manual de vermicompostaje.',
      link:
        'http://www3.gobiernodecanarias.org/medusa/campus/doc/htmls/sostenibilidad/ManualVermicompostaje.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Distrito Capital ',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Distrito Capital',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Evaluadora y diseñadora instruccional',
          centro: 'Centro de diseño y metrología',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión industrial - Distrito Capital',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodóloga',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack Junior',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        // {
        //   nombre: '',
        //   cargo: 'Animador y Producción audiovisual',
        //   centro: 'Nombre centro de formación',
        // },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta ',
          cargo: 'Validación Contenido ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Mutis',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
