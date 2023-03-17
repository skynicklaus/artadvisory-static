import type { Painting, ShopItems } from "$lib/utils";
import Stallion from '$lib/images/Stallion.jpg';
import Waterfall from '$lib/images/Waterfall.jpg';
import Trending from '$lib/images/Trending.jpg';
import FourView from '$lib/images/FourView.jpg';
import Pavilion from '$lib/images/Pavilion.jpg';
import Clouds from '$lib/images/Clouds.jpg';
import Panda from '$lib/images/Panda.jpeg';
import AutumnForest from '$lib/images/AutumnForest.jpeg';
import Painting1 from '$lib/images/Painting1.png';
import Painting2 from '$lib/images/Painting2.png';
import Painting3 from '$lib/images/Painting3.png';
import Painting4 from '$lib/images/Painting4.png';
import Painting5 from '$lib/images/Painting5.png';
import Painting6 from '$lib/images/Painting6.png';
import Painting7 from '$lib/images/Painting7.png';
import Painting8 from '$lib/images/Painting8.png';
import Painting9 from '$lib/images/Painting9.png';
import Painting10 from '$lib/images/Painting10.png';


export const paintingsData: Painting[] = [
  {
    name: 'Stalion',
    artist: 'XU BEIHONG',
    imagePath: Stallion,
    duration: '2',
    returns: '96.9',
  },
  {
    name: 'Waterfall Amidst Mountains',
    artist: 'LI XIONGCAI',
    imagePath: Waterfall,
    duration: '3',
    returns: '62.9',
  },
  {
    name: 'Trending to Buffaloes In The Rain',
    artist: 'TAY BAK KOI',
    imagePath: Trending,
    duration: '25',
    returns: '22.9',
  },
  {
    name: 'Four Views of the Mountains',
    artist: 'HUANG JUNBI',
    imagePath: FourView,
    duration: '2',
    returns: '175.2',
  },
  {
    name: 'Pavilion by the Hill',
    artist: 'HUANG BINHONG',
    imagePath: Pavilion,
    duration: '3',
    returns: '93.7',
  },
  {
    name: 'Watching Clouds',
    artist: 'ZHANG DAQIAN',
    imagePath: Clouds,
    duration: '2',
    returns: '146.9',
  },
  {
    name: 'Panda',
    artist: 'LIU HAISU',
    imagePath: Panda,
    duration: '1',
    returns: '600',
  },
  {
    name: 'Autumn Forest',
    artist: 'LIN FENGMIAN',
    imagePath: AutumnForest,
    duration: '2',
    returns: '217',
  }
];

export const shopData: ShopItems[] = [
  {
    imagePath: Painting1,
    artist: 'Dato Karl Bendlin',
    type: 'Oil Painting',
  },
  {
    imagePath: Painting2,
    artist: 'HH Lim',
    type: 'Oil Painting',
  },
  {
    imagePath: Painting3,
    artist: 'Cheah Yew Saik',
    type: 'Oil Painting',
  },
  {
    imagePath: Painting4,
    artist: 'Soon See Teck',
    type: 'Oil Painting',
  },
  {
    imagePath: Painting5,
    artist: 'Lilian Liew',
    type: 'Oil Painting',
  },
  {
    imagePath: Painting6,
    artist: 'Zao Wou-Ki',
    type: 'Oil Painting',
  },
  {
    imagePath: Painting7,
    artist: 'Song Wenzhi',
    type: 'Chinese Brush Paitning',
  },
  {
    imagePath: Painting8,
    artist: 'Ismadi',
    type: 'Mix Media On Canvas',
  },
  {
    imagePath: Painting9,
    artist: 'Ismadi',
    type: 'Sculpture',
  },
  {
    imagePath: Painting10,
    artist: 'HH Lim',
    type: 'Sculpture',
  }
];
