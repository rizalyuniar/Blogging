import axios from "axios";
import React, { useEffect, useState } from "react";

const ListComment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v2/comments`)
      .then((res) => {
        setData(res?.data);
        // console.log(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="row mt-4">
        <h3>Kumpulan Comment Pengguna</h3>
        {data.map((item) => (
          <div className="col-sm-6 mt-2 mb-2" key={item.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.body}</p>
                  <a href="#" className="btn btn-success">
                    Edit Comment
                  </a>
                  <a href="#" className="btn btn-danger mx-2">
                    Delete Comment
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListComment;
