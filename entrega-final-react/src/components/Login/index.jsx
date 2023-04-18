import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert("Error " + error.code + ": " + error.message);
      });
  };

  return (
    <div>
      {user.email ? (
        <>
          <h2>Bienvenido {user.email}</h2>
          <button onClick={() => setUser({})}>Cerrar sesión</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" />
        </form>
      )}
    </div>
  );
};
export default Login;
