import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';
import { FriendList } from './FriendItemList.styled';

export const FriendItemList = ({ friends }) => {
  return (
    <FriendList>
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
    </FriendList>
  );
};

FriendItemList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
