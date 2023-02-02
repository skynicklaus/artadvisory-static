import type { Painting } from "$lib/utils";
import Stallion from '$lib/images/Stallion.jpg';
import Waterfall from '$lib/images/Waterfall.jpg';
import Trending from '$lib/images/Trending.jpg';
import FourView from '$lib/images/FourView.jpg';
import Pavilion from '$lib/images/Pavilion.jpg';
import Clouds from '$lib/images/Clouds.jpg';

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
];