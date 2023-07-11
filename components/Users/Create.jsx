import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from "sweetalert2";

const Create = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const token =
    "57b21f9ad44806d1c057656357bd6305e1af4af951bc25ea92f156544c6ff5e";

  const handleChange = (e) => {
    e.preventDefault();

    axios
      .post(`https://gorest.co.in/public/v2/users`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        Swal.fire("Berhasil Menambah Data", "You clicked the button!", "success");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
          text: "Masukan token di dalam component users create!",
        });
      });
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ fontSize: "15px" }}
      >
        Create User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleChange}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" autoFocus onChange={(e) => setData({ ...data, name: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="email" autoFocus onChange={(e) => setData({ ...data, email: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" name="gender" autoFocus onChange={(e) => setData({ ...data, gender: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" name="status" autoFocus onChange={(e) => setData({ ...data, status: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
              onClick={handleChange}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Create;
