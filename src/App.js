import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendItemList from 'components/FriendItemList';
import TransactionHistory from 'components/TransactionHistory';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        key={user.tag}
        avatarUrl={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics stats={data} />
      <FriendItemList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
