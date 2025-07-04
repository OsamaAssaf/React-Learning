import Input from "./Input";

function AuthForm(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.userIsRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">
        {props.userIsRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default AuthForm;
