import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../Redux/actions/UserActions";

const UserFrom = ({ EditUserDetails }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  });
  useEffect(() => {
    if (EditUserDetails) {
      setUser(EditUserDetails);
    }
  }, [EditUserDetails]);
  
  // console.log(EditUserDetails)
  // console.log(editSate)
  // console.log(editStausUpdate)
  const dispacth = useDispatch();

  //update the data with onchange handler
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //submit the user data or update the user dat
  const onSubmitHandler = (e) => {
    //prevebt the defaults of submiting
    e.preventDefault();

    if (EditUserDetails) {
      dispacth(updateUser(user));
    } else {
      dispacth(addUser(user));
      setUser({ firstName: "", lastName: "", gender: "", ...user });
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="d-flex flex-column w-50 p-5 m-3"
      >
        <div className="form-group">
          <label htmlFor="userFristName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            className="form-control"
            id="userFristName"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userLastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            className="form-control"
            id="userLastName"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userGender">Gender</label>
          <input
            type="text"
            name="gender"
            value={user.gender}
            className="form-control"
            id="userGender"
            onChange={onChangeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary m-3">
          {EditUserDetails ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default UserFrom;
