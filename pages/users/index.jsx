import React from "react";
import Table from "../../components/Users/Table";
import Navbar from "../../components/Navbar/Navbar";
import Button from "react-bootstrap/Button";
import Create from "../../components/Users/Create";

const User = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center">Manage Users</h1>
        <Create />
        <Table />
      </div>
    </>
  );
};

export default User;
