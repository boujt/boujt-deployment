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

// API

// Create chat request
