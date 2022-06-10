import axios from "axios";
import Strapi from "strapi-sdk-js";
import { ChatRoom } from "./types";

export type CreateChatRequest = {
  strapi: Strapi;
  is_video: boolean;
  token: string;
  syssnare: number;
};

export const doCreateChatRoom = async (data: CreateChatRequest) => {
  const strapi_url = data.is_video ? "videochats" : "textchats";
  const local_url = data.is_video ? "video_room" : "chat_room";
  const room = await axios.post("/api/" + local_url + "/create");
  const strapi_room = await data.strapi.create(strapi_url, {
    room_url: room.data.name,
    session_id: data.token,
    user: data.syssnare,
  });

  const response: ChatRoom = {
    room_url: room.data.url,
    syssnare: data.syssnare,
    token: data.token,
    is_video: data.is_video,
  };
  return response;
};

export type DeleteChatRequest = {
  strapi: Strapi;
  token: string;
};

export const doDeleteChatRoom = async (data: DeleteChatRequest) => {
  const video_rooms = await data.strapi.find("videochats");
  const text_rooms = await data.strapi.find("textchats");
  const requests = await data.strapi.find("request-chats");

  requests.data.forEach(async (element) => {
    if (element.attributes.token == data.token) {
      data.strapi.delete("request-chats", element.id);
    }
  });
  video_rooms.data.forEach(async (element) => {
    if (element.attributes.session_id === data.token) {
      await data.strapi.delete("videochats", element.id);
      await axios.delete(
        `/api/chat_room/delete/${element.attributes.room_url}`
      );
    }
  });
  text_rooms.data.forEach(async (element) => {
    if (element.attributes.session_id === data.token) {
      await data.strapi.delete("textchats", element.id);
      await axios.delete(
        `/api/chat_room/delete/${element.attributes.room_url}`
      );
    }
  });
};

export const doGetActiveRooms = async (strapi: Strapi, syssnare: number) => {
  const video = await strapi?.find("videochats", {
    populate: {
      user: {
        fields: ["id"],
      },
    },
  });
  const text = await strapi?.find("textchats", {
    populate: {
      user: {
        fields: ["id"],
      },
    },
  });

  const filtered_video = video.data.filter((element) => {
    if (element.attributes.user.data.id === syssnare) {
      return true;
    }
  });
  const filteterd_text = text.data.filter((element) => {
    if (element.attributes.user.data.id === syssnare) {
      return true;
    }
  });

  if (filtered_video.length > 0) {
    return filtered_video[0];
  }
  if (filteterd_text.length > 0) {
    return filteterd_text[0];
  }
  return null;
};

const doGetAvailableSyssnare = () => {
  axios.get("");
};
