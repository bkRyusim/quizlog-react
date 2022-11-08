import './Post.scss'
import {Link} from "react-router-dom";

const Post = ({title, url, date}) => {
  return (
    <div className={"post"}>
      <div>
        <a href={url}>{title}</a>
        <p className={"date"}>{date}</p>
      </div>
      <Link to={"/quiz?post_url=" + url} className={"quiz"}>
        퀴즈 생성
      </Link>
    </div>
  )
}
export default Post;