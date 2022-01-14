import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const UserSearchForm = (props) => {
  const { onSubmit } = props;
  const [searchUser, setSearchUser] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchUser(value);
    if (!onSubmit) return;
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = { searchTerm: value };
      onSubmit(formValues);
    }, 500);
  };
  return (
    <form action="">
      <input
        type="text"
        value={searchUser}
        onChange={handleSearchTermChange}
        placeholder="Search username"
      />
    </form>
  );
};

UserSearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

UserSearchForm.defaultProps = {
  onSubmit: null,
};

export default UserSearchForm;
