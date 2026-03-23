// Block 1
import elegantXLOne from '~/assets/images/page_progect/desctop/elegant/detailed_Large1.webp';
import elegantMDOne from '~/assets/images/page_progect/laptop/elegant/detailed_Medium1.webp';

import elegantXLTwo from '~/assets/images/page_progect/desctop/elegant/detailed_Large2.webp';
import elegantMDTwo from '~/assets/images/page_progect/laptop/elegant/detailed_Medium2.webp';

import elegantXLThree from '~/assets/images/page_progect/desctop/elegant/detailed_Large3.webp';
import elegantMDThree from '~/assets/images/page_progect/laptop/elegant/detailed_Medium3.webp';

// block 2
import cliffXLOne from '~/assets/images/page_progect/desctop/cliff/detailed_Large1.webp';
import cliffMDOne from '~/assets/images/page_progect/laptop/cliff/detailed_Medium1.webp';

import cliffXLTwo from '~/assets/images/page_progect/desctop/cliff/detailed_Large2.webp';
import cliffMDTwo from '~/assets/images/page_progect/laptop/cliff/detailed_Medium2.webp';

import cliffXLThree from '~/assets/images/page_progect/desctop/cliff/detailed_Large3.webp';
import cliffMDThree from '~/assets/images/page_progect/laptop/cliff/detailed_Medium3.webp';

// block 3
import complexElegantXLOne from '~/assets/images/page_progect/desctop/complexElegant/detailed_Large1.webp';
import complexElegantMDOne from '~/assets/images/page_progect/laptop/complexElegant/detailed_Medium1.webp';

import complexElegantXLTwo from '~/assets/images/page_progect/desctop/complexElegant/detailed_Large2.webp';
import complexElegantMDTwo from '~/assets/images/page_progect/laptop/complexElegant/detailed_Medium2.webp';

import complexElegantXLThree from '~/assets/images/page_progect/desctop/complexElegant/detailed_Large3.webp';
import complexElegantMDThree from '~/assets/images/page_progect/laptop/complexElegant/detailed_Medium3.webp';

// block 4
import synfitinoXLOne from '~/assets/images/page_progect/desctop/synfitino/detailed_Large1.webp';
import synfitinoMDOne from '~/assets/images/page_progect/laptop/synfitino/detailed_Medium1.webp';

import synfitinoXLTwo from '~/assets/images/page_progect/desctop/synfitino/detailed_Large2.webp';
import synfitinoMDTwo from '~/assets/images/page_progect/laptop/synfitino/detailed_Medium2.webp';

import synfitinoMDThree from '~/assets/images/page_progect/desctop/synfitino/detailed_Large3.webp';
import synfitinoXLThree from '~/assets/images/page_progect/laptop/synfitino/detailed_Medium3.webp';


interface Image {
  XL: string;
  MD: string;
}

export const imagesDetailed: Image[][] = [
  [
    { XL: elegantXLOne, MD: elegantMDOne },
    { XL: elegantXLTwo, MD: elegantMDTwo },
    { XL: elegantXLThree, MD: elegantMDThree }
  ],
  [
    { XL: cliffXLOne, MD: cliffMDOne },
    { XL: cliffXLTwo, MD: cliffMDTwo },
    { XL: cliffXLThree, MD: cliffMDThree }
  ],
  [
    {
      XL: complexElegantXLOne,
      MD: complexElegantMDOne
    },
    {
      XL: complexElegantXLTwo,
      MD: complexElegantMDTwo
    },
    {
      XL: complexElegantXLThree,
      MD: complexElegantMDThree
    }
  ],
  [
    { XL: synfitinoXLOne, MD: synfitinoMDOne },
    { XL: synfitinoXLTwo, MD: synfitinoMDTwo },
    { XL: synfitinoXLThree, MD: synfitinoMDThree }
  ]
];

interface Content {
  description: string;
}

export const contentDetailed: Content[] = [
  {
    description:
      'Одну из лоджий было решено превратить в кабинет, где вместе с рабочим местом расположена лаунж зона, для отдыха от работы или проведения деловых встреч с панорамным видом на город.'
  },
  {
    description:
      'Лоджию было решено совместить с кухней-гостиной, что позволяет раскрыть и интегрировать живописные Крымские пейзажи в повседневную рутину.'
  },
  {
    description:
      'Источникам света уделено значительное внимание. Учитывая запросы клиента, освещение было органично встроено в каждую из комнат. Важно отметить, что это удобно в эксплуатации благодаря сенсорным и проходным выключателям.'
  },
  {
    description:
      'Проект примечателен своими объемами и спецификой. Был разработан общий цветовой код и дизайн-стиль комплекса, в том числе рабочих помещений. Всё: от коридоров и кабинетов до тренажёрного-зала было интегрировано в единое стилистическое полотно.'
  }
];
