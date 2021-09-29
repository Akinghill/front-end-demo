import { useEffect, useState } from "react";
const axios = require("axios");

const url = '/users'

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // axios
    //   .get(url)
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //     setUserData(response.data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
    // fetching data

    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUserData(data)
      });
  }, []);

  return (
    <div className="App">
      Hello World I'm the Front End
      {
        // Display Users here
        userData.map((user) => (
          <h1>{user.name}</h1>
        ))
      }
    </div>
  );
}

export default App;
