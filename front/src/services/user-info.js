class UserDB {

  user_info = [
    {
      id: 'aa',
      password: '1234',
      phone: '010-0000-0000',
      email: 'aaa@gmail.com',
    },
    {
      id: 'bob',
      password: '1111',
      phone: '010-1111-1111',
      email: 'bob@gmail.com',
    }
  ]

  CreateUser = (new_user_info) => {
    this.user_info.push(new_user_info);
  }
  
}

export default UserDB;