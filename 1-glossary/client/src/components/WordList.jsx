import React, {useState, useEffect} from "react";

function WordList({words}) {
  return (
    <div>
      {words.map((word) => {
        return (
        <div>
          <h1>{word.name}</h1>
          <p>{word.definition}</p>
        </div>
        )
      })}
    </div>
  )
}

export default WordList;