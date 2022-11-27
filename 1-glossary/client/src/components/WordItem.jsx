import React, {useState, useEffect} from "react";
const axios = require('axios');

function WordItem({word}) {
  const [newWord, changeWord] = useState(word);
  const [definitionEdit, changeEdit] = useState('');

  const editText = (definitionEdit) => {
    axios.post('/words/update', {name: newWord.name, definition: definitionEdit}).then(()=> {
      console.log('updated');
    }).then(()=> {
      changeWord({name: word.name, definition: definitionEdit});
    });
  };

  const handleChange = (event) => {
    changeEdit(event.target.value);
  };

  return (
    <div>
      <h1>{newWord.name}</h1>
      <p>{newWord.definition}</p>
      <form>
        <input type="test" id="editField" onChange={(event)=>{handleChange(event)}}></input>
        <input type="button" value="edit" onClick={()=>{editText(definitionEdit)}}></input>
      </form>
    </div>
  )

}

export default WordItem;