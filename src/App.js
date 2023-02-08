import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendItemList from 'components/FriendItemList';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

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
    </div>
  );
}
