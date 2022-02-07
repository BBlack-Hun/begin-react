import React from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
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
