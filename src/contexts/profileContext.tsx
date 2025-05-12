import { createContext } from "react";

interface Profile {
  id: number;
  username: string;
  email: string;
  bio: any;
  image: string;
  token: string;
}

export const ProfileContext = createContext<any | undefined>(undefined);
