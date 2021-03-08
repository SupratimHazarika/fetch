import React from "react";
import "./Modal.css";

function Modal({ current_user, users, setCurrent_user }) {
  return (
    <div className="modal">
      {users.map((user) =>
        user.id === current_user ? (
          <div key={user.id}>
            <img src={user.avatar} className="avatar_mod"/>
            <div>User Id: {user.id}</div>
            <div>
              Name : {user.first_name}
              {user.last_name}
            </div>
            <div>User Email: {user.email}</div>
          </div>
        ) : (
          ""
        )
      )}
      <button className="button" onClick={() => setCurrent_user(null)}>
        Close
      </button>
    </div>
  );
}

export default Modal;
