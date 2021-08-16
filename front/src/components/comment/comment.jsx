import React from 'react';

const Comment = ({item}) => {

  console.log(item);

  const {username, message, createdAt} = item;

  return (
    <li className="comment">
      <h4 className="comment-username">{username}</h4>
      <p className="comment-message">{message}</p>
      <span className="comment-date">{createdAt}</span>
    </li>
  )
}

export default Comment;