import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);

    count === 0 && navigate("/login");

    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <>
      <p className="h3 text-align-center">Redirecting you in {count} sec</p>
    </>
  );
};

export default LoadingToRedirect;

/*
In this component we are providing one component which will load for 5 sec then move to "/"
*/
