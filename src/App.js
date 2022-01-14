import { useEffect, useState } from "react";
import "./App.css";
import queryString from "query-string";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUserForm from "./components/UpdateUser";
import Home from "./components/Home";

function App() {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const paramsString = queryString.stringify(filters);

        const URL = `http://localhost:5000/api/users?${paramsString}`;
        const response = await fetch(URL);
        const responseJson = await response.json();
        setUsers(responseJson?.data);
      } catch (error) {
        console.log("Failed to fetch user list: ", error.message);
      }
    };
    fetchUsers();
  }, [filters, user]);

  const handleFiltersFormChange = (newFilters) => {
    setFilters({ ...filters, username: newFilters.searchTerm });
  };

  const getUser = (user) => {
    setUser({
      user,
    });
  };
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                users={users}
                onSubmit={handleFiltersFormChange}
                getUser={getUser}
              />
            }
          />
          <Route path="/user/:id" element={<UpdateUserForm user={user} />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
