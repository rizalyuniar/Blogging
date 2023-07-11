import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Edit from "./Edit";
import Swal from "sweetalert2";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v2/users`)
      .then((res) => {
        setData(res?.data);
        console.log(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://gorest.co.in/public/v2/users/${id}`)
          .then((response) => {
            Swal.fire(`${response.data.message}`, 'Your file has been deleted.', 'success');
            window.location.reload();
          })
          .catch((err) => alert(`${err.response.data.message}`));
      }
    });
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
                <td>
                  <Edit
                    id={item.id}
                    name={item.name}
                    email={item.email}
                    gender={item.gender}
                    status={item.status}
                  />
                  <Button
                    className="mx-1"
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                    style={{ fontSize: "2px" }}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ height: "15px" }}
                    />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
