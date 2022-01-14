import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = (props) => {
  const { users, getUser } = props;
  //const  =
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Birthdate</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user?.username}</td>
            <td>{user?.email}</td>
            <td>{user?.birthdate}</td>
            <td>
              <Link to={`/user/${user.id}`}>
                <button onClick={() => getUser(user)}>Cập nhật</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

User.propTypes = {
  users: PropTypes.array,
};

User.defaultProps = {
  users: null,
};

export default User;
