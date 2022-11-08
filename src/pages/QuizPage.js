import "./QuizPage.scss";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {getCookie} from "../lib/cookies";
import {useLocation, useNavigate} from "react-router-dom";
import qs from "qs";

const QuizPage = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const onQuestionChange = useCallback(e => {
    setQuestion(e.target.value);
  }, [question]);

  const onAnswerChange = useCallback(e => {
    setAnswer(e.target.value);
  }, [answer]);

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    console.log(question, answer)
    axios.defaults.headers.common['Authorization'] = getCookie('token');
    axios.post("http://localhost:8080/quiz", {
      "question": question,
      "answer": answer,
      "post_url": query.post_url,
    }).then(() => {
      alert("퀴즈가 등록되었습니다.");
      navigate('/main')
    });
  }, [question, answer]);


  return (
    <div className={"quiz-page"}>
      <div className={"quiz-form"}>
        <h1>퀴즈 등록</h1>
        <textarea value={question} className={"quiz-question"} placeholder={"질문"} onChange={onQuestionChange}/>
        <input value={answer} className={"quiz-answer"} placeholder={"답"} onChange={onAnswerChange} />
        <button className={"quiz-submit"} onClick={onSubmit}>퀴즈 생성</button>
      </div>
    </div>
  );
};

export default QuizPage;
