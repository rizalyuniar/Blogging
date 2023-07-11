import React from "react";

const Comment = () => {
  return (
    <>
      <div className="form-group mt-4">
        <label>
            <strong>Comment</strong>
        </label>
        <textarea
          className="form-control"
          rows={4}
          defaultValue={""}
        />
        <a href="#" className="btn btn-primary">
          Edit Comment
        </a>
      </div>
    </>
  );
};

export default Comment;
