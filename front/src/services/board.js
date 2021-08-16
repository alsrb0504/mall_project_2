class BoardClass {
  board_items = [
    {
      id: 22,
      title: '가장 최근의 22 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 21,
      title: '21 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    { 
      id: 20,
      title: '20 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 19,
      title: '19 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 18,
      title: '18 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 17,
      title: '17 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    { 
      id: 16,
      title: '16 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 15,
      title: '15 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 14,
      title: '14 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 13,
      title: '13 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 12,
      title: '가장 최근의 12 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 11,
      title: '11 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    { 
      id: 10,
      title: '10 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 9,
      title: '9 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 8,
      title: '8 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 7,
      title: '7 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    { 
      id: 6,
      title: '6 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 5,
      title: '5 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 4,
      title: '4 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 3,
      title: '3 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 2,
      title: '2 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 1,
      title: '1 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
  ]

  add_board (item) {
    this.board_items.unshift(item);
  }

  get_board() {
    return this.board_items;
  }
}

export default BoardClass;