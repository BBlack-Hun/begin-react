import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  // console.log(user);
  useEffect(() => {
    // console.log('컴포넌트가 화면에 나타남');
    // // props -> state
    // // Rest API
    // // D3 Video.js
    // // setInterval, setTimeout
    // return () => {
    //   // clearInterval, clearTimeout
    //   // 라이브러리 인스턴스 제거
    //   console.log('컨포넌트가 화면에서 사라짐');
    // };
    console.log(user);
    return () => {};
    // 해당 값의 변동에 대해서 반응하곘다.
  }, [user]);
  return (
    <div>
      <b
        style={{ color: active ? 'green' : 'black', cursor: 'pointer' }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      {/* 매개변수가 있을 시에는 아래와 같이 화살표함수로 구현한다. */}
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onToggle, onRemove }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
