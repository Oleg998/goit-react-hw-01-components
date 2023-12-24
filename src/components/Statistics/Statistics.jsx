 import { Conteiner, ListItem } from './Statistics.styled';
export default function Statistics({ title, stats }) {
  return (
    <Conteiner>
      {title && <h2 >{title}</h2>}
      <ul className="stat-list">
        {stats.map(({id,label,percentage}) => (
          <ListItem key={id}>
            <span className="label">{label}</span>
            <span className="percentage"> {percentage}%</span>
          </ListItem>
        ))}
      </ul>
    </Conteiner>
  );
}