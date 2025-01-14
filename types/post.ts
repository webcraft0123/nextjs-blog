export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: Tag[];
}

export type Tag = "#Company Updates" | "#Education";