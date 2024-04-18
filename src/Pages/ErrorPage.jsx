import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className=" flex justify-center items-center  gap-5">
        <div className=" my-12">
          <h1> oops !!!!</h1>
          <p> Page not Found </p>
          <Link to="/">
            <button className="btn btn-warning"> Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
