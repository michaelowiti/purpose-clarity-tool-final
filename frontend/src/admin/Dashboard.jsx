import React, { useEffect } from "react";
import SideBar from "./sidebar/SideBar";
import TopBar from "./topbar/TopBar";
import "./Dashboard.css";
import UserssList from "./users/UsersList";
import dummyData from "./users/usersData";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../redux/actions/userActions";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const { loading, error, users } = user;
  const dispatch = useDispatch();

  const getUsers = () => {
    if (users.length === 0) {
      dispatch(listUsers());
    }
    // dispatch(listUsers()); this is where am calling listUsers function but this is being called all the time causing the app even to crash
  };

  useEffect(() => {
    getUsers();
  }, []);

  const formattedUsers = users?.map((user) => {
    return {
      ...user,
      id: user._id,
    };
  });

  console.log(formattedUsers);
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='content'>
        <TopBar />
        <div className='container mt-3'>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-3 col-md-3 col-sm-6'>
              <div className='card'>
                <div className='card-icon'>
                  <i className='fa fa-users' aria-hidden='true'></i>
                </div>
                <p className='text-warning'>50 Users</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6'>
              <div className='card'>
                <div className='card-icon'>
                  <i class='fa fa-file-text' aria-hidden='true'></i>
                </div>
                <p className='text-info'>18 Responses</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6'>
              <div className='card'>
                <div className='card-icon'>
                  <i className='fa fa-comment' aria-hidden='true'></i>
                </div>
                <p className='text-success'>7 Reviews</p>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center my-3'>
            {loading ? (
              <span className='text-warning'>Loading...</span>
            ) : (
              error && <span className='text-danger'>{error}</span>
            )}
            <div className='col-lg-10 col-md-10 col-sm-10'>
              <UserssList data={formattedUsers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
