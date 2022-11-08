import {useNavigate, useLocation} from "react-router-dom";
import qs from "qs";
import axios from "axios";
import {useEffect} from "react";
import {getCookie, setCookie} from "../lib/cookies";
import {API_SERVER_DOMAIN} from "../config";

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  const code = query.code;

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.post(API_SERVER_DOMAIN + "/auth", {
        "code": code
      })

      setCookie('token', 'Bearer ' + res.data.token, {sameSite: 'strict'})

      axios.defaults.headers.common['Authorization'] = getCookie('token');
      if (res.data.new_user) {
        navigate('/join');
      } else {
        navigate('/main')
      }
    }
    if (code !== '') {
      fetch();
    }
  }, [navigate, code]);

  return (
    <div>
    </div>
  );
};

export default AuthPage;