import {CLIENT_DOMAIN} from "../config";

const HomePage = () => {
  return (
    <div className={"home"}>
      <h1 className={"main-title"}>Quizlog</h1>
      <p className={"main-description"}>티스토리에 소프트웨어 기술 블로그를 운영하고 계시다면, Quizlog에서 요약 퀴즈를 작성해 보세요.</p>
      <a className={"tistory-login"} href={"https://www.tistory.com/oauth/authorize" +
        "?client_id=2d3c1982f94273a5ddea6b2163071f4d" +
        "&redirect_uri="+CLIENT_DOMAIN+":3000/auth" +
        "&response_type=code"}>Tistory로 로그인</a>
    </div>
  )
};
export default HomePage;