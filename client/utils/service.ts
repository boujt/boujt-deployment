import axios from "axios";
import Strapi from "strapi-sdk-js";
import { ERRORS, SYSSNARE_STATUS } from "./constants";
import { generateToken } from "./helperFunctions";
import { ChatRoom } from "./types";

export type CreateChatroomRequest = {
  is_video: boolean;
  token: string;
  syssnare: number;
};

export const doCreateChatRoom = async (data: CreateChatroomRequest) => {
  const room = await axios.post(`/api/chatroom/${data.token}`, {
    is_video: data.is_video,
    syssnare: data.syssnare,
  });
  console.log(room);

  const response: ChatRoom = {
    room_url: room.data.data.chatroomData.room_url,
    syssnare: room.data.data.chatroomData.syssnare,
    token: room.data.data.chatroomData.token,
    is_video: room.data.data.chatroomData.is_video,
  };
  return response;
};

export type DeleteChatRequest = {
  strapi: Strapi;
  token: string;
};

export const doDeleteChatRoom = async (data: DeleteChatRequest) => {
  const requests = await data.strapi.find("request-chats");

  requests.data.forEach(async (element) => {
    if (element.attributes.token == data.token) {
      data.strapi.delete("request-chats", element.id);
    }
  });
  return axios.delete(`/api/chatroom/${data.token}`);
};

export const doSetStatusSyssnare = async (
  status: typeof SYSSNARE_STATUS,
  id: number
) => {
  return await axios.post(`/api/syssnare-status/${id}`, {
    status: status,
  });
};

export const doGetActiveRooms = async (strapi: Strapi, syssnare: number) => {
  const rooms = await strapi?.find("chatrooms", {
    populate: {
      syssnare: {
        fields: ["id"],
      },
    },
  });
  console.log(rooms);

  const rooms_filtered = rooms.data.filter((element) => {
    if (element.attributes.syssnare.data.id === syssnare) {
      return true;
    }
  });

  if (rooms_filtered.length > 0) {
    return rooms_filtered[0];
  }

  return null;
};

export const doGetAllSyssnare = async () => {
  return await axios.get("/api/syssnare");
};

export const doGetChatRoomFromToken = async (token: string) => {
  return await axios.get(`/api/chat-room-from-token/${token}`);
};

export const doGetRequestByToken = (token: string) => {
  return axios.get(`/api/chat-request/${token}`);
};

export const doCreateChatRequest = async (
  syssnareID: number,
  isVideo: boolean
) => {
  const token = generateToken();
  const data = {
    token: token,
    is_video: isVideo,
    syssnare: syssnareID,
  };
  const syssnare = await doGetAllSyssnare();
  const sys = syssnare.data.filter((sys) => sys.id === syssnareID);
  if (sys.length === 0) return { error: ERRORS.NOT_FOUND };

  if (sys[0].status === SYSSNARE_STATUS.AVAILABLE) {
    await axios.post("/api/chat-request/create", data);
    return { token };
  }

  return { error: ERRORS.BUSY };
};

export const doCancelChatRequest = async (token: string) => {
  return await axios.delete(`(/api/chat-request/${token}`);
};

export const doSubmitQuestionToFragelada = async (question: string) => {
  return await axios.post("/api/fragelada", { question });
};
