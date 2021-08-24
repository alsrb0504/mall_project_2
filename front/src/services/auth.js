import UserDB from './user-info';

class Auth {

  cur_user = null;

  constructor() {
    this.users = new UserDB();

    // 서버 연결 시 필요.
    // this.http = http;
    // this.tokenStorage = tokenStorage;
  }

  Login = (access_user) => {
    let result = this.users.user_info.find(user => 
      ((user.id === access_user.id) && (user.password === access_user.password))
    )
    this.cur_user = access_user.id;
    return result;
  }

  Logout = () => {
    this.cur_user = null;
  }

  Create = (new_user) => {
    // 새로운 사용자 생성.
    this.users.CreateUser(new_user);

    this.cur_user = null;
  }

}

export default Auth;