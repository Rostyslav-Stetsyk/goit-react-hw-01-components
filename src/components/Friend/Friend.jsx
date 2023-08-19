import { FriendItem, FriendStatus, FriendName } from './Friend.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <img src={avatar} alt={name} width="48" height="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
