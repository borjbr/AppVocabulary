
import { Link } from 'react-router-dom';


export function Card({ title, subtitle, link, textLink}) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link to={link} className="btn btn-sm">
        {textLink}
      </Link>
    </div>
  );
}
