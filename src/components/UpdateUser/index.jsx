import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";

const UpdateUserForm = (props) => {
  const location = useLocation();
  const { user } = props;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const path = location.pathname.split("/")[2];

  useEffect(() => {
    if (!user) return;
    setUsername(user?.user.username);
    setEmail(user?.user.email);
    setBirthdate(user?.user.birthdate);
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };
  console.log(path);
  async function updateUser(userData) {
    const URL = `http://localhost:5000/api/users/update/${path}`;
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const user = { username, email, birthdate };
    updateUser(user);
    setUsername("");
    setEmail("");
    setBirthdate("");
  };

  return (
    <form className="form-style" onSubmit={handleSubmitForm}>
      <input
        type="text"
        placeholder="Full Name"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="text"
        placeholder="Birthdate"
        value={birthdate}
        onChange={handleBirthdateChange}
      />

      <button type="submit">Cập nhật</button>
    </form>
  );
};

UpdateUserForm.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  birthdate: PropTypes.string,
};

UpdateUserForm.defaultProps = {
  username: null,
  email: null,
  birthdate: null,
};

export default UpdateUserForm;
