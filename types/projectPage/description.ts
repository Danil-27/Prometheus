// One
import elegantXL from '~/assets/images/page_progect/desctop/elegant/description_Large.png';
import elegantMD from '~/assets/images/page_progect/laptop/elegant/description_Medium.png';
import elegantXS from '~/assets/images/page_progect/mobile/elegant/description_Small.png';
// two
import cliffXL from '~/assets/images/page_progect/desctop/cliff/description_Large.png';
import cliffMD from '~/assets/images/page_progect/laptop/cliff/description_Medium.png';
import cliffXS from '~/assets/images/page_progect/mobile/cliff/description_Small.png';
// three
import complexElegantXL from '~/assets/images/page_progect/desctop/complexElegant/description_Large.png';
import complexElegantMD from '~/assets/images/page_progect/laptop/complexElegant/description_Medium.png';
import complexElegantXS from '~/assets/images/page_progect/mobile/complexElegant/description_Small.png';
// four
import synfitinoXL from '~/assets/images/page_progect/desctop/synfitino/description_Large.png';
import synfitinoMD from '~/assets/images/page_progect/laptop/synfitino/description_Medium.png';
import synfitinoXS from '~/assets/images/page_progect/mobile/synfitino/description_Small.png';

interface Image {
  XL: string;
  MD: string;
  XS: string;
}

export const imagesDescription: Image[] = [
  { XL: elegantXL, MD: elegantMD, XS: elegantXS },
  { XL: cliffXL, MD: cliffMD, XS: cliffXS },
  { XL: complexElegantXL, MD: complexElegantMD, XS: complexElegantXS },
  { XL: synfitinoXL, MD: synfitinoMD, XS: synfitinoXS }
];

interface Content {
  description: string;
}

export const contentDescription: Content[] = [
  {
    description:
      'Удачное сочетание кухни и гостиной, создаёт место притяжения всей cемьи, для комфортного времяпрепровождения, а так-же приема гостей.'
  },
  { description: 'Дизайн исполнен в светлых тонах, украшен декоративными панелями МДФ в сочетании с зеркалами.' },
  {
    description:
      'Стеклянная перегородка, разделяющая кухню-гостиную и прихожую, исполняет важную роль в разграничении зон. Она не только разделяет пространство, но и визуально не создает ощущения стесненности.'
  },
  {
    description:
      'Разработано планировочное решение с учётом эргономики,как для комфортной работы сотрудников, так и для удобства посетителей.'
  }
];
