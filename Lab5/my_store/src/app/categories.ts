import {Product, products} from "./products";

export interface Category{
  name: string,
  products : Product[]
}

export const categories = [
  {
    name: "Techniques (10)",
    products: products
  },
  {
    name: "Products for animals (5)",
    products: [
      {
        id: 1,
        name: 'Friskies кусочки в желе утка 85 г 1 шт',
        rating: 5,
        description: 'Нежные кусочки в желе с сочным филе утки',
        url: 'https://kaspi.kz/shop/p/friskies-kusochki-v-zhele-utka-85-g-1-sht-100218969/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3d/h6c/46689632813086/friskies-utka-v-zele-85-g-100218969-1-Container.jpg',
        likes: 0,
        category: 'Products for animals'
      },{
        id: 2,
        name: 'Природный бентонит комкующийся 15 кг',
        rating: 5,
        description: 'Наполнитель лотка для кошек',
        url: 'https://kaspi.kz/shop/p/prirodnyi-bentonit-komkujuschiisja-15-kg-100124865/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc6/h1e/50063052308510/no-name-komkuusijsa-15-kg-100124865-1-Container.jpg',
        likes: 0,
        category: 'Products for animals'
      },{
        id: 3,
        name: 'Пакеты для выгула собак КАКЕТИКИ, 64 шт',
        rating: 5,
        description: 'Пакеты для выгула собак',
        url: 'https://kaspi.kz/shop/p/pakety-dlja-vygula-sobak-kaketiki-64-sht-4-rulona-po-16-paketov-24x36-sm-chernyi-104942022/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1c/he8/50905000771614/kaketiki-kak4222-cernyj-64-st-104942022-1.jpg',
        likes: 0,
        category: 'Products for animals'
      },{
        id: 4,
        name: 'WC Cat/Kitten 4870005941921 складной серый',
        rating: 5,
        description: 'Коврик резиновый для лотков и мисок',
        url: 'https://kaspi.kz/shop/p/wc-cat-kitten-4870005941921-skladnoi-seryi-103703874/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd2/h59/48753780883486/wc-cat-kitten-4870005941921-seryi-103703874-1.jpg',
        likes: 0,
        category: 'Products for animals'
      },{
        id: 5,
        name: 'Китайская игрушка Кричащая Курица 8991 желтый',
        rating: 5,
        description: 'Игрушка пищялка для собак и кошек',
        url: 'https://kaspi.kz/shop/p/kitaiskaja-igrushka-krichaschaja-kuritsa-8991-zheltyi-105707308/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc7/h20/52282942586910/kitajskaa-igruska-kricasaa-kurica-8991-zeltyj-105707308-1.jpg',
        likes: 0,
        category: 'Products for animals'
      }
    ]
  },
  {
    name: "Books (5)",
    products: [
      {
        id: 1,
        name: 'Ибрагим Д.: Адамзаттың асыл тәжі',
        rating: 5,
        description: 'жанр: биографии и мемуары',
        url: 'https://kaspi.kz/shop/p/ibragim-d-adamzatty-asyl-t-zh--105257486/?c=750000000&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE#!/item',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h39/51462193381406/ibragim-d-adamzatty-asyl-t-zi-105257486-1.jpg',
        likes: 54,
        category: 'Books'
      },
      {
        id: 2,
        name: 'Сильвера А.: В конце они оба умрут',
        rating: 5,
        description: 'жанр: современная мировая проза',
        url: 'https://kaspi.kz/shop/p/sil-vera-a-v-kontse-oni-oba-umrut-101280241/?c=750000000&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE#!/item',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h62/hbc/34401363394590/silvera-a-v-konce-oni-oba-umrut-101280241-1.jpg',
        likes: 30,
        category: 'Books'
      },
      {
        id: 3,
        name: 'Ғаззали И.: Жүректің сырлары',
        rating: 5,
        description: 'жанр: публицистика',
        url: 'https://kaspi.kz/shop/p/-azzali-i-zh-rekt-syrlary-101664806/?c=750000000&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE#!/item',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/h59/68676770005022/ghazzali-i-zhurekting-syrlary-101664806-1.jpg',
        likes: 56,
        category: 'Books'
      },
      {
        id: 4,
        name: 'Кристи А.: Убийства по алфавиту',
        rating: 5,
        description: 'жанр: остросюжетная литература',
        url: 'https://kaspi.kz/shop/p/kristi-a-ubiistva-po-alfavitu-101516844/?c=750000000&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE#!/item',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/h22/34248520237086/kristi-a-ubijstva-po-alfavitu-101516844-1.jpg',
        likes: 18,
        category: 'Books'
      },
      {
        id: 5,
        name: 'Малисова Е., Сильванова К.: О чем молчит ласточка',
        rating: 5,
        description: 'жанр: cовременная мировая проза',
        url: 'https://kaspi.kz/shop/p/malisova-e-sil-vanova-k-o-chem-molchit-lastochka-106412172/?c=750000000&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h23/62396940681246/malisova-e-silvanova-k-o-cem-molcit-lastocka-106412172-1.jpg',
        likes: 20,
        category: 'Books'
      }
    ]
  },
  {
    name: "Optics (5)",
    products: [
      {
        id: 1,
        name: 'Crystal Vue Crystal Clear 360 мл',
        rating: 5,
        description: 'вид раствора: многофункциональный',
        url: 'https://kaspi.kz/shop/p/crystal-vue-crystal-clear-360-ml-102785006/?c=750000000&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h2c/46985303785502/crystal-vue-clear-multi-purpose-contact-lens-solution-crystalvue360-360-ml-102785006-1.jpg',
        likes: 12,
        category: 'Optics'
      },
      {
        id: 2,
        name: 'Avizor Aqua Soft Comfort 350 мл',
        rating: 5,
        description: 'вид раствора: многофункциональный',
        url: 'https://kaspi.kz/shop/p/avizor-aqua-soft-comfort-350-ml-27100002/?c=750000000&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h84/hf0/51538341593118/avizor-aqua-soft-comfort-350-ml-27100002-1-Container.jpg',
        likes: 13,
        category: 'Optics'
      },
      {
        id: 3,
        name: 'Avizor Unica Sensitive 350 мл',
        rating: 5,
        description: 'вид раствора: многофункциональный',
        url: 'https://kaspi.kz/shop/p/avizor-unica-sensitive-350-ml-27100007/?c=750000000&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h95/hdc/31715379216414/avizor-unica-sensitive-350-ml-27100007-1-Container.jpg',
        likes: 34,
        category: 'Optics'
      },
      {
        id: 4,
        name: 'Очки для вождения Ночь-День черный, желтый',
        rating: 5,
        description: 'вид раствора: многофункциональный',
        url: 'https://kaspi.kz/shop/p/ochki-dlja-vozhdenija-noch--den-chernyi-zheltyi-105505416/?c=750000000&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hb3/h50/51898034323486/ocki-dla-voditela-hd-vision-2-pary-105505416-1.jpg',
        likes: 6,
        category: 'Optics'
      },
      {
        id: 5,
        name: 'NOVMAS Линзы цветные контактные без диоптрий 0.00 ',
        rating: 5,
        description: 'вид раствора: многофункциональный',
        url: 'https://kaspi.kz/shop/p/novmas-linzy-tsvetnye-kontaktnye-bez-dioptrii-0-00-2-linzy-chernyi-107883520/?c=750000000&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIu6vUz1Pjyoy5Bx8cALK8fEDP82NjbmEH3Yzkpm35OY9nv9F_PXpURoCQ-0QAvD_BwE',
        image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h54/h07/66489725321246/novmas-linzy-tsvetnye-kontaktnye-bez-dioptrii-107883520-1.jpg',
        likes: 15,
        category: 'Optics'
      }
    ]
  }
]

