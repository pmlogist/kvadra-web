import { RequestLoginBody, RequestRegisterBody } from "@/schemas/authSchemas";

export const fetcher = async (path: string, opts?: RequestInit) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL || process.env.API_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    ...opts,
  }).then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw { ...data.error };
    }
    return data;
  });

export const API = {
  AUTH: {
    ME: async () => fetcher(`/auth/me`),
    LOGIN: async (payload: RequestLoginBody) =>
      fetcher(`/auth/login`, { method: "POST", body: JSON.stringify(payload) }),
    LOGOUT: async () => fetcher(`/auth/logout`, { method: "POST" }),
    REGISTER: async (payload: RequestRegisterBody) =>
      fetcher(`/auth/register`, {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  },
  PROFILE: {
    ME: async () => fetcher(`/profile`),
  },
  QUIZ: {
    ALL: async () => fetcher(`/games?type=quiz&learning=eng`),
    ONE: async (gameId: number) => fetcher(`/quizzes/${gameId}`),
  },
  HISTORIES: {
    ALL: async () => fetcher("/histories"),
    CREATE: async (body: BodyInit) =>
      fetcher("/histories", { method: "POST", body }),
  },

  SETTINGS: {
    ALL: async () => fetcher("/settings"),
    EDIT: async (body) =>
      fetcher("/settings", { method: "PUT", body: JSON.stringify(body) }),
  },
};
