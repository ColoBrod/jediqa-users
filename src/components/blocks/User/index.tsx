import React from 'react';

export interface UserCardProps {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const UserCard = (props: UserCardProps) => {
  const { uuid } = props.login;
  const fullName = `${props.name.first} ${props.name.last}`;
  const photoUrl = props.picture.large;
  const { nat } = props;

  return (
    <div id={uuid} className="user-card">
      <div className="user-card__photo">
        <img src={photoUrl} alt={fullName} draggable={false} />
      </div>
      <div className="user-card__full-name">
        {fullName}
      </div>
      <div className="user-card__country">
        {nat}
      </div>
    </div>
  );
};

export default UserCard;

