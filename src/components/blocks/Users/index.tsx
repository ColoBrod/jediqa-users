import React from 'react';
import UserCard, { UserCardProps } from '../User';

export interface UsersProps {
  list: UserCardProps[];
}

const Users = ({ list }: UsersProps) => {
  return (
    <div className="users-list">
      {
        list.map(user => <UserCard key={user.login.uuid} {...user} />)
      }
    </div>
  );
};

export default Users;

