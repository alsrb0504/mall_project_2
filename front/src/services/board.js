class BoardClass {
  board_items = [
    {
      id: 22,
      title: '가장 최근의 22 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
      comments: [
        {
          id: '9092423',  // date.now()로 생성
          username: 'user01',
          message: '댓글 내용01',
          createdAt: '2021-08-16',
        },
        {
          id: '9092420',  // date.now()로 생성
          username: '관리자',
          message: '답변 내용',
          createdAt: '2021-08-16',
        },
        {
          id: '8888823',
          username: 'user01',
          message: '댓글 내용02',
          createdAt: '2021-08-17',
        }
      ]
    },
    {
      id: 21,
      title: '21 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    { 
      id: 20,
      title: '20 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 19,
      title: '19 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 18,
      title: '18 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 17,
      title: '17 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    { 
      id: 16,
      title: '16 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 15,
      title: '15 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 14,
      title: '14 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 13,
      title: '13 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 12,
      title: '가장 최근의 12 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 11,
      title: '11 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    { 
      id: 10,
      title: '10 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 9,
      title: '9 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 8,
      title: '8 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 7,
      title: '7 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    { 
      id: 6,
      title: '6 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 5,
      title: '5 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 4,
      title: '4 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 3,
      title: '3 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 2,
      title: '2 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
    {
      id: 1,
      title: '1 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor quis vero praesentium, adipisci enim asperiores, animi officia ipsam qui magni vitae doloribus architecto non molestias quam itaque provident eaque!',
    },
  ]

  board_top = { 
    id: 999,
    title: '제목',
    userId: '글쓴이',
    createdAt: '작성일',
    supervisor: true,
  }

  add_board (item) {
    this.board_items.unshift(item);
  }

  get_board() {
    return this.board_items;
  }

  add_comment (comment, id) {
    const select = this.board_items.find((item) => {
      if(id === item.id) {
        return item;
      }
    });

    // 댓글이 없을 때, comments 배열 생성.
    if(!select.comments) {
      select.comments = new Array();
    }

    select.comments.push(comment);

    return select.comments;
  }
}

export default BoardClass;