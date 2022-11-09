import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Post = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userId?: User;
};
