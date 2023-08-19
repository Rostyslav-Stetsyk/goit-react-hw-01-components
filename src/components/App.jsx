import PropTypes from 'prop-types';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from './Profile/Profile';
import { Layout } from './Layout';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { SideBarWrapper } from './SideBarWrapper';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Main } from './Main';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

export const App = () => {
  return (
    <Layout>
      <SideBarWrapper>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendsList friends={friends} />
      </SideBarWrapper>
      <Main>
        <TransactionHistory transactions={transactions} />
      </Main>
    </Layout>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
