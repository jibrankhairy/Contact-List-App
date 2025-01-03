import React from "react";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      <i className="fas fa-trash"></i>
    </button>
  );
};

export default DeleteButton;
