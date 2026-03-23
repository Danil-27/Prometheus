// One
import elegantXL from '~/assets/images/page_progect/desctop/elegant/description_Large.webp';
import elegantMD from '~/assets/images/page_progect/laptop/elegant/description_Medium.webp';

// two
import cliffXL from '~/assets/images/page_progect/desctop/cliff/description_Large.webp';
import cliffMD from '~/assets/images/page_progect/laptop/cliff/description_Medium.webp';

// three
import complexElegantXL from '~/assets/images/page_progect/desctop/complexElegant/description_Large.webp';
import complexElegantMD from '~/assets/images/page_progect/laptop/complexElegant/description_Medium.webp';

// four
import synfitinoXL from '~/assets/images/page_progect/desctop/synfitino/description_Large.webp';
import synfitinoMD from '~/assets/images/page_progect/laptop/synfitino/description_Medium.webp';


interface Image {
  XL: string;
  MD: string;
}

export const imagesDescription: Image[] = [
  { XL: elegantXL, MD: elegantMD },
  { XL: cliffXL, MD: cliffMD },
  { XL: complexElegantXL, MD: complexElegantMD },
  { XL: synfitinoXL, MD: synfitinoMD }
];

interface Content {
  description: string;
}

export const contentDescription: Content[] = [
  {
    description:
      'Удачное сочетание кухни и гостиной создаёт место притяжения всей семьи для комфортного времяпрепровождения и приема гостей.'
  },
  {
    description:
      'Дизайн исполнен в светлых тонах, украшен декоративными панелями МДФ в сочетании с зеркалами.'
  },
  {
    description:
      'Стеклянная перегородка, разделяющая кухню-гостиную и прихожую, исполняет важную роль в разграничении зон. Она не только разделяет пространство, но и визуально не создает ощущения стесненности.'
  },
  {
    description:
      'Разработано планировочное решение с учётом эргономики, как для комфортной работы сотрудников, так и для удобства посетителей.'
  }
];
