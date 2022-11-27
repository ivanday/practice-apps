import React, {useState, useEffect} from "react";

function WordItem({word}) {
  const [newWord, changeWord] = useState(word);

  return (
    <div>
      <h1>{newWord.name}</h1>
      <p>{newWord.definition}</p>
    </div>
  )

}

export default WordItem;