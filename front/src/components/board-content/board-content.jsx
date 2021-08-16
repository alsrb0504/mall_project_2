import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

const BoardContent = (props) => {

  const handleClick = () => {

    console.log(BlogPost());
  }

  return (
    <main>
      <h2 onClick={handleClick}>게시글 내용</h2>
      {
        BlogPost()
      }
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod qui iusto deleniti voluptas blanditiis, recusandae est excepturi fuga pariatur.</p> */}
    </main>
  )
}

export default BoardContent;