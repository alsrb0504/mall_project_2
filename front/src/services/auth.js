import UserDB from './user-info';

class Auth {

  constructor() {
    this.users = new UserDB();
  }

  Login = (access_user) => {
    let result = this.users.user_info.find(user => 
      ((user.id === access_user.id) && (user.password === access_user.password))
    )
    return result;
  }

  Create = (new_user) => {
    // 새로운 사용자 생성.
    this.users.CreateUser(new_user);
  }

}

export default Auth;