import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Stock(props) {
  const apiKey = "cb9d4a7a7b45ac8e22cdd9f3c7ea479d";
  // Grabbing the Currency symbol from the URL Params
  const params = useParams();
  const symbol = params.symbol;
  // Using the other two variables to create our URL
  // const url = `https://financialmodelingprep.com/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [list, setList] = useState("null");

  //function to fetch coin data

  const getList = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setList(data);
    } catch (e) {
      console.error(e);
    }
  };

  // useEffect to run getList when component mounts
  useEffect(() => {
    getList();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {list.asset_id_base}/{list.asset_id_quote}
        </h1>
        <h2>{list.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if list has data, run the loaded function, otherwise, run loading
  return list && list.rate ? loaded() : loading();
}
