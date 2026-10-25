import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./login.css";

interface LoginProps {
  onSuccess: () => void;
}

function Login({ onSuccess }: LoginProps) {
  const { login, register } = useAuth();

  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    let success = false;

    if (isRegister) {
      success = register(name, email, password);

      if (!success) {
        setError("Please complete all fields.");
        return;
      }
    } else {
      success = login(email, password);

      if (!success) {
        setError("Incorrect email or password, or no demo account exists yet.");
        return;
      }
    }

    onSuccess();
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <span className="login-eyebrow">WELCOME TO JSHOP</span>

        <h1>{isRegister ? "Create an Account" : "Welcome Back"}</h1>

        <p className="login-description">
          {isRegister
            ? "gawa ka kunwaring account to get started."
            : "Sign in to continue shopping kumbaga."}
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          {isRegister && (
            <label>
              Full Name
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                required
              />
            </label>
          )}

          <label>
            Email Address
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter a demo password"
              required
            />
          </label>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-submit">
            {isRegister ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="login-switch">
          {isRegister ? "Already registered?" : "New to Jshop?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
            }}
          >
            {isRegister ? "Login" : "Create an account"}
          </button>
        </p>

        <p className="login-demo-note">
          Demo only — do not use a real password.
        </p>
      </section>
    </main>
  );
}

export default Login;