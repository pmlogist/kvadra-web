export namespace Req {
  export interface LoginBody {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
  }
  export interface RegisterBody {
    firstName?: string;
    lastName?: string;
    username: string;
    email: string;
    password: string;
  }
}
