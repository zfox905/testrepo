import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  postId?: PostWhereUniqueInput;
};
