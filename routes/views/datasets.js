var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'info';

    if (req.params.lang) {
        if (["es", "en","it"].indexOf(req.params.lang) > -1) {
            req.setLocale(req.params.lang);
        }
    } else {
        req.setLocale("es");
    }

    locals.language = req.getLocale();
    locals.page = req.params.page;

    locals.data = {};


    locals.data.datasets = [{
    "org": "Barranquilla",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Barranquilla",
    "img": "img/cv-barranquilla.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Barranquilla",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-barranquilla.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-barranquilla.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Barranquilla",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-barranquilla.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_barranquilla_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Bogotá",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Bogotá",
    "img": "img/cv-bogota.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Bogotá",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-bogota.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-bogota.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Bogotá",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-bogota.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_bogota_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Bucaramanga",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Bucaramanga",
    "img": "img/cv-bucaramanga.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Bucaramanga",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-bucaramanga.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-bucaramanga.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Bucaramanga",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-bucaramanga.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_bucaramanga_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Cali",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Cali",
    "img": "img/cv-cali.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Cali",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-cali.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-cali.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Cali",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-cali-total.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_cali_total_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Cartagena",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Bucaramanga",
    "img": "img/cv-cartagena.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Cartagena",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-cartagena.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-cartagena.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Cartagena",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-cartagena.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_cartagena_data.csv",
            "format": "csv"
        }]
    }]
},{
    "org": "Red de Ciudades Cómo Vamos",
    "description": "La Red Colombiana de Ciudades Cómo Vamos (RCCCV) nació con el propósito de generar información confiable, imparcial y comparable en torno a temas de ciudad, calidad de vida y participación ciudadana.",
    "img": "img/cv-comparada.png",
    "datasets": [{
        "name": "Recopilación de los resultados de las encuestas comparadas para la Red Cómo Vamos",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-comparada.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-comparada.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilación de Indicadores objetivos comparados para la Red Cómo Vamos",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-comparada.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_comparada_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Cúcuta",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Cúcuta",
    "img": "img/cv-cucuta.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Cúcuta",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-cucuta.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-cucuta.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Cúcuta",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-cucuta.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_cucuta_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Ibagué",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Ibagué",
    "img": "img/cv-ibague.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Ibagué",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-ibague.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-ibague.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Ibagué",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-ibague.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_ibague_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Manizales",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Manizales",
    "img": "img/cv-manizales.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Manizales",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-manizales.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-manizales.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Manizales",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-manizales-totales.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_manizales_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Medellín",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Medellín",
    "img": "img/cv-medellin.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Medellín",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-medellin.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-medellin.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Medellín",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-medellin-totales.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_medellin_total_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Pereira",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Pereira",
    "img": "img/cv-pereira.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Pereira",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-pereira.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-pereira.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Pereira",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-pereira-totales.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_pereira_total_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Santa Marta",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Santa Marta",
    "img": "img/cv-santamarta.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Santa Marta",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-yumbo.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-yumbo.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Santa Marta",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-yumbo.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_yumbo_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Yumbo",
    "description": "Datos del ¿Cómo Vamos? de la ciudad de Yumbo",
    "img": "img/cv-yumbo.png",
    "datasets": [{
        "name": "Recopilación de todos los resultados de las encuestas para Yumbo",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-santamarta.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/subjetivos-santamarta.csv",
            "format": "csv"
        }]
    }, {
        "name": "Recopilacion de Indicadores objetivos para la ciudad de Yumbo",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos-santamarta.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/objetivos_santamarta_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Índice de progreso social ciudades Colombia",
    "description": "Datasets del Índice de Progreso Social Colombia, un análisis diferencial sobre el progreso social en las ciudades Cómo Vamos. Este índice es un producto de la Alianza Progreso Social Colombia, compuesta por Deloitte, Fundación AVINA, Social Progress Imperative, Compartamos por Colombia, la Red de Ciudades Cómo Vamos y la Fundación Corona.",
    "img": "img/ips.png",
    "datasets": [{
        "name": "Datos del Índice de Progreso Social inter-ciudades",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/ips_interciudades_resultados.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/ips_interciudades_resultados_data.csv",
            "format": "csv"
        }]
    }, {
        "name": "Indice de Progreso Social Intraurbano de Bogotá",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/ips_bogota_localidades_resultados.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/ips_bogota_localidades_resultados_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Índice de Ciudades Universitarias",
    "description": "Indicadores sobre calidad de la educación que cubre diferente aspectos como la asequibilidad, el acceso, la calidad, entre otros.",
    "img": "img/cv-icu.png",
    "datasets": [{
        "name": "Índice de ciudades universitarias para medir diversos aspectos.",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/indice_ciudades_universitarias.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/indice_ciudades_universitarias_data.csv",
            "format": "csv"
        }]
    }]
}, {
    "org": "Objetivos de Desarrollo Sostenible",
    "description": "Los Objetivos de Desarrollo Sostenible (ODS) son un ambicioso programa al año 2030 con el que se pretende mejorar la calidad de vida de las personas y proteger el planeta. Los ODS fortalecerán las metas alcanzadas por los ODM y dirigen los esfuerzos gubernamentales hacia otras áreas para el desarrollo sostenible. Por estas razones, la Fundación Corona y la Red Cómo Vamos en alianza con el PNUD, realizaron una primera línea de base del estado de los ODS en las principales ciudades colombianas, generando capacidades como sociedad civil para medir y realizar seguimiento a los ODS a nivel urbano en el país.",
    "img": "img/ods.png",
    "datasets": [{
        "name": "Línea de base del estado de los ODS en las ciudades Cómo Vamos",
        "files": [{
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/ods-data.xlsx",
            "format": "xlsx"
        }, {
            "url": "http://data.ciudatos.com.s3.amazonaws.com/migration/ods_data.csv",
            "format": "csv"
        }]
    }]
}
]
;


    // Load other posts
    view.on('init', function (next) {

        var q = keystone.list('Dataset').model.find()
        .where('state', 'published')
        .sort('-publishedDate')
        .populate('topic tags categories orgs').limit('50');

        q.exec(function (err, results) {
            locals.data.posts = results;
            next(err);
        });

    });



    // Render the view
    view.render("datasets");
};
