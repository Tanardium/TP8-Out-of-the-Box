import React,{Fragment, useState, useEffect} from "react";

function Picos(){
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.meteomatics.com/validdatetime/parameters/locations/format?optionals');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    return (
      <Fragment>
        <div className="App">
          {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
        <h2 className='picos'>Picos máximos registrados (alinear izquierda) </h2>
      </Fragment>
    );
  }
  
  export default Picos;