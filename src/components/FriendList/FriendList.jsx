import { Friend } from 'components/Friend/Friend';
import { List } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline }) => (
        <Friend avatar={avatar} name={name} isOnline={isOnline} key={name} />
      ))}
    </List>
  );
};
