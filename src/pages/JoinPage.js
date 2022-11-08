import {useCallback, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {getCookie} from "../lib/cookies";
import {API_SERVER_DOMAIN} from "../config";

const JoinPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate()

  const onNameChange = useCallback(e => {
    setName(e.target.value)
  }, []);

  const onClickButton = useCallback(() => {
    axios.defaults.headers.common['Authorization'] = getCookie('token');
    axios.post(API_SERVER_DOMAIN + "/join", {"name": name})
      .then(r => {
        navigate('/main');
      })
  }, [name, navigate])

  return (
    <div>
      <h1>Welcome to Quizlog!</h1>
      <p>Quizlog를 사용하기 위해 닉네임을 정해주세요.</p>
      <input value={name} onChange={onNameChange}/>
      <button onClick={onClickButton}>등록하기</button>
    </div>
  );
};

export default JoinPage;