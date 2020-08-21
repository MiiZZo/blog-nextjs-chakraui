import { Comment } from "./comment";
import { User } from ".";

export interface Article {
  id: string;
  title: string;
  body: string;
  description: string;
  /**
   * array of { body: string }
   */
  comments: Comment[];
  created: string;
  author: User;
}
