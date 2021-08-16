import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

const BoardContent = ({props}) => {

  const location = useLocation();

  const {title, userId, createdAt, content} = location.state.item;

  const handleClick = () => {
    console.log('hi');
  }

  return (
    <main>
      <h2 onClick={handleClick}>게시글 내용</h2>
      {
        BlogPost()
      }

      <div>
        <h3>{title}</h3>
        <span>{userId}</span>
        <span>{createdAt}</span>

        <p>{content}</p>
      </div>

      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod qui iusto deleniti voluptas blanditiis, recusandae est excepturi fuga pariatur.</p> */}
    </main>
  )
}

export default BoardContent;