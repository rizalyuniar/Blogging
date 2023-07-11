import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Users/Card";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Photo from "../../public/landing.jpg";
import ListComment from "../../components/Users/ListComment";
import Comment from "../../components/Users/Comment";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v2/posts/${id}`)
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mb-5">
        <div className="content mt-4">
          <div className="text-center">
            <h4>{data.title}</h4>
            <div className="mt-3">
              <Image
                className="rounded mx-auto d-block"
                crossOrigin="anonymous"
                src={Photo}
                alt="Gambar Landing 1"
              />
            </div>
          </div>
          <p>{data.body}</p>
        </div>
        <ListComment />
        <Comment />
        <div>
          <h3>Kumpulan Artikel Pengguna</h3>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Post;
