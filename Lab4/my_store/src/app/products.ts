export interface Product {
    id: number;
    name: string;
    rating: number;
    description: string;
    url: string;
    image: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
      rating: 5,
      description: 'технология NFC: Да ; цвет: серый ; тип экрана: цветной AMOLED, сенсорный ; диагональ: 6.67 дюйм ; размер оперативной памяти: 8 ГБ ; емкость аккумулятора: 5020 мАч',
      url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg'
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      rating: 5,
      description: 'Черный флагманский телефон с 4гб оперативной памяти и емкостью аккумулятора 3095мАч от компаний Apple',
      url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg'
    },
    {
      id: 3,
      name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
      rating: 5,
      description: 'Черный флагманский телефон с 6гб оперативной памяти и емкостью аккумулятора 5000мАч от компаний Samsung',
      url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg'
    },
    {
      id: 4,
      name: 'Наушники Apple AirPods with Charging Case белый',
      rating: 5,
      description: 'Беспроводные наушники без крепления с микрафоном от компаний Apple',
      url: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h3d/46637140508702/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg'
    },
    {
      id: 5,
      name: 'Наушники Realme Buds T100 черный',
      rating: 5,
      description: 'Беспроводные наушники закрытого типа с системой активного шумоподавления и дополнительным микрофоном от компаний Realme',
      url: 'https://kaspi.kz/shop/p/realme-buds-t100-chernyi-107357596/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/hd2/65147416936478/realme-buds-t100-chernyi-107357596-1.jpg'
    },
    {
      id: 6,
      name: 'Наушники JBL Tune 510BT черный',
      rating: 5,
      description: 'Беспроводные наушники с креплением оголовного типа и микрофоном от компаний JBL',
      url: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h1d/33957524537374/jbl-tune-510bt-cernyj-101420081-1-Container.jpg'
    },
    {
      id: 7,
      name: 'Умная колонка Яндекс Станция Макс синий',
      rating: 5,
      description: 'Умная колонка с голосовым помощником Алиса от команий Yandex',
      url: 'https://kaspi.kz/shop/p/jandeks-stantsija-maks-sinii-101165296/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/hd3/51046001246238/yandeks-stantsiya-maks-s-alisoi-sinii-101165296-1.jpg'
    },
    {
      id: 8,
      name: 'Холодильник Artel HD 345RN Steel серый',
      rating: 5,
      description: 'Холодилник с 2 камерами и классом энергопотребления А+ от компаний Artel',
      url: 'https://kaspi.kz/shop/p/artel-hd-345rn-steel-seryi-100531318/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/h7f/51533397917726/artel-hd-345rn-steel-seryi-100531318-1.jpg'
    },
    {
      id: 9,
      name: 'Холодильник Бирюса 50 белый',
      rating: 5,
      description: 'Однокамерный холодилник с классом энергопотребления А+ от компаний Бирюса',
      url: 'https://kaspi.kz/shop/p/birjusa-50-belyi-2702206/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/hac/50281836609566/birusa-50-belyj-2702206-1-Container.jpg'
    },
    {
      id: 10,
      name: 'Холодильник Samsung RB33A32N0EL/WT бежевый',
      rating: 5,
      description: 'Холодилник двух камерный с классом энергопотребления А+ от компаний Samsung',
      url: 'https://kaspi.kz/shop/p/samsung-rb33a32n0el-wt-bezhevyi-101276645/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3e/h2c/49295518138398/samsung-rb33a32n0el-wt-bezevyj-101276645-1-Container.jpg'
    }
  ];