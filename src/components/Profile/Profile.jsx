import PropTypes from 'prop-types';
import {
  DescrWrapper,
  ProfileWrapper,
  StatsItems,
  StatsLable,
  StatsList,
  StatsQuantity,
  UserAvatar,
  UserLocation,
  UserName,
  UserNickname,
} from './Profile.styled';

export const Profile = ({ avatarUrl, name, tag, location, stats }) => {
  return (
    <ProfileWrapper>
      <DescrWrapper>
        <UserAvatar src={avatarUrl} alt={name} width="300" />
        <UserName>{name}</UserName>
        <UserNickname>@{tag}</UserNickname>
        <UserLocation>{location}</UserLocation>
      </DescrWrapper>

      <StatsList>
        <StatsItems>
          <StatsLable>Followers</StatsLable>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItems>
        <StatsItems>
          <StatsLable>Views</StatsLable>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItems>
        <StatsItems>
          <StatsLable>Likes</StatsLable>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItems>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
