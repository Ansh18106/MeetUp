import React from "react";
import { styled } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <FriendsSideBar />
        <Messenger />
        <AppBar />
        sdfghjk
      </Wrapper>
    </>
  );
};

export default Dashboard;
