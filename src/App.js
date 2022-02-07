import React, { useRef } from 'react';
import UserList from './UserList';
import './App.css';

function App() {
  const users = [
    {
      id: 1,
      useranem: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];

  const nextId = useRef(4);

  // 새롭게 배열에 객체를 추가하는 것.
  const onCreate = () => {
    console.log(nextId.current); // 4
    nextId.current += 1;
  };

  return <UserList users={users} />;
}

export default App;
