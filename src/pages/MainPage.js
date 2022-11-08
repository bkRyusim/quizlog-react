import axios from "axios";
import usePromise from "../lib/usePromise";
import {getCookie} from "../lib/cookies";
import Post from "../components/Post";
import "./MainPage.css";
import Quiz from "../components/Quiz";

const MainPage = () => {

  const [loading, response, error] = usePromise(() => {
    axios.defaults.headers.common['Authorization'] = getCookie('token');
    return axios.get("http://localhost:8080/posts")
  }, [])

  const [quiz_loading, quiz_response, quiz_error] = usePromise(() => {
    axios.defaults.headers.common['Authorization'] = getCookie('token');
    return axios.get("http://localhost:8080/quiz")
  }, [])

  if (loading || quiz_loading) {
    return <div>대기중...</div>
  }

  if (!response || !quiz_response) {
    return null
  }

  if (error || quiz_error) {
    // window.location.href = "https://www.tistory.com/oauth/authorize" +
    //   "?client_id=2d3c1982f94273a5ddea6b2163071f4d" +
    //   "&redirect_uri=http://localhost:3000/auth" +
    //   "&response_type=code"
    return (<div>에러</div>)
  }

  const posts = response.data;
  const quiz = quiz_response.data;

  return (
    <div className={"main"}>
      <div className={"posts"}>
      <h1 className={"main-head"}>포스트 목록</h1>
        {posts.map(post => (
          <Post key={post.title} title={post.title} url={post.postUrl} date={post.date}/>
        ))}
      </div>
      <div className={"quizzes"}>
        <h1 className={"main-head"}>퀴즈 목록</h1>
        {quiz.map(q => (
          <Quiz question={q.question} answer={q.answer} url={q.postUrl}></Quiz>
        ))}
      </div>
    </div>

  );
}

export default MainPage;