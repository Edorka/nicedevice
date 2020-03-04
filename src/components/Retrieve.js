import React, { useState, useEffect, Fragment } from "react";

const Retrieve = ({url, params, children}) => {
  const [result, setResult] = useState({});

  useEffect( () => {
    const retrieval = async () => {
      try {
        const target = new URL(url);
        target.search = new URLSearchParams(params).toString();
        const rawResponse = await fetch(target);
        const response = await rawResponse.json();
        setResult(response);
      } catch (error) {
        // TODO error report
        setResult({});
      }
    };
    retrieval();
  }, [url, params]);
  return (<Fragment>{children({...result})}</Fragment>);
};

export default Retrieve;
