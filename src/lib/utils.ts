export interface Painting {
  name: string,
  artist: string,
  imagePath: string,
  duration: string,
  returns: string,
}

export interface Asset {
  imagePath: string,
  title: string,
  returns: string,
}

export interface Operation {
  imagePath: string,
  alt: string,
  title: string,
  description: string,
}

export interface ShopItems {
  imagePath: string,
  artist: string,
  type: string,
}
