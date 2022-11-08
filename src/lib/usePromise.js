import {useState, useEffect} from "react";

export default function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const res = await promiseCreator();
        setResolved(res);
      } catch (e) {
        setError(e);
        console.log(e)
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
}