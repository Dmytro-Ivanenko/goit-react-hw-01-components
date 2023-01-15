import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
// import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import statData from '../data/statData.json';
import friends from '../data/friends';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statData} />
      <Statistics stats={statData} />

      <FriendList friends={friends} />
      {/* 
      <FriendList />
      <TransactionHistory /> */}
    </>
  );
};
