import { Img } from "./Img";
import './styles.css'

export const PostCard = ({cover, title, body}) => (
  <div className="post">
    <Img cover={cover} />
    <div className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);
