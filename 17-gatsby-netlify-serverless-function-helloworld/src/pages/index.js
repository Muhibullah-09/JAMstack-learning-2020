import React, { useEffect, useState } from "react"

export default function Home() {

  const [data, setData] = useState('');
  useEffect(() => {
    (async () => {
      const response = await fetch(`.netlify/functions/hello?name=From Serverless Functions`);
      const tempData = await response.json();
      setData(tempData);
    }
    )();
  }, [])
  return (
    <div>
      <h1>Hello world Gatsby and Netlify</h1>
      <div><h1>{data.message}</h1></div>
    </div>
  )
}