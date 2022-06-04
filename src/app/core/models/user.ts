export interface UserResponse {
  due_on: string;
  id: number;
  status: string;
  title: string;
  user_id: number;
}

export class User implements UserResponse {
  due_on!: string;
  id!: number;
  status!: string;
  title!: string;
  user_id!: number;

  constructor(data: UserResponse) {
    Object.assign(this, data);
  }
}
