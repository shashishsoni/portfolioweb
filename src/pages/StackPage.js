import React from 'react';
import Avatar from '../components/avatar';
import StackMenu from '../components/StackMenu';
import hackerAvatar from '../assets/gqVNtoUb.png'; // Add a hacker avatar image

const StackPage = () => {
  return (
    <>
      <Avatar 
        page="stack" 
        image={hackerAvatar}
      />
      <StackMenu />
    </>
  );
};

export default StackPage;
