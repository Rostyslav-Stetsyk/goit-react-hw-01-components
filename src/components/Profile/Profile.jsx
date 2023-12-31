import PropTypes from 'prop-types';
import {
  Avatar,
  Description,
  Name,
  ProfileWrapper,
  DescriptionText,
  Stats,
  StatsEl,
  Label,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <DescriptionText>@{tag}</DescriptionText>
        <DescriptionText>{location}</DescriptionText>
      </Description>

      <Stats>
        <StatsEl>
          <Label>Followers</Label>
          <span>{followers}</span>
        </StatsEl>
        <StatsEl>
          <Label>Views</Label>
          <span>{views}</span>
        </StatsEl>
        <StatsEl>
          <Label>Likes</Label>
          <span>{likes}</span>
        </StatsEl>
      </Stats>
    </ProfileWrapper>
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
