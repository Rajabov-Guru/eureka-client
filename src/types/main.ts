export interface Route {
  route: string;
  Component: any;
}

export interface User {
  id: number;
  nickname: string;
  password?: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface AuthRequest {
  nickname: string;
  password: string;
}

export interface BoardItem {
  id: number;
  name: string;
  userId: string;
  createdAt: string;
}

export interface Idea {
  id: number;
  title: string;
  text: string;
  boardId: string;
  createdAt: string;
}
