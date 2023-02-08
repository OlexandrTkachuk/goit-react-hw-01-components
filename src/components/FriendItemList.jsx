import PropTypes from 'prop-types';
import FriendItem from './FriendItem';

export default function FriendItemList({ friends }) {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <FriendItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendItemList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
