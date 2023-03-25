export interface Painting {
	name: string;
	artist: string;
	imagePath: string;
	duration: string;
	returns: string;
}

export interface Asset {
	imagePath: string;
	title: string;
	returns: string;
}

export interface Operation {
	imagePath: string;
	alt: string;
	title: string;
	description: string;
}

export interface ShopItems {
	id: number;
	imagePath: string;
	imagePath2: string;
	artist: string;
	year: number;
	type: string;
}

export interface NewsFeed {
	id: number;
	imagePath: string;
	title: string;
	description: string;
	author: string;
	tags: string[];
	date: string;
	link: string;
}
