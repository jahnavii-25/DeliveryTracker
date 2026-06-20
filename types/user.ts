export type UserRole = "DRIVER" | "MANAGER";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
