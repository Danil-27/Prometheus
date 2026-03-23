// elegant
import elegantXL from '~/assets/images/page_progect/desctop/elegant/about_Large.webp';
import elegantMD from '~/assets/images/page_progect/laptop/elegant/about_Medium.webp';

// cliff
import cliffXL from '~/assets/images/page_progect/desctop/cliff/about_Large.webp';
import cliffMD from '~/assets/images/page_progect/laptop/cliff/about_Medium.webp';

// complexElegant
import complexElegantXL from '~/assets/images/page_progect/desctop/complexElegant/about_Large.webp';
import complexElegantMD from '~/assets/images/page_progect/laptop/complexElegant/about_Medium.webp';

// synfitino
import synfitinoXL from '~/assets/images/page_progect/desctop/synfitino/about_Large.webp';
import synfitinoMD from '~/assets/images/page_progect/laptop/synfitino/about_Medium.webp';

import type Header from '~/components/header/Header.vue';

interface Image {
  XL: string;
  MD: string;
}

export const imagesAbout: Image[] = [
  { XL: elegantXL, MD: elegantMD },
  { XL: cliffXL, MD: cliffMD },
  { XL: complexElegantXL, MD: complexElegantMD },
  { XL: synfitinoXL, MD: synfitinoMD }
];

interface Header {
  headerProject: string;
}

export const headerAbout: Header[] = [
  { headerProject: 'Апартаменты в ЖК "Элегант"' },
  { headerProject: 'г.Ялта, Крым' },
  { headerProject: 'Апартаменты в  ЖК "Элегант"' },
  { headerProject: 'Спортивный комплекс “SUNFITINO”' }
];

interface Content {
  title: string;
  text: string;
}

export const contentAbout: Content[][] = [
  [
    { title: 'Локация:', text: 'апартаменты в ЖК "Элегант"' },
    { title: 'Квадратура:', text: '140м²' },
    {
      title: 'Комнаты:',
      text: '4 комнаты, кухня-гостиная, 2 санузла, гардероб, лоджия'
    },
    { title: 'Дата сдачи проекта:', text: 'август 2024г.' },
    { title: 'Проект вёлся под авторским надзором', text: '' }
  ],
  [
    { title: 'Локация:', text: 'г. Ялта, Крым' },
    { title: 'Квадратура:', text: '50м²' },
    { title: 'Комнаты:', text: 'однокомнатная квартира' },
    { title: 'Дата сдачи проекта:', text: 'декабрь 2024г.' }
  ],
  [
    { title: 'Локация:', text: 'апартаменты в ЖК "Элегант"' },
    { title: 'Квадратура:', text: '173м²' },
    {
      title: 'Комнаты:',
      text: '3 комнаты, кухня-гостиная, гардероб интегрирован в мастер-спальню, 2 санузла, лоджия'
    },
    { title: 'Дата сдачи проекта:', text: 'апрель 2024г.' },
    { title: 'Проект вёлся под авторским надзором', text: '' }
  ],
  [
    { title: 'Локация:', text: 'спортивный комплекс “SUNFITINO”' },
    { title: 'Квадратура:', text: '400м²' },
    { title: 'Дата сдачи проекта:', text: 'ноябрь 2024г.' }
  ]
];
