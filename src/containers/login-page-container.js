import { useState } from "react";
import { useHistory } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
      error {
        message
      }
    }
  }
`;

export default function LoginPageContainer() {
  let history = useHistory();
  const [login, { data }] = useMutation(LOGIN);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // const { loading, error, data } = useQuery(LOGIN);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  if (data && data.login && data.login.token) {
    console.log(data.login);
    localStorage.setItem("daily__token", data.login.token);
    history.push("/");
  }

  return (
    <div>
      <br />
      <form onClick={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="email"
          onKeyUp={(e) => {
            setLoginData({
              ...loginData,
              email: e.target.value,
            });
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onKeyUp={(e) => {
            setLoginData({
              ...loginData,
              password: e.target.value,
            });
          }}
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(loginData);
            login({ variables: loginData });
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}
