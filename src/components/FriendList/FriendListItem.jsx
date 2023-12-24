 import "./FriendList"
 import { FreandList, Chip } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FreandList>
      <Chip event={isOnline.toString()}></Chip>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FreandList>
  );
};

export default FriendListItem