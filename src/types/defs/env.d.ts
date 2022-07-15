declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "development" | "testing" | "production";
      API_URL?: string;
      NEXT_PUBLIC_APP_NAME?: string;
    }
  }
}

export {};
