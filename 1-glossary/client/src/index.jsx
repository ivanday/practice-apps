import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
const axios = require('axios');

function App(){
  const [words, setWords] = useState([]);

  useEffect(() => {
    axios.get('/words')
    .then((response) => {
      console.log(response);
    })
  });

  return (
    <div>
      <p>Hello, World!</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// render(
//   <div>
//     <p>Hello, World!</p>
//   </div>,
//   document.getElementById("root")
// );
