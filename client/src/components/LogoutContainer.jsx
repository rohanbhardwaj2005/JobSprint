import { FaUserCircle } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import { useNavigate } from "react-router-dom";

const LogoutContainer = () => {
  const { user, logoutUser } = useDashboardContext();
  let navigate = useNavigate();

  return (
    <Wrapper>
      <div className="button-container">
        <button type="button" className="btn logout-btn" onClick={logoutUser}>
          Logout
        </button>
        <button type="button" className="btn logout-btn">
          {user.avatar ? (
            <img src={user.avatar} alt="avatar" className="img" />
          ) : (
            <FaUserCircle />
          )}
          {user?.firstName}
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
