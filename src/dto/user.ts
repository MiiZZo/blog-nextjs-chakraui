import { Role } from "./role";
import { Article } from "./article";

export interface PublicUser {
  id: string;
  username: string;
  bio: string;
  image: string;
  articles: Article[];
  // facebook: string;
  // twitter: string;
  // github: string;
  // homepage: string;
}

export interface User extends PublicUser {
  role: Role;
}
