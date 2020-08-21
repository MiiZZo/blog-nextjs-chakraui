import { CommentProps } from "../molecules/comment/comments.types";
import { Article } from "@dto/index";

export interface ArticleProps extends Article {
  handleSubmitComment: (comment: string) => void;
}
