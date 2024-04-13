import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaGoogle, FaGithub } from "react-icons/fa";
const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        window.location.href = "/";
      })
      .catch((error) => console.error(error));
  };
  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };
  const handelGithubSignIn = () => {
    signInWithGithub()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <div className=" flex items-center justify-center my-6">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-teal-500">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-2xl"> Please Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info">Login</button>
            </div>
            <div className="divider"> Or </div>
            <button className=" btn btn-outline" onClick={handelGoogleSignIn}>
              <FaGoogle></FaGoogle> Goggle
            </button>
            <button className=" btn btn-outline" onClick={handelGithubSignIn}>
              <FaGithub></FaGithub> GitHub
            </button>
          </form>

          <p className="mx-10 mb-3">
            Need to register? Click{" "}
            <Link to="/register">
              <span className="underline text-orange-400">Here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
