import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendItemList } from 'components/FriendItemList/FriendItemList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        avatarUrl={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendItemList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
