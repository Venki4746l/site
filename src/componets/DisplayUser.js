import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deltedUser, getUsers } from "../Redux/actions/UserActions";
import Table from "react-bootstrap/Table";
import UserFrom from "./UserFrom";
import { useNavigate } from "react-router-dom";

const DisplayUser = ({ logoutHandle }) => {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.user);
  const [editUser, setEditUser] = useState(null);
  const navigate=useNavigate()
  const token=localStorage.getItem("token")

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // dleted the  user with id
  const onDletedhandler = (id) => {
    dispatch(deltedUser(id));
  };
  //onEdit handler
  const onEditUSerHAndler = (id, user) => {
    setEditUser(user);
  };

  //on logout the user
  const handleLogout = () => {
    dispatch(({type:"LOGOUT"}))
    navigate("/login")
    localStorage.removeItem("token");
  };

  return (
   <div>
     {token ? <div>
      <div>
        <h1>dispay</h1>
        <button onClick={handleLogout}>logout</button>
        
      </div>

      <div>
        <UserFrom EditUserDetails={editUser} />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userdata.user &&
            userdata.user.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td className="d-flex justify-content-around">
                  <button
                    className="btn btn-primary"
                    onClick={() => onEditUSerHAndler(user.id, user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDletedhandler(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>:<div>
      <p>User not loggin please login</p>
      <button onClick={()=>navigate("/login")} className="btn btn-success">Login</button>
      </div>}
   </div>
  );
};

export default DisplayUser;
