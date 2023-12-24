import {
  Conteiter,
  Titel,
  Distription,
  SpatItem,
  SpatTitel,
} from './Profile.styled';


export default function Profile ({username,tag,location,avatar,stats}){
   return(
    <Conteiter>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"

    />
    <Titel>{username}</Titel>
    <Distription>@{tag}</Distription>
    <Distription>{location}</Distription>
  </div>

  <ul className="stats">
    <li>
      <SpatTitel>Followers</SpatTitel>
      <SpatItem>{stats.followers}</SpatItem>
    </li>
    <li>
      <SpatTitel>Views</SpatTitel>
      <SpatItem>{stats.views}</SpatItem>
    </li>
    <li>
      <SpatTitel>Likes</SpatTitel>
      <SpatItem>{stats.likes}</SpatItem>
    </li>
  </ul>
</Conteiter>)
}
  