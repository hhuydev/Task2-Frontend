import React from "react";
import PropTypes from "prop-types";
import UserSearchForm from "../FilterUser";
import User from "../User";

const Home = (props) => {
  const { users, onSubmit, getUser } = props;
  return (
    <>
      <UserSearchForm onSubmit={onSubmit} />
      <User users={users} getUser={getUser} />
    </>
  );
};

Home.propTypes = {};

export default Home;
