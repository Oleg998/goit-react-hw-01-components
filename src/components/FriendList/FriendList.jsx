// import css from "./FriendList.moduls.css"
export default function FriendList ({friends}){
    return (
      <ul className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className="item" key={id}>
            <span event={isOnline.toString()}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    );

    
}