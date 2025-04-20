// Block 1
import elegantXLOne from '~/assets/images/page_progect/desctop/elegant/detailed_Large1.png';
import elegantMDOne from '~/assets/images/page_progect/laptop/elegant/detailed_Medium1.png';
import elegantXSOne from '~/assets/images/page_progect/mobile/elegant/detailed_Small1.png';
import elegantXLTwo from '~/assets/images/page_progect/desctop/elegant/detailed_Large2.png';
import elegantMDTwo from '~/assets/images/page_progect/laptop/elegant/detailed_Medium2.png';
import elegantXSTwo from '~/assets/images/page_progect/mobile/elegant/detailed_Small2.png';
import elegantXLThree from '~/assets/images/page_progect/desctop/elegant/detailed_Large3.png';
import elegantMDThree from '~/assets/images/page_progect/laptop/elegant/detailed_Medium3.png';
import elegantXSThree from '~/assets/images/page_progect/mobile/elegant/detailed_Small3.png';
// block 2
import cliffXLOne from '~/assets/images/page_progect/desctop/cliff/detailed_Large1.png';
import cliffMDOne from '~/assets/images/page_progect/laptop/cliff/detailed_Medium1.png';
import cliffXSOne from '~/assets/images/page_progect/mobile/cliff/detailed_Small1.png';
import cliffXLTwo from '~/assets/images/page_progect/desctop/cliff/detailed_Large2.png';
import cliffMDTwo from '~/assets/images/page_progect/laptop/cliff/detailed_Medium2.png';
import cliffXSTwo from '~/assets/images/page_progect/mobile/cliff/detailed_Small2.png';
import cliffXLThree from '~/assets/images/page_progect/desctop/cliff/detailed_Large3.png';
import cliffMDThree from '~/assets/images/page_progect/laptop/cliff/detailed_Medium3.png';
import cliffXSThree from '~/assets/images/page_progect/mobile/cliff/detailed_Small3.png';
// block 3
import complexElegantXLOne from '~/assets/images/page_progect/desctop/complexElegant/detailed_Large1.png';
import complexElegantMDOne from '~/assets/images/page_progect/laptop/complexElegant/detailed_Medium1.png';
import complexElegantXSOne from '~/assets/images/page_progect/mobile/complexElegant/detailed_Small1.png';

import complexElegantXLTwo from '~/assets/images/page_progect/desctop/complexElegant/detailed_Large2.png';
import complexElegantMDTwo from '~/assets/images/page_progect/laptop/complexElegant/detailed_Medium2.png';
import complexElegantXSTwo from '~/assets/images/page_progect/mobile/complexElegant/detailed_Small2.png';

import complexElegantXLThree from '~/assets/images/page_progect/desctop/complexElegant/detailed_Large3.png';
import complexElegantMDThree from '~/assets/images/page_progect/laptop/complexElegant/detailed_Medium3.png';
import complexElegantXSThree from '~/assets/images/page_progect/mobile/complexElegant/detailed_Small3.png';
// block 4
import synfitinoXLOne from '~/assets/images/page_progect/desctop/synfitino/detailed_Large1.png';
import synfitinoMDOne from '~/assets/images/page_progect/laptop/synfitino/detailed_Medium1.png';
import synfitinoXSOne from '~/assets/images/page_progect/mobile/synfitino/detailed_Small1.png';

import synfitinoXLTwo from '~/assets/images/page_progect/desctop/synfitino/detailed_Large2.png';
import synfitinoMDTwo from '~/assets/images/page_progect/laptop/synfitino/detailed_Medium2.png';
import synfitinoXSTwo from '~/assets/images/page_progect/mobile/synfitino/detailed_Small2.png';

import synfitinoXLThree from '~/assets/images/page_progect/laptop/synfitino/detailed_Medium3.png';
import synfitinoMDThree from '~/assets/images/page_progect/desctop/synfitino/detailed_Large3.png';
import synfitinoXSThree from '~/assets/images/page_progect/mobile/synfitino/detailed_Small3.png';

interface Image {
  XL: string;
  MD: string;
  XS: string;
}

export const imagesDetailed: Image[][] = [
  [
    { XL: elegantXLOne, MD: elegantMDOne, XS: elegantXSOne },
    { XL: elegantXLTwo, MD: elegantMDTwo, XS: elegantXSTwo },
    { XL: elegantXLThree, MD: elegantMDThree, XS: elegantXSThree }
  ],
  [
    { XL: cliffXLOne, MD: cliffMDOne, XS: cliffXSOne },
    { XL: cliffXLTwo, MD: cliffMDTwo, XS: cliffXSTwo },
    { XL: cliffXLThree, MD: cliffMDThree, XS: cliffXSThree }
  ],
  [
    { XL: complexElegantXLOne, MD: complexElegantMDOne, XS: complexElegantXSOne },
    { XL: complexElegantXLTwo, MD: complexElegantMDTwo, XS: complexElegantXSTwo },
    { XL: complexElegantXLThree, MD: complexElegantMDThree, XS: complexElegantXSThree }
  ],
  [
    { XL: synfitinoXLOne, MD: synfitinoMDOne, XS: synfitinoXSOne },
    { XL: synfitinoXLTwo, MD: synfitinoMDTwo, XS: synfitinoXSTwo },
    { XL: synfitinoXLThree, MD: synfitinoMDThree, XS: synfitinoXSThree }
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
      'Лоджию было решеносовместить с кухней-гостиной, данное решение позволяет раскрыть и интегрировать, живописные Крымские пейзажи, в повседневную рутину.'
  },
  {
    description:
      'Источникам света было уделено значительное внимание. Учитывая запросы клиента, освещение было органично встроено в каждую из комнат. Важно отметить, что оно удобно в эксплуатации благодаря сенсорным и проходным выключателям.'
  },
  {
    description:
      'Проект примечателен своими объемами и спецификой. Был разработан общий цветовой код и дизайн-стиль комплекса, в том числе рабочих помещений. Всё, от коридоров и кабинетов до тренажёрного зала было интегрировано в единое стилистическое полотно.'
  }
];
