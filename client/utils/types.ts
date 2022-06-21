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

export type ContactUsData = {
    adress: string;
    email: string;
    latitude: number;
    longitude: number;
};

export type Worker = {
    name: string;
    email: string;
    role: string;
    imageUrl: string;
};

export type Faq = {
    question: string;
    answer: string;
};

export type AboutUsData = {
    workers: Worker[];
    faq: Faq[];
};

export type BlogData = {
    title: string;
    text: string;
    omslagsbild: string;
    bilder: string[];
    videos: string[];
};

export type FetchDataResponse<T> = {
    data: T | undefined;
    isLoading: boolean;
    error: FetchDataError | undefined;
};

export type FetchDataError = {
    message: string;
};

export type AImage = {
    imageUrl: string;
    width: number;
    height: number;
};

export type VaraFilmerItem = {
    title: string;
    description: string;
    mainText: string;
    videoUrl: string;
};

export type OpeningHours = {
    open_time: string;
    close_time: string;
};
