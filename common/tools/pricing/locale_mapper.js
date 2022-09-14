const acomMapReverse = {
    '': 'us/en',
    'default': 'us/en',
    'uk': 'uk/en',
    'de': 'de/de',
    'fr': 'fr/fr',
    'jp': 'jp/ja',
    'nz': 'nz/en',
    'au': 'au/en',
    'fi': 'fi/fi',
    'es': 'es/es',
    'it': 'it/it',
    'nl': 'nl/nl',
    'no': 'no/no',
    'se': 'se/sv',
    'dk': 'dk/da',
    'mx': 'mx/es',
    'pt': 'pt/pt',
    'ca': 'ca/en',
    'ca_fr': 'ca/fr',
    'br': 'br/pt',
    'kr': 'kr/ko',
    'cn': 'cn/zh-Hans',
    'hk_zh': 'hk/zh-Hant',
    'tw': 'tw/zh-Hant',
    'sea': 'sea/en',
    'lu': 'lu/en',
    'lu_fr': 'lu/fr',
    'lu_de': 'lu/de',
    'lu_en': 'lu/en',
    'pl': 'pl/pl',
    'be': 'be/en',
    'be_en': 'be/en',
    'be_fr': 'be/fr',
    'be_nl': 'be/nl',
    'bg': 'bg/en',
    'cy': 'cy/en',
    'cy_en': 'cy/en',
    'ee': 'ee/en',
    'gr_en': 'gr/en',
    'gr': 'gr/en',
    'ie': 'ie/en',
    'lv': 'lv/en',
    'mt': 'mt/en',
    'ro': 'ro/ro',
    'ro_ro': 'ro/en',
    'ro_en': 'ro/en',
    'si': 'si/si',
    'sk': 'sk/sk',
    'africa': 'za/en',
    'at': 'at/de',
    'ch': 'ch/de',
    'ch_de': 'ch/de',
    'ch_fr': 'ch/fr',
    'ch_it': 'ch/it',
    'cz': 'cz/cs',
    'hu': 'hu/hu',
    'tr': 'tr/tr',
    'ru': 'ru/ru',
    'mena_en': 'mena/en',
    'il_en': 'il/en',
    'in': 'in/en',
    'hk': 'hk/zh-Hant',
    'hk_en': 'hk/en',
    'ua_en': 'ua/en',
    'la': 'la/es',
    'hr': 'hr/hr',
    'sk_sk': 'sk/sk',
    'si_si': 'si/si',
    'ua': 'ua/ua',
    'ua_ua': 'ua/ua',
    'es_eu': 'es/eu',
    'es_ca': 'es/ca',
    'sg': 'sg/en',
    'ph': 'ph/en',
    'id': 'id/en',
    'my': 'my/en',
    'ke': 'ke/en',
    'ik': 'ik/en',
    'ae_ar': 'ae/ar',
    'sa_en': 'sa/en',
    'sa_ar': 'sa/ar',
    'th_en': 'th/en',
    'th_th': 'th/th',
    'cl': 'cl/es',
    'co': 'co/es',
    'ar': 'ar/es',
    'cr': 'cr/es',
    'pe': 'pe/es',
    've': 've/es',
    'ec': 'ec/es',
    'gt': 'gt/es',
    'bh': 'bh/en',
    'eg': 'eg/en',
    'kw': 'kw/en',
    'lb': 'lb/en',
    'om': 'om/en',
    'qa': 'qa/en',
    'ae_en': 'ae/en',
    'ae': 'ae/en',
    'ye': 'ye/en',
    'ma': 'ma/en',
    'dz': 'dz/en',
    'tn': 'mena/en',
    'jo': 'jo/en',
    'ng': 'ng/en',
    'uy': 'uy/es',
    'bo': 'bo/es',
    'do': 'do/es',
    'py': 'py/es',
    'sv': 'sv/es',
    'vn': 'vn/en',
    'tt': 'tt/en',
    'mu': 'mu/en',
    'mo': 'mo/en',
    'mo_zh': 'mo/zh-Hant',
    'pa': 'pa/es',
    'lk': 'lk/en',
    'lt': 'lt/en',
    'my_en': 'my/en',
    'id_en': 'id/en',
    'ph/en': 'ph/en',
    'ar': 'ar/es',
    'co': 'co/es',
    'us/en': '',
    'uk/en': 'uk',
    'de/de': 'de',
    'fr/fr': 'fr',
    'jp/ja': 'jp',
    'nz/en': 'nz',
    'au/en': 'au',
    'fi/fi': 'fi',
    'es/es': 'es',
    'it/it': 'it',
    'nl/nl': 'nl',
    'no/no': 'no',
    'se/sv': 'se',
    'dk/da': 'dk',
    'mx/es': 'mx',
    'pt/pt': 'pt',
    'ca/en': 'ca',
    'ca/fr': 'ca_fr',
    'br/pt': 'br',
    'kr/ko': 'kr',
    'cn/zh-Hans': 'cn',
    'cn/zh-Hant': 'hk_zh',
    'tw/zh-Hant': 'tw',
    'sea/en': 'sea',
    'lu/fr': 'lu_fr',
    'lu/de': 'lu_de',
    'lu/en': 'lu_en',
    'pl/pl': 'pl',
    'be/en': 'be_en',
    'be/fr': 'be_fr',
    'be/nl': 'be_nl',
    'bg/en': 'bg',
    'cy/en': 'cy_en',
    'ee/en': 'ee',
    'gr/en': 'gr_en',
    'ie/en': 'ie',
    'lv/en': 'lv',
    'mt/en': 'mt',
    'ro/ro': 'ro',
    'si/en': 'si',
    'sk/en': 'sk',
    'za/en': 'africa',
    'at/de': 'at',
    'ch/de': 'ch_de',
    'ch/fr': 'ch_fr',
    'ch/it': 'ch_it',
    'cz/cs': 'cz',
    'hu/hu': 'hu',
    'tr/tr': 'tr',
    'ru/ru': 'ru',
    'mena/en': 'mena_en',
    'il/en': 'il_en',
    'in/en': 'in',
    'hk/en': 'hk_en',
    'ua/en': 'ua',
    'la/es': 'la',
    'hr/hr': 'hr',
    'sk/sk': 'sk',
    'si/si': 'si',
    'ua/ua': 'ua',
    'es/eu': 'es_eu',
    'es/ca': 'es_ca',
    'sg/en': 'sg',
    'ph/en': 'ph',
    'id/en': 'id',
    'my/en': 'my',
    'ke/en': 'ke',
    'ik/en': 'ik',
    'ae/ar': 'ae_ar',
    'sa/en': 'sa_en',
    'sa/ar': 'sa_ar',
    'th/en': 'th_en',
    'th/th': 'th_th',
    'cl/es': 'cl',
    'co/es': 'co',
    'ar/es': 'ar',
    'cr/es': 'cr',
    'pe/es': 'pe',
    've/es': 've',
    'ec/es': 'ec',
    'gt/es': 'gt',
    'bh/en': 'bh',
    'eg/en': 'eg',
    'kw/en': 'kw',
    'lb/en': 'lb',
    'om/en': 'om',
    'qa/en': 'qa',
    'ae/en': 'ae_en',
    'ye/en': 'ye',
    'ma/en': 'ma',
    'dz/en': 'dz',
    'tn/en': 'mena_en',
    'jo/en': 'jo',
    'ng/en': 'ng',
    'uy/es': 'uy',
    'bo/es': 'bo',
    'do/es': 'do',
    'py/es': 'py',
    'sv/es': 'sv',
    'vn/en': 'vn',
    'tt/en': 'tt',
    'mu/en': 'mu',
    'mo/en': 'mo',
    'mo/zh-Hant': 'mo_zh',
    'pa/es': 'pa',
    'lk/en': 'lk',
    'lt/en': 'lt',
  };

  const acomMap = {
    'us/en': '',
    'uk/en': 'uk',
    'de/de': 'de',
    'fr/fr': 'fr',
    'jp/ja': 'jp',
    'nz/en': 'nz',
    'au/en': 'au',
    'fi/fi': 'fi',
    'es/es': 'es',
    'it/it': 'it',
    'nl/nl': 'nl',
    'no/no': 'no',
    'se/sv': 'se',
    'dk/da': 'dk',
    'mx/es': 'mx',
    'pt/pt': 'pt',
    'ca/en': 'ca',
    'ca/fr': 'ca_fr',
    'br/pt': 'br',
    'kr/ko': 'kr',
    'cn/zh-Hans': 'cn',
    'cn/zh-Hant': 'hk_zh',
    'tw/zh-Hant': 'tw',
    'sea/en': 'sea',
    'lu/fr': 'lu_fr',
    'lu/de': 'lu_de',
    'lu/en': 'lu_en',
    'pl/pl': 'pl',
    'be/en': 'be_en',
    'be/fr': 'be_fr',
    'be/nl': 'be_nl',
    'bg/en': 'bg',
    'cy/en': 'cy_en',
    'ee/en': 'ee',
    'gr/en': 'gr_en',
    'ie/en': 'ie',
    'lv/en': 'lv',
    'mt/en': 'mt',
    'ro/ro': 'ro',
    'si/en': 'si',
    'sk/en': 'sk',
    'za/en': 'africa',
    'at/de': 'at',
    'ch/de': 'ch_de',
    'ch/fr': 'ch_fr',
    'ch/it': 'ch_it',
    'cz/cs': 'cz',
    'hu/hu': 'hu',
    'tr/tr': 'tr',
    'ru/ru': 'ru',
    'mena/en': 'mena_en',
    'il/en': 'il_en',
    'in/en': 'in',
    'hk/en': 'hk_en',
    'ua/en': 'ua',
    'la/es': 'la',
    'hr/hr': 'hr',
    'sk/sk': 'sk',
    'si/si': 'si',
    'ua/ua': 'ua',
    'es/eu': 'es_eu',
    'es/ca': 'es_ca',
    'sg/en': 'sg',
    'ph/en': 'ph',
    'id/en': 'id',
    'my/en': 'my',
    'ke/en': 'ke',
    'ik/en': 'ik',
    'ae/ar': 'ae_ar',
    'sa/en': 'sa_en',
    'sa/ar': 'sa_ar',
    'th/en': 'th_en',
    'th/th': 'th_th',
    'cl/es': 'cl',
    'co/es': 'co',
    'ar/es': 'ar',
    'cr/es': 'cr',
    'pe/es': 'pe',
    've/es': 've',
    'ec/es': 'ec',
    'gt/es': 'gt',
    'bh/en': 'bh',
    'eg/en': 'eg',
    'kw/en': 'kw',
    'lb/en': 'lb',
    'om/en': 'om',
    'qa/en': 'qa',
    'ae/en': 'ae_en',
    'ye/en': 'ye',
    'ma/en': 'ma',
    'dz/en': 'dz',
    'tn/en': 'mena_en',
    'jo/en': 'jo',
    'ng/en': 'ng',
    'uy/es': 'uy',
    'bo/es': 'bo',
    'do/es': 'do',
    'py/es': 'py',
    'sv/es': 'sv',
    'vn/en': 'vn',
    'tt/en': 'tt',
    'mu/en': 'mu',
    'mo/en': 'mo',
    'mo/zh-Hant': 'mo_zh',
    'pa/es': 'pa',
    'lk/en': 'lk',
    'lt/en': 'lt',
    'my/en': 'my_en',
    'id/en': 'id_en',
    'ph/en': 'ph_en',
    'ar/es': 'ar',
    'pe/es': 'pe',
    'co/es': 'co'
};

// Use CommonJS syntax
exports.acomMap = acomMap;
exports.acomMapReverse = acomMapReverse;