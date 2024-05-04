import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops !!!</h1>
      <h3>Something went wrong !!!</h3>
      <h4>{err.status}</h4>
      <h4>
        {err.statusText} , {err.error.message}
      </h4>
    </div>
  );
};

export default Error;
