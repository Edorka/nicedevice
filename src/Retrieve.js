import React, { useState, useEffect } from "react";

const Retrieve = ({url, params, children}) => {
  const [result, setResult] = useState({});

  useEffect( () => {
    const retrieval = async () => {
      const target = new URL(url);
      target.search = new URLSearchParams(params).toString();
      const response = await fetch(target).then(res => res.json())
      setResult(response);
    };
    retrieval();
  }, [url, params]);
  return (<div>{children({...result})}</div>);
};

export default Retrieve;
