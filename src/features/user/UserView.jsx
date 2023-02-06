import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

function UserView() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (user.loading) {
    return <div>Loading....</div>;
  }

  if (!user.loading && user.error) {
    return <div>user.error</div>;
  }

  return (
    <div>
      <h2>List of users</h2>
      {user.users.map((elem) => {
        return <div>{elem}</div>;
      })}
    </div>
  );
}

export default UserView;
