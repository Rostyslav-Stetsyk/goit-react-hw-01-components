import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from './Profile/Profile';
import { Layout } from './Layout/Layout.styled';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { SideBarWrapper } from './SideBarWrapper/SideBarWrapper.styled';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Main } from './Main/Main.styled';

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
