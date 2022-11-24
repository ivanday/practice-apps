import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import WordList from './components/WordList.jsx'
const axios = require('axios');

function App(){
  const [words, setWords] = useState([]);

  useEffect(() => {
    axios.get('/words')
    .then((response) => {
      console.log(response);
      setWords(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <div>
      <p>Hello, World!</p>
      <div><WordList words = {words}/></div>
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
