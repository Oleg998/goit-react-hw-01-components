// import css from "./FriendList.moduls.css"
import FriendListItem from "./FriendListItem";
import { Conteiner } from './FriendList.styled'; 

export default function FriendList ({friends}){
  const elements = friends.map(({ id,...props}) => (
    <FriendListItem key={id} {...props} />
  )); 
    return (
      <Conteiner>
         {elements}
      </Conteiner>
    );

    
}