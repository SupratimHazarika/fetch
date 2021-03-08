import { useState, useEffect } from "react";
import "./App.css";
import User from "./components/User";
import Modal from "./components/Modal";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [current_page, setCurrent_page] = useState(1);
  const [current_user, setCurrent_user] = useState(null);
  const [search_user, setSearch_user] = useState(null);

  const fetchData = (current_page) => {
    axios
      .get(`https://reqres.in/api/users?page=${current_page}&per_page=4`)
      .then((response) => response.data)
      .then((data) => setUsers(data.data))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData(current_page);
  }, [current_page]);
  return (
    <div className="main_container">
      <Search
        search_user={search_user}
        setSearch_user={setSearch_user}
        setUsers={setUsers}
        users={users}
      />
      {current_user ? (
        <Modal
          current_user={current_user}
          setCurrent_user={setCurrent_user}
          users={users}
          search_user={search_user}
        />
      ) : (
        ""
      )}
      <User
        users={users}
        setCurrent_page={setCurrent_page}
        setCurrent_user={setCurrent_user}
      />
    </div>
  );
}

export default App;
