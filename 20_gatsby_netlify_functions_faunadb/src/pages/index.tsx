import React, {useState, useEffect} from "react"

export default function Home() {
  const [mydata, setData] = useState("Default Hello");

  useEffect(() => {
    console.log("useEffect Called");
    fetch(`/.netlify/functions/Hello`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log("Data: " + JSON.stringify(data));
        
      });
  }, []);





  return <div>
    <div>Hello world with Gatsby from Netlify!</div>
    <div><h1>{mydata.message}</h1></div>
    </div>
}
