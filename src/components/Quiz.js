import {useCallback} from "react";
import "./Quiz.scss"

const Quiz = ({question, answer, url}) => {
  const onClick = useCallback(() => {
    window.location.replace(url);
  }, [url]);


  return (
    <div className={"quiz-card"}>
      <div>
        <div className={"question"}>
        Q : {question}
      </div>
        <div className={"answer"}>
          A : {answer}
        </div>
      </div>

      <a onClick={onClick}>공부하기</a>
    </div>
  )
}

export default Quiz;