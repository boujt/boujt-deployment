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
};

// API

// Create chat request
