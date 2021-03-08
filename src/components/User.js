import React, { useState } from "react";
import "./User.css";

function User({ users, setCurrent_page, setCurrent_user }) {
  return (
    <div className="container">
      {users.map((user) => (
        <tbody key={user.id} className="user_section">
          <tr className="single_user">
            <td>
              <img
                src={user.avatar}
                className="avatar"
                onClick={() => setCurrent_user(user.id)}
              />
            </td>
            <td className="first_name">{user.first_name}</td>
            <td className="last_name">{user.last_name}</td>
          </tr>
        </tbody>
      ))}
      <div className="buttons">
        <button onClick={() => setCurrent_page(1)}>1</button>
        <button onClick={() => setCurrent_page(2)}>2</button>
        <button onClick={() => setCurrent_page(3)}>3</button>
      </div>
    </div>
  );
}

export default User;
