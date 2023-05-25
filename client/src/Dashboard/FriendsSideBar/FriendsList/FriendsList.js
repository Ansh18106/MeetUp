import React from "react";
import { styled } from "@mui/material";
import FriendsListItem from "./FriendsListItem";

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: "werty",
    isOnline: true,
  },
  {
    id: 2,
    username: "asdfgh",
    isOnline: false,
  },
  {
    id: 3,
    username: "dfghpoiuyt",
    isOnline: true,
  },
  {
    id: 4,
    username: "oiuyt",
    isOnline: false,
  },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((friend) => (
        <FriendsListItem
          username={friend.username}
          id={friend.id}
          key={friend.key}
          isOnline={friend.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
