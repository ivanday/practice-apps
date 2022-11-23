import React, {useState} from "react";
// import { render } from "react-dom";
import ReactDOM from 'react-dom';

function App(){
  const [words, setWords] = useState([]);

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
