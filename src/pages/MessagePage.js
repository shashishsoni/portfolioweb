import React from "react";
import Avatar from "../components/avatar";
import ContactMenu from "../components/ContactMenu";
import hackerAvatar from "../assets/H6HPNeKD.png";
import hackerAvatar2 from "../assets/gqVNtoUb.png";

const MessagePage = () => {
  return (
    <>
      <Avatar 
        page="message-left" 
        image={hackerAvatar}
      />
      <Avatar 
        page="message-right" 
        image={hackerAvatar2}
      />
      <ContactMenu />
    </>
  );
};

export default MessagePage;