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

}

export default Auth;