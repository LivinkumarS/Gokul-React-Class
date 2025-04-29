import React, { useEffect, useState } from "react";

export default function App() {
  const [post, setPost] = useState([]);
  

  const fetchPost = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const postRes = await result.json();
      setPost(postRes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      {post.map((ele, ind) => (
        <div key={ind}>
          <h2>Titile:{ele.title}</h2>
          <p>{ele.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
