import { useState, useEffect } from "react";
import { getSession, loginSession } from "../utils/dbSocket";

const useUser = () => {
  const [user, setUser] = useState();
  const [errors, setErrors] = useState([]);
  const restoreSession = async () => {
    return setUser(await getSession());
  };

  useEffect(() => {
    restoreSession();
  }, []);

  const login = async (user, password) => {
    const loggedUser = await loginSession(user, password);
    if (loggedUser) {
      setUser(loggedUser);
      setErrors([]);
    } else {
      setErrors(["Invalid user or password"]);
    }
  };
  const logOut = () => {
    setUser();
    localStorage.clear();
  };

  return { user, login, logOut, errors };
};

export default useUser;
