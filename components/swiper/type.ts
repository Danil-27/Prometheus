import oneImage from '~/assets/images/slider/1.jpg';
import twoImage from '~/assets/images/slider/2.jpg';
import threeImage from '~/assets/images/slider/3.jpg';
import fourImage from '~/assets/images/slider/4.jpg';
import fiveImage from '~/assets/images/slider/5.jpg';

interface img {
  id: number;
  src: string;
  alt: string;
}

export const images: Array<img> = [
  { id: 1, src: oneImage, alt: '1' },
  { id: 2, src: twoImage, alt: '2' },
  { id: 3, src: threeImage, alt: '3' },
  { id: 4, src: fourImage, alt: '4' },
  { id: 5, src: fiveImage, alt: '5' },
  { id: 6, src: oneImage, alt: '6' },
  { id: 7, src: twoImage, alt: '7' },
  { id: 8, src: threeImage, alt: '8' },
  { id: 9, src: fourImage, alt: '9' },
  { id: 10, src: fiveImage, alt: '10' }
];
