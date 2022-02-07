import React from 'react';

function User({ user, onRemove }) {
  const { username, email, id } = user;
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
      {/* 매개변수가 있을 시에는 아래와 같이 화살표함수로 구현한다. */}
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;
