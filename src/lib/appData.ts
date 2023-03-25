import type { Painting, ShopItems, NewsFeed } from '$lib/utils';
import Stallion from '$lib/images/Stallion.webp';
import Waterfall from '$lib/images/Waterfall.webp';
import Trending from '$lib/images/Trending.webp';
import FourView from '$lib/images/FourView.webp';
import Pavilion from '$lib/images/Pavilion.webp';
import Clouds from '$lib/images/Clouds.webp';
import Panda from '$lib/images/Panda.webp';
import AutumnForest from '$lib/images/AutumnForest.webp';
import Painting1 from '$lib/images/Painting1.webp';
import Painting2 from '$lib/images/Painting2.webp';
import Painting3 from '$lib/images/Painting3.webp';
import Painting4 from '$lib/images/Painting4.webp';
import Painting5 from '$lib/images/Painting5.webp';
import Painting6 from '$lib/images/Painting6.webp';
import Painting7 from '$lib/images/Painting7.webp';
import Painting8 from '$lib/images/Painting8.webp';
import Painting9 from '$lib/images/Painting9.webp';
import Painting10 from '$lib/images/Painting10.webp';
import Painting1F from '$lib/images/Painting1F.webp';
import Painting2F from '$lib/images/Painting2F.webp';
import Painting3F from '$lib/images/Painting3F.webp';
import Painting4F from '$lib/images/Painting4F.webp';
import Painting5F from '$lib/images/Painting5F.webp';
import Painting6F from '$lib/images/Painting6F.webp';
import Painting7F from '$lib/images/Painting7F.webp';
import Painting8F from '$lib/images/Painting8F.webp';
import Painting9F from '$lib/images/Painting9F.webp';
import Painting10F from '$lib/images/Painting10F.webp';

export const paintingsData: Painting[] = [
	{
		name: 'Stalion',
		artist: 'XU BEIHONG',
		imagePath: Stallion,
		duration: '2',
		returns: '96.9'
	},
	{
		name: 'Waterfall Amidst Mountains',
		artist: 'LI XIONGCAI',
		imagePath: Waterfall,
		duration: '3',
		returns: '62.9'
	},
	{
		name: 'Trending to Buffaloes In The Rain',
		artist: 'TAY BAK KOI',
		imagePath: Trending,
		duration: '25',
		returns: '22.9'
	},
	{
		name: 'Four Views of the Mountains',
		artist: 'HUANG JUNBI',
		imagePath: FourView,
		duration: '2',
		returns: '175.2'
	},
	{
		name: 'Pavilion by the Hill',
		artist: 'HUANG BINHONG',
		imagePath: Pavilion,
		duration: '3',
		returns: '93.7'
	},
	{
		name: 'Watching Clouds',
		artist: 'ZHANG DAQIAN',
		imagePath: Clouds,
		duration: '2',
		returns: '146.9'
	},
	{
		name: 'Panda',
		artist: 'LIU HAISU',
		imagePath: Panda,
		duration: '1',
		returns: '600'
	},
	{
		name: 'Autumn Forest',
		artist: 'LIN FENGMIAN',
		imagePath: AutumnForest,
		duration: '2',
		returns: '217'
	}
];

// Dimension, Year
export const shopData: ShopItems[] = [
	{
		id: 1,
		imagePath: Painting1,
		imagePath2: Painting1F,
		artist: "Dato' Karl Bendlin (1928-2017)",
		year: 1993,
		type: 'Oil on Canvas'
	},
	{
		id: 2,
		imagePath: Painting2,
		imagePath2: Painting2F,
		artist: 'H.H. Lim',
		year: 2010,
		type: 'Oil on Canvas'
	},
	{
		id: 3,
		imagePath: Painting3,
		imagePath2: Painting3F,
		artist: 'Cheah Yew Saik',
		year: 2012,
		type: 'Oil on Canvas'
	},
	{
		id: 4,
		imagePath: Painting4,
		imagePath2: Painting4F,
		artist: 'Soon See Teck (1954-2008)',
		year: 2003,
		type: 'Oil on Canvas'
	},
	{
		id: 5,
		imagePath: Painting5,
		imagePath2: Painting5F,
		artist: 'Lilian Liew',
		year: 2014,
		type: 'Oil on Canvas'
	},
	{
		id: 6,
		imagePath: Painting6,
		imagePath2: Painting6F,
		artist: 'Zao Wou-Ki (1921-2013)',
		year: 1966,
		type: 'Mix Media on Rice Paper'
	},
	{
		id: 7,
		imagePath: Painting7,
		imagePath2: Painting7F,
		artist: 'Song Wenzhi (1919-1999)',
		year: 1975,
		type: 'Chinese Brush Paitning'
	},
	{
		id: 8,
		imagePath: Painting8,
		imagePath2: Painting8F,
		artist: 'Ismadi',
		year: 2011,
		type: 'Mix Media on Canvas'
	},
	{
		id: 9,
		imagePath: Painting9,
		imagePath2: Painting9F,
		artist: 'Ismadi',
		year: 2004,
		type: 'Sculpture'
	},
	{
		id: 10,
		imagePath: Painting10,
		imagePath2: Painting10F,
		artist: 'H.H. Lim',
		year: 1990,
		type: 'Sculpture'
	}
];

export const newsData: NewsFeed[] = [
	{
		id: 1,
		imagePath: '',
		title: 'Paul G. Allen Collection is the biggest sale in auction history',
		description:
			'On 9 November in New York, Visionary: The Paul G. Allen Collection kicked off with Part I, which surpassed the $1 billion mark at the 32nd lot and broke records across categories.',
		author: "Christie's",
		tags: ["Christie's"],
		date: '10 November 2022',
		link: 'https://www.christies.com/features/paul-g-allen-collection-sale-results-12534-3.aspx?sc_lang=en'
	},
	{
		id: 2,
		imagePath: '',
		title: '11 Most Expensive Chinese Art Auction Results in the Last 10 Years',
		description:
			'Over the previous decade, there has been a substantial shift across the globe, with art from other cultures appearing more and more regularly and selling for ever more impressive auction results',
		author: 'Mia Forbes',
		tags: ['The Collector', 'Mia Forbes', 'Chinese Art'],
		date: '2 January 2021',
		link: 'https://www.thecollector.com/chinese-art-auction-results/'
	},
	{
		id: 3,
		imagePath: '',
		title: 'Highlights from Chinese Paintings',
		description:
			'Have a sneak preview on Christie’s Hong Kong 2020 Chinese Paintings autumn auctions on 1st December.',
		author: 'Christie’s',
		tags: ['Christie’s'],
		date: '6 November 2020',
		link: 'https://www.christies.com/features/First-Look-Chinese-Paintings-Highlight-11179-1.aspx'
	},
	{
		id: 4,
		imagePath: '',
		title: 'Leonardo’s Salvator Mundi makes auction history',
		description:
			'The rediscovered masterpiece by the Renaissance master sells for an historic $450,312,500.',
		author: 'Christie’s',
		tags: ['Christie’s'],
		date: '15 November 2017',
		link: 'https://www.christies.com/features/Leonardo-and-Post-War-results-New-York-8729-3.aspx'
	}
];
