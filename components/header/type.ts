import homeSvg from '~/assets/svg/header/home.svg';
import projectSvg from '~/assets/svg/header/project.svg';
import priceSvg from '~/assets/svg/header/price.svg';
import contactsSvg from '~/assets/svg/header/contacts.svg';

interface link {
  id: number;
  title: string;
  url: string;
  svg?: string;
}

export const linksDesctop: Array<link> = [
  { id: 1, title: 'главная', url: '/' },
  { id: 2, title: 'о нас', url: '/#about' },
  { id: 3, title: 'проекты', url: '/projects' },
  { id: 4, title: 'услуги', url: '/#price' },
  { id: 5, title: 'контакты', url: '#footer' }
];

export const linksMobile: Array<link> = [
  { id: 1, title: 'главная', url: '/', svg: homeSvg },
  { id: 2, title: 'проекты', url: '/projects', svg: projectSvg },
  { id: 3, title: 'услуги', url: '/#price', svg: priceSvg },
  { id: 4, title: 'контакты', url: '#footer', svg: contactsSvg }
];
