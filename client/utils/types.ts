export type RoomResponse = {
  api_created?: string;
  config?: Object;
  created_at?: string;
  id?: string;
  name?: string;
  url?: string;
  privacy?: string;
};

export type ErrorStrapiUser = {
  invalid_credentials?: boolean;
};

export type ChatRoom = {
  room_url: string;
  syssnare: number;
  token: string;
  is_video: boolean;
};

export type Syssnare = {
  id: number;
  name: string;
  status: string;
  favorite_animal: string;
  favorite_icecream: string;
  img: string;
};

export type BlogPost = {
  id: number;
  published_at: string;
  title: string;
  text: string;
  views: number;
  cover_image: string;
  images: string[];
  videos: string[];
};

export type Fragelada = {
  id: number;
  published_at: string;
  question: string;
  answer: string;
  visible: boolean;
  categories: string[];
};

// API

// Create chat request

export type AImage = {
  imageUrl: string,
  width: number,
  height: number
}

export type VaraFilmerItem = {
  title: string,
  description: string,
  mainText: string,
  videoUrl: string
}